"use client";

import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
            {/* Hero Section */}
            <section className="bg-[#1e2939] dark:bg-gray-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Welcome to A11yGuard
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-blue-100 dark:text-blue-200">
                            Your solution for modern web accessibility scanning
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                className="bg-white text-black dark:bg-white dark:text-slate-900 px-8 py-3 rounded-2xl font-semibold hover:bg-emerald-600 dark:hover:bg-emerald-500 hover:-translate-y-1 transition-all shadow-xl cursor-pointer hover:text-white"
                                onClick={() => router.push("/scan")}
                            >
                                Get Started
                            </button>
                            <button
                                className="text-white border-slate-900 bg-black dark:border-white dark:text-white px-8 py-3 rounded-2xl font-semibold hover:text-white hover:bg-emerald-600 dark:hover:bg-emerald-600 dark:hover:text-slate-900 hover:-translate-y-1 transition-all shadow-xl cursor-pointer"
                                onClick={() => router.push("/about")}
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Why Choose Us?
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            Powerful features to help you succeed
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200">
                            <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                                <svg
                                    className="w-8 h-8 text-black dark:text-blue-300"
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
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                Fast & Reliable
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Lightning-fast performance with 99.9% uptime
                                guarantee for all your needs.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200">
                            <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                                <svg
                                    className="w-8 h-8 text-black dark:text-blue-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                Secure
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Enterprise-grade security to protect your data
                                and ensure privacy.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200">
                            <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                                <svg
                                    className="w-8 h-8 text-black dark:text-blue-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                Easy to Use
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Intuitive interface designed for both beginners
                                and experts.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
