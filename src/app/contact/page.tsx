"use client";
import React, { useState } from "react";
import { Mail, MapPin, Send, Github } from "lucide-react";

export default function ContactPage() {
    const [status, setStatus] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        // Yahan apna backend logic (like EmailJS or a custom API) add kar sakte hai
        setTimeout(() => setStatus("success"), 2000);
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Header Section */}
            <section className="py-20 px-6 bg-slate-50 dark:bg-gray-800 border-b border-slate-200 dark:border-gray-700">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                        Get in{" "}
                        <span className="text-gray-600 dark:text-gray-400">
                            Touch
                        </span>
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Have questions about web accessibility? Want to
                        integrate A11yGuard into your workflow? Our team is here
                        to help.
                    </p>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Side: Contact Information */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                                Contact Information
                            </h2>
                            <p className="text-slate-500 dark:text-gray-400 mb-8">
                                Fill out the form and our team will get back to
                                you within 24 hours.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-gray-800 border border-slate-100 dark:border-gray-700">
                                <div className="w-12 h-12 bg-slate-800 dark:bg-gray-700 text-white rounded-xl flex items-center justify-center shadow-lg">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-widest">
                                        Email Us
                                    </p>
                                    <p className="text-slate-800 dark:text-white font-semibold text-lg">
                                        support@a11yguard.ai
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-gray-800 border border-slate-100 dark:border-gray-700">
                                <div className="w-12 h-12 bg-slate-800 dark:bg-gray-700 text-white rounded-xl flex items-center justify-center shadow-lg">
                                    <Github size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-widest">
                                        Open Source
                                    </p>
                                    <p className="text-slate-800 dark:text-white font-semibold text-lg">
                                        github.com/a11yguard
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-gray-800 border border-slate-100 dark:border-gray-700">
                                <div className="w-12 h-12 bg-slate-800 dark:bg-gray-700 text-white rounded-xl flex items-center justify-center shadow-lg">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-widest">
                                        Office
                                    </p>
                                    <p className="text-slate-800 dark:text-white font-semibold text-lg">
                                        Kolkata, West Bengal, India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-[2.5rem] border-4 border-slate-200 dark:border-gray-700 shadow-2xl shadow-slate-200/50 dark:shadow-gray-900/50">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 dark:text-gray-300 ml-1">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full p-4 bg-slate-50 dark:bg-gray-700 border border-slate-200 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-600 transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 dark:text-gray-300 ml-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full p-4 bg-slate-50 dark:bg-gray-700 border border-slate-200 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-600 transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-gray-300 ml-1">
                                    Subject
                                </label>
                                <select className="w-full p-4 bg-slate-50 dark:bg-gray-700 border border-slate-200 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-600 transition-all appearance-none text-gray-900 dark:text-white">
                                    <option>General Inquiry</option>
                                    <option>Technical Support</option>
                                    <option>API Access</option>
                                    <option>Bug Report</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-gray-300 ml-1">
                                    Message
                                </label>
                                <textarea
                                    rows={4}
                                    required
                                    className="w-full p-4 bg-slate-50 dark:bg-gray-700 border border-slate-200 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-600 transition-all resize-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 rounded-2xl font-black text-lg hover:bg-emerald-600 dark:hover:bg-emerald-500 hover:-translate-y-1 transition-all shadow-xl disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                            >
                                {status === "sending"
                                    ? "Sending..."
                                    : status === "success"
                                      ? "Sent Successfully!"
                                      : "Send Message"}
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
