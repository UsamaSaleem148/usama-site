'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: 'Novus Health',
    description: 'Online doctor appointment app built with Angular, Spring Boot, and GCP.',
    image: '/projects/novus.png',
  },
  {
    title: 'DaoSeeder',
    description: 'Decentralized crowdfunding app using Next.js, Solidity, and IPFS.',
    image: '/projects/dao.png',
  },
  {
    title: 'Social DApp',
    description: 'A blockchain-powered social media app built with React & IPFS.',
    image: '/projects/social.png',
  },
]

export default function ProjectSection() {
  return (
    <section className='py-20 bg-background'>
      <div className='max-w-6xl mx-auto px-6 text-center'>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          className='text-4xl font-bold mb-12 text-foreground'
        >
          Our Work
        </motion.h2>
        <div className='grid md:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ delay: index * 0.2 }} 
              className='rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-card border border-border hover:border-border/50'
            >
              <Image src={project.image} alt={project.title} width={400} height={300} className='w-full h-56 object-cover' />
              <div className='p-6'>
                <h3 className='text-xl font-semibold text-card-foreground'>{project.title}</h3>
                <p className='text-muted-foreground mt-2'>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
