import { GraduationCap, Code2, Heart } from 'lucide-react'

function About() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-gray-50 px-6 py-28 text-gray-900 dark:bg-gray-950 dark:text-white"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-500/5 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl">

                {/* Heading */}
                <div className="animate-slide-up mb-16 text-center">
                    <p className="mb-3 font-semibold uppercase tracking-widest text-blue-600">
                        A Little About My Journey
                    </p>

                    <h2 className="text-4xl font-extrabold md:text-5xl">
                        About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
                    </h2>
                </div>

                {/* Main Content */}
                <div className="grid items-center gap-12 md:grid-cols-2">

                    {/* Profile Image */}
                    <div className="animate-slide-left flex justify-center">
                        <div className="group relative h-80 w-80 overflow-hidden rounded-3xl border border-blue-500/20 shadow-xl shadow-blue-500/10 transition duration-500 hover:-translate-y-2 hover:shadow-blue-500/20 md:h-96 md:w-96">

                            <img
                                src="/profile.jpg"
                                alt="Firomsa Abduljaber"
                                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                        </div>
                    </div>

                    {/* Biography */}
                    <div className="animate-slide-right">

                        <h3 className="mb-5 text-3xl font-bold">
                            I'm Firomsa Abduljaber
                        </h3>

                        <p className="mb-5 leading-8 text-gray-600 dark:text-gray-400">
                            I'm a Software Engineering student at Haramaya University
                            interested in software development, web technologies,
                            and cybersecurity. I enjoy understanding how technology
                            works and using my knowledge to build practical applications.
                        </p>

                        <p className="mb-8 leading-8 text-gray-600 dark:text-gray-400">
                            I believe in learning through practice. From developing
                            web applications to exploring programming concepts and
                            cybersecurity, I continuously challenge myself to learn
                            something new. I'm building my skills one project at a time,
                            with the goal of becoming a capable and versatile software
                            engineer.
                        </p>

                        {/* Information Cards */}
                        <div className="grid gap-4 sm:grid-cols-2">

                            <div className="group rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 dark:border-gray-800 dark:bg-gray-900">
                                <GraduationCap className="mb-3 text-blue-600 transition duration-300 group-hover:scale-110" size={30} />

                                <h4 className="font-bold">Education</h4>

                                <p className="mt-2 text-sm text-gray-500">
                                    Haramaya University
                                </p>

                                <p className="text-sm text-gray-500">
                                    Software Engineering
                                </p>
                            </div>

                            <div className="group rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 dark:border-gray-800 dark:bg-gray-900">
                                <Code2 className="mb-3 text-blue-600 transition duration-300 group-hover:scale-110" size={30} />

                                <h4 className="font-bold">Areas of Interest</h4>

                                <p className="mt-2 text-sm text-gray-500">
                                    Software & Web Development
                                </p>

                                <p className="text-sm text-gray-500">
                                    Cybersecurity
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Family Dedication */}
                <div className="animate-slide-up delay-300 mx-auto mt-20 max-w-3xl rounded-3xl border border-blue-500/20 bg-white p-8 shadow-xl shadow-blue-500/5 transition duration-300 hover:border-blue-500/40 dark:bg-gray-900 md:p-12">

                    <Heart className="mb-5 text-blue-600" size={32} />

                    <h3 className="mb-5 text-2xl font-bold">
                        To My Parents ❤️
                    </h3>

                    <p className="leading-8 text-gray-600 dark:text-gray-400">
                        To my mother, Keriya Usuman, thank you for being my
                        greatest source of support. Your love, sacrifices,
                        encouragement, and belief in me have carried me through
                        many challenges. You have stood beside me in ways that
                        words can never fully express.
                        <br /><br />
                        To my father, Abduljaber, thank you for your love,
                        guidance, and the values you have given me.
                        <br /><br />
                        Every step of my journey carries a part of your support
                        and sacrifices. I dedicate my efforts and achievements
                        to both of you, with endless love and gratitude.
                    </p>

                </div>

            </div>
        </section>
    )
}

export default About