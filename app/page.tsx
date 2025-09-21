import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Header from '@/components/Navigation'
import ProjectSection from '@/components/ProjectsSection'
import ServicesSection from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Process from '@/components/WhyChooseUs'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className='min-h-screen bg-white dark:bg-dark-50'>
      <Header />
      <Hero />
      <About />
      <ServicesSection />
      <ProjectSection />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
