'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Activity, 
  BookOpen, 
  Calendar, 
  Users, 
  Video, 
  FileText,
  ChevronRight,
  ArrowRight
} from 'lucide-react'

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null)
  
  const features = [
    {
      icon: <Calendar className="w-full h-full" />,
      color: "bg-gradient-to-br from-blue-500 to-blue-700",
      title: "Prise de Rendez-vous en Ligne",
      description: "Réservez facilement une consultation avec nos spécialistes via notre plateforme sécurisée.",
      detail: "Notre plateforme de prise de rendez-vous en ligne vous permet de choisir le spécialiste, la date et l'heure qui vous conviennent le mieux. Vous recevrez une confirmation immédiate et des rappels avant votre consultation."
    },
    {
      icon: <Video className="w-full h-full" />,
      color: "bg-gradient-to-br from-emerald-500 to-emerald-700",
      title: "Téléconsultations",
      description: "Consultez nos spécialistes à distance grâce à notre service de télémédecine sécurisé.",
      detail: "Nos téléconsultations vous permettent d'obtenir des conseils médicaux sans vous déplacer. Notre plateforme vidéo sécurisée respecte la confidentialité médicale et vous offre la même qualité de service qu'en personne."
    },
    {
      icon: <BookOpen className="w-full h-full" />,
      color: "bg-gradient-to-br from-amber-500 to-amber-700",
      title: "Ressources Éducatives",
      description: "Accédez à une bibliothèque d'informations vérifiées sur la santé sexuelle.",
      detail: "Notre bibliothèque digitale contient des articles, guides et vidéos pédagogiques rédigés et vérifiés par nos spécialistes. Ces ressources couvrent tous les aspects de la santé sexuelle avec des informations à jour et scientifiquement valides."
    },
    {
      icon: <Activity className="w-full h-full" />,
      color: "bg-gradient-to-br from-violet-500 to-violet-700",
      title: "Suivi Personnalisé",
      description: "Bénéficiez d'un suivi médical adapté à vos besoins spécifiques.",
      detail: "Nous élaborons des plans de suivi personnalisés basés sur votre situation médicale unique. Nos spécialistes restent disponibles entre les consultations et adaptent les soins selon l'évolution de votre état de santé."
    },
    {
      icon: <Users className="w-full h-full" />,
      color: "bg-gradient-to-br from-pink-500 to-pink-700",
      title: "Communauté de Professionnels",
      description: "Rejoignez notre réseau de spécialistes en médecine sexuelle.",
      detail: "Notre communauté rassemble des médecins, thérapeutes et chercheurs dédiés à l'amélioration de la santé sexuelle. Les professionnels bénéficient d'échanges d'expertise, de formations continues et d'opportunités de collaboration."
    },
    {
      icon: <FileText className="w-full h-full" />,
      color: "bg-gradient-to-br from-cyan-500 to-cyan-700",
      title: "Publications Scientifiques",
      description: "Consultez les dernières recherches dans le domaine de la médecine sexuelle.",
      detail: "SOCOMES contribue activement à la recherche scientifique avec des publications régulières dans des revues spécialisées. Nous partageons ces découvertes avec notre communauté pour garantir des pratiques basées sur les preuves les plus récentes."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  }

  return (
    <section id="features" className="py-20 sm:py-24 md:py-32 bg-gray-50 dark:bg-gray-900 overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary-200 dark:bg-primary-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-200 dark:bg-accent-900 rounded-full opacity-20 blur-[100px]"></div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-block mb-3 px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-900/50">
            <span className="text-sm font-medium text-primary-800 dark:text-primary-300">Expérience Simplifiée</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Des <span className="text-primary-600 dark:text-primary-400">fonctionnalités</span> conçues pour vous
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
            La SOCOMES s'engage à fournir des services complets et accessibles pour répondre 
            à tous vos besoins en matière de santé sexuelle.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 ${activeFeature === index ? 'ring-2 ring-primary-500 dark:ring-primary-400' : ''}`}
              variants={itemVariants}
              onClick={() => setActiveFeature(activeFeature === index ? null : index)}
            >
              {/* Card header */}
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${feature.color} p-2.5 text-white shadow-lg`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-white truncate">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 line-clamp-2">
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                {/* Expand button */}
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                  <button 
                    className="text-sm font-medium text-primary-600 dark:text-primary-400 flex items-center gap-1 hover:underline"
                    onClick={(e) => {
                      e.stopPropagation()
                      setActiveFeature(activeFeature === index ? null : index)
                    }}
                  >
                    {activeFeature === index ? 'Voir moins' : 'En savoir plus'}
                    <ChevronRight 
                      size={16} 
                      className={`transition-transform duration-300 ${activeFeature === index ? 'rotate-90' : ''}`} 
                    />
                  </button>
                  
                  <a href="#" className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    Détails
                  </a>
                </div>
              </div>
              
              {/* Expanded content */}
              <AnimatePresence>
                {activeFeature === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2">
                      <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-700">
                        <p className="text-gray-700 dark:text-gray-300 text-sm">{feature.detail}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 md:mt-16 text-center">
          <a 
            href="/services" 
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-colors duration-300 font-medium shadow-md hover:shadow-lg"
          >
            <span>Découvrir tous nos services</span>
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}