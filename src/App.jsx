import Navbar from './components/Navbar'

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
  return (
    <>
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
    </>
  )
}

export default App