// components/Footer.tsx
'use client'

import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className='bg-background text-foreground py-12 border-t border-sidebar-border'>
      <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10'>
        {/* Brand */}
        <div>
          <h3 className='text-xl font-bold text-foreground'>Usama Dev Studio</h3>
          <p className='mt-3 text-sm text-foreground-muted'>Building scalable web apps, AI solutions, and modern marketing experiences for businesses worldwide.</p>
        </div>

        {/* Services */}
        <div>
          <h4 className='text-lg font-semibold text-foreground'>Services</h4>
          <ul className='mt-3 space-y-2 text-sm'>
            <li>
              <Link href='/web-development' className='hover:text-foreground'>
                Web Development
              </Link>
            </li>
            <li>
              <Link href='/ai-projects' className='hover:text-foreground'>
                AI & Automation
              </Link>
            </li>
            <li>
              <Link href='/marketing' className='hover:text-foreground'>
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link href='/consulting' className='hover:text-foreground'>
                Tech Consulting
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className='text-lg font-semibold text-foreground'>Company</h4>
          <ul className='mt-3 space-y-2 text-sm'>
            <li>
              <Link href='/about' className='hover:text-foreground'>
                About Us
              </Link>
            </li>
            <li>
              <Link href='/projects' className='hover:text-foreground'>
                Projects
              </Link>
            </li>
            <li>
              <Link href='/blog' className='hover:text-foreground'>
                Blog
              </Link>
            </li>
            <li>
              <Link href='/contact' className='hover:text-foreground'>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className='text-lg font-semibold text-foreground'>Follow Us</h4>
          <div className='flex space-x-4 mt-3'>
            <Link href='https://facebook.com' target='_blank' className='hover:text-foreground'>
              <Facebook size={20} />
            </Link>
            <Link href='https://twitter.com' target='_blank' className='hover:text-foreground'>
              <Twitter size={20} />
            </Link>
            <Link href='https://linkedin.com' target='_blank' className='hover:text-foreground'>
              <Linkedin size={20} />
            </Link>
            <Link href='https://github.com' target='_blank' className='hover:text-foreground'>
              <Github size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='mt-10 pt-6 text-center text-sm text-foreground-muted'>© {new Date().getFullYear()} Usama Dev Studio. All rights reserved.</div>
    </footer>
  )
}
