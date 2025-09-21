'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react'
import ContactForm from './ContactForm'

export default function Contact() {
  const ctaButtons = [
    {
      title: 'Hire Me on Upwork',
      url: 'https://upwork.com/freelancers/usamasaleem2',
      icon: <ExternalLink className="w-5 h-5" />,
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      title: 'Connect on LinkedIn',
      url: 'https://www.linkedin.com/in/engrmusamasaleem',
      icon: <ExternalLink className="w-5 h-5" />,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      title: 'View My GitHub',
      url: 'https://github.com/UsamaSaleem148/',
      icon: <ExternalLink className="w-5 h-5" />,
      color: 'bg-gray-800 hover:bg-gray-900'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s discuss your project and build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Send me a message</h3>
            <ContactForm />
          </div>

          {/* Contact Info & CTAs */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Let&apos;s connect</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">usamasaleem0148@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">Available for remote work worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Find me online</h3>
              <div className="space-y-4">
                {ctaButtons.map((button, index) => (
                  <motion.a
                    key={index}
                    href={button.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center gap-3 px-6 py-4 rounded-lg text-white font-medium transition-colors ${button.color}`}
                  >
                    {button.icon}
                    {button.title}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
