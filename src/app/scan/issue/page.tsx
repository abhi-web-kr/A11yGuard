"use client";
import React from "react";
import {
    AlertCircle,
    CheckCircle2,
    Info,
    ExternalLink,
    ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { useIssues } from "@/context/IssueContext";

// Dummy Data for UI testing (Baad mein tum ise useIssues() se replace kar lena)
const getLinkFromText = (text: string) => {
    if (!text) {
        return new Error("Url not found!");
    }
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const matches = text.match(urlRegex);
    return matches ? matches[0] : "#";
};

const DetailedIssuesPage = () => {
    const { result } = useIssues();

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-gray-900 pb-20">
            {/* Top Navigation / Header */}
            <div className="bg-white dark:bg-gray-800 border-b border-slate-200 dark:border-gray-700 sticky top-0 z-10">
                <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link
                        href="/scan"
                        className="flex items-center gap-2 text-slate-500 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white transition-all"
                    >
                        <ArrowLeft size={20} />
                        <span className="font-medium">Back to Summary</span>
                    </Link>
                    <h1 className="text-xl font-bold text-slate-800 dark:text-white">
                        Detailed Audit Report
                    </h1>
                    <div className="px-3 py-1 bg-slate-100 dark:bg-gray-700 rounded-full text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider">
                        Draft Report
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 mt-10">
                {result ? (
                    <h1 className="py-6 sm:py-8">
                        <a
                            href={result?.url ? result.url : "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 p-2 rounded-lg transition-all"
                        >
                            <span className="text-xl sm:text-2xl font-bold text-black dark:text-white whitespace-nowrap">
                                Website Link :
                            </span>

                            <span className="text-base sm:text-lg font-medium text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white break-all sm:truncate max-w-full">
                                {result?.url}
                            </span>

                            {/* Optional: Ek external link icon jo sirf desktop par dikhe */}
                            <span className="hidden sm:inline text-gray-400 dark:text-gray-500 group-hover:text-black dark:group-hover:text-white">
                                ↗
                            </span>
                        </a>
                    </h1>
                ) : (
                    ""
                )}

                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
                    Identified Violations ({result?.issues.length})
                </h2>

                {/* Issues List */}
                <div className="space-y-6">
                    {result?.issues.map((issue) => (
                        <div
                            key={issue.id}
                            className={`bg-white dark:bg-gray-800 rounded-2xl shadow-sm border-l-8 overflow-hidden ${
                                issue.severity === "High"
                                    ? "border-l-red-500"
                                    : "border-l-amber-500"
                            } border border-slate-200 dark:border-gray-700`}
                        >
                            <div className="p-6">
                                {/* Header: Name & Severity */}
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            {issue.severity === "High" ? (
                                                <AlertCircle
                                                    className="text-red-500"
                                                    size={18}
                                                />
                                            ) : (
                                                <Info
                                                    className="text-amber-500"
                                                    size={18}
                                                />
                                            )}
                                            <span
                                                className={`text-xs font-bold uppercase tracking-widest ${issue.severity === "High" ? "text-red-500" : "text-amber-500"}`}
                                            >
                                                {issue.severity} Severity
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-800 dark:text-white leading-tight">
                                            {issue.name}
                                        </h3>
                                    </div>
                                    <span className="bg-slate-100 dark:bg-gray-700 text-slate-600 dark:text-gray-300 px-3 py-1 rounded-md text-xs font-semibold">
                                        {issue.category}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-slate-600 dark:text-gray-300 mb-6 leading-relaxed">
                                    {issue.description}
                                </p>

                                {/* Affected Elements Code Blocks */}
                                <div className="mb-6">
                                    <h4 className="text-xs font-bold text-slate-400 dark:text-gray-500 uppercase mb-3 tracking-widest">
                                        Affected Code Snippets
                                    </h4>
                                    <div className="space-y-2">
                                        {issue.affectedElements.map(
                                            (el, index) => (
                                                <div
                                                    key={index}
                                                    className="bg-slate-900 dark:bg-gray-950 rounded-lg p-3 overflow-x-auto border border-slate-800 dark:border-gray-800"
                                                >
                                                    <code className="text-pink-400 text-sm font-mono whitespace-nowrap">
                                                        {el}
                                                    </code>
                                                </div>
                                            ),
                                        )}
                                    </div>
                                </div>

                                {/* Footer: Remediation Link */}
                                <div className="pt-4 border-t border-slate-100 dark:border-gray-700 flex justify-between items-center">
                                    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm font-semibold">
                                        <CheckCircle2 size={16} />
                                        <span>
                                            Resolution guidance available
                                        </span>
                                    </div>
                                    <a
                                        href={getLinkFromText(
                                            issue.remediation,
                                        ) as string}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-bold transition-colors"
                                    >
                                        How to fix this{" "}
                                        <ExternalLink size={14} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DetailedIssuesPage;
