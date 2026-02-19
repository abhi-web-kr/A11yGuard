# A11yGuard - Website Error Detection Feature

## Overview

A11yGuard is a comprehensive website error-detection tool that analyzes web pages for accessibility issues, HTML validation errors, performance concerns, and SEO problems. This feature provides actionable insights to help improve website quality and user experience.

## Features

### Automated Checks

1. **Accessibility**
    - Images with missing alt text
    - Non-descriptive alt attributes
    - Form inputs without labels
    - Missing language attributes
    - Missing main landmarks
    - Heading hierarchy issues (H1 tags)

2. **HTML Validity**
    - Missing title tags
    - Missing viewport meta tags
    - Broken link detection
    - Missing meta descriptions

3. **Performance**
    - Images without dimensions
    - Potential layout shift issues

4. **SEO**
    - Missing meta descriptions
    - Missing or duplicate title tags
    - Heading structure

## File Structure

```
src/
├── app/
│   ├── api/
│   │   └── scan/
│   │       └── route.ts          # API endpoint for scanning
│   └── scan/
│       └── page.tsx               # Main scan page
├── components/
│   └── scan/
│       ├── ScanForm.tsx           # URL input form
│       ├── LoadingState.tsx       # Loading animation
│       └── ScanResults.tsx        # Results display
└── types/
    └── scan.ts                    # TypeScript types
```

## Usage

### User Flow

1. **Navigate to the Scan Page**
    - Click "Scan" in the navigation menu or visit `/scan`

2. **Enter a URL**
    - Enter any valid website URL (e.g., `https://example.com`)
    - Protocol (http/https) will be added automatically if omitted

3. **View Results**
    - Issues are categorized by type (Accessibility, HTML Validity, Performance, SEO)
    - Each issue shows:
        - Issue name and description
        - Severity level (Low/Medium/High)
        - Affected elements
        - Recommended remediation

4. **Start New Scan**
    - Click "New Scan" to analyze another website

## API Endpoint

### POST `/api/scan`

Analyzes a website URL and returns detected issues.

**Request Body:**

```json
{
    "url": "https://example.com"
}
```

**Response:**

```json
{
    "url": "https://example.com",
    "scannedAt": "2026-02-14T12:00:00.000Z",
    "totalIssues": 5,
    "issuesBySeverity": {
        "high": 2,
        "medium": 2,
        "low": 1
    },
    "issues": [
        {
            "id": "abc123",
            "category": "Accessibility",
            "name": "Images Missing Alt Text",
            "description": "Found images without alternative text...",
            "severity": "High",
            "affectedElements": ["<img src='photo.jpg'>", "..."],
            "remediation": "Add descriptive alt attributes..."
        }
    ]
}
```

**Error Response:**

```json
{
    "error": "Failed to fetch website: 404 Not Found"
}
```

## TypeScript Types

```typescript
export type IssueSeverity = "Low" | "Medium" | "High";
export type IssueCategory =
    | "Accessibility"
    | "HTML Validity"
    | "Performance"
    | "SEO";

export interface ScanIssue {
    id: string;
    category: IssueCategory;
    name: string;
    description: string;
    severity: IssueSeverity;
    affectedElements: string[];
    remediation: string;
}

export interface ScanResult {
    url: string;
    scannedAt: string;
    totalIssues: number;
    issuesBySeverity: {
        high: number;
        medium: number;
        low: number;
    };
    issues: ScanIssue[];
}
```

## Dependencies

No additional npm packages are required! The feature uses:

- Next.js built-in API routes
- Native `fetch` API for HTTP requests
- Regular expressions for HTML parsing

### Optional Enhancement: Using a Proper HTML Parser

For production use, consider adding these packages for more robust HTML parsing:

```bash
npm install cheerio @types/cheerio
# or
npm install jsdom @types/jsdom
```

Then update `src/app/api/scan/route.ts` to use the parser:

```typescript
import * as cheerio from "cheerio";

// In scanWebsite function:
const $ = cheerio.load(html);

// Example: Find images without alt
const imgsWithoutAlt = $('img:not([alt]), img[alt=""]').toArray();
```

## Integration Instructions

### 1. Add Navigation Link (Already Done)

The "Scan" link has been added to the navbar in both desktop and mobile views.

### 2. Customize the Scanner

To add more checks, edit `src/app/api/scan/route.ts`:

```typescript
// Example: Check for button accessibility
const buttons = html.match(/<button[^>]*>/gi) || [];
const buttonsWithoutType = buttons.filter((btn) => !btn.includes("type="));

if (buttonsWithoutType.length > 0) {
    issues.push({
        id: generateId(),
        category: "Accessibility",
        name: "Buttons Missing Type Attribute",
        description: "Buttons should have explicit type attributes.",
        severity: "Low",
        affectedElements: buttonsWithoutType,
        remediation: 'Add type="button" or type="submit" to all buttons.',
    });
}
```

### 3. Styling Customization

All components use Tailwind CSS. To match your brand colors:

- Update button colors in `ScanForm.tsx`
- Modify severity colors in `ScanResults.tsx`
- Change gradient backgrounds in `page.tsx`

## Error Handling

The scanner handles:

- Invalid URLs
- Unreachable websites
- Network timeouts
- CORS issues (some sites may block requests)

Error messages are displayed to users with helpful context.

## Performance Considerations

- The scanner fetches the entire HTML of the target website
- Large pages may take several seconds to analyze
- Consider adding rate limiting for production use
- Some websites may block automated requests (403/429 errors)

## Future Enhancements

Potential improvements:

1. **Advanced Parsing**: Use cheerio/jsdom for accurate HTML parsing
2. **Color Contrast**: Analyze actual color contrast ratios
3. **Link Checking**: Verify all links are working (follow redirects)
4. **Performance Metrics**: Integrate with Lighthouse API
5. **PDF Reports**: Generate downloadable scan reports
6. **History**: Save scan results for comparison over time
7. **Batch Scanning**: Scan multiple URLs at once
8. **Authentication**: Scan pages behind login
9. **Custom Rules**: Allow users to define custom checks

## Security Notes

- The scanner fetches external URLs server-side
- Validate and sanitize all URLs before processing
- Consider implementing rate limiting to prevent abuse
- Add authentication for production deployments
- Monitor for malicious URLs or XSS attempts

## Testing

To test the scanner:

1. Test with your own website
2. Try public sites with known issues
3. Test error cases:
    - `https://invalid-url-12345.com` (unreachable)
    - `not-a-valid-url` (invalid format)
    - `https://example.com` (well-formed HTML)

## Support

For issues or questions:

- Check the browser console for errors
- Verify the API endpoint is accessible at `/api/scan`
- Ensure the target website is publicly accessible
- Check that CORS isn't blocking the request

## License

This feature is part of the A11yGuard project.

---

Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS
