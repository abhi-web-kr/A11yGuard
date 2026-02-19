import Link from "next/link";
import { ShieldCheck, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-slate-900 dark:bg-slate-950 text-white py-16 border-t border-slate-800 dark:border-slate-900 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-xl font-black italic tracking-tighter">
                            <ShieldCheck
                                className="text-emerald-500"
                                size={24}
                            />
                            A11yGuard
                        </div>
                        <p className="text-slate-400 dark:text-slate-500 text-sm leading-relaxed">
                            Empowering developers to build a more inclusive web
                            through automated accessibility audits.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a
                                href="#"
                                className="text-slate-400 hover:text-emerald-500 transition-colors"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-slate-400 hover:text-emerald-400 transition-colors"
                            >
                                <Twitter size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-slate-400 hover:text-emerald-600 transition-colors"
                            >
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-emerald-500">
                            Product
                        </h4>
                        <ul className="space-y-4 text-slate-400 dark:text-slate-500 text-sm">
                            <li>
                                <Link
                                    href="/scan"
                                    className="hover:text-white transition-colors"
                                >
                                    Accessibility Scan
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services"
                                    className="hover:text-white transition-colors"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="hover:text-white transition-colors"
                                >
                                    Documentation
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-emerald-500">
                            Company
                        </h4>
                        <ul className="space-y-4 text-slate-400 dark:text-slate-500 text-sm">
                            <li>
                                <Link
                                    href="/about"
                                    className="hover:text-white transition-colors"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:text-white transition-colors"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Open Source
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-emerald-500">
                            Legal
                        </h4>
                        <ul className="space-y-4 text-slate-400 dark:text-slate-500 text-sm">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Cookie Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-slate-800 dark:border-slate-900 text-center">
                    <p className="text-slate-500 text-xs font-medium uppercase tracking-tighter">
                        © 2026 A11yGuard Audit Tool. Built with ❤️ for an
                        Inclusive Web.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
