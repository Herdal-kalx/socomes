'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react'
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
    },
    {
      id: 2,
      title: "Atelier sur la Santé Reproductive",
      description: "Un atelier pratique destiné aux professionnels de santé souhaitant améliorer leurs compétences en matière de santé reproductive.",
      date: "28 août 2025",
      time: "10:00 - 16:00",
      location: "Centre Médical SOCOMES, Kinshasa",
      attendees: 50,
    },
    {
      id: 3,
      title: "Séminaire sur les Dysfonctions Sexuelles",
      description: "Une journée d'étude approfondie sur le diagnostic et le traitement des dysfonctions sexuelles.",
      date: "10 septembre 2025",
      time: "09:30 - 17:00",
      location: "Université de Kinshasa, Faculté de Médecine",
      attendees: 100,
    },
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
      transition: { duration: 0.5 }
    }
  }

  return (
    <section className="section bg-white dark:bg-gray-900">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-600 dark:text-primary-400">
              Événements à Venir
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              Participez à nos événements pour rencontrer des experts et approfondir vos connaissances.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button href="/evenements" variant="outline">
              Tous les événements <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {events.map((event) => (
            <motion.div 
              key={event.id}
              className="card hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="text-xs font-semibold text-primary-600 dark:text-primary-400 mb-2">
                  Événement à venir
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  <Link href={`/evenements/${event.id}`} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    {event.title}
                  </Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {event.description}
                </p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-800">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Calendar size={16} className="text-primary-600 dark:text-primary-400 mr-2" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="text-primary-600 dark:text-primary-400 mr-2" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{event.time}</span>
                  </div>
                  <div className="flex items-center sm:col-span-2">
                    <MapPin size={16} className="text-primary-600 dark:text-primary-400 mr-2" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="text-primary-600 dark:text-primary-400 mr-2" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{event.attendees} participants</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Button href={`/evenements/${event.id}`} variant="outline" fullWidth>
                    S'inscrire
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}