'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, User, MessageSquare, Send, CheckCircle } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isMounted, setIsMounted] = useState(false) // ✅ detect hydration

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const subject = `Contact from ${formData.name}`
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`

      const mailtoLink = `mailto:usamasaleem0148@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

      if (typeof window !== 'undefined') {
        window.location.href = mailtoLink
      }

      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })

      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error('Error preparing email:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className='text-center py-12'>
        <CheckCircle className='w-16 h-16 text-green-500 mx-auto mb-4' />
        <h3 className='text-2xl font-bold text-foreground mb-2'>Thanks for reaching out!</h3>
        <p className='text-muted-foreground'>I&apos;ll get back to you shortly.</p>
      </motion.div>
    )
  }

  return (
    <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} onSubmit={handleSubmit} className='max-w-2xl mx-auto space-y-6'>
      <div className='grid md:grid-cols-2 gap-6'>
        {/* Name */}
        <div className='space-y-2'>
          <label htmlFor='name' className='text-sm font-medium text-foreground flex items-center gap-2'>
            <User className='w-4 h-4' />
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
            className='w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground 
              focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors'
            placeholder='Your name'
          />
        </div>

        {/* Email → render only after hydration */}
        {isMounted && (
          <div className='space-y-2'>
            <label htmlFor='email' className='text-sm font-medium text-foreground flex items-center gap-2'>
              <Mail className='w-4 h-4' />
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              className='w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground 
                focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors'
              placeholder='your.email@example.com'
            />
          </div>
        )}
      </div>

      {/* Message */}
      <div className='space-y-2'>
        <label htmlFor='message' className='text-sm font-medium text-foreground flex items-center gap-2'>
          <MessageSquare className='w-4 h-4' />
          Message
        </label>
        <textarea
          id='message'
          name='message'
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className='w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground 
            focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none'
          placeholder='Tell me about your project...'
        />
      </div>

      {/* Button */}
      <motion.button
        type='submit'
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className='w-full bg-primary text-primary-foreground py-4 px-6 rounded-lg font-medium transition-colors 
          hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'
      >
        {isSubmitting ? (
          <>
            <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin' />
            Sending...
          </>
        ) : (
          <>
            <Send className='w-5 h-5' />
            Send Message
          </>
        )}
      </motion.button>
    </motion.form>
  )
}
