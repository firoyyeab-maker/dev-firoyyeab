import { ArrowUpRight, Code2, ExternalLink } from 'lucide-react'

function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-white px-6 pt-28 text-gray-900 dark:bg-black dark:text-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

        {/* Left Content */}
        <div>
          <p className="mb-6 text-sm font-medium tracking-widest text-blue-600">
            💻 BUILDING THE WEB • 🔐 EXPLORING SECURITY
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Hi, I'm <span className="text-blue-600">Firomsa.</span>
            <br />
            I build digital experiences.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            Software Engineer | Web Developer | Cybersecurity Enthusiast.
            I enjoy building meaningful technology and continuously
            exploring new possibilities.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-medium text-white hover:bg-blue-700"
            >
              Explore My Projects
              <ArrowUpRight size={18} />
            </a>

            <a
              href="#contact"
              className="rounded-full border border-gray-300 px-7 py-4 font-medium dark:border-gray-700"
            >
              Let's Connect
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex gap-5">
            <a
              href="https://github.com/firoyyeab-maker"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Code2 size={23} />
            </a>

            <a
              href="https://www.linkedin.com/in/firomsa-abduljaber-4293b3431/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <ExternalLink size={23} />
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative flex justify-center">
          <div className="absolute h-72 w-72 rounded-full bg-blue-500/20 blur-3xl md:h-96 md:w-96" />

          <div className="relative h-80 w-80 overflow-hidden rounded-3xl border border-blue-500/20 shadow-2xl shadow-blue-500/20 md:h-[450px] md:w-[400px]">
            <img
              src="/profile.jpg"
              alt="Firomsa Abduljaber"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute bottom-6 left-0 rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-xl dark:border-gray-700 dark:bg-gray-900">
            <p className="text-sm font-semibold">
              🚀 Building & Learning
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero