import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WebCraft Pro - Building the Future of Web, AI & Marketing',
  description: 'From stunning design to AI-powered solutions, we create applications that scale with your vision. Specializing in frontend design, online marketing, and AI integrations.',
  keywords: 'web design, web development, AI integration, online marketing, frontend development, custom web solutions',
  authors: [{ name: 'WebCraft Pro Team' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
