'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { 
  Users, Award, Heart, BookOpen, Lightbulb, Sparkles, Calendar, 
  Mail, Phone, MapPin, ArrowRight, ChevronRight, ExternalLink 
} from 'lucide-react'

// Types pour les données qui seront passées du serveur au client
export interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  socialLinks: {
    type: string
    url: string
  }[]
}

export interface Value {
  title: string
  description: string
  icon: React.ReactNode
}

export interface Achievement {
  number: string
  text: string
}

interface AboutPageClientProps {
  teamMembers: TeamMember[]
  values: Value[]
  achievements: Achievement[]
  missionPoints: string[]
}

export default function AboutPageClient({ 
  teamMembers, 
  values, 
  achievements,
  missionPoints
}: AboutPageClientProps) {
  // Animations variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 text-white overflow-hidden">
        {/* Background with gradient and pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800"></div>
          <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-dot.svg')] bg-repeat"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-400 rounded-full mix-blend-overlay opacity-20 blur-3xl"></div>
            <div className="absolute top-1/3 -left-24 w-64 h-64 bg-accent-500 rounded-full mix-blend-overlay opacity-10 blur-2xl"></div>
            <div className="absolute -bottom-32 right-16 w-80 h-80 bg-primary-300 rounded-full mix-blend-overlay opacity-20 blur-3xl"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="text-sm font-medium text-white/90">Découvrez notre histoire</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block">À propos de la </span>
              <span className="relative inline-block">
                <span className="relative z-10">SOCOMES</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-accent-500/30 rounded-full -z-0"></span>
              </span>
            </h1>
            
            <motion.p
              className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              La Société Congolaise de Médecine Sexuelle (SOCOMES) est une organisation 
              professionnelle qui fait progresser la santé sexuelle en République 
              Démocratique du Congo à travers l'éducation, la recherche et les soins cliniques.
            </motion.p>
            
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {["Fondée en 2015", "Basée à Kinshasa", "Reconnue internationalement", "Expertise locale"].map((tag, index) => (
                <motion.span 
                  key={index} 
                  className="inline-block px-3 py-1 rounded-full text-sm bg-white/10 backdrop-blur-sm border border-white/10 text-white/90"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
            
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
              <div className="w-10 h-14 rounded-full border-2 border-white/30 flex items-start justify-center">
                <div className="w-1.5 h-3 bg-white/30 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Le reste des sections animées ici... */}
      {/* Chaque section qui utilise motion devrait être incluse ici */}
      
      {/* Team Section */}
      <section className="py-20 sm:py-24 md:py-32 bg-white dark:bg-gray-900/95 overflow-hidden relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              <span className="relative inline-block">
                Notre <span className="text-primary-600 dark:text-primary-400">Équipe</span>
              </span>
            </h2>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/30 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative"
                variants={fadeInUp}
              >
                <div className="relative h-72 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <Image 
                    src={member.image}
                    alt={member.name} 
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Social media links */}
                  <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center space-x-3 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {member.socialLinks.map((link, i) => (
                      <a 
                        key={i} 
                        href={link.url} 
                        className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.type === 'mail' && <Mail size={14} />}
                        {link.type === 'twitter' && <span className="text-sm font-bold">X</span>}
                        {link.type === 'linkedin' && <span className="text-sm font-bold">in</span>}
                        {link.type !== 'mail' && link.type !== 'twitter' && link.type !== 'linkedin' && <ExternalLink size={14} />}
                      </a>
                    ))}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-sm text-primary-600 dark:text-primary-400 mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
