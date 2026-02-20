import puppeteer from "puppeteer-core";


export async function getBrowserlessConnection() {
    const BROWSERLESS_TOKEN = process.env.BROWSERLESS_TOKEN;

    if (!BROWSERLESS_TOKEN) {
        throw new Error(
            "BROWSERLESS_TOKEN is not set in environment variables. Get your token at https://browserless.io",
        );
    }

    // Connect to Browserless.io's remote browser
    const browser = await puppeteer.connect({
        browserWSEndpoint: `wss://production-sfo.browserless.io?token=${BROWSERLESS_TOKEN}`,
    });

    return browser;
}
