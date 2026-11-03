import { Shield, Terminal, Globe, Search } from 'lucide-react'

const topics = [
{
icon: Shield,
title: 'Web Application Security',
description: 'Learning common web vulnerabilities such as XSS, SQL Injection, and authentication issues.',
},
{
icon: Terminal,
title: 'Linux & Kali Linux',
description: 'Practicing Linux commands, system administration, and security tools.',
},
{
icon: Globe,
title: 'Networking',
description: 'Exploring networking fundamentals, HTTP, HTTPS, IP addresses, and ports.',
},
{
icon: Search,
title: 'Security Testing',
description: 'Developing practical skills through PortSwigger labs, picoCTF, and cybersecurity exercises.',
},
]

function Cybersecurity() {
return ( <section
   id="cybersecurity"
   className="relative overflow-hidden bg-gray-50 px-6 py-28 dark:bg-gray-950"
 >
{/* Background glow */} <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />


  <div className="relative mx-auto max-w-7xl">

    {/* Heading */}
    <div className="animate-slide-up mb-16 text-center">
      <p className="mb-3 font-semibold tracking-widest text-blue-600">
        MY SECURITY JOURNEY
      </p>

      <h2 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
        Exploring <span className="text-blue-600">Cybersecurity</span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600 dark:text-gray-400">
        Continuously learning and practicing cybersecurity to understand
        how systems work and how to make them more secure.
      </p>
    </div>

    {/* Topic cards */}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {topics.map((topic, index) => {
        const Icon = topic.icon

        return (
          <div
            key={topic.title}
            style={{ animationDelay: `${index * 120}ms` }}
            className="animate-slide-up group rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-3 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 transition duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
              <Icon size={28} />
            </div>

            <h3 className="mb-4 text-xl font-bold text-gray-900 transition group-hover:text-blue-600 dark:text-white">
              {topic.title}
            </h3>

            <p className="leading-7 text-gray-600 dark:text-gray-400">
              {topic.description}
            </p>

            <div className="mt-6 h-1 w-10 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-full" />
          </div>
        )
      })}
    </div>

    {/* Bottom message */}
    <div className="animate-slide-up mt-16 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
        Learn. Practice. Improve.
      </h3>

      <p className="mt-3 text-gray-600 dark:text-gray-400">
        Building practical cybersecurity knowledge one challenge at a time.
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {['PortSwigger', 'picoCTF', 'Kali Linux'].map((item) => (
          <span
            key={item}
            className="rounded-full border border-blue-500/20 bg-white px-4 py-2 text-sm font-medium text-blue-600 dark:bg-gray-900"
          >
            {item}
          </span>
        ))}
      </div>
    </div>

  </div>
</section>


)
}

export default Cybersecurity
