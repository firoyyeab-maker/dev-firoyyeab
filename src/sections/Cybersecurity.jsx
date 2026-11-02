import { Shield, Terminal, Globe, Search } from 'lucide-react'

const topics = [
    {
        icon: <Shield size={28} />,
        title: 'Web Application Security',
        description: 'Learning common web vulnerabilities such as XSS, SQL Injection, and authentication issues.',
    },
    {
        icon: <Terminal size={28} />,
        title: 'Linux & Kali Linux',
        description: 'Practicing Linux commands, system administration, and security tools.',
    },
    {
        icon: <Globe size={28} />,
        title: 'Networking',
        description: 'Exploring networking fundamentals, HTTP, HTTPS, IP addresses, and ports.',
    },
    {
        icon: <Search size={28} />,
        title: 'Security Testing',
        description: 'Developing practical skills through PortSwigger labs, picoCTF, and cybersecurity exercises.',
    },
]

function Cybersecurity() {
    return (
        <section
            id="cybersecurity"
            className="bg-gray-50 px-6 py-24 dark:bg-gray-950"
        >
            <div className="mx-auto max-w-7xl">
                <div className="mb-14 text-center">
                    <p className="mb-3 font-semibold tracking-widest text-blue-600">
                        MY SECURITY JOURNEY
                    </p>

                    <h2 className="text-4xl font-bold dark:text-white">
                        Exploring Cybersecurity
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
                        Continuously learning and practicing cybersecurity to understand
                        how systems work and how to make them more secure.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {topics.map((topic) => (
                        <div
                            key={topic.title}
                            className="rounded-2xl border border-gray-200 bg-white p-7 transition hover:-translate-y-2 hover:border-blue-500 dark:border-gray-800 dark:bg-gray-900"
                        >
                            <div className="mb-5 text-blue-600">{topic.icon}</div>

                            <h3 className="mb-3 text-xl font-semibold dark:text-white">
                                {topic.title}
                            </h3>

                            <p className="leading-7 text-gray-600 dark:text-gray-400">
                                {topic.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Cybersecurity