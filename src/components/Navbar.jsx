import { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'

const links = [
  'Home',
  'About',
  'Skills',
  'Cybersecurity',
  'Projects',
  'Experience',
  'Blog',
  'Contact',
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const [dark, setDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  const [activeLink, setActiveLink] = useState('Home')
  const [visible, setVisible] = useState(true)

  // Apply saved theme
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  // Theme toggle
  const toggleTheme = () => {
    const newTheme = !dark
    setDark(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }

  // Smart navbar scroll behavior
  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 80) {
        setVisible(true)
      } else if (currentScrollY > lastScrollY + 5) {
        setVisible(false)
        setMenuOpen(false)
      } else if (currentScrollY < lastScrollY - 5) {
        setVisible(true)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(
              entry.target.id.charAt(0).toUpperCase() +
              entry.target.id.slice(1)
            )
          }
        })
      },
      { threshold: 0.4 }
    )

    links.forEach((link) => {
      const section = document.getElementById(link.toLowerCase())
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full border-b border-gray-200/70 bg-white/80 backdrop-blur-xl transition-all duration-500 dark:border-gray-800 dark:bg-black/80 ${visible
          ? 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-0'
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-bold tracking-tight text-gray-900 transition-colors dark:text-white"
        >
          Dev.<span className="text-blue-500">FiroyyeAB</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`relative py-2 text-sm font-medium transition-colors ${activeLink === link
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-blue-600 dark:text-gray-300'
                }`}
            >
              {link}

              {activeLink === link && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-blue-600" />
              )}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full border border-gray-300 p-2 text-gray-900 transition hover:border-blue-500 hover:text-blue-600 dark:border-gray-700 dark:text-white"
          >
            {dark ? (
              <Sun size={20} strokeWidth={2.5} />
            ) : (
              <Moon size={20} strokeWidth={2.5} />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="rounded-lg p-2 text-gray-900 transition hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={26} strokeWidth={2.5} />
            ) : (
              <Menu size={26} strokeWidth={2.5} />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${menuOpen
            ? 'max-h-[500px] opacity-100'
            : 'max-h-0 opacity-0'
          }`}
      >
        <div className="flex flex-col gap-1 border-t border-gray-200 bg-white px-6 py-4 text-gray-900 shadow-xl dark:border-gray-800 dark:bg-gray-950 dark:text-white">

          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => {
                setMenuOpen(false)
                setActiveLink(link)
                setVisible(true)
              }}
              className={`rounded-lg px-4 py-3 text-sm font-medium transition ${activeLink === link
                  ? 'bg-blue-600/10 text-blue-600'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-900'
                }`}
            >
              {link}
            </a>
          ))}

        </div>
      </div>
    </nav>
  )
}

export default Navbar