// Example: Mock data structure for testing the scan feature
// This can be used to test the UI without making actual HTTP requests

import { ScanResult } from "@/types/scan";

export const mockScanResult: ScanResult = {
    url: "https://example.com",
    scannedAt: "2026-02-14T12:00:00.000Z",
    totalIssues: 8,
    issuesBySeverity: {
        high: 3,
        medium: 3,
        low: 2,
    },
    issues: [
        {
            id: "1",
            category: "Accessibility",
            name: "Images Missing Alt Text",
            description:
                "Found images without alternative text. This makes content inaccessible to screen reader users and impacts SEO.",
            severity: "High",
            affectedElements: [
                '<img src="/banner.jpg">',
                '<img src="/logo.png">',
                '<img src="/photo-1.jpg">',
            ],
            remediation:
                'Add descriptive alt attributes to all images. Example: <img src="photo.jpg" alt="Team meeting in conference room">',
        },
        {
            id: "2",
            category: "Accessibility",
            name: "Form Inputs Without Labels",
            description:
                "Form inputs without associated labels are inaccessible to screen reader users and reduce usability.",
            severity: "High",
            affectedElements: [
                '<input type="email" name="email">',
                '<input type="password" name="password">',
            ],
            remediation:
                'Add label elements associated with each input: <label for="email">Email Address</label><input type="email" id="email" name="email">',
        },
        {
            id: "3",
            category: "Accessibility",
            name: "Missing H1 Heading",
            description:
                "The page is missing an H1 heading. Each page should have exactly one H1 that describes the main content.",
            severity: "High",
            affectedElements: ["Page structure"],
            remediation:
                "Add one H1 heading that clearly describes the main content of the page.",
        },
        {
            id: "4",
            category: "HTML Validity",
            name: "Missing Meta Description",
            description:
                "The page is missing a meta description tag, which is important for search engine optimization and social sharing.",
            severity: "Medium",
            affectedElements: ["<head> section"],
            remediation:
                'Add a meta description tag in the <head>: <meta name="description" content="Brief description of your page (150-160 characters)">',
        },
        {
            id: "5",
            category: "Accessibility",
            name: "Non-Descriptive Link Text",
            description:
                "Links with generic text like 'click here' or 'read more' are not accessible. Screen readers need descriptive link text to provide context.",
            severity: "Medium",
            affectedElements: [
                '<a href="/page1">click here</a>',
                '<a href="/page2">read more</a>',
            ],
            remediation:
                "Use descriptive link text that explains where the link goes. Example: 'Download annual report' instead of 'click here'.",
        },
        {
            id: "6",
            category: "Accessibility",
            name: "Missing Main Landmark",
            description:
                "The page is missing a <main> landmark or role='main', which helps screen reader users quickly navigate to the main content.",
            severity: "Medium",
            affectedElements: ["Page structure"],
            remediation:
                "Wrap your main content in a <main> element or add role='main' to a container element.",
        },
        {
            id: "7",
            category: "Performance",
            name: "Images Without Dimensions",
            description:
                "Images without explicit width and height attributes can cause cumulative layout shift (CLS) and poor performance scores.",
            severity: "Low",
            affectedElements: [
                '<img src="/photo-1.jpg" alt="Photo">',
                '<img src="/photo-2.jpg" alt="Photo">',
                '<img src="/photo-3.jpg" alt="Photo">',
            ],
            remediation:
                'Add width and height attributes to all images: <img src="photo.jpg" alt="Description" width="800" height="600">',
        },
        {
            id: "8",
            category: "Accessibility",
            name: "Multiple H1 Headings",
            description:
                "The page has multiple H1 headings. Best practice is to have only one H1 per page to establish clear content hierarchy.",
            severity: "Low",
            affectedElements: ["Found 3 H1 tags"],
            remediation:
                "Use only one H1 heading for the main page title. Use H2-H6 for subheadings and section titles.",
        },
    ],
};

// Mock function for testing without API
export async function mockScan(url: string): Promise<ScanResult> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Return mock data with the provided URL
    return {
        ...mockScanResult,
        url,
        scannedAt: new Date().toISOString(),
    };
}

// Example usage in a component:
/*
import { mockScan } from '@/lib/mockScanData';

// In your component:
const handleScan = async (url: string) => {
  setIsScanning(true);
  try {
    const result = await mockScan(url); // Use this instead of fetch
    setScanResult(result);
  } catch (error) {
    setError('Scan failed');
  } finally {
    setIsScanning(false);
  }
};
*/
