// components/Footer.tsx
'use client'

import Link from 'next/link'
import { Linkedin, Github, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className='bg-background text-foreground py-12 border-t border-sidebar-border'>
      <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10'>
        {/* Brand */}
        <div>
          <h3 className='text-xl font-bold text-foreground'>Muhammad Usama Saleem</h3>
          <p className='mt-3 text-sm text-foreground-muted'>Full-stack software engineer specializing in web applications, mobile development, AI/ML solutions, and cloud deployments.</p>
        </div>

        {/* Services */}
        <div>
          <h4 className='text-lg font-semibold text-foreground'>Services</h4>
          <ul className='mt-3 space-y-2 text-sm'>
            <li>
              <a href='#services' className='hover:text-foreground'>
                Web Development
              </a>
            </li>
            <li>
              <a href='#services' className='hover:text-foreground'>
                Mobile Development
              </a>
            </li>
            <li>
              <a href='#services' className='hover:text-foreground'>
                AI & ML Solutions
              </a>
            </li>
            <li>
              <a href='#services' className='hover:text-foreground'>
                Cloud & DevOps
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className='text-lg font-semibold text-foreground'>Connect</h4>
          <div className='flex space-x-4 mt-3'>
            <Link href='https://www.linkedin.com/in/engrmusamasaleem' target='_blank' className='hover:text-foreground transition-colors'>
              <Linkedin size={20} />
            </Link>
            <Link href='https://github.com/UsamaSaleem148/' target='_blank' className='hover:text-foreground transition-colors'>
              <Github size={20} />
            </Link>
            <Link href='https://upwork.com/freelancers/usamasaleem2' target='_blank' className='hover:text-foreground transition-colors'>
              <ExternalLink size={20} />
            </Link>
          </div>
          <div className='mt-4'>
            <a href='mailto:usamasaleem0148@gmail.com' className='text-sm text-muted-foreground hover:text-foreground transition-colors'>
              usamasaleem0148@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='mt-10 pt-6 text-center text-sm text-foreground-muted'>
        © 2025 Muhammad Usama Saleem. All rights reserved. Let&apos;s build something amazing together.
      </div>
    </footer>
  )
}
