import Link from "next/link";
import { ArrowUpRight, FileDown, Landmark, Chrome, Palette, Headphones } from "lucide-react";


    const guidelineLinks = [
    {
        title: "WCAG 2.1 Checklist (PDF)",
        description: "A printable, concise checklist from WebAIM that helps you track your progress across all accessibility success criteria.",
        href: "https://webaim.org/standards/wcag/WCAG2Checklist.pdf",
        icon: FileDown, // Lucide icon for downloads
    },
    {
        title: "Official WCAG 2.0 Docs (PDF)",
        description: "The complete, authoritative guidelines from the W3C. Best for deep-diving into the formal specifications and legal standards.",
        href: "https://www.w3.org/WAI/WCAG20/versions/guidelines/wcag20-guidelines-20081211-a4.pdf",
        icon: Landmark, // Lucide icon for official/authority
    },
    {
        title: "Contrast Checker Tool",
        description: "Test your color combinations against WCAG 2.1 standards in real-time with this interactive checker.",
        href: "https://webaim.org/resources/contrastchecker/",
        icon: Palette,
    },
    {
        title: "WAVE Extension",
        description: "Install the WAVE browser extension to perform manual accessibility audits directly in your browser.",
        href: "https://wave.webaim.org/extension/",
        icon: Chrome,
    },
    {
        title: "Screen Reader Guide",
        description: "A comprehensive guide on how screen readers interact with web elements like headings, links, and forms.",
        href: "https://dequeuniversity.com/screenreaders/",
        icon: Headphones,
    },
];


export default function GuidelinesPage() {
    return (
        <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
            <section className="bg-[#1e2939] dark:bg-gray-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
                            Accessibility Resources
                        </p>
                        <h1 className="mt-4 text-4xl md:text-5xl font-bold">
                            Read official accessibility guidelines
                        </h1>
                        <p className="mt-6 text-lg text-slate-200 leading-8">
                            These resources help you understand the standards
                            and implementation practices behind accessible web
                            experiences.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-6 md:grid-cols-2">
                        {guidelineLinks.map((resource) => {
                            const Icon = resource.icon;

                            return (
                                <article
                                    key={resource.href}
                                    className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 p-8 shadow-lg shadow-slate-200/60 dark:shadow-none"
                                >
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                                        <Icon size={28} />
                                    </div>
                                    <h2 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
                                        {resource.title}
                                    </h2>
                                    <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                                        {resource.description}
                                    </p>
                                    <Link
                                        href={resource.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600 dark:bg-white dark:text-slate-900 dark:hover:bg-emerald-400"
                                    >
                                        Read guidelines
                                        <ArrowUpRight size={16} />
                                    </Link>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}
