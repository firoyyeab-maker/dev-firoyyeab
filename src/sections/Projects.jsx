import { Code2, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Ethiopian National Exam Preparation Platform',
    description:
      'A platform designed to help Ethiopian Grade 8 and Grade 12 students prepare for national examinations.',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    status: 'In Progress',
  },
  {
    title: 'Student Management System',
    description:
      'A Java-based application for managing student records, searching, updating, and deleting information.',
    technologies: ['Java', 'OOP', 'CSV'],
    status: 'Project',
  },
  {
    title: 'Cybersecurity Labs & Learning',
    description:
      'Practical cybersecurity learning through web security labs, Linux, and Capture The Flag challenges.',
    technologies: ['Kali Linux', 'PortSwigger', 'picoCTF'],
    status: 'Ongoing Learning',
  },
]

function Projects() {
  return (
    <section
      id="projects"
      className="bg-white px-6 py-24 dark:bg-black"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 font-semibold tracking-widest text-blue-600">
            WHAT I'VE BEEN WORKING ON
          </p>

          <h2 className="text-4xl font-bold dark:text-white">
            Featured Projects
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Some projects and practical work from my learning journey.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col rounded-2xl border border-gray-200 p-7 transition hover:-translate-y-2 hover:border-blue-500 dark:border-gray-800 dark:bg-gray-950"
            >
              <div className="mb-5 flex items-center justify-between">
                <Code2 size={30} className="text-blue-600" />

                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">
                  {project.status}
                </span>
              </div>

              <h3 className="mb-3 text-xl font-bold dark:text-white">
                {project.title}
              </h3>

              <p className="mb-6 flex-grow leading-7 text-gray-600 dark:text-gray-400">
                {project.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <a
                href="https://github.com/firoyyeab-maker"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 font-medium text-blue-600 hover:text-blue-700"
              >
                View on GitHub <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects