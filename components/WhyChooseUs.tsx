'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const steps = [
  { step: '1', title: 'Discovery', desc: 'We start with understanding your business and project needs.' },
  { step: '2', title: 'Design', desc: 'Our team creates sleek, user-focused designs that convert.' },
  { step: '3', title: 'Development', desc: 'We build with modern frameworks like Next.js, Angular, and Spring Boot.' },
  { step: '4', title: 'Launch & Growth', desc: 'Deploy, monitor, and scale with GCP, AWS, and SEO strategies.' },
]

export default function Process() {
  const [positions, setPositions] = useState<{ top?: string; bottom?: string; left?: string; right?: string }[]>([])

  useEffect(() => {
    const generated = steps.map(() => {
      // Randomly decide top/bottom
      const useTop = Math.random() > 0.5
      const useLeft = Math.random() > 0.5

      return {
        top: useTop ? `${Math.floor(Math.random() * 30 + 5)}px` : undefined,
        bottom: useTop ? undefined : `${Math.floor(Math.random() * 30 + 5)}px`,
        left: useLeft ? `${Math.floor(Math.random() * 50)}px` : undefined,
        right: useLeft ? undefined : `${Math.floor(Math.random() * 50)}px`,
      }
    })

    setPositions(generated)
  }, [])

  return (
    <section className='py-20 bg-background relative'>
      <div className='max-w-6xl mx-auto px-6 text-center'>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className='text-4xl font-bold mb-12 text-foreground'>
          Our Process
        </motion.h2>

        <div className='grid md:grid-cols-4 gap-8'>
          {steps.map((step, index) => (
            <motion.div
              key={step.step} // stable key
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className='relative rounded-2xl border border-border-subtle
                         bg-white/10 dark:bg-white/5
                         backdrop-blur-xl shadow-lg
                         hover:border-border-strong transition-all duration-300 overflow-hidden'
            >
              {/* Giant faint number */}
              {positions.length > 0 && (
                <div className='absolute text-[300px] opacity-[0.025] leading-none select-none pointer-events-none text-foreground' style={positions[index]}>
                  {step.step}
                </div>
              )}

              {/* Grainy Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 pointer-events-none z-0" />

              {/* Card content */}
              <div className='relative z-10 px-6 py-8 flex flex-col gap-4'>
                <h3 className='text-xl font-semibold text-foreground'>{step.title}</h3>
                <p className='text-foreground-muted'>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
