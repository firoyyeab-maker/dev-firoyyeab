import { GraduationCap, Code2, Heart } from 'lucide-react'

function About() {
    return (
        <section
            id="about"
            className="bg-gray-50 px-6 py-28 text-gray-900 dark:bg-gray-950 dark:text-white"
        >
            <div className="mx-auto max-w-7xl">

                <div className="mb-16 text-center">
                    <p className="mb-3 font-semibold uppercase tracking-widest text-blue-600">
                        Get to know me
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
                                alt="Firomsa"
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
                            passionate about technology, web development, and cybersecurity.
                        </p>

                        <p className="mb-8 leading-8 text-gray-600 dark:text-gray-400">
                            I enjoy learning new technologies, solving problems, and
                            building meaningful digital experiences. My goal is to
                            continuously improve my skills and create technology
                            that makes a difference.
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
                                <h4 className="font-bold">Interests</h4>
                                <p className="mt-2 text-sm text-gray-500">
                                    Web Development
                                </p>
                                <p className="text-sm text-gray-500">
                                    Cybersecurity
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Father's dedication */}
                <div className="mx-auto mt-20 max-w-3xl rounded-3xl border border-blue-500/20 bg-white p-8 shadow-sm dark:bg-gray-900 md:p-12">
                    <Heart className="mb-5 text-blue-600" size={32} />

                    <h3 className="mb-5 text-2xl font-bold">
                        To My Father, Abduljaber ❤️
                    </h3>

                    <p className="leading-8 text-gray-600 dark:text-gray-400">
                        Thank you for your love, support, and guidance.
                        Your encouragement inspires me to keep learning,
                        build meaningful technology, and pursue my dreams.
                        I carry your inspiration with me every step of the way.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default About