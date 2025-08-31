'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, HealthTech',
    feedback: 'Novus Health transformed our appointment system. The team was highly professional and delivered ahead of time.',
  },
  {
    name: 'James Carter',
    role: 'Founder, DaoSeeder',
    feedback: 'The blockchain integration was flawless. They know Web3 better than anyone else we’ve worked with.',
  },
  {
    name: 'Emily Wong',
    role: 'Marketing Director, StartupX',
    feedback: 'Their digital marketing campaign boosted our traffic by 250% in just 3 months. Highly recommended!',
  },
]

export default function Testimonials() {
  return (
    <section className='py-20 bg-background'>
      <div className='max-w-6xl mx-auto px-6 text-center'>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className='text-4xl font-bold mb-12 text-foreground'>
          What Our Clients Say
        </motion.h2>

        <div className='grid md:grid-cols-3 gap-8'>
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className='relative rounded-2xl border border-border-subtle
                         bg-white/10 dark:bg-white/5
                         backdrop-blur-xl shadow-lg
                         hover:border-border-strong transition-all duration-300 p-6 overflow-hidden'
            >
              {/* Grainy Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 pointer-events-none z-0" />

              {/* Card content */}
              <div className='relative z-10 flex flex-col gap-4'>
                <p className='text-foreground-muted italic'>“{t.feedback}”</p>
                <div className='font-semibold text-foreground'>{t.name}</div>
                <div className='text-foreground-muted text-sm'>{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
