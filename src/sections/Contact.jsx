function Contact() {
    const contactLinks = [
        {
            title: 'Email',
            symbol: '✉',
            description: 'Send me an email',
            value: 'firoyyeab@gmail.com',
            href: 'mailto:firoyyeab@gmail.com',
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

    return (
        <section
            id="contact"
            className="bg-white px-6 py-24 text-gray-900 dark:bg-black dark:text-white"
        >
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
                        Get In Touch
                    </p>

                    <h2 className="text-4xl font-bold md:text-5xl">
                        Let's Work Together.
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-gray-600 dark:text-gray-400">
                        Have a project idea or an opportunity? I'd be happy to hear from you.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {contactLinks.map((item) => (
                        <a
                            key={item.title}
                            href={item.href}
                            target={item.title === 'Email' ? undefined : '_blank'}
                            rel="noreferrer"
                            className="group rounded-2xl border border-gray-200 p-8 transition hover:-translate-y-2 hover:border-blue-500 dark:border-gray-800"
                        >
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-xl font-bold text-blue-600">
                                {item.symbol}
                            </div>

                            <h3 className="text-xl font-bold">{item.title}</h3>

                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                {item.description}
                            </p>

                            <div className="mt-5 flex items-center justify-between">
                                <span className="text-sm font-medium">{item.value}</span>
                                <span className="text-xl transition group-hover:translate-x-1">
                                    ↗
                                </span>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="mt-12 rounded-2xl bg-blue-600 p-8 text-center text-white md:p-12">
                    <h3 className="text-2xl font-bold">
                        Have something in mind?
                    </h3>

                    <p className="mt-3 text-blue-100">
                        Let's turn your ideas into something meaningful.
                    </p>

                    <a
                        href="mailto:firoyyeab@gmail.com"
                        className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-blue-600 transition hover:bg-gray-100"
                    >
                        Contact Me ↗
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact
