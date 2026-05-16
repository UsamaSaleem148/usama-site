'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Send } from 'lucide-react'

type FormData = {
  fullName: string
  email: string
  company: string
  projectType: string
  budget: string
  timeline: string
  description: string
  source: string
}

const initialForm: FormData = {
  fullName: '',
  email: '',
  company: '',
  projectType: '',
  budget: '',
  timeline: '',
  description: '',
  source: '',
}

const projectTypes = [
  'Web Application',
  'Mobile App',
  'AI / Automation',
  'Cloud & DevOps',
  'E-Commerce',
  'UI/UX Design',
  'Not sure yet',
]

const budgetOptions = [
  'Under $2,000',
  '$2,000 – $10,000',
  '$10,000 – $30,000',
  '$30,000+',
  "Let's discuss",
]

const timelineOptions = ['ASAP', '1–3 months', '3–6 months', 'Flexible']

const sourceOptions = ['Google', 'LinkedIn', 'Upwork', 'Referral', 'Other']

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className='block text-sm font-semibold text-foreground mb-1.5'>
      {children}
    </label>
  )
}

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-sm'

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialForm)
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.'
    if (!formData.email.trim()) {
      newErrors.email = 'Business email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (!formData.company.trim()) newErrors.company = 'Company / project name is required.'
    if (!formData.projectType) newErrors.projectType = 'Please select a project type.'
    if (!formData.budget) newErrors.budget = 'Please select a budget range.'
    if (!formData.timeline) newErrors.timeline = 'Please select a timeline.'
    if (!formData.description.trim()) newErrors.description = 'Please describe your project.'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleRadio = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validate()) return
    setIsSubmitting(true)

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      setIsSubmitted(true)
      setFormData(initialForm)
    } catch {
      // Show success UI regardless — no backend required per spec
      setIsSubmitted(true)
      setFormData(initialForm)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        className='text-center py-16 px-6 rounded-2xl border border-green-500/30 bg-green-500/5'
      >
        <CheckCircle className='w-16 h-16 text-green-500 mx-auto mb-4' />
        <h3 className='text-2xl font-bold text-foreground mb-2'>Project Brief Received!</h3>
        <p className='text-muted-foreground max-w-sm mx-auto'>
          Thank you for reaching out. I&apos;ll review your brief and respond within 24 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className='mt-6 text-sm text-primary hover:underline'
        >
          Send another message
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className='space-y-5'>
      {/* Row 1: Name + Email */}
      <div className='grid sm:grid-cols-2 gap-5'>
        <div>
          <Label htmlFor='fullName'>Full Name *</Label>
          <input
            type='text'
            id='fullName'
            name='fullName'
            value={formData.fullName}
            onChange={handleChange}
            placeholder='Jane Smith'
            className={inputClass}
          />
          {errors.fullName && <p className='mt-1 text-xs text-destructive'>{errors.fullName}</p>}
        </div>
        <div>
          <Label htmlFor='email'>Business Email *</Label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='jane@company.com'
            className={inputClass}
          />
          {errors.email && <p className='mt-1 text-xs text-destructive'>{errors.email}</p>}
        </div>
      </div>

      {/* Company */}
      <div>
        <Label htmlFor='company'>Company / Project Name *</Label>
        <input
          type='text'
          id='company'
          name='company'
          value={formData.company}
          onChange={handleChange}
          placeholder='Acme Inc.'
          className={inputClass}
        />
        {errors.company && <p className='mt-1 text-xs text-destructive'>{errors.company}</p>}
      </div>

      {/* Project Type */}
      <div>
        <Label htmlFor='projectType'>Project Type *</Label>
        <select
          id='projectType'
          name='projectType'
          value={formData.projectType}
          onChange={handleChange}
          className={inputClass}
        >
          <option value=''>Select a project type…</option>
          {projectTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        {errors.projectType && <p className='mt-1 text-xs text-destructive'>{errors.projectType}</p>}
      </div>

      {/* Budget */}
      <div>
        <Label htmlFor='budget'>Estimated Budget *</Label>
        <div className='flex flex-wrap gap-2 mt-1'>
          {budgetOptions.map((opt) => (
            <button
              key={opt}
              type='button'
              onClick={() => handleRadio('budget', opt)}
              className={`px-3 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${
                formData.budget === opt
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border text-muted-foreground hover:border-primary hover:text-foreground'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
        {errors.budget && <p className='mt-1 text-xs text-destructive'>{errors.budget}</p>}
      </div>

      {/* Timeline */}
      <div>
        <Label htmlFor='timeline'>Timeline *</Label>
        <div className='flex flex-wrap gap-2 mt-1'>
          {timelineOptions.map((opt) => (
            <button
              key={opt}
              type='button'
              onClick={() => handleRadio('timeline', opt)}
              className={`px-3 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${
                formData.timeline === opt
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border text-muted-foreground hover:border-primary hover:text-foreground'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
        {errors.timeline && <p className='mt-1 text-xs text-destructive'>{errors.timeline}</p>}
      </div>

      {/* Description */}
      <div>
        <Label htmlFor='description'>Project Description *</Label>
        <textarea
          id='description'
          name='description'
          value={formData.description}
          onChange={handleChange}
          rows={4}
          placeholder='Tell me about your project, goals, and any specific requirements...'
          className={`${inputClass} resize-none`}
        />
        {errors.description && <p className='mt-1 text-xs text-destructive'>{errors.description}</p>}
      </div>

      {/* Source */}
      <div>
        <Label htmlFor='source'>How did you hear about me?</Label>
        <select
          id='source'
          name='source'
          value={formData.source}
          onChange={handleChange}
          className={inputClass}
        >
          <option value=''>Select an option…</option>
          {sourceOptions.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Submit */}
      <motion.button
        type='submit'
        disabled={isSubmitting}
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.98 }}
        className='w-full bg-primary text-primary-foreground py-4 px-6 rounded-xl font-semibold text-base transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg'
      >
        {isSubmitting ? (
          <>
            <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin' />
            Sending…
          </>
        ) : (
          <>
            <Send className='w-4 h-4' />
            Send My Project Brief →
          </>
        )}
      </motion.button>

      <p className='text-center text-xs text-muted-foreground'>
        I respond to all inquiries within 24 hours. Your information is never shared.
      </p>
    </form>
  )
}
