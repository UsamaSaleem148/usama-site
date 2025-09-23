'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Code, Smartphone, Brain, Cloud, ShoppingCart, Palette } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Web Application Development',
    description: 'Building modern, scalable, and responsive web apps using cutting-edge technologies like React, Next.js, Angular, and Spring Boot.',
    icon: <Code className='h-8 w-8 text-primary' />,
  },
  {
    title: 'Mobile Application Development',
    description: 'Cross-platform mobile application development with React Native and Flutter, scalable APIs, and cloud integrations.',
    icon: <Smartphone className='h-8 w-8 text-green-400 dark:text-green-300' />,
  },
  {
    title: 'AI & Machine Learning Solutions',
    description: 'Leveraging AI/ML to deliver data-driven insights and automation, from chatbots to predictive analytics and intelligent systems.',
    icon: <Brain className='h-8 w-8 text-pink-400 dark:text-pink-300' />,
  },
  {
    title: 'Cloud Deployments & DevOps',
    description: 'Deploying and scaling apps on GCP, AWS, and other cloud platforms with CI/CD pipelines and infrastructure as code.',
    icon: <Cloud className='h-8 w-8 text-blue-400 dark:text-blue-300' />,
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Designing and developing scalable e-commerce platforms with secure payments, inventory management, and personalized shopping experiences.',
    icon: <ShoppingCart className='h-8 w-8 text-orange-400 dark:text-orange-300' />,
  },
  {
    title: 'UI/UX Design & Prototyping',
    description: 'Creating intuitive, user-centered interfaces and prototypes to enhance usability and customer engagement.',
    icon: <Palette className='h-8 w-8 text-rose-400 dark:text-rose-300' />,
  },
]

export default function ServicesSection() {
  return (
    <section id='services' className='py-20 bg-background relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className='text-center mb-16'>
          <h2 className='text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent'>My Services</h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>I provide end-to-end software engineering solutions, helping clients turn ideas into scalable, real-world applications.</p>
        </motion.div>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              // whileHover={{ y: -8, scale: 1.02 }}
              className='group relative'
            >
              <Card className='relative h-full rounded-3xl border border-border/50 bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:border-primary/30'>
                <CardHeader className='text-center pb-4'>
                  <motion.div
                    // whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className='flex justify-center mb-6'
                  >
                    <div className='p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300'>{service.icon}</div>
                  </motion.div>
                  <CardTitle className='text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300'>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className='pt-0'>
                  <p className='text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300'>{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
