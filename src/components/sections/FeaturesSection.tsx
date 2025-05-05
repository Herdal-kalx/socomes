'use client'

import { motion } from 'framer-motion'
import { 
  Activity, 
  BookOpen, 
  Calendar, 
  Users, 
  Video, 
  FileText 
} from 'lucide-react'

export function FeaturesSection() {
  const features = [
    {
      icon: <Calendar className="w-10 h-10" />,
      title: "Prise de Rendez-vous en Ligne",
      description: "Réservez facilement une consultation avec nos spécialistes via notre plateforme sécurisée."
    },
    {
      icon: <Video className="w-10 h-10" />,
      title: "Téléconsultations",
      description: "Consultez nos spécialistes à distance grâce à notre service de télémédecine."
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "Ressources Éducatives",
      description: "Accédez à une bibliothèque d'informations vérifiées sur la santé sexuelle."
    },
    {
      icon: <Activity className="w-10 h-10" />,
      title: "Suivi Personnalisé",
      description: "Bénéficiez d'un suivi médical adapté à vos besoins spécifiques."
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Communauté de Professionnels",
      description: "Rejoignez notre réseau de spécialistes en médecine sexuelle."
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "Publications Scientifiques",
      description: "Consultez les dernières recherches dans le domaine de la médecine sexuelle."
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
      transition: { duration: 0.5 }
    }
  }

  return (
    <section className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-600 dark:text-primary-400">
            Nos Fonctionnalités
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            La SOCOMES s'engage à fournir des services complets et accessibles pour répondre 
            à tous vos besoins en matière de santé sexuelle.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card p-8 hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="text-primary-500 dark:text-primary-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}