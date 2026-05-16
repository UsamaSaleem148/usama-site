'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Code, Smartphone, Brain, Cloud, ShoppingCart, Palette } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Launch Your Web Product',
    tagline: 'Web App Development',
    description: 'Fast, scalable, and built to handle real users from day one. React, Next.js, Angular, and Spring Boot — whatever your stack needs.',
    icon: <Code className='h-8 w-8 text-primary' />,
  },
  {
    title: 'Reach Users on Any Device',
    tagline: 'Mobile Development',
    description: 'Cross-platform apps that feel native on iOS and Android. React Native and Flutter with cloud-backed APIs that scale.',
    icon: <Smartphone className='h-8 w-8 text-green-500 dark:text-green-400' />,
  },
  {
    title: 'Automate & Predict',
    tagline: 'AI & ML Solutions',
    description: 'Integrate AI into your workflow to cut costs and unlock new revenue — from intelligent chatbots to predictive analytics.',
    icon: <Brain className='h-8 w-8 text-pink-500 dark:text-pink-400' />,
  },
  {
    title: 'Never Go Down',
    tagline: 'Cloud & DevOps',
    description: 'Enterprise-grade cloud infrastructure with 99.9% uptime and auto-scaling. GCP, AWS, CI/CD, and infrastructure as code.',
    icon: <Cloud className='h-8 w-8 text-blue-500 dark:text-blue-400' />,
  },
  {
    title: 'Sell More, Manage Less',
    tagline: 'E-Commerce',
    description: 'Custom stores built for conversion and growth — secure payments, inventory management, and a shopping experience customers love.',
    icon: <ShoppingCart className='h-8 w-8 text-orange-500 dark:text-orange-400' />,
  },
  {
    title: 'Design That Converts',
    tagline: 'UI/UX Design',
    description: 'Interfaces your customers will love using. From wireframes to pixel-perfect prototypes — design that drives real engagement.',
    icon: <Palette className='h-8 w-8 text-rose-500 dark:text-rose-400' />,
  },
]

export default function ServicesSection() {
  return (
    <section id='services' className='py-24 bg-background relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <p className='text-sm uppercase tracking-widest text-primary font-semibold mb-3'>Services</p>
          <h2 className='text-4xl sm:text-5xl font-bold mb-5 text-foreground'>What I Can Build for You</h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed'>
            Every service is designed around one goal: measurable results for your business.
          </p>
        </motion.div>

        <div className='grid gap-7 md:grid-cols-2 lg:grid-cols-3'>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              whileHover={{ y: -6, scale: 1.015 }}
              className='group relative'
            >
              <Card className='relative h-full rounded-3xl border border-border/50 bg-card/80 backdrop-blur-sm shadow-md hover:shadow-2xl transition-all duration-400 overflow-hidden group-hover:border-primary/40'>
                <CardHeader className='pb-3'>
                  <div className='flex items-start gap-4'>
                    <div className='p-3 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 shrink-0'>
                      {service.icon}
                    </div>
                    <div>
                      <p className='text-xs uppercase tracking-wider text-muted-foreground mb-1'>{service.tagline}</p>
                      <CardTitle className='text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight'>
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className='pt-0 pl-6 pr-6 pb-6'>
                  <p className='text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300'>
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
