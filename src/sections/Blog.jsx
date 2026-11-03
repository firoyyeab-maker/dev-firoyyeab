import {
  BookOpen,
  Code2,
  ShieldCheck,
  Lightbulb,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react'

const topics = [
  {
    icon: Code2,
    category: 'WEB DEVELOPMENT',
    title: 'Building Modern Web Applications',
    description:
      'Notes about React, JavaScript, frontend development, and the technologies I use to build web applications.',
    number: '01',
  },
  {
    icon: ShieldCheck,
    category: 'CYBERSECURITY',
    title: 'Exploring the World of Cybersecurity',
    description:
      'Practical lessons, security concepts, web vulnerabilities, and discoveries from my cybersecurity learning journey.',
    number: '02',
  },
  {
    icon: Lightbulb,
    category: 'PERSONAL LEARNING',
    title: 'Lessons From Building Projects',
    description:
      'Experiences, challenges, solutions, and useful lessons I discover while developing software projects.',
    number: '03',
  },
]

function Blog() {
  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-white px-6 py-28 dark:bg-black"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="animate-slide-up mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-blue-600">
              IDEAS, KNOWLEDGE & EXPERIENCES
            </p>

            <h2 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              My <span className="text-blue-600">Blog.</span>
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-gray-600 dark:text-gray-400">
              A space where I share what I learn, document my experiences,
              and explore ideas in software development and technology.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
            <BookOpen size={20} className="text-blue-600" />
            Learning through sharing
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic, index) => {
            const Icon = topic.icon

            return (
              <article
                key={topic.number}
                style={{ animationDelay: `${index * 150}ms` }}
                className="animate-slide-up group flex flex-col rounded-2xl border border-gray-200 bg-gray-50 p-8 transition duration-300 hover:-translate-y-3 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 dark:border-gray-800 dark:bg-gray-950"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-500/10">
                    <Icon size={27} />
                  </div>

                  <span className="text-sm font-medium text-gray-400">
                    {topic.number}
                  </span>
                </div>

                <p className="mb-4 text-xs font-semibold tracking-widest text-blue-600">
                  {topic.category}
                </p>

                <h3 className="mb-4 text-xl font-bold leading-8 text-gray-900 transition group-hover:text-blue-600 dark:text-white">
                  {topic.title}
                </h3>

                <p className="flex-grow leading-7 text-gray-600 dark:text-gray-400">
                  {topic.description}
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-5 dark:border-gray-800">
                  <span className="flex items-center gap-2 text-xs font-medium text-gray-500">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-amber-500" />
                    Articles coming soon
                  </span>

                  <ArrowUpRight
                    size={20}
                    className="text-blue-600 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </article>
            )
          })}
        </div>

        {/* Bottom Message */}
        <div className="animate-slide-up relative mt-12 overflow-hidden rounded-2xl border border-blue-500/20 bg-blue-50 p-10 text-center dark:bg-blue-500/5">
          <div className="relative">
            <Sparkles className="mx-auto mb-4 text-blue-600" size={28} />

            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Knowledge grows when shared.
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-gray-600 dark:text-gray-400">
              I'm preparing articles and practical tutorials. Stay tuned!
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Blog