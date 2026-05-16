'use client'

import { motion } from 'framer-motion'
import { Code, Users, Award, CheckCircle } from 'lucide-react'

export default function About() {
  const stats = [
    { icon: <Code className='w-6 h-6' />, label: 'Projects Completed', value: '50+' },
    { icon: <Users className='w-6 h-6' />, label: 'Happy Clients', value: '30+' },
    { icon: <Award className='w-6 h-6' />, label: 'Years Experience', value: '5+' },
    { icon: <CheckCircle className='w-6 h-6' />, label: 'On-time Delivery Rate', value: '95%' },
  ]

  return (
    <section id='about' className='py-24 bg-background'>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className='text-sm uppercase tracking-widest text-primary font-semibold mb-3'>About</p>
            <h2 className='text-4xl font-bold text-foreground mb-6 leading-tight'>
              I Don&apos;t Just Write Code —<br />I Solve Business Problems
            </h2>
            <p className='text-lg text-muted-foreground mb-5 leading-relaxed'>
              I&apos;m Muhammad Usama — a full-stack software engineer with 5+ years building production-grade applications
              for healthcare, fintech, e-commerce, and SaaS companies.
            </p>
            <p className='text-lg text-muted-foreground mb-8 leading-relaxed'>
              From your first idea to a live, scalable product, I handle the full journey. My clients trust me not just
              to build software, but to be a reliable technical partner who ships on time and on budget.
            </p>

            {/* Stats */}
            <div className='grid grid-cols-2 gap-5'>
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className='text-center p-5 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300'
                >
                  <div className='text-primary mb-2 flex justify-center'>{stat.icon}</div>
                  <div className='text-3xl font-bold text-foreground mb-1'>{stat.value}</div>
                  <div className='text-sm text-muted-foreground'>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className='relative'
          >
            <div className='rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-border p-10 flex flex-col gap-6'>
              {[
                { label: 'Web Apps & SaaS', pct: '95%' },
                { label: 'Mobile (iOS & Android)', pct: '85%' },
                { label: 'AI / Automation', pct: '80%' },
                { label: 'Cloud & DevOps', pct: '88%' },
              ].map((skill) => (
                <div key={skill.label}>
                  <div className='flex justify-between mb-1.5 text-sm font-medium text-foreground'>
                    <span>{skill.label}</span>
                    <span className='text-primary'>{skill.pct}</span>
                  </div>
                  <div className='h-2 rounded-full bg-border overflow-hidden'>
                    <motion.div
                      className='h-full rounded-full bg-primary'
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.pct }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                    />
                  </div>
                </div>
              ))}
              <div className='mt-4 p-4 rounded-2xl bg-primary/8 border border-primary/20'>
                <p className='text-sm text-muted-foreground italic'>
                  &ldquo;I treat every project like it&apos;s my own business — because your success is my success.&rdquo;
                </p>
                <p className='text-sm font-semibold text-foreground mt-2'>— Muhammad Usama Saleem</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
