import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Layout from "@/components/Layout";
import ClientProvider from "@/context/ClientProvider";
import { ThemeProvider } from "@/components/ThemeProvider";

const open_Sans = Open_Sans({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "A11yGuard",
    description: "Web Accessibility Auditing Tool"
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={open_Sans.className}
            suppressHydrationWarning
        >
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    storageKey="a11yguard-theme"
                    enableColorScheme
                >
                    <ClientProvider>
                        {/* <IssueProvider> */}
                        <Layout>{children}</Layout>
                        {/* </IssueProvider> */}
                    </ClientProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
