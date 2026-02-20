"use client";

import LoadingPage from "@/components/Loading";
import ScanSummary from "@/components/ScanSummary";
import { useIssues } from "@/context/IssueContext";
import { useState } from "react";
import toast from "react-hot-toast";

const ScanPage = () => {
    const [websiteUrl, setWebsiteUrl] = useState("");

    const { result, loading, handleWebsiteLink } =
        useIssues();

    const handleScan = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!websiteUrl) return alert("Please enter a URL first!");

        await handleWebsiteLink(websiteUrl);
        toast.success("Scanned Successfully.")
        setWebsiteUrl("");
    };

    return (
        <div className="min-h-[calc(100vh-64px)] bg-linear-to-br from-blue-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2 dark:text-white">
                        Website Accessibility Scanner
                    </h1>
                    <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 dark:text-gray-200">
                        Analyze any website for accessibility issues, HTML
                        validation errors, and performance concerns. Get
                        actionable insights to improve your web presence.
                    </p>
                </div>

                {/* Scan Form */}
                <div className="flex flex-col justify-center items-center p-4 sm:p-6 rounded-2xl bg-white shadow-lg gap-2.5 dark:bg-gray-800">
                    <div className="w-full max-w-4xl">
                        <label
                            htmlFor="url-input"
                            className="block text-sm font-bold mb-2 ml-1"
                        >
                            Enter URL :
                        </label>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <input
                                id="url-input"
                                type="url"
                                placeholder="http://example.com/abhi"
                                className="flex-1 p-3 sm:p-3 border-2 border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all text-sm sm:text-base "
                                value={websiteUrl}
                                onChange={(e) => setWebsiteUrl(e.target.value)}
                            />
                            <button
                                className="text-white border-slate-900 bg-black dark:border-white dark:text-white px-8 py-3 rounded-2xl font-semibold hover:text-white hover:bg-emerald-600 dark:hover:bg-emerald-600 dark:hover:text-slate-900  shadow-xl cursor-pointer"
                                onClick={handleScan}
                            >
                                Scan Now
                            </button>
                        </div>
                    </div>

                    {loading ? <LoadingPage /> : result && <ScanSummary />}
                </div>

                {/* Info Content Below Form */}
                <div className="mt-6 sm:mt-8 max-w-4xl mx-auto px-2 sm:px-0">
                    {/* Quick Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                        <div className="bg-gray-200 dark:bg-gray-800  p-4 sm:p-6 rounded-xl shadow-md text-center border-l-4 border-blue-600">
                            <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">
                                10+
                            </div>
                            <div className="text-sm sm:text-base text-gray-600 font-medium dark:text-white">
                                Accessibility Checks
                            </div>
                        </div>
                        <div className="bg-gray-200 dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md text-center border-l-4 border-green-600">
                            <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1 sm:mb-2">
                                Instant
                            </div>
                            <div className="text-sm sm:text-base text-gray-600 font-medium dark:text-white">
                                Real-Time Results
                            </div>
                        </div>
                        <div className="bg-gray-200 dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md text-center border-l-4 border-purple-600">
                            <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">
                                100%
                            </div>
                            <div className="text-sm sm:text-base text-gray-600 font-medium dark:text-white">
                                Free to Use
                            </div>
                        </div>
                    </div>

                    {/* Key Benefits */}
                    <div className="bg-gradient-to-r from-gray-800 to-green-900 rounded-2xl p-5 sm:p-8 text-white shadow-xl">
                        <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">
                            Why Scan Your Website?
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            <div className="flex items-start gap-3">
                                <div className="bg-white/20 p-2 rounded-lg shrink-0">
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">
                                        Improve Accessibility
                                    </h4>
                                    <p className="text-blue-100 text-sm">
                                        Make your site usable for everyone,
                                        including people with disabilities
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="bg-white/20 p-2 rounded-lg shrink-0">
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">
                                        Boost SEO Rankings
                                    </h4>
                                    <p className="text-blue-100 text-sm">
                                        Fix critical SEO issues and improve your
                                        search engine visibility
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="bg-white/20 p-2 rounded-lg shrink-0">
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">
                                        Enhance Performance
                                    </h4>
                                    <p className="text-blue-100 text-sm">
                                        Identify performance bottlenecks and
                                        speed up your website
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="bg-white/20 p-2 rounded-lg shrink-0">
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">
                                        Ensure Compliance
                                    </h4>
                                    <p className="text-blue-100 text-sm">
                                        Meet WCAG standards and legal
                                        accessibility requirements
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scanner Info */}
                    <div className="mt-6 sm:mt-8 bg-gray-200 dark:bg-gray-800 border-2 dark:border  border-blue-200 rounded-xl p-4 sm:p-6">
                        <div className="flex items-start gap-3 sm:gap-4">
                            <div className="bg-blue-600 p-2 sm:p-3 rounded-lg shrink-0">
                                <svg
                                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-gray-900 dark:text-white text-base sm:text-lg mb-2">
                                    How A11yGuard Works
                                </h4>
                                <p className="text-sm sm:text-base text-gray-700 mb-3 dark:text-white">
                                    Simply enter your website URL above and
                                    click "Scan Now". Our advanced scanner will
                                    analyze your website in seconds and provide:
                                </p>
                                <ul className="space-y-2 text-sm sm:text-base text-gray-700 dark:text-white">
                                    <li className="flex items-center gap-2">
                                        <span className="text-blue-600">✓</span>
                                        Detailed accessibility issue reports
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-blue-600">✓</span>
                                        HTML validation errors and warnings
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-blue-600">✓</span>
                                        Performance optimization suggestions
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-blue-600">✓</span>
                                        Step-by-step remediation guidance
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Loading State */}

                {/* Results */}

                {/* Features Section (shown when no scan is active) */}
                <div className="mt-10 sm:mt-16">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12 px-2 dark:text-gray-300">
                        What We Check
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 ">
                        <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md dark:bg-gray-800">
                            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 dark:text-gray-200">
                                <svg
                                    className="w-6 h-6 text-blue-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 dark:text-gray-200">
                                Accessibility
                            </h3>
                            <p className="text-gray-600 text-sm  dark:text-gray-200">
                                Images with missing alt text, color contrast
                                issues, form labels, and ARIA roles.
                            </p>
                        </div>

                        <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md dark:bg-gray-800">
                            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <svg
                                    className="w-6 h-6 text-green-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 dark:text-gray-200">
                                HTML Validity
                            </h3>
                            <p className="text-gray-600 text-sm dark:text-gray-200">
                                Broken links, missing meta descriptions, title
                                tags, and semantic HTML issues.
                            </p>
                        </div>

                        <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md dark:bg-gray-800">
                            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <svg
                                    className="w-6 h-6 text-purple-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 dark:text-gray-200">
                                Performance
                            </h3>
                            <p className="text-gray-600 text-sm dark:text-gray-200">
                                Missing image dimensions, oversized images, and
                                optimization opportunities.
                            </p>
                        </div>

                        <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md dark:bg-gray-800">
                            <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <svg
                                    className="w-6 h-6 text-orange-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 dark:text-gray-200">
                                SEO
                            </h3>
                            <p className="text-gray-600 text-sm dark:text-gray-200">
                                Meta tags, structured data, heading hierarchy,
                                and search-engine optimization.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScanPage;
