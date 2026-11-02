import { useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'

const links = [
  'Home', 'About', 'Skills', 'Cybersecurity',
  'Projects', 'Experience', 'Blog', 'Contact'
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(false)

  const toggleTheme = () => {
    setDark(!dark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200/70 bg-white/80 backdrop-blur-xl dark:border-gray-800 dark:bg-black/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <a href="#home" className="text-2xl font-bold tracking-tight">
          Dev.<span className="text-blue-600">FiroyyeAB</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-gray-600 transition hover:text-blue-600 dark:text-gray-300"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} aria-label="Toggle theme">
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-5 border-t border-gray-200 bg-white px-6 py-6 dark:border-gray-800 dark:bg-black lg:hidden">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-sm hover:text-blue-600"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
