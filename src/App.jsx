import { useEffect } from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WelcomeScreen from './components/WelcomeScreen'

import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Cybersecurity from './sections/Cybersecurity'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Certifications from './sections/Certifications'
import Blog from './sections/Blog'
import Contact from './sections/Contact'

function App() {

  useEffect(() => {
    const animatedElements = document.querySelectorAll(
      '.animate-slide-up, .animate-slide-left, .animate-slide-right'
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target

          if (entry.isIntersecting) {
            if (element.dataset.inView !== 'true') {
              element.dataset.inView = 'true'

              const animationClasses = [
                'animate-slide-up',
                'animate-slide-left',
                'animate-slide-right',
              ]

              const activeAnimation = animationClasses.find((className) =>
                element.classList.contains(className)
              )

              if (activeAnimation) {
                element.classList.remove(activeAnimation)

                void element.offsetWidth

                element.classList.add(activeAnimation)
              }
            }
          } else {
            element.dataset.inView = 'false'
          }
        })
      },
      {
        threshold: 0.15,
      }
    )

    animatedElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <WelcomeScreen />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Cybersecurity />
        <Projects />
        <Experience />
        <Certifications />
        <Blog />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App