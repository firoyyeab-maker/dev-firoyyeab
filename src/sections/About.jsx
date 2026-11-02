import { GraduationCap, Code2, Heart } from 'lucide-react'

function About() {
    return (<section
        id="about"
        className="bg-gray-50 px-6 py-28 text-gray-900 dark:bg-gray-950 dark:text-white"
    > <div className="mx-auto max-w-7xl">


            <div className="mb-16 text-center">
                <p className="mb-3 font-semibold uppercase tracking-widest text-blue-600">
                    A Little About My Journey
                </p>

                <h2 className="text-4xl font-bold md:text-5xl">
                    About <span className="text-blue-600">Me</span>
                </h2>
            </div>

            <div className="grid items-center gap-12 md:grid-cols-2">

                {/* Profile image */}
                <div className="flex justify-center">
                    <div className="flex h-80 w-80 items-center justify-center overflow-hidden rounded-3xl border border-blue-500/20 bg-blue-500/10 md:h-96 md:w-96">
                        <img
                            src="/profile.jpg"
                            alt="Firomsa Abduljaber"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>

                {/* Biography */}
                <div>
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

                    <div className="grid gap-4 sm:grid-cols-2">

                        <div className="rounded-2xl border border-gray-200 p-5 dark:border-gray-800">
                            <GraduationCap className="mb-3 text-blue-600" size={30} />
                            <h4 className="font-bold">Education</h4>
                            <p className="mt-2 text-sm text-gray-500">
                                Haramaya University
                            </p>
                            <p className="text-sm text-gray-500">
                                Software Engineering
                            </p>
                        </div>

                        <div className="rounded-2xl border border-gray-200 p-5 dark:border-gray-800">
                            <Code2 className="mb-3 text-blue-600" size={30} />
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

            {/* Family dedication */}
            <div className="mx-auto mt-20 max-w-3xl rounded-3xl border border-blue-500/20 bg-white p-8 shadow-sm dark:bg-gray-900 md:p-12">
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
