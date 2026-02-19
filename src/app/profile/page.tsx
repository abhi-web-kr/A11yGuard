"use client";

import { useSession } from "next-auth/react";
import {
    User,
    Mail,
    History,
    ShieldCheck,
    Clock,
    ExternalLink,
    Pencil,
} from "lucide-react";
import Link from "next/link";
import { useUser } from "@/context/userContext";
import { useEffect } from "react";
import Image from "next/image";

// Hardcoded History for UI (Replace with your database fetch later)
const scanHistory = [
    {
        id: "1",
        url: "https://example.com",
        date: "Feb 15, 2026",
        issuesFound: 12,
        score: 85,
    },
    {
        id: "2",
        url: "https://myportfolio.dev",
        date: "Feb 10, 2026",
        issuesFound: 4,
        score: 98,
    },
    {
        id: "3",
        url: "https://amazon.dev",
        date: "jan 10, 2022",
        issuesFound: 8,
        score: 94,
    },
    {
        id: "4",
        url: "https://flipcart.com",
        date: "mar 15, 2025",
        issuesFound: 12,
        score: 75,
    },
    {
        id: "5",
        url: "https://lenevo.com",
        date: "Feb 15, 2024",
        issuesFound: 12,
        score: 85,
    },
    {
        id: "6",
        url: "https://milton.com",
        date: "june 15, 2026",
        issuesFound: 42,
        score: 35,
    }
];

export default function ProfilePage() {
    const { data: session } = useSession();
    const { user, getUser } = useUser();

    useEffect(() => {
        getUser();
    }, []);
    // console.log(user?.image);

    const displayName = user?.name || session?.user?.name || "User Name";
    const displayEmail =
        user?.email || session?.user?.email || "user@example.com";
    const displayDate = user?.createdAt
        ? new Date(user.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
          })
        : "Loading...";

    return (
        <div className="min-h-screen bg-slate-50 pb-20 dark:bg-slate-950 transition-colors">
            {/* Header / Banner */}
            <div className="bg-slate-900 dark:bg-slate-900 h-32 sm:h-40 md:h-48 w-full relative">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 h-full flex items-end pb-4 sm:pb-6 md:pb-8">
                    <div className="flex flex-col sm:flex-row items-center sm:items-end gap-3 sm:gap-4 md:gap-6 translate-y-10 sm:translate-y-12 relative w-full sm:w-auto">
                        {/* Edit Button */}
                        <Link
                            href="/profile/edit"
                            className="absolute -top-2 right-0 sm:right-auto sm:left-20 md:left-24 bg-emerald-500 hover:bg-emerald-600 p-2 rounded-full transition-all shadow-lg"
                        >
                            <Pencil size={16} className="text-white" />
                        </Link>

                        {/* Profile Image */}
                        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-emerald-500 rounded-2xl sm:rounded-3xl border-4 border-white dark:border-slate-950 flex items-center justify-center shadow-lg shrink-0 overflow-hidden">
                            {user?.image ? ( 
                                <Image src={user.image} alt={user.name || "User Image"} width={128} height={128} className="w-full h-full object-cover"/>
                            ) : (<User
                                size={36}
                                className="text-white sm:w-10 sm:h-10 md:w-12 md:h-12"
                            />)}
                        </div>

                        {/* User Info */}
                        <div className="text-center sm:text-left sm:mb-2 md:mb-3">
                            <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-white">
                                {displayName}
                            </h1>
                            <p className="text-slate-400 dark:text-slate-400 font-medium text-sm sm:text-base flex items-center gap-2 justify-center sm:justify-start mt-1 pb-2">
                                <Mail size={14} className="sm:w-4 sm:h-4" />
                                <span className="break-all">
                                    {displayEmail}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-16 sm:mt-20 md:mt-24 grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                {/* Account Details Card */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 transition-colors">
                        <h2 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                            <ShieldCheck
                                className="text-emerald-600 dark:text-emerald-400"
                                size={18}
                            />
                            Account Status
                        </h2>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                                <span className="text-slate-500 dark:text-slate-400 text-sm">
                                    Role
                                </span>
                                <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full text-xs font-bold">
                                    Free Plan
                                </span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                                <span className="text-slate-500 dark:text-slate-400 text-sm">
                                    Member Since
                                </span>
                                <span className="text-slate-800 dark:text-white font-semibold text-sm">
                                    {displayDate}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* History Section */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <h2 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-white flex items-center gap-3">
                            <History
                                className="text-emerald-600 dark:text-emerald-400 sm:w-7 sm:h-7"
                                size={24}
                            />
                            Recent Audits
                        </h2>
                        <span className="text-xs sm:text-sm text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest">
                            {scanHistory.length} Total
                        </span>
                    </div>

                    <div className="space-y-4">
                        {scanHistory.map((scan) => (
                            <div
                                key={scan.id}
                                className="bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group"
                            >
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                    {/* URL and Info */}
                                    <div className="space-y-1 flex-1 min-w-0">
                                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors truncate">
                                            {scan.url}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-slate-400 dark:text-slate-500 font-bold">
                                            <span className="flex items-center gap-1">
                                                <Clock size={14} /> {scan.date}
                                            </span>
                                            <span className="text-red-500 dark:text-red-400">
                                                {scan.issuesFound} Issues Found
                                            </span>
                                        </div>
                                    </div>

                                    {/* Score and Button */}
                                    <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto border-t sm:border-t-0 border-slate-100 dark:border-slate-800 pt-4 sm:pt-0">
                                        <div className="text-center">
                                            <p className="text-[10px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-tighter leading-none">
                                                Score
                                            </p>
                                            <p
                                                className={`text-xl font-black ${scan.score > 90 ? "text-emerald-600 dark:text-emerald-400" : "text-amber-500 dark:text-amber-400"}`}
                                            >
                                                {scan.score}%
                                            </p>
                                        </div>
                                        <button className="flex-1 sm:flex-none px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-sm font-bold hover:bg-emerald-600 dark:hover:bg-emerald-500 transition-all flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer">
                                            Report <ExternalLink size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
