import { NextRequest, NextResponse } from "next/server";
import { AxePuppeteer } from "@axe-core/puppeteer";
import { getBrowserlessConnection } from "@/lib/browserless";

// Helper function to generate unique IDs
const generateId = () => Math.random().toString(36).substr(2, 9);

async function scanWebsite(url: string) {
    let browser;
    try {
        // 1. Connect to Browserless.io remote browser (serverless-friendly)
        browser = await getBrowserlessConnection();

        const page = await browser.newPage();

        // 2. Setting a timeout to ensure the script doesn't hang forever
        await page.setDefaultNavigationTimeout(30000);

        // 3. Navigate to the URL
        await page.goto(url, { waitUntil: "networkidle2" });

        // 4. Run the Axe Expert Engine inside the page
        type AxeTarget = ConstructorParameters<typeof AxePuppeteer>[0];
        const results = await new AxePuppeteer(page as unknown as AxeTarget).analyze();

        // 5. Transform Axe's complex results into your simple format
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
            remediation: `${v.help}. Check here for fix: ${v.helpUrl}`,
        }));

        // Calculate severity counts
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
        console.error("Puppeteer/Axe Error:", error);
        throw new Error(
            "Could not scan the website. It might be blocking automated tools or is offline.",
        );
    } finally {
        if (browser) await browser.close();
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { url } = body;

        if (!url) {
            return NextResponse.json(
                { error: "URL is required" },
                { status: 400 },
            );
        }

        // Basic URL validation
        try {
            new URL(url);
        } catch {
            return NextResponse.json(
                { error: "Invalid URL format" },
                { status: 400 },
            );
        }

        const result = await scanWebsite(url);
        return NextResponse.json(result);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Failed to scan website." },
            { status: 500 },
        );
    }
}
