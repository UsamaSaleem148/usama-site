import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Muhammad Usama Saleem - Software Engineer',
  description: 'Full-stack software engineer specializing in web applications, mobile development, AI/ML solutions, and cloud deployments. Building scalable, real-world applications.',
  keywords: 'software engineer, full-stack developer, web development, mobile development, AI/ML, cloud deployment, React, Node.js, Python',
  authors: [{ name: 'Muhammad Usama Saleem' }],
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
