'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock, Users, ChevronRight, Filter } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

type Event = {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  type: 'conférence' | 'atelier' | 'congrès' | 'séminaire'
  image: string
  isFeatured?: boolean
}

export default function EventsPage() {
  const [filter, setFilter] = useState<string | null>(null)

  // Sample event data
  const events: Event[] = [
    {
      id: '1',
      title: "Congrès Annuel de Médecine Sexuelle 2025",
      description: "Le plus grand événement de médecine sexuelle en République Démocratique du Congo, réunissant des experts internationaux pour partager les dernières avancées scientifiques et cliniques.",
      date: "24-26 juin 2025",
      time: "08:00 - 18:00",
      location: "Hôtel Pullman, Kinshasa",
      type: "congrès",
      image: "/images/placeholders/Afro Art - Photos _ téléchargez gratuitement des images de haute qualité _ Freepik.jpeg",
      isFeatured: true
    },
    {
      id: '2',
      title: "Atelier sur la santé reproductive masculine",
      description: "Une journée d'éducation et de sensibilisation sur les problématiques de santé reproductive chez l'homme. Ouvert aux professionnels de santé et au grand public.",
      date: "15 mai 2025",
      time: "09:00 - 16:00",
      location: "Centre médical SOCOMES, Kinshasa",
      type: "atelier",
      image: "/images/placeholders/Groupe de cinq hommes et femmes afro-américains souriants marchant dehors par temps nuageux près du lac, étudiants en échange en Russie _ Photo Premium.jpeg"
    },
    {
      id: '3',
      title: "Conférence sur les dysfonctions sexuelles féminines",
      description: "Cette conférence abordera les causes, les diagnostics et les traitements des dysfonctions sexuelles chez la femme avec une approche multidisciplinaire.",
      date: "10 juillet 2025",
      time: "14:00 - 17:00",
      location: "Université de Kinshasa, Amphithéâtre Principal",
      type: "conférence",
      image: "/images/events/conference.jpg"
    },
    {
      id: '4',
      title: "Séminaire de formation sur l'éducation sexuelle",
      description: "Formation destinée aux enseignants et éducateurs sur les méthodes pédagogiques adaptées pour l'éducation sexuelle des adolescents.",
      date: "5-6 août 2025",
      time: "09:00 - 17:00",
      location: "Institut Pédagogique National, Kinshasa",
      type: "séminaire",
      image: "/images/events/seminar.jpg"
    },
    {
      id: '5',
      title: "Atelier pratique sur la contraception",
      description: "Présentation des différentes méthodes contraceptives disponibles, leurs avantages, inconvénients et modes d'utilisation.",
      date: "20 septembre 2025",
      time: "10:00 - 15:00",
      location: "Centre de Santé de Référence, Gombe",
      type: "atelier",
      image: "/images/events/contraception.jpg"
    },
    {
      id: '6',
      title: "Conférence sur la santé sexuelle des seniors",
      description: "Discussions et conseils sur le maintien d'une vie sexuelle épanouie avec l'âge, les adaptations nécessaires et les traitements disponibles.",
      date: "12 octobre 2025",
      time: "15:00 - 18:00",
      location: "Centre Culturel Français, Kinshasa",
      type: "conférence",
      image: "/images/events/seniors.jpg"
    }
  ]

  // Calculate upcoming and past events
  const today = new Date()
  
  const filteredEvents = filter 
    ? events.filter(event => event.type === filter)
    : events

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      }
    })
  }

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-800">
        <div className="absolute inset-0 bg-[url('/images/pattern-dots.png')] opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 text-white">
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Événements SOCOMES
              </motion.h1>
              
              <motion.p 
                className="text-lg mb-8 text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Participez à nos conférences, ateliers et séminaires en médecine sexuelle. Restez informé des dernières avancées et rencontrez des experts du domaine.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button href="#events" variant="secondary" size="lg">
                  Découvrir nos événements
                </Button>
              </motion.div>
            </div>
            
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative rounded-xl overflow-hidden shadow-xl h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <Calendar className="w-16 h-16 text-gray-400 dark:text-gray-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      {events.find(event => event.isFeatured) && (
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2 
                className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Événement à la une
              </motion.h2>
            </div>
            
            {events.filter(event => event.isFeatured).map((event, index) => (
              <motion.div
                key={event.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="w-full lg:w-1/2 h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <Calendar className="w-16 h-16 text-gray-400 dark:text-gray-500" />
                  </div>
                  
                  <div className="w-full lg:w-1/2 p-8">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                        <Calendar size={14} className="mr-1" /> {event.date}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{event.title}</h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{event.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <Clock size={18} className="text-gray-500 dark:text-gray-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{event.time}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin size={18} className="text-gray-500 dark:text-gray-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{event.location}</span>
                      </div>
                    </div>
                    
                    <Button href={`/evenements/${event.id}`} variant="primary" size="lg">
                      En savoir plus
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* All Events */}
      <section className="py-16" id="events">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Tous nos événements
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Participez à nos événements pour développer vos connaissances et échanger avec d'autres professionnels
            </motion.p>
          </div>
          
          {/* Event Type Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === null
                  ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              onClick={() => setFilter(null)}
            >
              Tous
            </button>
            
            {Array.from(new Set(events.map(event => event.type))).map((type, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === type
                    ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                onClick={() => setFilter(type)}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Event Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-700 relative flex items-center justify-center">
                  <Calendar className="w-12 h-12 text-gray-400 dark:text-gray-500" />
                  
                  <div className="absolute top-0 right-0 m-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/90 dark:bg-gray-800/90 text-primary-800 dark:text-primary-300">
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Calendar size={16} className="text-gray-500 dark:text-gray-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">{event.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{event.title}</h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{event.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-gray-500 dark:text-gray-400 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-gray-500 dark:text-gray-400 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{event.location}</span>
                    </div>
                  </div>
                  
                  <Button href={`/evenements/${event.id}`} variant="outline" className="w-full flex items-center justify-center">
                    Détails
                    <ChevronRight size={16} className="ml-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredEvents.length === 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
              <Calendar size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Aucun événement trouvé</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Aucun événement ne correspond au type sélectionné. Veuillez choisir une autre catégorie.
              </p>
              <Button onClick={() => setFilter(null)} variant="outline">
                Voir tous les événements
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA - Propose an Event */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 bg-primary-600 dark:bg-primary-800 p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Proposer un événement</h3>
                <p className="mb-6">
                  Vous souhaitez organiser un événement en collaboration avec la SOCOMES ? Partagez votre idée et notre équipe vous contactera pour discuter des possibilités.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Élargir votre audience</h4>
                      <p className="text-sm text-white/80">Bénéficiez de notre réseau pour toucher un public plus large.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Filter className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Expertise scientifique</h4>
                      <p className="text-sm text-white/80">Accédez à notre comité scientifique pour valider le contenu de votre événement.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 p-8">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nom complet</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Type d'événement</label>
                    <select
                      id="eventType"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    >
                      <option value="">Sélectionnez un type</option>
                      <option value="conference">Conférence</option>
                      <option value="workshop">Atelier</option>
                      <option value="seminar">Séminaire</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description de l'événement</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="Décrivez brièvement votre idée d'événement"
                    ></textarea>
                  </div>
                  <div>
                    <Button type="submit" variant="primary" className="w-full">
                      Soumettre la proposition
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
