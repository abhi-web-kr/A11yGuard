import { NextRequest, NextResponse } from "next/server";
import { AxePuppeteer } from "@axe-core/puppeteer";
import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";

// Windows local path detect karne ke liye
const LOCAL_CHROME_PATH =
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const generateId = () => Math.random().toString(36).substr(2, 9);

async function scanWebsite(url: string) {
    let browser;
    try {
        const isProduction = process.env.NODE_ENV === "production";
        console.log(
            `🚀 Launching browser in ${isProduction ? "Production" : "Development"} mode...`,
        );

        browser = await puppeteer.launch({
            args: isProduction
                ? chromium.args
                : ["--no-sandbox", "--disable-setuid-sandbox"],
            defaultViewport: { width: 1280, height: 720 },
            executablePath: isProduction
                ? await chromium.executablePath(
                      `https://github.com/Sparticuz/chromium/releases/download/v123.0.1/chromium-v123.0.1-pack.tar`,
                  )
                : LOCAL_CHROME_PATH,
            headless: isProduction ? true : true,
        });

        console.log("✅ Browser launched successfully");
        const page = await browser.newPage();
        await page.setDefaultNavigationTimeout(60000);

        console.log("🌐 Navigating to:", url);
        await page.goto(url, { waitUntil: "networkidle2" });
        console.log("✅ Page loaded");

        // Isse TypeScript "Page" ki internal details check karna band kar dega
        const results = await new AxePuppeteer(
            page as unknown as any,
        ).analyze();

        const issues = results.violations.map((v) => ({
            id: generateId(),
            category: "Accessibility",
            name: v.help,
            description: v.description,
            severity:
                v.impact === "critical" || v.impact === "serious"
                    ? "High"
                    : "Medium",
            affectedElements: v.nodes.map((node) =>
                node.html.substring(0, 200),
            ),
            remediation: `${v.help}. Check here: ${v.helpUrl}`,
        }));

        const issuesBySeverity = {
            high: issues.filter((i) => i.severity === "High").length,
            medium: issues.filter((i) => i.severity === "Medium").length,
            low: issues.filter((i) => i.severity === "Low").length,
        };

        return {
            url,
            scannedAt: new Date().toISOString(),
            totalIssues: issues.length,
            issuesBySeverity,
            issues,
        };
    } catch (error) {
        console.error("❌ Scan Error:", error);
        throw error;
    } finally {
        if (browser) await browser.close();
    }
}

export async function POST(request: NextRequest) {
    try {
        const { url } = await request.json();
        if (!url)
            return NextResponse.json(
                { error: "URL is required" },
                { status: 400 },
            );

        const result = await scanWebsite(url);
        return NextResponse.json(result);
    } catch (error: unknown) {
        const errorMessage =
            error instanceof Error ? error.message : "Failed to scan website";
        console.error("❌ API Route Error:", error);
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
