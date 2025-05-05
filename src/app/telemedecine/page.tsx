'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Video, MessageSquare, Calendar, Clock, Check, AlertCircle } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

export default function TelemedicinePage() {
  const [activeTab, setActiveTab] = useState<'video' | 'messaging'>('video')

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
                Consultations à distance avec SOCOMES
              </motion.h1>
              
              <motion.p 
                className="text-lg mb-8 text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Accédez à des soins de santé sexuelle de qualité depuis le confort de votre domicile. Nos téléconsultations vous offrent un accès facile et sécurisé à nos experts en médecine sexuelle.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button href="#reserve" variant="secondary" size="lg">
                  Prendre rendez-vous
                </Button>
              </motion.div>
            </div>
            
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <Video className="w-16 h-16 text-gray-400 dark:text-gray-500" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Comment ça marche
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Notre processus simple en 4 étapes pour accéder à des soins de santé sexuelle à distance
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Calendar className="w-8 h-8 text-primary-500" />,
                title: "Prenez rendez-vous",
                description: "Choisissez une date et une heure qui vous conviennent via notre plateforme en ligne."
              },
              {
                icon: <Check className="w-8 h-8 text-primary-500" />,
                title: "Confirmation",
                description: "Recevez une confirmation par email avec le lien pour votre consultation."
              },
              {
                icon: <Video className="w-8 h-8 text-primary-500" />,
                title: "Consultation",
                description: "Connectez-vous à l'heure prévue pour votre consultation par vidéo ou message."
              },
              {
                icon: <Clock className="w-8 h-8 text-primary-500" />,
                title: "Suivi",
                description: "Recevez des recommandations et un suivi personnalisé après votre consultation."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="bg-primary-50 dark:bg-primary-900/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Options */}
      <section className="py-16" id="reserve">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Nos services de télémédecine
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Choisissez le mode de consultation qui vous convient le mieux
            </motion.p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-8">
            <div className="flex border-b border-gray-200 dark:border-gray-700">
              <button
                className={`flex-1 py-4 px-6 text-center font-medium ${
                  activeTab === 'video'
                    ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-500'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
                onClick={() => setActiveTab('video')}
              >
                <span className="flex items-center justify-center gap-2">
                  <Video size={18} />
                  Consultation vidéo
                </span>
              </button>
              <button
                className={`flex-1 py-4 px-6 text-center font-medium ${
                  activeTab === 'messaging'
                    ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-500'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
                onClick={() => setActiveTab('messaging')}
              >
                <span className="flex items-center justify-center gap-2">
                  <MessageSquare size={18} />
                  Consultation par message
                </span>
              </button>
            </div>
            
            <div className="p-6">
              {activeTab === 'video' ? (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Consultation vidéo en direct</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Nos consultations vidéo offrent une expérience similaire à une visite en personne. Discutez directement avec un spécialiste en médecine sexuelle dans un environnement confidentiel et sécurisé.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Consultation de 30 minutes en face à face",
                      "Confidentialité garantie",
                      "Ordonnances envoyées électroniquement si nécessaire",
                      "Suivi personnalisé"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button href="/consultations" variant="primary" size="lg" className="w-full sm:w-auto">
                      Réserver une consultation vidéo
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Consultation par message</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Notre service de consultation par message vous permet de poser vos questions et de recevoir des réponses d'un professionnel, sans avoir besoin d'un rendez-vous en temps réel.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Posez vos questions quand cela vous convient",
                      "Réponse garantie sous 24 heures",
                      "Conversation sécurisée et privée",
                      "Suivi disponible pendant 7 jours"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button href="/consultations" variant="primary" size="lg" className="w-full sm:w-auto">
                      Démarrer une consultation par message
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-6 flex items-start gap-4">
            <AlertCircle className="text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-1">Informations importantes</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Les consultations de télémédecine ne remplacent pas les soins d'urgence. Si vous présentez des symptômes graves, veuillez vous rendre aux urgences ou contacter immédiatement le service d'urgence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Questions fréquentes
            </motion.h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Comment se déroule une consultation vidéo ?",
                answer: "Une fois votre rendez-vous confirmé, vous recevrez un lien par email. À l'heure prévue, cliquez sur ce lien pour accéder à votre consultation. Aucun logiciel n'est nécessaire, uniquement un appareil avec une caméra et un microphone."
              },
              {
                question: "Les consultations à distance sont-elles confidentielles ?",
                answer: "Absolument. Nous utilisons des plateformes sécurisées conformes aux normes de protection des données de santé. Toutes les informations partagées lors des consultations restent strictement confidentielles."
              },
              {
                question: "Puis-je obtenir une ordonnance lors d'une téléconsultation ?",
                answer: "Oui, nos médecins peuvent délivrer des ordonnances lorsque cela est médicalement approprié. L'ordonnance vous sera envoyée par voie électronique ou à la pharmacie de votre choix."
              },
              {
                question: "Que faire en cas de problème technique pendant ma consultation ?",
                answer: "En cas de problème technique, nous vous contacterons immédiatement par téléphone pour continuer la consultation ou reprogrammer le rendez-vous sans frais supplémentaires."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer p-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">{faq.question}</h3>
                    <span className="ml-6 flex-shrink-0 flex items-center justify-center">
                      <svg className="w-5 h-5 transition-transform group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
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
              Prêt à prendre soin de votre santé sexuelle ?
            </motion.h2>
            <motion.p 
              className="text-lg mb-8 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Nos spécialistes en médecine sexuelle sont disponibles pour vous accompagner dans votre parcours de santé, en toute confidentialité et avec professionnalisme.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button href="/consultations" variant="secondary" size="lg">
                Prendre rendez-vous maintenant
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
