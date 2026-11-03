import { useState } from 'react'
import { Mail, ArrowUpRight, Copy, Check } from 'lucide-react'

function Contact() {
    const [copied, setCopied] = useState(false)

    const email = 'firoyyeab@gmail.com'

    const contactLinks = [
        {
            title: 'Email',
            symbol: '✉',
            description: 'Send me an email',
            value: email,
            href: `mailto:${email}`,
        },
        {
            title: 'GitHub',
            symbol: '⌘',
            description: 'Explore my projects',
            value: 'firoyyeab-maker',
            href: 'https://github.com/firoyyeab-maker',
        },
        {
            title: 'LinkedIn',
            symbol: 'in',
            description: 'Connect professionally',
            value: 'Firomsa Abduljaber',
            href: 'https://www.linkedin.com/in/firomsa-abduljaber-4293b3431/',
        },
    ]

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email)
            setCopied(true)

            setTimeout(() => {
                setCopied(false)
            }, 2500)
        } catch {
            setCopied(false)
        }
    }

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-white px-6 py-28 text-gray-900 dark:bg-black dark:text-white"
        >
            {/* Background glow */}
            <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl">

                {/* Heading */}
                <div className="animate-slide-up mb-16 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
                        Get In Touch
                    </p>

                    <h2 className="text-4xl font-bold md:text-5xl">
                        Let's Work <span className="text-blue-600">Together.</span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600 dark:text-gray-400">
                        Have a project idea or an opportunity?
                        I'd be happy to hear from you.
                        Let's connect and create something meaningful.
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="grid gap-6 md:grid-cols-3">
                    {contactLinks.map((item, index) => (
                        <div
                            key={item.title}
                            style={{ animationDelay: `${index * 150}ms` }}
                            className="animate-slide-up group rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-3 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 dark:border-gray-800 dark:bg-gray-950"
                        >
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-xl font-bold text-blue-600 transition duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                                {item.symbol}
                            </div>

                            <h3 className="text-xl font-bold">
                                {item.title}
                            </h3>

                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                {item.description}
                            </p>

                            <div className="mt-6 flex items-center justify-between gap-2 border-t border-gray-200 pt-5 dark:border-gray-800">
                                <span className="break-all text-sm font-medium">
                                    {item.value}
                                </span>

                                {item.title === 'Email' ? (
                                    <button
                                        onClick={copyEmail}
                                        aria-label="Copy email address"
                                        className="shrink-0 rounded-lg p-2 text-blue-600 transition hover:bg-blue-500/10"
                                    >
                                        {copied ? <Check size={19} /> : <Copy size={19} />}
                                    </button>
                                ) : (
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Visit ${item.title}`}
                                        className="shrink-0 text-blue-600 transition group-hover:translate-x-1"
                                    >
                                        <ArrowUpRight size={21} />
                                    </a>
                                )}
                            </div>

                            {item.title === 'Email' && (
                                <p className="mt-2 text-xs text-gray-400">
                                    {copied ? 'Email copied!' : 'Click the copy icon to copy'}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="animate-slide-up relative mt-14 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-10 text-center text-white md:p-14">

                    <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

                    <div className="relative">
                        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
                            <Mail size={32} />
                        </div>

                        <h3 className="text-2xl font-bold md:text-3xl">
                            Have Something in Mind?
                        </h3>

                        <p className="mx-auto mt-4 max-w-xl leading-7 text-blue-100">
                            Let's turn your ideas into something meaningful.
                            I'm always open to interesting projects and opportunities.
                        </p>

                        <a
                            href={`mailto:${email}`}
                            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-blue-600 transition duration-300 hover:-translate-y-1 hover:bg-gray-100"
                        >
                            Let's Talk
                            <ArrowUpRight size={19} />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact
