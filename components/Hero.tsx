'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className='relative min-h-screen flex flex-col items-center justify-center py-32 bg-background overflow-hidden'>
      {/* Abstract Background */}
      <div className='absolute inset-0 z-0'>
        {/* Grid Lines with fade starting higher */}
        <div
          className='absolute inset-0 w-full h-full pointer-events-none'
          style={{
            backgroundImage: 'repeating-linear-gradient(to right, var(--foreground) 0 1px, transparent 1px 50px), repeating-linear-gradient(to bottom, var(--foreground) 0 1px, transparent 1px 50px)',
            opacity: 0.05,
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
          }}
        />

        {/* Optional Diagonal Lines */}
        <div className='absolute w-[200%] h-[200%] top-[-50%] left-[-50%] bg-[repeating-linear-gradient(45deg,var(--primary) 0 2px,transparent 2px 10px)] opacity-10' />
      </div>

      {/* Hero Content */}
      <div className='mx-auto max-w-4xl text-center px-6 relative z-10'>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className='text-5xl md:text-6xl font-bold tracking-tight text-foreground'>
          Build Better, Faster
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className='mt-6 text-lg text-muted-foreground max-w-2xl mx-auto'>
          Supercharge your workflow with modern tools, sleek design, and powerful integrations.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className='mt-10 flex justify-center gap-4'>
          <a href='#signup' className='px-6 py-3 rounded-lg bg-primary text-primary-foreground text-base font-medium transition transform hover:shadow-lg'>
            Start Building
          </a>
          <a href='#learn-more' className='px-6 py-3 rounded-lg border border-primary text-base font-medium text-foreground transition transform hover:bg-primary hover:text-primary-foreground'>
            Explore Features
          </a>
        </motion.div>
      </div>

      {/* Mouse Scroll Indicator */}
      <motion.div
        className='absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-foreground rounded-full flex items-start justify-center'
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: ['easeIn', 'linear', 'easeOut'] }}
      >
        <motion.div className='w-1 h-2 bg-foreground rounded-full mt-1' />
      </motion.div>
    </section>
  )
}
