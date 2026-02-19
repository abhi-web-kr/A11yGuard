"use client";

import { ShieldCheck, Cpu, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <section className="py-20 px-6 bg-slate-50 border-b border-slate-200 dark:bg-gray-900">
                <div className="max-w-4xl mx-auto text-center ">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                        Building a More{" "}
                        <span className="text-gray-600 dark:text-gray-400">
                            Accessible
                        </span>{" "}
                        Web
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
                        A11yGuard is an automated auditing tool designed to help
                        developers identify and fix accessibility barriers. We
                        believe the internet should be usable by everyone,
                        regardless of their abilities.
                    </p>
                </div>
            </section>

            {/* How it Works Section */}
            <section className="pt-20 pb-10 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-16">
                        How{" "}
                        <span className="text-gray-600 dark:text-gray-400">
                            A11yGuard
                        </span>{" "}
                        Works
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                                <Globe size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">
                                1. URL Retrieval
                            </h3>
                            <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed">
                                Our backend uses <strong>Puppeteer</strong> to
                                launch a headless browser and navigate to your
                                website, rendering it exactly as a user would
                                see it.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                                <Cpu size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">
                                2. Expert Analysis
                            </h3>
                            <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed">
                                We inject the <strong>Axe-Core</strong> engine
                                into the page to run 90+ industry-standard
                                accessibility rules against the live DOM.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-400 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                                <ShieldCheck size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">
                                3. Guided Solutions
                            </h3>
                            <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed">
                                Issues are categorized by severity. We provide
                                the exact code snippet and a link to resolution
                                guides to help you fix them fast.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Demo Section */}
            <section className="pt-10 pb-20 px-6 bg-white dark:bg-gray-900">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                            See{" "}
                            <span className="text-gray-600 dark:text-gray-400">
                                A11yGuard
                            </span>{" "}
                            in Action
                        </h2>
                        <p className="text-slate-600 dark:text-gray-300">
                            Watch how we identify accessibility gaps in seconds.
                        </p>
                    </div>

                    {/* Video Container with Aspect Ratio */}
                    <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-100 dark:border-gray-800">
                        <div className="aspect-video w-full">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // <-- Yahan apna URL baad mein change karna
                                title="OpenCheck Demo Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center gap-6">
                        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-gray-400 font-medium">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                            Live Demo Recording
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="py-20 px-6 bg-slate-900 dark:bg-gray-950 text-white overflow-hidden">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold mb-6">
                                Built with Modern Tech
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    <span>
                                        Next.js 15 & TypeScript for Type-Safety
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    <span>Tailwind CSS for Responsive UI</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    <span>
                                        Puppeteer & Axe-Core for Accurate Audits
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 bg-slate-800 dark:bg-gray-800 p-8 rounded-3xl border border-slate-700 dark:border-gray-700 shadow-2xl rotate-3">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <code className="text-blue-300 text-sm block font-mono">
                                {`const result = await scan(url);`}
                                <br />
                                {`if (result.violations > 0) {`}
                                <br />
                                <span className="pl-4 text-emerald-400">{`fixWebAccessibility();`}</span>
                                <br />
                                {`}`}
                            </code>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 text-center">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                    Ready to test your site?
                </h2>
                <Link
                    href="/scan"
                    className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-emerald-600 dark:hover:bg-emerald-500 hover:-translate-y-1 transition-all shadow-xl cursor-pointer"
                >
                    Start a Free Scan <ArrowRight size={20} />
                </Link>
            </section>
        </div>
    );
}
