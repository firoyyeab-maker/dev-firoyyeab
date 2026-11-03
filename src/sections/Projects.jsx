import { Code2, ExternalLink, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Ethiopian National Exam Preparation Platform',
    description:
      'A platform designed to help Ethiopian Grade 8 and Grade 12 students prepare for national examinations.',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    status: 'In Progress',
    repo: 'https://github.com/firoyyeab-maker/exam-preparation-platform',
    featured: true,
  },
  {
    title: 'Student Management System',
    description:
      'A Java-based application for managing student records, searching, updating, and deleting information.',
    technologies: ['Java', 'OOP', 'CSV'],
    status: 'Project',
    repo: 'https://github.com/firoyyeab-maker/java_console_proj',
  },
  {
    title: 'Cybersecurity Labs & Learning',
    description:
      'Practical cybersecurity learning through web security labs, Linux, and Capture The Flag challenges.',
    technologies: ['Kali Linux', 'PortSwigger', 'picoCTF'],
    status: 'Ongoing Learning',
    repo: 'https://github.com/hannadesalegn7-pixel/InstitutionalVAPTComplianceScanner',
  },
]

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white px-6 py-28 dark:bg-black"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="animate-slide-up mb-16 text-center">
          <p className="mb-3 font-semibold tracking-widest text-blue-600">
            WHAT I'VE BEEN WORKING ON
          </p>

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Featured <span className="text-blue-600">Projects</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-600 dark:text-gray-400">
            Some projects and practical work from my learning journey.
            Each project represents an opportunity to learn, build, and improve.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (
            <div
              key={project.title}
              style={{ animationDelay: `${index * 150}ms` }}
              className={`animate-slide-up group flex flex-col rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-3 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 dark:border-gray-800 dark:bg-gray-950 ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
            >
              {/* Card header */}
              <div className="mb-7 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 transition duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                  <Code2 size={30} />
                </div>

                <span className="rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400">
                  {project.status}
                </span>
              </div>

              {/* Project information */}
              <h3 className="mb-4 text-xl font-bold text-gray-900 transition group-hover:text-blue-600 dark:text-white">
                {project.title}
              </h3>

              <p className="mb-7 flex-grow leading-7 text-gray-600 dark:text-gray-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-7 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg bg-gray-100 px-3 py-2 text-xs font-medium text-gray-700 transition hover:bg-blue-600 hover:text-white dark:bg-gray-900 dark:text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* GitHub link */}
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border-t border-gray-200 pt-5 font-semibold text-blue-600 transition dark:border-gray-800"
              >
                <span className="flex items-center gap-2">
                  View Repository
                  <ExternalLink size={16} />
                </span>

                <ArrowUpRight
                  size={20}
                  className="transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          ))}

        </div>

        {/* Bottom message */}
        <div className="animate-slide-up mt-16 text-center">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Turning ideas into projects, one step at a time.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Projects