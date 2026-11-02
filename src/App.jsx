import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Cybersecurity from './sections/Cybersecurity'
import Projects from './sections/Projects'

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
      </main>
    </>
  )
}

export default App