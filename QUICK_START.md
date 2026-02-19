# Quick Start Guide - A11yGuard Website Error Detection

## Getting Started

Your website scanning feature is now fully integrated! Follow these steps to start using it.

### 1. Start the Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

### 2. Navigate to the Scan Page

- Click "**Scan**" in the navigation menu, or
- Go directly to `http://localhost:3000/scan`

### 3. Run Your First Scan

1. Enter a website URL in the input field:
    - Example: `https://example.com`
    - Example: `https://google.com`
    - Example: `https://github.com`

2. Click "**Scan Now**"

3. Wait for the analysis (typically 2-5 seconds)

4. Review the results!

## What Gets Scanned

### ✅ Accessibility Issues

- Missing alt text on images
- Form inputs without labels
- Non-descriptive link text
- Missing language attributes
- Missing main landmarks
- Heading hierarchy problems

### ✅ HTML Validity

- Missing title tags
- Missing meta descriptions
- Missing viewport tags
- Semantic HTML issues

### ✅ Performance

- Images without dimensions
- Layout shift potential

### ✅ SEO

- Meta tag optimization
- Title tag presence
- Content structure

## Understanding Results

### Severity Levels

- 🔴 **High**: Critical issues affecting accessibility or functionality
- 🟠 **Medium**: Important issues that should be fixed soon
- 🟡 **Low**: Minor issues and best practice recommendations

### Issue Details

Each issue shows:

- **Name**: Brief issue title
- **Description**: What the problem is
- **Severity**: How critical it is
- **Affected Elements**: HTML code snippets
- **Remediation**: How to fix it

## Testing the Feature

### Test with Sample URLs

1. **Well-formed site:**

    ```
    https://www.w3.org
    ```

2. **Site with issues:**

    ```
    https://example.com
    ```

3. **Your own site:**
    ```
    https://your-website.com
    ```

### Test Error Handling

Try these to see error messages:

- Invalid URL: `not-a-url`
- Non-existent site: `https://this-site-definitely-does-not-exist-12345.com`

## Using Mock Data (Testing)

For testing the UI without making actual HTTP requests:

```typescript
// In your scan page (src/app/scan/page.tsx)
import { mockScan } from "@/lib/mockScanData";

// Replace the fetch call with:
const data = await mockScan(url);
setScanResult(data);
```

This returns pre-defined test data instantly.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── scan/
│   │       └── route.ts           # API endpoint (scanning logic)
│   └── scan/
│       └── page.tsx                # Main scan page
├── components/
│   └── scan/
│       ├── ScanForm.tsx            # URL input form
│       ├── LoadingState.tsx        # Loading animation
│       └── ScanResults.tsx         # Results display
├── types/
│   └── scan.ts                     # TypeScript type definitions
└── lib/
    └── mockScanData.ts             # Mock data for testing
```

## Common Issues & Solutions

### Issue: "Cannot find module" errors

**Solution**: Restart your development server

```bash
# Stop the server (Ctrl+C)
npm run dev
```

### Issue: TypeScript errors

**Solution**: Restart VS Code's TypeScript server

- Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
- Type "TypeScript: Restart TS server"
- Press Enter

### Issue: "Failed to fetch website"

**Possible causes:**

- The website is down or unreachable
- The website blocks automated requests
- CORS restrictions
- Network connectivity issues

**Solution**: Try a different website or check your internet connection

### Issue: Scan takes too long

**Possible causes:**

- Large website with lots of HTML
- Slow server response
- Network latency

**Solution**: Wait a bit longer or try a simpler website

## Customization

### Adding More Checks

Edit `src/app/api/scan/route.ts` and add new checks:

```typescript
// Example: Check for ARIA labels
const buttonsWithoutAria = html.match(/<button(?![^>]*aria-label)/gi) || [];
if (buttonsWithoutAria.length > 0) {
    issues.push({
        id: generateId(),
        category: "Accessibility",
        name: "Buttons Without ARIA Labels",
        description: "Buttons should have aria-label attributes.",
        severity: "Medium",
        affectedElements: buttonsWithoutAria.slice(0, 5),
        remediation: "Add aria-label to all buttons without text content.",
    });
}
```

### Changing Colors

Edit the Tailwind classes in any component:

```tsx
// Change primary color from blue to purple
className = "bg-purple-600 hover:bg-purple-700";
```

### Modifying Categories

Edit `src/types/scan.ts`:

```typescript
export type IssueCategory =
    | "Accessibility"
    | "HTML Validity"
    | "Performance"
    | "SEO"
    | "Security" // Add new category
    | "Best Practices"; // Add another
```

## API Usage

### Direct API Call

```bash
curl -X POST http://localhost:3000/api/scan \
  -H "Content-Type: application/json" \
  -d '{"url":"https://example.com"}'
```

### From JavaScript

```javascript
const response = await fetch("/api/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url: "https://example.com" }),
});

const result = await response.json();
console.log(result);
```

## Production Deployment

Before deploying:

1. **Add rate limiting** to prevent abuse
2. **Add authentication** if needed
3. **Consider using a proper HTML parser** (cheerio/jsdom)
4. **Add caching** for frequently scanned URLs
5. **Set up error monitoring** (Sentry, etc.)
6. **Add usage analytics**

### Environment Variables

Add to `.env.local`:

```env
# Maximum concurrent scans
MAX_CONCURRENT_SCANS=5

# Scan timeout (ms)
SCAN_TIMEOUT=10000

# Enable scan caching
ENABLE_CACHE=true
```

## Next Steps

1. ✅ Test the scanning feature
2. ✅ Try scanning different websites
3. ✅ Review the detailed documentation in `SCAN_FEATURE.md`
4. 🔄 Customize checks for your needs
5. 🔄 Add more accessibility rules
6. 🔄 Integrate with other tools (Lighthouse, axe-core)

## Support

- **Documentation**: See `SCAN_FEATURE.md` for detailed docs
- **Mock Data**: Check `src/lib/mockScanData.ts` for testing examples
- **Type Definitions**: Review `src/types/scan.ts` for data structures

## Example Output

```json
{
  "url": "https://example.com",
  "scannedAt": "2026-02-14T12:00:00.000Z",
  "totalIssues": 3,
  "issuesBySeverity": {
    "high": 1,
    "medium": 1,
    "low": 1
  },
  "issues": [...]
}
```

---

🎉 **You're all set!** Start scanning websites and improving web accessibility!
