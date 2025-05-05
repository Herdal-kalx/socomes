'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Phone, Mail } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à prendre soin de votre santé sexuelle?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Nos experts sont disponibles pour vous accompagner dans votre parcours de santé. 
            Consultez un spécialiste dès aujourd'hui ou rejoignez notre communauté de professionnels.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button href="/consultations" variant="white" size="lg">
              Prendre rendez-vous
            </Button>
            <Button href="/adhesion" variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
              Devenir membre
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">
            <div className="flex items-center justify-center sm:justify-end">
              <Phone size={20} className="mr-2" />
              <a href="tel:+243123456789" className="hover:underline">
                +243 123 456 789
              </a>
            </div>
            <div className="flex items-center justify-center sm:justify-start">
              <Mail size={20} className="mr-2" />
              <a href="mailto:contact@socomes.org" className="hover:underline">
                contact@socomes.org
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}