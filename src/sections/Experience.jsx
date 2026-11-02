import {
GraduationCap,
Code2,
ShieldCheck,
Rocket,
ArrowUpRight,
} from 'lucide-react'

const experiences = [
{
number: '01',
icon: GraduationCap,
category: 'ACADEMIC BACKGROUND',
title: 'Software Engineering',
organization: 'Haramaya University',
description:
'Building a foundation in software engineering through programming, object-oriented concepts, algorithms, and software development principles.',
tags: ['Programming', 'Problem Solving', 'Software Design'],
},
{
number: '02',
icon: Code2,
category: 'TECHNICAL DEVELOPMENT',
title: 'Web Development',
organization: 'Independent Learning & Projects',
description:
'Developing practical skills in frontend and backend technologies while building responsive interfaces and exploring full-stack application development.',
tags: ['JavaScript', 'React', 'Tailwind CSS', 'Node.js'],
},
{
number: '03',
icon: ShieldCheck,
category: 'AREA OF INTEREST',
title: 'Cybersecurity',
organization: 'Continuous Learning & Practice',
description:
'Exploring application security, networking, Linux, and common web vulnerabilities through hands-on exercises and cybersecurity learning platforms.',
tags: ['Web Security', 'Linux', 'Networking', 'CTF'],
},
{
number: '04',
icon: Rocket,
category: 'PRACTICAL APPLICATION',
title: 'Personal Projects',
organization: 'Independent Development',
description:
'Turning technical knowledge into practical applications, experimenting with new tools, and improving development skills through real project work.',
tags: ['Project Development', 'Git', 'GitHub'],
},
]

function Experience() {
return ( <section
   id="experience"
   className="bg-white px-6 py-28 text-gray-900 dark:bg-black dark:text-white"
 > <div className="mx-auto max-w-6xl">


    {/* Section Heading */}
    <div className="mb-20">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
        MY DEVELOPMENT JOURNEY
      </p>

      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <h2 className="max-w-xl text-4xl font-bold leading-tight md:text-5xl">
          Experience & <span className="text-blue-600">Learning.</span>
        </h2>

        <p className="max-w-md leading-7 text-gray-600 dark:text-gray-400">
          A journey shaped by education, independent learning,
          hands-on practice, and the projects I build along the way.
        </p>
      </div>
    </div>

    {/* Timeline */}
    <div className="relative">

      <div className="absolute bottom-8 left-[19px] top-8 w-px bg-gray-200 dark:bg-gray-800 md:left-[27px]" />

      <div className="space-y-10">
        {experiences.map((item) => {
          const Icon = item.icon

          return (
            <article
              key={item.number}
              className="relative grid gap-6 pl-14 md:grid-cols-[56px_1fr] md:gap-10 md:pl-0"
            >

              {/* Timeline Icon */}
              <div className="absolute left-0 top-7 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/30 bg-white text-blue-600 dark:bg-black md:static md:h-14 md:w-14">
                <Icon size={22} />
              </div>

              {/* Content Card */}
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 dark:border-gray-800 dark:bg-gray-950 md:p-8">

                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-semibold tracking-[0.15em] text-blue-600">
                    {item.category}
                  </span>

                  <span className="text-sm font-medium text-gray-400">
                    {item.number}
                  </span>
                </div>

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm font-medium text-gray-500">
                  {item.organization}
                </p>

                <p className="mt-5 max-w-3xl leading-8 text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>

                {/* Technologies and Skills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </article>
          )
        })}
      </div>
    </div>

    {/* Closing Statement */}
    <div className="mt-16 flex flex-col items-start justify-between gap-5 rounded-2xl border border-blue-500/20 bg-blue-50 p-8 dark:bg-blue-500/5 md:flex-row md:items-center">
      <div>
        <h3 className="text-xl font-bold">
          Always learning. Always building.
        </h3>

        <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-400">
          Every project is an opportunity to learn something new
          and become a better engineer.
        </p>
      </div>

      <a
        href="#projects"
        className="inline-flex shrink-0 items-center gap-2 font-semibold text-blue-600 transition hover:gap-3"
      >
        Explore Projects
        <ArrowUpRight size={18} />
      </a>
    </div>

  </div>
</section>


)
}

export default Experience
