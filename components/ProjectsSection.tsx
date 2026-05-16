'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import ProjectModal from './ui/modal'

type Project = {
  title: string
  description: string
  result: string
  techStack: string
  image: string
  images: string[]
  liveUrl?: string
}

const featuredProjects: Project[] = [
  {
    title: 'Novus Health',
    description: 'Comprehensive healthcare SaaS platform for online doctor appointments, EMR management, and medical consultations — deployed across multiple countries.',
    result: 'Reduced patient onboarding time by 60% | Deployed to 3 countries',
    techStack: 'Angular, Spring Boot, GCP, AWS, MySQL, Pulumi, Docker',
    image: '/assets/NovusHealth_main.png',
    liveUrl: '#',
    images: [
      '/assets/NovusHealth2.png',
      '/assets/NovusHealth3.png',
      '/assets/NovusHealth4.png',
      '/assets/NovusHealth5.png',
      '/assets/NovusHealth6.png',
      '/assets/NovusHealth7.png',
      '/assets/NovusHealth8.png',
      '/assets/NovusHealth9.png',
      '/assets/NovusHealth10.png',
      '/assets/NovusHealth11.png',
      '/assets/NovusHealth12.png',
      '/assets/NovusHealth13.png',
      '/assets/NovusHealth14.png',
      '/assets/NovusHealth15.png',
    ],
  },
  {
    title: 'DaoSeeder',
    description: 'Decentralized crowdfunding platform with DAO governance, IPFS storage, and smart contract-based fundraising rounds.',
    result: '$500K+ raised through the platform at launch',
    techStack: 'Next.js, Solidity, Figma, IPFS',
    image: '/assets/DaoSeeder_main.png',
    liveUrl: '#',
    images: [
      '/assets/DaoSeeder1.png',
      '/assets/DaoSeeder2.png',
      '/assets/DaoSeeder3.png',
      '/assets/DaoSeeder6.png',
      '/assets/DaoSeeder7.png',
      '/assets/DaoSeeder8.png',
    ],
  },
  {
    title: 'CinemaGlimpse',
    description: 'Movie discovery and entertainment platform with advanced search, personalised recommendations, and real-time ratings.',
    result: 'Delivered in 6 weeks, on budget',
    techStack: 'Node.js, Next.js, MongoDB',
    image: '/assets/CinemaGlimpse_main.png',
    liveUrl: '#',
    images: [
      '/assets/CinemaGlimpse1.png',
      '/assets/CinemaGlimpse3.png',
      '/assets/CinemaGlimpse4.png',
      '/assets/CinemaGlimpse5.png',
      '/assets/CinemaGlimpse6.png',
      '/assets/CinemaGlimpse7.png',
      '/assets/CinemaGlimpse8.png',
      '/assets/CinemaGlimpse9.png',
      '/assets/CinemaGlimpse10.png',
      '/assets/CinemaGlimpse11.png',
      '/assets/CinemaGlimpse12.png',
    ],
  },
  {
    title: 'LeadsBounty',
    description: 'Lead generation and CRM platform helping businesses capture, qualify, and nurture prospects at scale.',
    result: 'Delivered in 4 weeks, on budget',
    techStack: 'React.js',
    image: '/assets/LeadsBounty_main.png',
    liveUrl: '#',
    images: [],
  },
  {
    title: 'SNA Platform',
    description: 'Decentralized social media application on blockchain — secure, private social networking with IPFS-based content storage.',
    result: 'Delivered in 8 weeks, on budget',
    techStack: 'React.js, Solidity, Figma, IPFS',
    image: '/assets/SNA_main.PNG',
    liveUrl: '#',
    images: [
      '/assets/SNA2.PNG',
      '/assets/SNA3.PNG',
      '/assets/SNA4.PNG',
      '/assets/SNA5.PNG',
      '/assets/SNA6.PNG',
      '/assets/SNA8.PNG',
      '/assets/SNA9.PNG',
    ],
  },
]

const marketingWebsites: Project[] = [
  {
    title: 'ClickThrive',
    description: 'Digital marketing agency website with lead generation funnels, service showcase, and conversion-optimised landing pages.',
    result: 'Delivered in 2 weeks, on budget',
    techStack: 'WordPress',
    image: '/assets/ClickThrive_main.png',
    liveUrl: '#',
    images: ['/assets/ClickThrive1.png', '/assets/ClickThrive3.png'],
  },
  {
    title: 'Booltec',
    description: 'Technology solutions company website showcasing services, case studies, and a polished corporate identity.',
    result: 'Delivered in 3 weeks, on budget',
    techStack: 'WordPress',
    image: '/assets/booltec_main.png',
    liveUrl: '#',
    images: ['/assets/Booltec1.png', '/assets/Booltec2.png', '/assets/Booltec3.png'],
  },
  {
    title: 'Heerekar',
    description: 'Professional services marketplace connecting clients with skilled local professionals — design-first approach.',
    result: 'Delivered in 3 weeks, on budget',
    techStack: 'Figma, Illustrator, WordPress',
    image: '/assets/Heerekar_Main.png',
    liveUrl: '#',
    images: [
      '/assets/Heerekar2.png',
      '/assets/Heerekar3.png',
      '/assets/Heerekar4.png',
      '/assets/Heerekar5.png',
      '/assets/Heerekar6.png',
    ],
  },
  {
    title: 'Khareedo',
    description: 'E-commerce store with WooCommerce, custom theme design, and a mobile-first shopping experience.',
    result: 'Delivered in 4 weeks, on budget',
    techStack: 'WordPress, WooCommerce',
    image: '/assets/Khareedo_main.png',
    liveUrl: '#',
    images: [
      '/assets/Khareedo2.png',
      '/assets/Khareedo3.png',
      '/assets/Khareedo4.png',
      '/assets/Khareedo5.png',
      '/assets/Khareedo6.png',
    ],
  },
  {
    title: 'Martian Marketing',
    description: 'Full digital marketing agency platform with comprehensive service pages, blog, and analytics integration.',
    result: 'Delivered in 3 weeks, on budget',
    techStack: 'WordPress',
    image: '/assets/martianmarketing_main.png',
    liveUrl: '#',
    images: ['/assets/martianmarketing.png', '/assets/martianmarketing2.png', '/assets/martianmarketing5.png'],
  },
  {
    title: 'Restaurant Management',
    description: 'Complete restaurant website with menu management, online ordering, and staff booking system.',
    result: 'Delivered in 2 weeks, on budget',
    techStack: 'WordPress',
    image: '/assets/Restaurant_main.png',
    liveUrl: '#',
    images: [],
  },
]

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className='rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 bg-card border border-border hover:border-primary/30 flex flex-col cursor-pointer group'
      onClick={onClick}
    >
      <div className='relative overflow-hidden'>
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={260}
          className='w-full h-52 object-cover group-hover:scale-105 transition-transform duration-400'
        />
        <div className='absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center'>
          <span className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-black px-4 py-2 rounded-full text-sm font-semibold'>
            View Details
          </span>
        </div>
      </div>

      <div className='p-5 flex flex-col flex-1'>
        <h3 className='text-lg font-bold text-card-foreground group-hover:text-primary transition-colors duration-200'>
          {project.title}
        </h3>
        <p className='text-muted-foreground mt-2 text-sm leading-relaxed flex-1'>{project.description}</p>

        {/* Result line */}
        <div className='mt-3 text-xs font-medium text-green-600 dark:text-green-400 bg-green-500/10 rounded-lg px-3 py-2'>
          ✓ {project.result}
        </div>

        {/* Tech stack */}
        <div className='mt-3 flex flex-wrap gap-1.5'>
          {project.techStack.split(', ').map((tech, i) => (
            <span
              key={i}
              className='inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20'
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Live button */}
        <a
          href={project.liveUrl ?? '#'}
          target='_blank'
          rel='noopener noreferrer'
          onClick={(e) => e.stopPropagation()}
          className='mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline'
        >
          <ExternalLink className='w-3.5 h-3.5' />
          View Live
        </a>
      </div>
    </motion.div>
  )
}

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <>
      <section id='projects' className='py-24 bg-background'>
        <div className='max-w-7xl mx-auto px-6'>
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-14'
          >
            <p className='text-sm uppercase tracking-widest text-primary font-semibold mb-3'>Portfolio</p>
            <h2 className='text-4xl sm:text-5xl font-bold text-foreground'>Selected Work</h2>
            <p className='mt-4 text-lg text-muted-foreground max-w-2xl mx-auto'>
              Real products built for real businesses — with measurable outcomes.
            </p>
          </motion.div>

          {/* Featured projects */}
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} onClick={() => handleProjectClick(project)} />
            ))}
          </div>

          {/* Marketing Websites subsection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='mt-6'
          >
            <div className='flex items-center gap-4 mb-8'>
              <div className='h-px flex-1 bg-border' />
              <h3 className='text-lg font-semibold text-muted-foreground whitespace-nowrap'>Marketing Websites</h3>
              <div className='h-px flex-1 bg-border' />
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {marketingWebsites.map((project, index) => (
                <ProjectCard key={index} project={project} onClick={() => handleProjectClick(project)} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <ProjectModal isOpen={isModalOpen} onClose={handleCloseModal} project={selectedProject} />
    </>
  )
}
