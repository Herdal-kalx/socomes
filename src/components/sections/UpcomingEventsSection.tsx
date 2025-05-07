'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock, Users, ArrowRight, ChevronRight, CalendarCheck, Tag, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function UpcomingEventsSection() {
  const events = [
    {
      id: 1,
      title: "Conférence Annuelle de Médecine Sexuelle",
      description: "Notre conférence phare réunira des experts du monde entier pour discuter des avancées récentes en médecine sexuelle.",
      date: "15-17 juillet 2025",
      time: "09:00 - 18:00",
      location: "Hôtel Pullman, Kinshasa",
      attendees: 250,
      type: "Conférence",
      status: "Inscriptions ouvertes",
      featured: true,
    },
    {
      id: 2,
      title: "Atelier sur la Santé Reproductive",
      description: "Un atelier pratique destiné aux professionnels de santé souhaitant améliorer leurs compétences en matière de santé reproductive.",
      date: "28 août 2025",
      time: "10:00 - 16:00",
      location: "Centre Médical SOCOMES, Kinshasa",
      attendees: 50,
      type: "Atelier",
      status: "Places limitées",
      featured: false,
    },
    {
      id: 3,
      title: "Séminaire sur les Dysfonctions Sexuelles",
      description: "Une journée d'étude approfondie sur le diagnostic et le traitement des dysfonctions sexuelles.",
      date: "10 septembre 2025",
      time: "09:30 - 17:00",
      location: "Université de Kinshasa, Faculté de Médecine",
      attendees: 100,
      type: "Séminaire",
      status: "Bientôt disponible",
      featured: false,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  }

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-white dark:bg-gray-900/95 overflow-hidden relative" id="upcoming-events">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 w-2/3 h-1/2 bg-gradient-to-bl from-primary-50 to-transparent dark:from-primary-900/10 opacity-70"></div>
        <div className="absolute left-0 bottom-0 w-2/3 h-1/2 bg-gradient-to-tr from-primary-50 to-transparent dark:from-primary-900/10 opacity-70"></div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-20 right-10 opacity-10 dark:opacity-5">
          <div className="relative w-40 h-40 border-8 border-primary-200 dark:border-primary-700 rounded-full"></div>
        </div>
        
        <div className="absolute top-20 left-10 opacity-10 dark:opacity-5">
          <div className="relative w-20 h-20 border-4 border-accent-200 dark:border-accent-700 rounded-full"></div>
        </div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="inline-block mb-3 px-4 py-1 bg-primary-100 dark:bg-primary-900/50 rounded-full">
              <span className="text-sm font-medium text-primary-800 dark:text-primary-300">À ne pas manquer</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
              <span className="relative inline-block">
                Événements à <span className="text-primary-600 dark:text-primary-400">Venir</span>
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary-600 dark:bg-primary-500 rounded-full opacity-70"></span>
              </span>
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              Participez à nos événements exclusifs pour rencontrer des experts, approfondir vos connaissances et échanger avec d'autres professionnels de la santé sexuelle et reproductive.
            </p>
          </div>
          
          <div className="flex-shrink-0 w-full md:w-auto">
            <Button 
              href="/evenements" 
              variant="outline" 
              className="relative group w-full md:w-auto justify-between md:justify-start border-primary-600/70 dark:border-primary-400/30 hover:bg-primary-50 dark:hover:bg-primary-900/30 shadow-sm"
            >
              <div className="flex items-center">
                <CalendarCheck size={16} className="mr-2 text-primary-600 dark:text-primary-400" />
                <span>Tous les événements</span> 
              </div>
              <ChevronRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              <span className="absolute -top-1 -right-1 bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 text-xs px-1.5 py-0.5 rounded-full hidden md:inline-block">
                Calendrier
              </span>
            </Button>
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {events.map((event) => (
            <motion.div 
              key={event.id}
              className={`bg-white dark:bg-gray-800/80 rounded-2xl overflow-hidden shadow-lg dark:shadow-gray-950/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group relative flex flex-col ${event.featured ? 'md:col-span-2 lg:col-span-1 ring-2 ring-primary-200 dark:ring-primary-800' : ''}`}
              variants={itemVariants}
            >
              {event.featured && (
                <div className="absolute top-0 right-0">
                  <div className="bg-accent-600 text-white text-xs font-semibold px-4 py-1 rounded-bl-lg shadow-md">
                    Événement phare
                  </div>
                </div>
              )}
              
              <div className="p-6 md:p-8 border-b border-gray-100 dark:border-gray-700/70 flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <div className="px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-800 dark:text-primary-300 text-xs font-medium inline-flex items-center">
                    <Tag size={12} className="mr-1" />
                    {event.type}
                  </div>
                  
                  <div className="px-3 py-1 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-800 dark:text-accent-300 text-xs font-medium">
                    {event.status}
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  <Link 
                    href={`/evenements/${event.id}`} 
                    className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {event.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {event.description}
                </p>
                
                <div className="grid grid-cols-1 gap-3 mb-2">
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <Calendar size={16} className="text-primary-600 dark:text-primary-400 mr-3" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <Clock size={16} className="text-primary-600 dark:text-primary-400 mr-3" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <MapPin size={16} className="text-primary-600 dark:text-primary-400 mr-3" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <Users size={16} className="text-primary-600 dark:text-primary-400 mr-3" />
                    <span className="text-sm">{event.attendees} participants attendus</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 md:p-8 pt-4 md:pt-5 bg-gray-50 dark:bg-gray-800/90">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button 
                    href={`/evenements/${event.id}`} 
                    variant="primary" 
                    className="group w-full bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 text-white flex items-center justify-center"
                  >
                    <span>S'inscrire</span>
                    <ChevronUp size={16} className="ml-1 rotate-90 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                  
                  <Button 
                    href={`/evenements/${event.id}`} 
                    variant="outline" 
                    className="w-full border-primary-300 hover:border-primary-400 dark:border-primary-700 dark:hover:border-primary-600 text-primary-700 dark:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center"
                  >
                    <span>Plus d'infos</span>
                  </Button>
                </div>
                
                {event.featured && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 text-xs">
                      <span className="flex items-center">
                        <Calendar size={12} className="mr-1" /> 
                        Date limite d'inscription: 30 juin 2025
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom CTA - Mobile only */}
        <div className="mt-10 text-center md:hidden">
          <Link 
            href="/evenements" 
            className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium"
          >
            <span>Voir tous les événements</span>
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}