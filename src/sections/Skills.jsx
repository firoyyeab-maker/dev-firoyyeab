import {
Code2,
Globe,
Database,
ShieldCheck,
Terminal,
Layers
} from 'lucide-react'

const skillCategories = [
{
title: 'Programming Languages',
icon: Code2,
skills: ['JavaScript', 'Java', 'Python']
},
{
title: 'Frontend Development',
icon: Globe,
skills: ['HTML', 'CSS', 'React', 'Tailwind CSS']
},
{
title: 'Backend Development',
icon: Database,
skills: ['Node.js', 'Express.js', 'PostgreSQL']
},
{
title: 'Cybersecurity',
icon: ShieldCheck,
skills: ['Kali Linux', 'Web Security', 'Security Testing']
},
{
title: 'Development Tools',
icon: Terminal,
skills: ['VS Code', 'Git', 'GitHub']
},
{
title: 'Core Concepts',
icon: Layers,
skills: ['OOP', 'Responsive Design', 'Problem Solving']
}
]

function Skills() {
return ( <section
   id="skills"
   className="relative overflow-hidden bg-white px-6 py-28 text-gray-900 dark:bg-black dark:text-white"
 >
{/* Background glow */} <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />


  <div className="relative mx-auto max-w-7xl">

    {/* Section heading */}
    <div className="animate-slide-up mb-16 text-center">
      <p className="mb-3 font-semibold uppercase tracking-widest text-blue-600">
        My Technical Toolkit
      </p>

      <h2 className="text-4xl font-bold md:text-5xl">
        Skills & <span className="text-blue-600">Technologies</span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-gray-500 dark:text-gray-400">
        Technologies and tools I use while learning,
        developing projects, and exploring new ideas.
      </p>
    </div>

    {/* Skills cards */}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

      {skillCategories.map((category, index) => {
        const Icon = category.icon

        return (
          <div
            key={category.title}
            style={{ animationDelay: `${index * 120}ms` }}
            className="animate-slide-up group rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 dark:border-gray-800 dark:bg-gray-950"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 transition duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
              <Icon size={30} />
            </div>

            <h3 className="mb-5 text-xl font-bold transition group-hover:text-blue-600">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map(skill => (
                <span
                  key={skill}
                  className="rounded-lg bg-gray-100 px-3 py-2 text-sm text-gray-700 transition duration-300 hover:bg-blue-600 hover:text-white dark:bg-gray-900 dark:text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>
        )
      })}

    </div>

    {/* Bottom message */}
    <div className="animate-slide-up mt-16 text-center">
      <p className="text-sm font-medium tracking-wide text-gray-500 dark:text-gray-400">
        Always learning. Always improving. Always building.
      </p>
    </div>

  </div>
</section>


)
}

export default Skills
