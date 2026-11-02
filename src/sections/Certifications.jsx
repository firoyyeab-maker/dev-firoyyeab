import {
  Award,
  ShieldCheck,
  Code2,
  Trophy,
  ExternalLink,
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
      className="bg-gray-50 px-6 py-28 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 text-center">
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
          {achievements.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-500/10">
                  <Icon size={28} />
                </div>

                <p className="mb-3 text-xs font-semibold tracking-widest text-blue-600">
                  {item.category}
                </p>

                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="leading-7 text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Certifications Notice */}
        <div className="mt-10 rounded-2xl border border-dashed border-gray-300 bg-white p-8 text-center dark:border-gray-700 dark:bg-gray-900">
          <Award className="mx-auto mb-4 text-blue-600" size={36} />

          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Professional Certifications
          </h3>

          <p className="mx-auto mt-3 max-w-xl leading-7 text-gray-600 dark:text-gray-400">
            This section will showcase verified certifications,
            completed courses, and professional credentials as I earn them.
          </p>

          <span className="mt-5 inline-block rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">
            More milestones ahead
          </span>
        </div>

      </div>
    </section>
  )
}

export default Certifications