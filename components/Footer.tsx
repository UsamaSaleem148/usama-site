'use client'

import Link from 'next/link'
import { Linkedin, Github, ExternalLink, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className='bg-background text-foreground pt-14 pb-8 border-t border-border'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mb-10'>
          {/* Brand */}
          <div>
            <h3 className='text-xl font-bold text-foreground'>Muhammad Usama Saleem</h3>
            <p className='mt-3 text-sm text-muted-foreground leading-relaxed'>
              Full-stack software engineer building scalable web apps, mobile apps, AI solutions, and cloud
              infrastructure for startups and enterprises worldwide.
            </p>
            <p className='mt-4 text-sm font-medium text-primary'>
              Available for freelance &amp; contract work worldwide
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className='text-base font-semibold text-foreground mb-4'>Services</h4>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              {[
                'Web App Development',
                'Mobile Development',
                'AI & Automation',
                'Cloud & DevOps',
                'E-Commerce',
                'UI/UX Design',
              ].map((s) => (
                <li key={s}>
                  <a href='#services' className='hover:text-foreground transition-colors duration-200'>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className='text-base font-semibold text-foreground mb-4'>Connect</h4>
            <div className='flex gap-4 mb-5'>
              <Link
                href='https://www.linkedin.com/in/engrmusamasaleem'
                target='_blank'
                aria-label='LinkedIn'
                className='p-2 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary text-muted-foreground transition-colors duration-200'
              >
                <Linkedin size={18} />
              </Link>
              <Link
                href='https://github.com/UsamaSaleem148/'
                target='_blank'
                aria-label='GitHub'
                className='p-2 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary text-muted-foreground transition-colors duration-200'
              >
                <Github size={18} />
              </Link>
              <Link
                href='https://upwork.com/freelancers/usamasaleem2'
                target='_blank'
                aria-label='Upwork'
                className='p-2 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary text-muted-foreground transition-colors duration-200'
              >
                <ExternalLink size={18} />
              </Link>
            </div>
            <a
              href='mailto:muhammad@usamadev.com'
              className='flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200'
            >
              <Mail size={15} />
              muhammad@usamadev.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className='border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-muted-foreground'>
          <span>© 2025–2026 Muhammad Usama Saleem. All rights reserved.</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className='hover:text-foreground transition-colors duration-200 cursor-pointer'
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  )
}
