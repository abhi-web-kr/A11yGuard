"use client";

import {
    Search,
    MousePointerClick,
    Type,
    Eye,
    Terminal,
    FileJson,
} from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Structural Audit",
        description:
            "Analyze the underlying HTML structure to ensure semantic tags like headings and navigation are used correctly for screen-reader compatibility.",
        icon: <Terminal className="text-blue-600" size={24} />,
        color: "bg-blue-50",
    },
    {
        title: "Interactive Elements",
        description:
            "Verify that all interactive components have descriptive labels, ensuring keyboard users understand every action before they click.",
        icon: <MousePointerClick className="text-purple-600" size={24} />,
        color: "bg-purple-50",
    },
    {
        title: "Visual Contrast",
        description:
            "Calculate color contrast ratios to meet WCAG AA standards, ensuring content is readable for users with low vision or color blindness.",
        icon: <Eye className="text-emerald-600" size={24} />,
        color: "bg-emerald-50",
    },
    {
        title: "Media Accessibility",
        description:
            "Identify missing alternative text for images and check for video captions to make non-text content accessible to all users.",
        icon: <Type className="text-orange-600" size={24} />,
        color: "bg-orange-50",
    },
    {
        title: "JSON Data Export",
        description:
            "Generate comprehensive JSON reports after every audit, allowing seamless integration into modern CI/CD developer pipelines.",
        icon: <FileJson className="text-red-600" size={24} />,
        color: "bg-red-50",
    },
    {
        title: "Deep Crawling",
        description:
            "Utilize Puppeteer to scan dynamically rendered content in React and Next.js apps, ensuring no hidden elements are left unaudited.",
        icon: <Search className="text-indigo-600" size={24} />,
        color: "bg-indigo-50",
    },
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 pb-20">
            {/* Header Section */}
            <section className="py-20 px-6 bg-slate-900 dark:bg-gray-950 text-white text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-black mb-6">
                        Our Services
                    </h1>
                    <p className="text-slate-400 dark:text-slate-500 text-lg">
                        We do more than just identify errors; we provide
                        in-depth technical analysis and industry-standard
                        solutions for every accessibility barrier we find.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="max-w-6xl mx-auto px-6 -mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-slate-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all group hover:-translate-y-2"
                        >
                            <div
                                className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                            >
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                                {service.title}
                            </h3>
                            <p className="text-slate-500 dark:text-gray-300 text-sm leading-relaxed mb-6">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Specialized Section */}
            <section className="mt-20 px-6 mb-20">
                <div className="max-w-5xl mx-auto bg-gray-300 dark:bg-gray-800 rounded-[3rem] p-8 md:p-16 text-black dark:text-white flex flex-col md:flex-row items-center gap-10">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold mb-4">
                            Enterprise-Ready Audits
                        </h2>
                        <p className="text-black dark:text-gray-300 mb-8">
                            AceesScan is engineered to handle large-scale React
                            projects and modern web applications. Powered by the
                            industry-leading Axe-core 4.4+ engine, we deliver
                            the most reliable and accurate audits available.
                        </p>
                        <Link
                            href="/scan"
                            className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-emerald-600 dark:hover:bg-emerald-500 hover:-translate-y-1 transition-all shadow-xl cursor-pointer"
                        >
                            Start Your Audit
                        </Link>
                    </div>
                    <div className="flex-1 bg-white dark:bg-gray-700 rounded-2xl p-6 border border-blue-400 dark:border-blue-600">
                        <div className="space-y-3">
                            <div className="h-2 w-full bg-blue-300 rounded-full"></div>
                            <div className="h-2 w-3/4 bg-blue-300 rounded-full"></div>
                            <div className="h-2 w-1/2 bg-blue-300 rounded-full"></div>
                        </div>
                        <p className="text-xs mt-4 font-mono opacity-70">
                            Testing for WCAG 2.1 Compliance...
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
