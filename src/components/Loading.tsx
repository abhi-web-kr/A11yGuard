import React, { useState, useEffect } from "react";
import { Loader2, Search, ShieldCheck, Zap } from "lucide-react";

const LoadingPage = () => {
    const [status, setStatus] = useState("Initializing Scanner...");

    
    const messages = [
        "Opening Headless Browser...",
        "Navigating to the URL...",
        "Running 90+ Accessibility Rules...",
        "Analyzing DOM Structure...",
        "Identifying Critical Violations...",
        "Preparing your Report Card...",
    ];

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setStatus(messages[i % messages.length]);
            i++;
        }, 1500); 
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-100 p-10 bg-white dark:bg-gray-800 rounded-2xl border border-slate-100 dark:border-gray-700 shadow-xl">
            {/* Animated Icon Group */}
            <div className="relative mb-8">
                <div className="absolute inset-0 rounded-full bg-blue-100 dark:bg-blue-900 animate-ping opacity-25"></div>
                <div className="relative bg-gray-600 dark:bg-gray-700 p-5 rounded-full shadow-lg">
                    <Loader2 className="w-10 h-10 text-white animate-spin" />
                </div>
            </div>

            {/* Progress Text */}
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white animate-pulse">
                Scanning in Progress...
            </h2>
            <p className="text-slate-500 dark:text-gray-400 mt-2 font-medium tracking-wide">
                {status}
            </p>

            {/* Steps Visualization */}
            <div className="mt-10 grid grid-cols-3 gap-8 text-slate-400 dark:text-gray-500">
                <div className="flex flex-col items-center gap-2">
                    <Search className="w-5 h-5" />
                    <span className="text-xs font-semibold uppercase">
                        Crawl
                    </span>
                </div>
                <div className="flex flex-col items-center gap-2 text-blue-600 dark:text-blue-400">
                    <ShieldCheck className="w-5 h-5" />
                    <span className="text-xs font-semibold uppercase">
                        Audit
                    </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Zap className="w-5 h-5" />
                    <span className="text-xs font-semibold uppercase">
                        Report
                    </span>
                </div>
            </div>

            {/* Tips Section (Optional but cool) */}
            <div className="mt-12 max-w-sm p-4 bg-slate-50 dark:bg-gray-700 rounded-lg border border-slate-200 dark:border-gray-600">
                <p className="text-xs text-slate-400 dark:text-gray-400 text-center italic">
                    Did you know? Accessible websites rank better on Google
                    Search (SEO).
                </p>
            </div>
        </div>
    );
};

export default LoadingPage;
