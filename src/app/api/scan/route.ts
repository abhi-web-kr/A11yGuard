import { NextRequest, NextResponse } from "next/server";
import { AxePuppeteer } from "@axe-core/puppeteer";
import puppeteer from "puppeteer-core"; // Standard puppeteer use karein

// Docker mein standard path yahi rehta hai
const DOCKER_CHROME_PATH = "/usr/bin/google-chrome-stable";
const LOCAL_CHROME_PATH =
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const generateId = () => Math.random().toString(36).substr(2, 9);

async function scanWebsite(url: string) {
    let browser;
    try {
        const isProduction = process.env.NODE_ENV === "production";

        browser = await puppeteer.launch({
            // Docker environment ke liye zaroori flags
            args: [
                "--no-sandbox",
                "--disable-setuid-sandbox",
                "--disable-dev-shm-usage",
                "--disable-gpu",
                "--single-process",
                "--no-zygote",
            ],
            executablePath: isProduction
                ? DOCKER_CHROME_PATH
                : LOCAL_CHROME_PATH,
            headless: true,
        });

        const page = await browser.newPage();
        await page.setDefaultNavigationTimeout(60000);
        await page.goto(url, { waitUntil: "networkidle2" });

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const results = await new AxePuppeteer(page as any).analyze();

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

        // ✅ Missing Key: issuesBySeverity wapas add kar di hai
        const issuesBySeverity = {
            high: issues.filter((i) => i.severity === "High").length,
            medium: issues.filter((i) => i.severity === "Medium").length,
            low: issues.filter((i) => i.severity === "Low").length,
        };

        return {
            url,
            scannedAt: new Date().toISOString(),
            totalIssues: issues.length,
            issuesBySeverity, // Aapki key ab safe hai
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
