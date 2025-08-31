'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function CTA() {
  return (
    <section className='py-20 px-6 text-center bg-background text-foreground'>
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className='text-4xl md:text-5xl font-bold mb-6'>
        Ready to Build Your Next Project?
      </motion.h2>

      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className='mb-8 text-lg md:text-xl text-foreground-muted'>
        Let{"'"}s bring your idea to life with modern tech and creative design.
      </motion.p>

      <Button size='lg' className='bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer'>
        Get in Touch
      </Button>
    </section>
  )
}
