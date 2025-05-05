'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send the form data to your backend here
    console.log('Form submitted:', formData)
    setFormSubmitted(true)
    // Reset form after submission (in a real app, this would happen after successful API response)
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      setFormSubmitted(false)
    }, 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-primary-500" />,
      title: "Adresse",
      details: [
        "Société Congolaise de Médecine Sexuelle",
        "123 Avenue de la Libération",
        "Commune de la Gombe, Kinshasa",
        "République Démocratique du Congo"
      ]
    },
    {
      icon: <Phone className="w-6 h-6 text-primary-500" />,
      title: "Téléphone",
      details: [
        "+243 XXX XXX XXX",
        "+243 XXX XXX XXX"
      ]
    },
    {
      icon: <Mail className="w-6 h-6 text-primary-500" />,
      title: "Email",
      details: [
        "contact@socomes.org",
        "info@socomes.org"
      ]
    },
    {
      icon: <Clock className="w-6 h-6 text-primary-500" />,
      title: "Heures d'ouverture",
      details: [
        "Lundi - Vendredi: 8h00 - 17h00",
        "Samedi: 9h00 - 13h00",
        "Dimanche: Fermé"
      ]
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Contactez-nous
            </motion.h1>
            
            <motion.p 
              className="text-xl mb-8 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Vous avez des questions ? Besoin d'informations supplémentaires ? Contactez notre équipe et nous vous répondrons dans les plus brefs délais.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="bg-white dark:bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-md">
                  {contact.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{contact.title}</h3>
                <div className="space-y-1">
                  {contact.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 dark:text-gray-300">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map and Contact Form */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Map */}
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden h-full min-h-[400px] flex items-center justify-center">
                <MapPin className="w-16 h-16 text-gray-400 dark:text-gray-500" />
                <span className="ml-4 text-gray-500 dark:text-gray-400">Carte interactive</span>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Envoyez-nous un message</h3>
                
                {formSubmitted ? (
                  <motion.div
                    className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 flex items-start gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Check className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-green-800 dark:text-green-300">Message envoyé avec succès</h4>
                      <p className="text-green-700 dark:text-green-400 text-sm mt-1">Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.</p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nom complet</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                          placeholder="votre.email@exemple.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Sujet</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="information">Demande d'information</option>
                        <option value="appointment">Rendez-vous</option>
                        <option value="partnership">Proposition de partenariat</option>
                        <option value="feedback">Commentaires et suggestions</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder="Comment pouvons-nous vous aider ?"
                      ></textarea>
                    </div>
                    
                    <Button type="submit" variant="primary" className="w-full flex items-center justify-center">
                      <Send size={18} className="mr-2" />
                      Envoyer le message
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
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
                Questions fréquemment posées
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Retrouvez les réponses aux questions les plus courantes
              </motion.p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "Comment prendre rendez-vous avec un spécialiste ?",
                  answer: "Vous pouvez prendre rendez-vous directement sur notre site web dans la section 'Consultations', par téléphone au +243 XXX XXX XXX ou par email à contact@socomes.org."
                },
                {
                  question: "Quels sont les horaires de consultation ?",
                  answer: "Les consultations sont disponibles du lundi au vendredi de 8h00 à 17h00 et le samedi de 9h00 à 13h00. Des consultations en télémédecine peuvent être organisées en dehors de ces horaires."
                },
                {
                  question: "Comment devenir membre de la SOCOMES ?",
                  answer: "Pour devenir membre, rendez-vous dans la section 'Devenir Membre' de notre site et remplissez le formulaire d'adhésion. Vous pouvez également nous contacter directement pour plus d'informations."
                },
                {
                  question: "Proposez-vous des formations pour les professionnels ?",
                  answer: "Oui, la SOCOMES organise régulièrement des formations pour les professionnels de santé. Consultez notre section 'Formations' pour découvrir les prochaines sessions et vous inscrire."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
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
              Suivez-nous sur les réseaux sociaux
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Restez informé des dernières actualités et événements de la SOCOMES
            </motion.p>
          </div>
          
          <div className="flex justify-center space-x-6">
            {[
              { icon: "facebook", label: "Facebook" },
              { icon: "twitter", label: "Twitter" },
              { icon: "linkedin", label: "LinkedIn" },
              { icon: "youtube", label: "YouTube" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href="#"
                className="w-14 h-14 rounded-full bg-white dark:bg-gray-700 shadow-md flex items-center justify-center text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                aria-label={`Suivez-nous sur ${social.label}`}
              >
                <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary-600 dark:bg-primary-800 relative">
        <div className="absolute inset-0 bg-[url('/images/pattern-dots.png')] opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Inscrivez-vous à notre newsletter
            </motion.h2>
            <motion.p 
              className="text-lg mb-8 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Recevez nos dernières actualités, articles et événements directement dans votre boîte mail
            </motion.p>
            
            <motion.form
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white bg-white/10 backdrop-blur-sm text-white placeholder-white/70 border border-white/20"
                required
              />
              <Button type="submit" variant="secondary">
                S'inscrire
              </Button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  )
}
