import {
  Award,
  ShieldCheck,
  Code2,
  Trophy,
  Sparkles,
} from 'lucide-react'

const achievements = [
  {
    icon: Code2,
    title: 'Software Development',
    category: 'PRACTICAL LEARNING',
    description:
      'Applying programming and software engineering concepts through personal development projects.',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity Practice',
    category: 'TECHNICAL LEARNING',
    description:
      'Exploring web security and developing practical knowledge through cybersecurity challenges and labs.',
  },
  {
    icon: Trophy,
    title: 'Project Development',
    category: 'PERSONAL ACHIEVEMENTS',
    description:
      'Turning ideas into working applications while continuously improving technical and problem-solving skills.',
  },
]

function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-gray-50 px-6 py-28 dark:bg-gray-950"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="animate-slide-up mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-blue-600">
            MILESTONES & RECOGNITION
          </p>

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Certifications & <span className="text-blue-600">Achievements.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600 dark:text-gray-400">
            A collection of my learning milestones, practical achievements,
            and professional certifications as I continue developing my skills.
          </p>
        </div>

        {/* Achievements */}
        <div className="grid gap-6 md:grid-cols-3">
          {achievements.map((item, index) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                style={{ animationDelay: `${index * 150}ms` }}
                className="animate-slide-up group rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-3 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-500/10">
                  <Icon size={28} />
                </div>

                <p className="mb-3 text-xs font-semibold tracking-widest text-blue-600">
                  {item.category}
                </p>

                <h3 className="mb-4 text-xl font-bold text-gray-900 transition group-hover:text-blue-600 dark:text-white">
                  {item.title}
                </h3>

                <p className="leading-7 text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>

                <div className="mt-7 h-1 w-10 rounded-full bg-blue-600 transition-all duration-500 group-hover:w-full" />
              </div>
            )
          })}
        </div>

        {/* Certifications Notice */}
        <div className="animate-slide-up group relative mt-12 overflow-hidden rounded-3xl border border-dashed border-blue-500/30 bg-white p-10 text-center transition duration-300 hover:border-blue-500 dark:bg-gray-900">

          <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition duration-300 group-hover:rotate-6 group-hover:scale-110 dark:bg-blue-500/10">
              <Award size={34} />
            </div>

            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-blue-600">
              CONTINUOUS GROWTH
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Professional Certifications
            </h3>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600 dark:text-gray-400">
              This section will showcase verified certifications,
              completed courses, and professional credentials as I earn them.
            </p>

            <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2.5 text-xs font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">
              <Sparkles size={15} />
              More milestones ahead
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Certifications