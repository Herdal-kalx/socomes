'use client'

import { motion } from 'framer-motion'
import { BookOpen, Calendar, User, Users, Award, CheckCircle, Clock } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function FormationsPage() {
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

  const formations = [
    {
      title: "Santé sexuelle de base",
      duration: "2 jours",
      audience: "Professionnels de santé",
      description: "Formation complète sur les fondamentaux de la santé sexuelle, l'anatomie, la physiologie et les problèmes courants.",
      modules: ["Anatomie et physiologie", "Infections sexuellement transmissibles", "Contraception", "Approche psychosociale"],
      icon: <BookOpen className="w-10 h-10 text-primary-500" />
    },
    {
      title: "Dysfonctions sexuelles",
      duration: "3 jours",
      audience: "Médecins et psychologues",
      description: "Formation approfondie sur le diagnostic et la prise en charge des dysfonctions sexuelles chez l'homme et la femme.",
      modules: ["Étiologie des dysfonctions", "Évaluation clinique", "Approches thérapeutiques", "Études de cas pratiques"],
      icon: <User className="w-10 h-10 text-primary-500" />
    },
    {
      title: "Éducation sexuelle",
      duration: "2 jours",
      audience: "Éducateurs et enseignants",
      description: "Méthodologie pour aborder l'éducation sexuelle auprès des adolescents et jeunes adultes de manière adaptée et pertinente.",
      modules: ["Communication adaptée à l'âge", "Questions de genre et d'orientation", "Consentement et relations saines", "Ressources pédagogiques"],
      icon: <Users className="w-10 h-10 text-primary-500" />
    },
    {
      title: "Certification en médecine sexuelle",
      duration: "6 mois",
      audience: "Médecins spécialistes",
      description: "Programme avancé de certification en médecine sexuelle reconnu au niveau national.",
      modules: ["Modules théoriques", "Stage pratique", "Supervision clinique", "Mémoire de fin d'études"],
      icon: <Award className="w-10 h-10 text-primary-500" />
    }
  ]

  const upcomingFormations = [
    {
      title: "Santé sexuelle de base",
      date: "15-16 juin 2025",
      location: "Kinshasa, RDC",
      places: "12 places disponibles"
    },
    {
      title: "Dysfonctions sexuelles",
      date: "23-25 juillet 2025",
      location: "Lubumbashi, RDC",
      places: "8 places disponibles"
    },
    {
      title: "Éducation sexuelle",
      date: "10-11 août 2025",
      location: "Kinshasa, RDC",
      places: "15 places disponibles"
    }
  ]

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-800">
        <div className="absolute inset-0 bg-[url('/images/pattern-dots.png')] opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Formations en médecine sexuelle
            </motion.h1>
            
            <motion.p 
              className="text-xl mb-8 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Développez vos compétences en santé sexuelle avec nos programmes de formation adaptés aux professionnels de la santé, éducateurs et personnels médicaux.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button href="#programmes" variant="secondary" size="lg">
                Découvrir nos programmes
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Training */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Pourquoi choisir nos formations ?
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              La SOCOMES s'engage à fournir des formations de haute qualité pour les professionnels souhaitant améliorer leurs compétences en médecine sexuelle
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12 text-primary-500 mb-4" />,
                title: "Experts reconnus",
                description: "Nos formations sont dispensées par des spécialistes de renommée nationale et internationale dans le domaine de la médecine sexuelle."
              },
              {
                icon: <BookOpen className="w-12 h-12 text-primary-500 mb-4" />,
                title: "Contenu à jour",
                description: "Tous nos programmes intègrent les dernières avancées scientifiques et les meilleures pratiques cliniques en santé sexuelle."
              },
              {
                icon: <CheckCircle className="w-12 h-12 text-primary-500 mb-4" />,
                title: "Certification reconnue",
                description: "Les formations de la SOCOMES sont reconnues au niveau national et constituent une référence dans le domaine de la médecine sexuelle."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800" id="programmes">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Nos programmes de formation
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Des formations adaptées à tous les niveaux et spécialités
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {formations.map((formation, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary-50 dark:bg-primary-900/20 p-3 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                    {formation.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{formation.title}</h3>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        <Clock size={14} className="mr-1" /> {formation.duration}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                        <User size={14} className="mr-1" /> {formation.audience}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{formation.description}</p>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Modules :</h4>
                      <ul className="space-y-1">
                        {formation.modules.map((module, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">{module}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-6">
                        <Button href="#contact" variant="primary" size="sm">
                          Demander plus d'informations
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Trainings */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Formations à venir
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Inscrivez-vous à nos prochaines sessions de formation
            </motion.p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Formation</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Lieu</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Places</th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-600">
                  {upcomingFormations.map((formation, index) => (
                    <motion.tr 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{formation.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                        <span className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          {formation.date}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{formation.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{formation.places}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Button href="#contact" variant="outline" size="sm">S'inscrire</Button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800" id="contact">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 p-8 bg-primary-600 text-white">
                  <h3 className="text-2xl font-bold mb-4">Contactez-nous pour plus d'informations</h3>
                  <p className="mb-6">Remplissez ce formulaire pour obtenir plus de détails sur nos formations ou pour vous inscrire à une session.</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Formation de groupe</h4>
                        <p className="text-sm text-white/80">Nous proposons des tarifs spéciaux pour les groupes de 5 personnes ou plus.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Formations sur mesure</h4>
                        <p className="text-sm text-white/80">Nous pouvons adapter nos programmes à vos besoins spécifiques.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-8">
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
                      <label htmlFor="formation" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Formation d'intérêt</label>
                      <select
                        id="formation"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      >
                        <option value="">Sélectionnez une formation</option>
                        {formations.map((formation, index) => (
                          <option key={index} value={formation.title}>{formation.title}</option>
                        ))}
                        <option value="autre">Autre / Je ne sais pas</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder="Vos questions ou commentaires"
                      ></textarea>
                    </div>
                    <div>
                      <Button type="submit" variant="primary" className="w-full">
                        Envoyer la demande
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
