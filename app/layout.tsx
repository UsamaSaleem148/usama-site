import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Muhammad Usama Saleem | Full-Stack Software Engineer',
  description: 'Full-stack software engineer specializing in Next.js, Angular, Node.js, Java Spring Boot, cloud platforms (AWS, GCP, Azure), AI, and blockchain development.',
  keywords: 'software engineer, full-stack developer, web development, mobile development, AI/ML, cloud deployment, React, Node.js, Python, Angular, Java Spring Boot, AWS, GCP, Azure, blockchain, algorithms, data structures',
  authors: [{ name: 'Muhammad Usama Saleem' }],
  metadataBase: new URL('https://usama.solutions'),
  openGraph: {
    title: 'Muhammad Usama Saleem | Full-Stack Software Engineer',
    description: 'Full-stack software engineer specializing in Next.js, Angular, Node.js, Java Spring Boot, cloud platforms (AWS, GCP, Azure), AI, and blockchain development.',
    url: 'https://usama.solutions',
    siteName: 'Muhammad Usama Saleem Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Muhammad Usama Saleem Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Usama Saleem | Full-Stack Developer',
    description: 'Building scalable web, mobile & blockchain apps.',
    images: ['/og-image.png'],
    creator: '@engrmusamasaleem',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Website',
              name: 'Muhammad Usama Saleem',
              jobTitle: 'Full-Stack Software Engineer',
              url: 'https://usama.solutions',
              sameAs: ['https://www.linkedin.com/in/engrmusamasaleem', 'https://github.com/UsamaSaleem148', 'https://upwork.com/freelancers/usamasaleem2'],
            }),
          }}
        />
      </head>

      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
