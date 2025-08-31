'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/components/ThemeProvider'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  return (
    <nav className={cn('fixed top-4 left-1/2 -translate-x-1/2 z-50', 'backdrop-blur-xl border border-white/20', 'bg-white/40 dark:bg-black/30', 'rounded-full shadow-lg px-6 py-2 flex items-center gap-6')}>
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={cn('relative px-3 py-1 text-sm font-medium transition-colors duration-300', pathname === item.href ? 'text-pink-600 dark:text-pink-400' : 'text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400')}
        >
          {item.name}
        </Link>
      ))}

      {/* Theme toggle */}
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='ml-4 p-2 rounded-full border border-white/20 hover:bg-white/20 dark:hover:bg-black/30 transition-colors'>
        {theme === 'dark' ? <Sun className='h-4 w-4 text-yellow-400' /> : <Moon className='h-4 w-4 text-gray-700' />}
      </button>
    </nav>
  )
}
