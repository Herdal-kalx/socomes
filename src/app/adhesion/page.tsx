'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Users, Award, BookOpen, Globe, ChevronDown, Users2, CreditCard, Building, ExternalLink, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

type MembershipTier = {
  id: string
  name: string
  price: string
  benefits: string[]
  icon: React.ReactNode
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
      icon: <Users2 className="w-6 h-6" />,
      benefits: [
        "Accès aux webinaires mensuels",
        "Accès à la bibliothèque numérique",
        "Réductions sur les événements",
        "Newsletter SOCOMES",
        "Accès au forum de discussion"
      ]
    },
    {
      id: "professional",
      name: "Professionnel",
      price: "75 USD/an",
      icon: <CreditCard className="w-6 h-6" />,
      benefits: [
        "Tous les avantages Étudiant",
        "Accès complet aux journaux scientifiques",
        "Participation aux groupes de travail",
        "Certification professionnelle",
        "Annuaire des membres",
        "Formations exclusives"
      ],
      isPopular: true
    },
    {
      id: "institution",
      name: "Institution",
      price: "200 USD/an",
      icon: <Building className="w-6 h-6" />,
      benefits: [
        "5 adhésions professionnelles",
        "Logo sur le site de SOCOMES",
        "Possibilité d'organiser des événements",
        "Accès prioritaire aux conférenciers",
        "Visibilité dans nos publications",
        "Consultation et support dédiés"
      ]
    }
  ]

  const benefits = [
    {
      icon: <Users className="w-12 h-12 text-primary-500" />,
      title: "Réseau Professionnel",
      description: "Connectez-vous avec des experts en médecine sexuelle à travers la RDC et au-delà."
    },
    {
      icon: <Award className="w-12 h-12 text-primary-500" />,
      title: "Certification Professionnelle",
      description: "Obtenez des certifications reconnues qui valorisent votre expertise."
    },
    {
      icon: <BookOpen className="w-12 h-12 text-primary-500" />,
      title: "Ressources Exclusives",
      description: "Accédez à des publications, des recherches et des outils éducatifs de qualité."
    },
    {
      icon: <Globe className="w-12 h-12 text-primary-500" />,
      title: "Visibilité Internationale",
      description: "Participez à des conférences et échangez avec des collègues du monde entier."
    }
  ]

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
  
  // Animation variants
  const animateItems = (i: number) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    }
  })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        {/* Background with gradient and pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 dark:from-primary-800 dark:via-primary-900 dark:to-primary-950"></div>
          <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-dot.svg')] bg-repeat"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full mix-blend-overlay opacity-10 blur-3xl"></div>
            <div className="absolute top-1/3 -left-24 w-64 h-64 bg-accent-500 rounded-full mix-blend-overlay opacity-10 blur-2xl"></div>
            <div className="absolute -bottom-32 right-16 w-80 h-80 bg-primary-400 rounded-full mix-blend-overlay opacity-20 blur-3xl"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <p className="text-sm font-medium text-white">Rejoignez notre communauté</p>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Devenez membre de la <span className="text-accent-400">SOCOMES</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Participez au développement de la médecine sexuelle en République Démocratique du Congo
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                href="#membership" 
                variant="secondary" 
                size="lg"
                className="min-w-[180px]"
              >
                Voir les formules
              </Button>
              <Button 
                href="#application-form" 
                variant="outline" 
                size="lg"
                className="min-w-[180px] border-white/20 hover:bg-white/10"
              >
                Postuler maintenant
              </Button>
            </div>
          </motion.div>
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
              className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Rejoindre la SOCOMES vous offre de nombreux avantages professionnels et académiques
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{benefit.title}</h3>
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
              Formules d'adhésion
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Choisissez la formule qui correspond le mieux à votre profil
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {membershipTiers.map((tier, index) => (
              <motion.div 
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`
                  bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden 
                  ${tier.isPopular ? 'ring-2 ring-primary-500 dark:ring-primary-400' : 'border border-gray-100 dark:border-gray-600'}
                `}
              >
                {tier.isPopular && (
                  <div className="bg-primary-500 dark:bg-primary-400 py-1 text-center">
                    <span className="text-sm font-medium text-white">Recommandé</span>
                  </div>
                )}
                
                <div className="p-6">
                  <div className="mb-4">{tier.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">{tier.price}</span>
                  </div>
                  
                  <ul className="mb-6 space-y-2">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-primary-500 dark:text-primary-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    href="#application-form" 
                    variant={tier.isPopular ? "primary" : "outline"} 
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
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Formulaire d'adhésion
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Remplissez ce formulaire pour soumettre votre demande d'adhésion à la SOCOMES
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <form>
                <div className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      Informations personnelles
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Prénom
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Nom
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Professional Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                      <Building className="w-5 h-5 mr-2" />
                      Informations professionnelles
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="profession" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Profession
                        </label>
                        <input
                          type="text"
                          id="profession"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="institution" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Institution/Organisation
                        </label>
                        <input
                          type="text"
                          id="institution"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                        />
                      </div>
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Pays
                        </label>
                        <select
                          id="country"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                          required
                        >
                          <option value="">Sélectionnez un pays</option>
                          <option value="CD">République Démocratique du Congo</option>
                          <option value="CG">République du Congo</option>
                          <option value="RW">Rwanda</option>
                          <option value="BI">Burundi</option>
                          <option value="UG">Ouganda</option>
                          <option value="other">Autre</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  {/* Membership Type */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                      <CreditCard className="w-5 h-5 mr-2" />
                      Type d'adhésion
                    </h3>
                    <div className="space-y-3">
                      {membershipTiers.map((tier) => (
                        <label 
                          key={tier.id}
                          className={`
                            flex items-start p-4 border rounded-lg cursor-pointer transition-all
                            ${selected === tier.id 
                              ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 dark:border-primary-400' 
                              : 'border-gray-200 hover:border-primary-200 dark:border-gray-700 dark:hover:border-primary-800'}
                          `}
                        >
                          <input
                            type="radio"
                            name="membershipType"
                            value={tier.id}
                            checked={selected === tier.id}
                            onChange={() => setSelected(tier.id)}
                            className="mt-1 mr-3"
                          />
                          <div>
                            <span className="block font-medium text-gray-900 dark:text-white">{tier.name} - {tier.price}</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{tier.benefits[0]} et plus</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  {/* Terms */}
                  <div>
                    <div className="flex items-start">
                      <input
                        id="terms"
                        type="checkbox"
                        className="mt-1 mr-2"
                        required
                      />
                      <label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-400">
                        J'accepte les <a href="#" className="text-primary-600 dark:text-primary-400 hover:underline">conditions d'adhésion</a> et la <a href="#" className="text-primary-600 dark:text-primary-400 hover:underline">politique de confidentialité</a> de la SOCOMES
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <Button type="submit" variant="primary" className="w-full">
                      Soumettre ma demande d'adhésion
                    </Button>
                  </div>
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
