# 🛡️ A11yGuard

**A11yGuard** is a modern web accessibility scanning platform built with Next.js 15, designed to help developers identify and fix accessibility issues on their websites. Scan any website for WCAG compliance and get detailed reports on accessibility violations.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)

---

## 📚 What I Learned Building This Project

This project taught me valuable skills in full-stack web development:

### **Backend & APIs**

- ✅ Building RESTful APIs with Next.js 15 App Router
- ✅ Server-side authentication with NextAuth.js (Credentials + OAuth)
- ✅ MongoDB integration with Mongoose ODM
- ✅ File uploads to cloud storage (Cloudinary)
- ✅ API error handling and validation
- ✅ Environment variable management for security

### **Frontend & UI/UX**

- ✅ React Server Components (RSC) and Client Components
- ✅ TypeScript for type-safe development
- ✅ TailwindCSS for responsive design
- ✅ Dark mode implementation with next-themes
- ✅ Context API for global state management
- ✅ Protected routes with middleware

### **Web Accessibility**

- ✅ Running accessibility audits with Axe-core
- ✅ Understanding WCAG compliance levels
- ✅ Parsing and displaying accessibility violations
- ✅ Identifying critical vs. minor issues

### **DevOps & Deployment**

- ✅ Serverless deployment considerations (Vercel)
- ✅ Working with remote browser services (Browserless.io)
- ✅ Environment-specific configurations
- ✅ Understanding serverless vs. traditional hosting (Render, Railway)
- ✅ Managing API keys and secrets securely

### **Tools & Libraries**

- ✅ Puppeteer for browser automation
- ✅ Axe-core for accessibility testing
- ✅ NextAuth for authentication
- ✅ Hot Toast for notifications
- ✅ Git version control

---

## 🎯 Next Features to Implement

### **High Priority**

- [ ] **Save Scan Results to Database** - Store scan history in MongoDB with user association
- [ ] **Scan History Page** - Display all previous scans with filters and search
- [ ] **Export Reports as PDF** - Allow users to download detailed PDF reports
- [ ] **Issue Tracking Dashboard** - Track issues over time with charts and trends
- [ ] **Email Notifications** - Send scan completion notifications via email

### **Medium Priority**

- [ ] **Scheduled Scans** - Set up automated recurring scans for websites
- [ ] **Comparative Analytics** - Show improvements/regressions between scans
- [ ] **Issue Categories** - Group issues by category (Images, Forms, Navigation, etc.)
- [ ] **Remediation Guides** - Detailed step-by-step fixes for each issue type
- [ ] **Team Collaboration** - Share scans with team members
- [ ] **API Rate Limiting** - Implement rate limiting to prevent abuse

### **Nice to Have**

- [ ] **Lighthouse Integration** - Add performance, SEO, and best practices scores
- [ ] **Custom Rules** - Allow users to define custom accessibility rules
- [ ] **Browser Extensions** - Chrome/Firefox extensions for quick scans
- [ ] **Webhooks** - Trigger scans via webhooks for CI/CD integration
- [ ] **Multi-page Scanning** - Scan entire websites (all pages)
- [ ] **Screenshot Annotations** - Highlight issues directly on screenshots
- [ ] **Public Scan Results** - Share scan results via public links

### **Technical Improvements**

- [ ] **Caching Strategy** - Cache scan results to reduce API calls
- [ ] **Queue System** - Background job queue for long-running scans
- [ ] **WebSocket Updates** - Real-time scan progress updates
- [ ] **Test Coverage** - Unit and integration tests
- [ ] **Database Indexing** - Optimize MongoDB queries with proper indexes
- [ ] **Error Monitoring** - Integrate Sentry or similar for error tracking

---

## ✨ Features

- 🔍 **Website Accessibility Scanning** - Scan any public website for accessibility issues
- 📊 **Detailed Reports** - Get comprehensive reports with issue breakdowns by severity
- 👤 **User Authentication** - Secure authentication with NextAuth.js (Credentials & Google OAuth)
- 📱 **Responsive Design** - Beautiful UI that works on all devices
- 🌙 **Dark Mode** - Full dark mode support with theme persistence
- 📂 **Scan History** - Track all your previous scans (coming soon)
- 🖼️ **Image Upload** - Upload profile pictures via Cloudinary
- 🔒 **Protected Routes** - Middleware-based authentication for sensitive pages

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [TailwindCSS](https://tailwindcss.com/)
- **Database:** [MongoDB](https://www.mongodb.com/) with Mongoose
- **Authentication:** [NextAuth.js v5](https://next-auth.js.org/)
- **File Upload:** [Cloudinary](https://cloudinary.com/)
- **Accessibility Engine:** [Axe-core](https://github.com/dequelabs/axe-core)
- **Headless Browser:** [Browserless.io](https://browserless.io/) (serverless Puppeteer)
- **Icons:** [Lucide React](https://lucide.dev/)
- **HTTP Client:** [Axios](https://axios-http.com/)

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- MongoDB Atlas account (or local MongoDB)
- Cloudinary account
- Google OAuth credentials (optional)

### Steps

1. **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/a11yguard.git
    cd a11yguard

    ```

2. **Install dependencies**

```bash
npm install
```

### 2. Create `.env.local`

Use the exact variable names below (matching current code):

```env
# MongoDB
MONGODB_URI=your_mongodb_connection_string

# NextAuth
NEXT_AUTH_SECRET=your_nextauth_secret

# Google OAuth (optional if you only use credentials)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Cloudinary
CLOUDINARY_CLIENT_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Accessibility scan runtime
# Recommended for production/serverless
BROWSERLESS_TOKEN=your_browserless_token

# Optional: override Chrome binary path for scan worker
# CHROME_EXECUTABLE_PATH=/path/to/chrome
```

Notes:

- In production, scanning requires either `BROWSERLESS_TOKEN` or `CHROME_EXECUTABLE_PATH`.
- On local Windows development, the scan route tries to use local Chrome at `C:\Program Files\Google\Chrome\Application\chrome.exe` unless overridden.

### 3. Run locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## NPM Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Scan API Example

### Request

```bash
curl -X POST http://localhost:3000/api/scan \
  -H "Content-Type: application/json" \
  -d '{"url":"https://example.com"}'
```

### Successful response shape

```json
{
    "url": "https://example.com",
    "scannedAt": "2026-03-15T00:00:00.000Z",
    "totalIssues": 3,
    "issuesBySeverity": {
        "high": 2,
        "medium": 1,
        "low": 0
    },
    "issues": [
        {
            "id": "abc123xyz",
            "category": "Accessibility",
            "name": "Issue title",
            "description": "Issue details",
            "severity": "High",
            "affectedElements": ["<img ...>"],
            "remediation": "How to fix"
        }
    ]
}
```

## Deployment Notes

- `Dockerfile`, `docker-compose.yml`, and `vercel.json` are included.
- For serverless deployments, Browserless is the expected runtime strategy for scanning.

## Repository Structure

```text
src/
  app/
    api/
      auth/
      scan/
      user/
    about/
    contact/
    login/
    profile/
    register/
    scan/
    services/
  components/
  context/
  lib/
  model/
  types/
```

## Author

Abhishek Kumar
