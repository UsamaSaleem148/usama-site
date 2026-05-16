'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, ExternalLink, Calendar, Zap } from 'lucide-react'
import ContactForm from './ContactForm'

const socialLinks = [
  {
    label: 'Email',
    value: 'muhammad@usamadev.com',
    href: 'mailto:muhammad@usamadev.com',
    icon: <Mail className='w-5 h-5' />,
    color: 'hover:text-primary',
  },
  {
    label: 'LinkedIn',
    value: 'engrmusamasaleem',
    href: 'https://www.linkedin.com/in/engrmusamasaleem',
    icon: <Linkedin className='w-5 h-5' />,
    color: 'hover:text-blue-500',
  },
  {
    label: 'Upwork',
    value: 'usamasaleem2',
    href: 'https://upwork.com/freelancers/usamasaleem2',
    icon: <ExternalLink className='w-5 h-5' />,
    color: 'hover:text-green-500',
  },
  {
    label: 'GitHub',
    value: 'UsamaSaleem148',
    href: 'https://github.com/UsamaSaleem148/',
    icon: <Github className='w-5 h-5' />,
    color: 'hover:text-foreground',
  },
]

export default function Contact() {
  return (
    <section id='contact' className='py-24 bg-background'>
      <div className='max-w-7xl mx-auto px-6'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-14'
        >
          <p className='text-sm uppercase tracking-widest text-primary font-semibold mb-3'>Contact</p>
          <h2 className='text-4xl sm:text-5xl font-bold text-foreground mb-4'>
            Let&apos;s Build Something Together
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Ready to turn your idea into a live, scalable product? Fill in the brief below and I&apos;ll get back to
            you within 24 hours.
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-[1fr_380px] gap-12 items-start'>
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='space-y-6'
          >
            {/* Response badge */}
            <div className='flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/8 border border-primary/20'>
              <Zap className='w-5 h-5 text-primary shrink-0' />
              <span className='text-sm font-medium text-foreground'>
                Avg. response time: &lt; 24 hours
              </span>
            </div>

            {/* Calendly CTA */}
            <div className='rounded-2xl border border-border bg-card p-6 shadow-sm'>
              <div className='flex items-center gap-2 mb-2'>
                <Calendar className='w-5 h-5 text-primary' />
                <h4 className='font-bold text-foreground'>Prefer to talk?</h4>
              </div>
              <p className='text-sm text-muted-foreground mb-4'>
                Book a free 30-minute discovery call and let&apos;s discuss your project live.
              </p>
              <a
                href='https://calendly.com/usamasaleem'
                target='_blank'
                rel='noopener noreferrer'
                className='block w-full text-center px-4 py-3 rounded-xl border-2 border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300'
              >
                → Schedule a Call
              </a>
            </div>

            {/* Social links */}
            <div className='rounded-2xl border border-border bg-card p-6 shadow-sm'>
              <h4 className='font-bold text-foreground mb-4'>Find Me Online</h4>
              <div className='space-y-3'>
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel='noopener noreferrer'
                    className={`flex items-center gap-3 text-muted-foreground transition-colors duration-200 group ${link.color}`}
                  >
                    <span className='p-2 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors duration-200'>
                      {link.icon}
                    </span>
                    <div>
                      <div className='text-xs text-muted-foreground'>{link.label}</div>
                      <div className='text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200'>
                        {link.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability note */}
            <div className='flex items-start gap-2 px-4 py-3 rounded-xl bg-green-500/8 border border-green-500/20'>
              <span className='w-2 h-2 rounded-full bg-green-500 animate-pulse mt-1 shrink-0' />
              <p className='text-sm text-muted-foreground'>
                <span className='font-semibold text-foreground'>Currently available</span> for new projects — freelance
                &amp; contract work worldwide.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
