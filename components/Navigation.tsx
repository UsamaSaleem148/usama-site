'use client'

import { useTheme } from '@/components/ThemeProvider'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState, useEffect } from 'react'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const { theme, setTheme } = useTheme()
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Ensure client-only rendering
  useEffect(() => {
    setMounted(true)
  }, [])

  // detect scroll to update activeSection
  useEffect(() => {
    if (!mounted) return

    const handleScroll = () => {
      const sections = ['home', 'services', 'projects', 'about', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [mounted])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      const elementPosition = element.offsetTop - 100
      window.scrollTo({ top: elementPosition, behavior: 'smooth' })
      setActiveSection(targetId)
      setIsMenuOpen(false)
    }
  }

  if (!mounted) {
    // Avoid hydration mismatch by rendering nothing until mounted
    return null
  }

  return (
    <nav className={cn('fixed top-4 left-1/2 -translate-x-1/2 z-50', 'backdrop-blur-xl border border-white/20', 'bg-white/40 dark:bg-black/30', 'rounded-full shadow-lg px-6 py-2 flex items-center justify-between gap-4', 'w-auto')}>
      {/* Menu toggle button */}
      <button className='p-2 rounded-full border border-white/20 hover:bg-white/20 dark:hover:bg-black/30 transition-colors sm:hidden text-gray-700 dark:text-gray-200' onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label='Toggle menu'>
        {isMenuOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
      </button>

      {/* Desktop nav */}
      <div className='hidden sm:flex items-center gap-6'>
        {navItems.map((item) => {
          const sectionId = item.href.replace('#', '')
          return (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={cn(
                'relative px-3 py-1 text-sm font-medium transition-colors duration-300 cursor-pointer',
                activeSection === sectionId ? 'text-pink-600 dark:text-pink-400' : 'text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400'
              )}
            >
              {item.name}
            </a>
          )
        })}
      </div>

      {/* Theme toggle */}
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className='ml-2 p-2 rounded-full border border-white/20 hover:bg-white/20 dark:hover:bg-black/30 transition-colors text-gray-700 dark:text-gray-200'
        aria-label='Toggle theme'
      >
        {theme === 'dark' ? <Sun className='h-4 w-4 text-yellow-400' /> : <Moon className='h-4 w-4' />}
      </button>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div className='absolute top-16 left-1/2 -translate-x-1/2 w-[90%] bg-white dark:bg-black border border-white/20 rounded-2xl shadow-lg sm:hidden flex flex-col items-center py-4 gap-4'>
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '')
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  'w-full text-center py-2 text-sm font-medium transition-colors duration-300',
                  activeSection === sectionId ? 'text-pink-600 dark:text-pink-400' : 'text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400'
                )}
              >
                {item.name}
              </a>
            )
          })}
        </div>
      )}
    </nav>
  )
}
