"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, ShieldCheck, User, LogOut, UserCircle } from "lucide-react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useUser } from "@/context/userContext";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const path = usePathname();

    const { data, status } = useSession();
    const { user } = useUser();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Scan", href: "/scan" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Contact", href: "/contact" },
        { name: "Profile", href: "/profile" },
    ];

    return (
        <nav className="bg-white dark:bg-slate-950 shadow-sm sticky top-0 z-50 transition-colors border-b border-slate-100 dark:border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="shrink-0">
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-2xl font-black text-slate-900 dark:text-white italic tracking-tighter"
                        >
                            <ShieldCheck
                                className="text-emerald-500"
                                size={28}
                            />
                            A11yGuard
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`${
                                    path === link.href
                                        ? "font-bold text-emerald-600 dark:text-emerald-400"
                                        : "text-slate-600 dark:text-slate-400"
                                } hover:text-emerald-500 dark:hover:text-white transition-all duration-200 text-sm uppercase tracking-widest`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Auth + Theme Toggle +  profile + logout function */}

                    <div className="hidden md:flex items-center space-x-5 relative">
                        <ThemeToggle />
                        {status !== "loading" && !data && (
                            <div className="flex items-center space-x-5">
                                <Link
                                    href="/login"
                                    className="text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-bold text-sm transition-colors"
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/register"
                                    className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-2.5 rounded-xl hover:bg-emerald-600 dark:hover:bg-emerald-500 transition-all font-bold text-sm shadow-lg shadow-slate-200 dark:shadow-none"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        )}

                        {/* profile and logout function */}
                        {data && (
                            <div
                                className="relative"
                                onMouseEnter={() => setIsOpen(true)}
                                onMouseLeave={() => setIsOpen(false)}
                            >
                                {/* User Icon */}
                                <div className="cursor-pointer transition-transform hover:scale-110">
                                    {user?.image ? (
                                        <Image
                                            alt="profile image"
                                            height={33}
                                            width={33}
                                            src={user.image}
                                            className="rounded-full border-2 border-emerald-500 object-cover"
                                        />
                                    ) : (
                                        <User
                                            size={33}
                                            className="text-slate-900 dark:text-white border-2 border-emerald-500 rounded-full p-1"
                                        />
                                    )}
                                </div>

                                {/* Dropdown Menu */}
                                <div
                                    className={`
                    absolute top-full right-0 mt-2 w-48 
                    bg-white dark:bg-slate-900 
                    border border-slate-200 dark:border-slate-800 
                    rounded-2xl shadow-xl overflow-hidden z-50
                    transition-all duration-300 ease-in-out
                    ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}
                `}
                                >
                                    <div className="flex flex-col">
                                        <Link
                                            href="/profile"
                                            className="flex items-center gap-3 px-4 py-3 text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 transition-colors border-b border-slate-100 dark:border-slate-800"
                                        >
                                            <UserCircle size={18} />
                                            <span className="font-bold text-sm">
                                                Profile
                                            </span>
                                        </Link>

                                        <button
                                            onClick={() => signOut()}
                                            className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors text-left"
                                        >
                                            <LogOut size={18} />
                                            <span className="font-bold text-sm">
                                                Logout
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button + Toggle */}
                    <div className="md:hidden flex items-center gap-3">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-slate-700 dark:text-slate-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-all"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900 animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`${
                                    path === link.href
                                        ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400"
                                        : "text-slate-600 dark:text-slate-400"
                                } block px-4 py-3 rounded-xl font-bold text-base transition-all`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4 flex flex-col gap-3 border-t border-slate-100 dark:border-slate-900 mt-4">
                            <Link
                                href="/login"
                                onClick={() => setIsMenuOpen(false)}
                                className="w-full text-center py-3 text-slate-700 dark:text-slate-300 font-bold"
                            >
                                Login
                            </Link>
                            <Link
                                href="/register"
                                onClick={() => setIsMenuOpen(false)}
                                className="w-full text-center py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black shadow-xl"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
