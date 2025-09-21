'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/components/ThemeProvider'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState, useEffect } from 'react'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [activeSection, setActiveSection] = useState('home')

  // Handle smooth scrolling and active section detection
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    
    if (element) {
      // Get the element's position relative to the viewport
      const elementPosition = element.offsetTop - 100 // Account for fixed navbar
      
      // Smooth scroll to the element
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
      
      setActiveSection(targetId)
    }
  }

  // Update active section based on scroll position
  useEffect(() => {
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
  }, [])

  return (
    <nav className={cn('fixed top-4 left-1/2 -translate-x-1/2 z-50', 'backdrop-blur-xl border border-white/20', 'bg-white/40 dark:bg-black/30', 'rounded-full shadow-lg px-6 py-2 flex items-center gap-6')}>
      {navItems.map((item) => {
        const sectionId = item.href.replace('#', '')
        return (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className={cn('relative px-3 py-1 text-sm font-medium transition-colors duration-300 cursor-pointer', 
              activeSection === sectionId ? 'text-pink-600 dark:text-pink-400' : 'text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400'
            )}
          >
            {item.name}
          </a>
        )
      })}

      {/* Theme toggle */}
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='ml-4 p-2 rounded-full border border-white/20 hover:bg-white/20 dark:hover:bg-black/30 transition-colors'>
        {theme === 'dark' ? <Sun className='h-4 w-4 text-yellow-400' /> : <Moon className='h-4 w-4 text-gray-700' />}
      </button>
    </nav>
  )
}
