import { ArrowUpRight, Code2, ExternalLink, Sparkles } from 'lucide-react'

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-white px-6 pb-16 pt-32 text-gray-900 dark:bg-black dark:text-white"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

        {/* Left Content */}
        <div>

          {/* Introduction Badge */}
          <div className="animate-slide-up mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-sm font-medium text-blue-600">
            <Sparkles size={16} />
            Building the Web • Exploring Security
          </div>

          {/* Main Heading */}
          <h1 className="animate-slide-up delay-100 text-5xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Hi, I'm
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Firomsa.
            </span>
            <br />
            I build digital experiences.
          </h1>

          {/* Description */}
          <p className="animate-slide-up delay-200 mt-7 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            Software Engineer | Web Developer | Cybersecurity Enthusiast.
            I enjoy transforming ideas into meaningful digital experiences
            while continuously exploring technology and security.
          </p>

          {/* Buttons */}
          <div className="animate-slide-up delay-300 mt-10 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-blue-600/40"
            >
              Explore My Projects

              <ArrowUpRight
                size={19}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#contact"
              className="rounded-full border border-gray-300 px-8 py-4 font-semibold transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 dark:border-gray-700"
            >
              Let's Connect
            </a>

          </div>

          {/* Social Links */}
          <div className="animate-slide-up delay-400 mt-12 flex items-center gap-5">

            <span className="text-sm text-gray-500">
              Find me on
            </span>

            <a
              href="https://github.com/firoyyeab-maker"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-gray-200 p-3 transition hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-600 dark:border-gray-800"
            >
              <Code2 size={21} />
            </a>

            <a
              href="https://www.linkedin.com/in/firomsa-abduljaber-4293b3431/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-gray-200 p-3 transition hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-600 dark:border-gray-800"
            >
              <ExternalLink size={21} />
            </a>

          </div>
        </div>

        {/* Right Content */}
        <div className="animate-slide-right relative flex justify-center md:justify-end">

          {/* Blue Glow */}
          <div className="absolute h-72 w-72 rounded-full bg-blue-500/20 blur-[100px] md:h-96 md:w-96" />

          {/* Image Container */}
          <div className="group relative h-80 w-80 overflow-hidden rounded-[2rem] border border-blue-500/20 shadow-2xl shadow-blue-500/20 transition duration-500 hover:-translate-y-2 hover:shadow-blue-500/30 md:h-[450px] md:w-[400px]">

            <img
              src="/profile.jpg"
              alt="Firomsa Abduljaber"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          </div>

          {/* Floating Badge */}
          <div className="animate-floating absolute -bottom-5 left-0 rounded-2xl border border-gray-200 bg-white/90 px-6 py-4 shadow-xl backdrop-blur-xl dark:border-gray-700 dark:bg-gray-900/90 md:left-8">

            <div className="flex items-center gap-3">
              <div className="h-3 w-3 animate-pulse rounded-full bg-green-500" />

              <div>
                <p className="text-sm font-bold">
                  Building & Learning
                </p>

                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Always exploring new ideas
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero