'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Users, Award, BookOpen, Globe, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'

type MembershipTier = {
  id: string
  name: string
  price: string
  benefits: string[]
  isPopular?: boolean
}

export default function MembershipPage() {
  const [selected, setSelected] = useState<string | null>(null)

  // Sample membership tiers
  const membershipTiers: MembershipTier[] = [
    {
      id: "student",
      name: "Étudiant",
      price: "25 USD/an",
      benefits: [
        "Accès aux webinaires mensuels",
        "Accès à la bibliothèque numérique",
        "Réductions sur les événements",
        "Newsletter SOCOMES"
      ]
    },
    {
      id: "professional",
      name: "Professionnel",
      price: "75 USD/an",
      benefits: [
        "Tous les avantages Étudiant",
        "Accès complet aux journaux scientifiques",
        "Participation aux groupes de travail",
        "Certification professionnelle",
        "Annuaire des membres"
      ],
      isPopular: true
    },
    {
      id: "institution",
      name: "Institution",
      price: "200 USD/an",
      benefits: [
        "5 adhésions professionnelles",
        "Logo sur le site de SOCOMES",
        "Possibilité d'organiser des événements",
        "Accès prioritaire aux conférenciers",
        "Visibilité dans nos publications"
      ]
    }
  ]

  // FAQ data
  const faqs = [
    {
      question: "Qui peut devenir membre de la SOCOMES ?",
      answer: "La SOCOMES est ouverte à tous les professionnels de santé, chercheurs, étudiants et institutions impliqués ou intéressés par la médecine sexuelle. Cela inclut les médecins, infirmiers, psychologues, sexologues, travailleurs sociaux et autres professionnels connexes."
    },
    {
      question: "Quels sont les avantages de l'adhésion ?",
      answer: "L'adhésion vous donne accès à un réseau professionnel, des ressources éducatives, des tarifs préférentiels pour nos événements, des opportunités de formation continue, et la possibilité de participer activement au développement de la médecine sexuelle en RDC."
    },
    {
      question: "Comment renouveler mon adhésion ?",
      answer: "Le renouvellement se fait automatiquement chaque année à la date anniversaire de votre inscription. Vous recevrez un email de rappel un mois avant l'échéance avec la possibilité de modifier ou d'annuler votre adhésion."
    },
    {
      question: "Existe-t-il des bourses pour les étudiants ?",
      answer: "Oui, la SOCOMES dispose d'un programme de bourses pour les étudiants en médecine et autres disciplines liées à la santé sexuelle. Les candidatures sont examinées au cas par cas en fonction des besoins et de la motivation."
    },
    {
      question: "Les membres internationaux sont-ils acceptés ?",
      answer: "Absolument ! La SOCOMES accueille des membres du monde entier. Nous valorisons la diversité des perspectives et l'échange international d'expertise en médecine sexuelle."
    }
  ]

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
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Rejoignez la Société Congolaise de Médecine Sexuelle
            </motion.h1>
            
            <motion.p 
              className="text-xl mb-8 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Devenez membre de la première société savante dédiée à la médecine sexuelle en République Démocratique du Congo
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button href="#membership" variant="secondary" size="lg">
                Découvrir nos formules
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
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
              Pourquoi devenir membre ?
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              La SOCOMES offre un espace d'échange, de formation et de collaboration pour tous les professionnels intéressés par la médecine sexuelle
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12 text-primary-500 mb-4" />,
                title: "Réseau professionnel",
                description: "Rejoignez une communauté dynamique de professionnels partageant les mêmes intérêts et valeurs en médecine sexuelle."
              },
              {
                icon: <BookOpen className="w-12 h-12 text-primary-500 mb-4" />,
                title: "Ressources exclusives",
                description: "Accédez à des ressources éducatives, publications scientifiques et matériel pédagogique de qualité."
              },
              {
                icon: <Award className="w-12 h-12 text-primary-500 mb-4" />,
                title: "Reconnaissance professionnelle",
                description: "Valorisez votre expertise et contribuez au développement de la médecine sexuelle en RDC."
              },
              {
                icon: <Globe className="w-12 h-12 text-primary-500 mb-4" />,
                title: "Collaborations internationales",
                description: "Participez à des échanges et projets avec des organisations internationales de médecine sexuelle."
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

      {/* Membership Tiers */}
      <section id="membership" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Choisissez votre formule d'adhésion
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Des formules adaptées à tous les profils, de l'étudiant à l'institution
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {membershipTiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                className={`bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden relative ${
                  tier.isPopular ? 'ring-2 ring-primary-500 dark:ring-primary-400' : ''
                }`}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                {tier.isPopular && (
                  <div className="bg-primary-500 dark:bg-primary-600 text-white text-xs font-semibold px-3 py-1 absolute top-0 right-0 rounded-bl-lg">
                    Le plus populaire
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">{tier.name}</h3>
                  <p className="text-2xl font-semibold mb-4 text-primary-600 dark:text-primary-400">{tier.price}</p>
                  
                  <div className="space-y-3 mb-6">
                    {tier.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-200">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button
                    href="#application-form"
                    variant={tier.isPopular ? 'primary' : 'outline'}
                    className="w-full"
                    onClick={() => setSelected(tier.id)}
                  >
                    Choisir cette formule
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <motion.h2 
                className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Formulaire d'adhésion
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Complétez ce formulaire pour soumettre votre demande d'adhésion
              </motion.p>
            </div>
            
            <motion.div
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <form className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="membershipType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Type d'adhésion</label>
                    <select
                      id="membershipType"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      value={selected || ''}
                      onChange={(e) => setSelected(e.target.value)}
                    >
                      <option value="">Sélectionnez un type d'adhésion</option>
                      {membershipTiers.map((tier) => (
                        <option key={tier.id} value={tier.id}>
                          {tier.name} - {tier.price}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Prénom</label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nom</label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="votre.email@exemple.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Téléphone</label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="+243 XXXXXXXXX"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="profession" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Profession</label>
                    <input
                      type="text"
                      id="profession"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Ex: Médecin, Psychologue, Étudiant..."
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="institution" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Institution / Lieu de travail</label>
                    <input
                      type="text"
                      id="institution"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Ex: Hôpital Général de Kinshasa, Université de Kinshasa..."
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Motivation pour rejoindre la SOCOMES</label>
                    <textarea
                      id="motivation"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Partagez-nous votre intérêt pour la médecine sexuelle et vos attentes en rejoignant la SOCOMES"
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start">
                    <input
                      id="terms"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 mt-1"
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                      J'accepte les <a href="#" className="text-primary-600 dark:text-primary-400 hover:underline">conditions d'adhésion</a> et la <a href="#" className="text-primary-600 dark:text-primary-400 hover:underline">politique de confidentialité</a> de la SOCOMES
                    </label>
                  </div>
                </div>
                
                <div>
                  <Button type="submit" variant="primary" className="w-full">
                    Soumettre ma demande d'adhésion
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Questions fréquentes
            </motion.h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer p-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">{faq.question}</h3>
                    <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180 text-gray-500 dark:text-gray-400" />
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600 dark:bg-primary-800 relative">
        <div className="absolute inset-0 bg-[url('/images/pattern-dots.png')] opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Prêt à rejoindre notre communauté ?
            </motion.h2>
            <motion.p 
              className="text-lg mb-8 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Devenez membre dès aujourd'hui et contribuez au développement de la médecine sexuelle en République Démocratique du Congo
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button href="#application-form" variant="secondary" size="lg">
                Devenir membre
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
