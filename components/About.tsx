'use client'

import { motion } from 'framer-motion'
import { Code, Users, Award, Coffee } from 'lucide-react'

export default function About() {
  const stats = [
    { icon: <Code className='w-6 h-6' />, label: 'Projects Completed', value: '50+' },
    { icon: <Users className='w-6 h-6' />, label: 'Happy Clients', value: '30+' },
    { icon: <Award className='w-6 h-6' />, label: 'Years Experience', value: '5+' },
    { icon: <Coffee className='w-6 h-6' />, label: 'Cups of Coffee', value: '1000+' },
  ]

  return (
    <section id='about' className='py-20 bg-background'>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Content */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h2 className='text-4xl font-bold text-foreground mb-6'>About Me</h2>
            <p className='text-lg text-muted-foreground mb-6'>
              I&apos;m Muhammad Usama Saleem, a passionate software engineer with over 5 years of experience building scalable web applications, mobile apps, and AI-powered solutions. I specialize in turning complex ideas into elegant, user-friendly
              applications.
            </p>
            <p className='text-lg text-muted-foreground mb-8'>
              My expertise spans across the full technology stack, from frontend frameworks like React and Angular to backend technologies like Node.js and Spring Boot. I&apos;m also passionate about AI/ML integration and cloud deployments, helping
              businesses leverage cutting-edge technology to solve real-world problems.
            </p>

            {/* Stats */}
            <div className='grid grid-cols-2 gap-6'>
              {stats.map((stat, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.6 }} className='text-center p-4 rounded-lg bg-card border border-border'>
                  <div className='text-primary mb-2 flex justify-center'>{stat.icon}</div>
                  <div className='text-2xl font-bold text-foreground mb-1'>{stat.value}</div>
                  <div className='text-sm text-muted-foreground'>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className='relative'>
            <div className='aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center'>
              <div className='text-center'>
                <div className='w-32 h-32 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center'>
                  <Code className='w-16 h-16 text-primary' />
                </div>
                <h3 className='text-2xl font-bold text-foreground mb-2'>Full-Stack Developer</h3>
                <p className='text-muted-foreground'>Building the future, one line of code at a time</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
