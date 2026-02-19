# 🛡️ A11yGuard

**A11yGuard** is a modern web accessibility scanning platform built with Next.js 15, designed to help developers identify and fix accessibility issues on their websites. Scan any website for WCAG compliance and get detailed reports on accessibility violations.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)

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
    # or
    yarn install
    # or
    pnpm install
    ```

3. **Set up environment variables**

    Create a `.env.local` file in the root directory:

    ```env
    # MongoDB
    MONGODB_URI=your_mongodb_connection_string

    # NextAuth
    NEXTAUTH_SECRET=your_nextauth_secret_key
    NEXTAUTH_URL=http://localhost:3000

    # Google OAuth (optional)
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret

    # Cloudinary
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    ```

4. **Run the development server**

    ```bash
    npm run dev
    ```

5. **Open your browser**

    Navigate to [http://localhost:3000](http://localhost:3000)

## 🔐 Authentication Flow

A11yGuard uses NextAuth.js with two authentication providers:

- **Credentials Provider** - Email and password authentication
- **Google OAuth** - Sign in with Google account

### Protected Routes

The following routes require authentication:

- `/profile` - User profile page
- `/profile/edit` - Edit profile
- `/scan/issue` - Detailed issue reports

Public routes (no authentication required):

- `/` - Home page
- `/scan` - Main scanning page
- `/about` - About page
- `/services` - Services page
- `/contact` - Contact page

## 📁 Project Structure

```
a11yguard/
├── src/
│   ├── app/                    # App router pages
│   │   ├── about/             # About page
│   │   ├── api/               # API routes
│   │   │   ├── auth/          # Authentication endpoints
│   │   │   ├── scan/          # Scan API
│   │   │   └── user/          # User management
│   │   ├── contact/           # Contact page
│   │   ├── login/             # Login page
│   │   ├── profile/           # Profile pages
│   │   ├── register/          # Registration page
│   │   ├── scan/              # Scanning pages
│   │   └── services/          # Services page
│   ├── components/            # React components
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── ThemeProvider.tsx
│   │   └── ...
│   ├── context/               # React Context providers
│   │   ├── IssueContext.tsx
│   │   └── userContext.tsx
│   ├── lib/                   # Utility libraries
│   │   ├── auth.ts            # Auth configuration
│   │   ├── cloudinary.ts      # Image upload
│   │   ├── db.ts              # Database connection
│   │   └── mockScanData.ts    # Sample data
│   ├── model/                 # Mongoose models
│   │   └── user.model.ts
│   ├── types/                 # TypeScript types
│   │   └── scan.ts
│   └── proxy.ts               # Middleware for route protection
├── public/                    # Static assets
├── .env.local                # Environment variables
└── package.json              # Dependencies
```

## 🔌 API Routes

### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/signin` - Sign in (handled by NextAuth)
- `POST /api/auth/signout` - Sign out (handled by NextAuth)

### User Management

- `GET /api/user` - Get current user details
- `POST /api/user/update` - Update user profile (name, image)

### Scanning

- `POST /api/scan` - Scan a website for accessibility issues

## 🎨 Features Walkthrough

### 1. Scan a Website

- Visit the `/scan` page (no login required)
- Enter a website URL
- Click "Scan Now" to analyze accessibility issues
- View summary of issues found

### 2. View Detailed Reports

- Click "View Error Details" after scanning
- Requires authentication (redirects to login if not authenticated)
- See detailed breakdown of all accessibility violations
- Filter by severity level

### 3. User Profile

- Upload profile picture
- Edit name and personal information
- View scan history (coming soon)
- Track accessibility scores over time

## 🌙 Theme Support

A11yGuard supports both light and dark themes with persistent storage. Toggle the theme using the theme switcher in the navigation bar.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Known Issues

- Scan history not yet implemented
- Real accessibility scanning API integration pending
- Email verification not implemented

## 🚧 Roadmap

- [ ] Integrate real accessibility scanning API (Axe, Pa11y, etc.)
- [ ] Implement scan history with database storage
- [ ] Add email verification for new accounts
- [ ] Export reports as PDF
- [ ] Scheduled automated scans
- [ ] Team collaboration features
- [ ] API rate limiting
- [ ] Advanced filtering and search

## 📧 Contact

For questions or feedback, reach out at: [your-email@example.com](mailto:your-email@example.com)

---

Made with ❤️ by [Your Name]
