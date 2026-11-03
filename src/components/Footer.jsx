import { ArrowUpRight, ArrowUp, Code2 } from 'lucide-react'

function Footer() {
    const currentYear = new Date().getFullYear()

    const footerLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Blog', href: '#blog' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <footer className="relative overflow-hidden border-t border-gray-200 bg-gray-50 px-6 pb-8 pt-20 dark:border-gray-800 dark:bg-[#080b12]">

            {/* Background glow */}
            <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl">

                {/* Main Footer */}
                <div className="grid gap-14 border-b border-gray-200 pb-14 dark:border-gray-800 md:grid-cols-2 lg:grid-cols-3">

                    {/* Brand */}
                    <div>
                        <a href="#home" className="inline-flex items-center gap-2 text-2xl font-extrabold tracking-tight">
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                                <Code2 size={22} />
                            </span>

                            <span className="text-gray-900 dark:text-white">
                                Dev.<span className="text-blue-600">FiroyyeAB</span>
                            </span>
                        </a>

                        <p className="mt-6 max-w-sm leading-8 text-gray-600 dark:text-gray-400">
                            Building digital experiences, exploring cybersecurity,
                            and turning ideas into meaningful solutions.
                        </p>

                        <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-green-500/20 bg-green-500/5 px-4 py-2">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Always learning & building
                            </span>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="mb-7 text-sm font-bold uppercase tracking-[0.2em] text-gray-900 dark:text-white">
                            Quick Links
                        </h3>

                        <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                            {footerLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="group flex w-fit items-center gap-2 text-sm text-gray-600 transition hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                                >
                                    {link.name}
                                    <ArrowUpRight
                                        size={14}
                                        className="opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="mb-7 text-sm font-bold uppercase tracking-[0.2em] text-gray-900 dark:text-white">
                            Connect With Me
                        </h3>

                        <p className="mb-6 text-sm leading-7 text-gray-600 dark:text-gray-400">
                            Interested in collaborating or discussing technology?
                            Feel free to reach out.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <a
                                href="https://github.com/firoyyeab-maker"
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold transition hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 dark:border-gray-800 dark:bg-gray-900 dark:text-white"
                            >
                                GitHub ↗
                            </a>

                            <a
                                href="https://www.linkedin.com/in/firomsa-abduljaber-4293b3431/"
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold transition hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 dark:border-gray-800 dark:bg-gray-900 dark:text-white"
                            >
                                LinkedIn ↗
                            </a>
                        </div>

                        <a
                            href="mailto:firoyyeab@gmail.com"
                            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:gap-3"
                        >
                            firoyyeab@gmail.com
                            <ArrowUpRight size={16} />
                        </a>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col items-center justify-between gap-5 pt-8 text-center sm:flex-row sm:text-left">

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        © {currentYear} <span className="font-semibold text-gray-900 dark:text-white">Dev.FiroyyeAB</span>.
                        All rights reserved.
                    </p>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Designed & built with <span className="text-red-500">♥</span> by Firomsa.
                    </p>

                    <a
                        href="#home"
                        aria-label="Back to top"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 hover:text-white dark:border-gray-800 dark:bg-gray-900 dark:text-white"
                    >
                        <ArrowUp size={20} />
                    </a>

                </div>

            </div>
        </footer>
    )
}

export default Footer