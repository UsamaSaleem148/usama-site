'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Code, Globe, Brain } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Web Application Development',
    description: 'We build fast, scalable, and secure web applications tailored to your business. From frontend to backend, we deliver modern solutions using Next.js, Angular, and Spring Boot.',
    icon: <Code className='h-8 w-8 text-primary' />,
  },
  {
    title: 'Digital Marketing',
    description: 'Grow your online presence with our SEO, social media, and performance marketing strategies. We help you reach the right audience and maximize ROI.',
    icon: <Globe className='h-8 w-8 text-green-400 dark:text-green-300' />,
  },
  {
    title: 'AI-Powered Solutions',
    description: 'We integrate AI into your business processes — from chatbots and automation to intelligent data-driven applications — helping you stay ahead of the curve.',
    icon: <Brain className='h-8 w-8 text-pink-400 dark:text-pink-300' />,
  },
]

export default function ServicesSection() {
  return (
    <section className='py-20 bg-background relative'>
      <div className='max-w-6xl mx-auto px-6 text-center'>
        <h2 className='text-4xl font-bold mb-4 text-foreground'>What We Do</h2>
        <p className='text-lg text-foreground/70 mb-12'>We specialize in designing, developing, and scaling products that empower businesses with cutting-edge technology.</p>
        <div className='grid gap-8 md:grid-cols-3'>
          {services.map((service, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }} className='relative'>
              {/* Grainy Noise Layer */}
              <div className="absolute inset-0 rounded-2xl bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0" />

              <Card
                className='relative h-full rounded-2xl 
                           border border-border-subtle 
                           bg-background-subtle/60 
                           backdrop-blur-xl shadow-glass 
                           transition-all duration-300 
                           hover:border-border-strong hover:shadow-2xl'
              >
                <CardHeader>
                  <div className='flex justify-center mb-4'>{service.icon}</div>
                  <CardTitle className='text-xl text-foreground'>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-foreground/70 text-sm'>{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
