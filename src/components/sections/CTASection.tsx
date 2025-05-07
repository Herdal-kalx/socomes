'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Phone, Mail, Calendar, Users, ArrowRight, MapPin } from 'lucide-react'

export function CTASection() {
  return (
    <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
      {/* Background with multiple layers */}
      <div className="absolute inset-0 z-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 dark:from-primary-800 dark:via-primary-900 dark:to-primary-950"></div>
        
        {/* Overlay pattern */}
        <div className="absolute inset-0 bg-[url('/images/pattern-dot.svg')] bg-repeat opacity-10"></div>
        
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full mix-blend-overlay opacity-10 blur-3xl"></div>
          <div className="absolute top-1/3 -left-24 w-64 h-64 bg-white rounded-full mix-blend-overlay opacity-10 blur-2xl"></div>
          <div className="absolute -bottom-32 right-16 w-80 h-80 bg-accent-500 rounded-full mix-blend-overlay opacity-10 blur-3xl"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/10 backdrop-blur-lg dark:bg-gray-900/20 border border-white/20 dark:border-gray-700/20 rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl overflow-hidden relative"
          >
            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-accent-500/20 blur-xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-primary-300/20 dark:bg-primary-500/20 blur-xl"></div>
            
            {/* Content */}
            <div className="text-center text-white relative">
              <motion.span 
                className="inline-block px-4 py-1 bg-white/10 dark:bg-white/5 rounded-full text-white/90 text-sm font-medium mb-4"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Rejoignez-nous aujourd'hui
              </motion.span>
              
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="inline-block">Prêt à prendre soin de </span>
                <span className="inline-block relative">
                  votre santé sexuelle
                  <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 3C50 0.5 150 0.5 200 3" stroke="#FFC107" strokeWidth="5" strokeLinecap="round"/>
                  </svg>
                </span>
                <span className="inline-block">?</span>
              </motion.h2>
              
              <motion.p 
                className="text-lg sm:text-xl text-white/80 mb-10 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Nos experts sont disponibles pour vous accompagner dans votre parcours de santé. 
                Consultez un spécialiste dès aujourd'hui ou rejoignez notre communauté de professionnels.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button 
                  href="/consultations" 
                  variant="white" 
                  size="lg" 
                  className="w-full sm:w-auto group bg-white hover:bg-white text-primary-700 hover:text-primary-800 hover:shadow-lg transition-all duration-300 font-semibold shadow-xl shadow-primary-900/20"
                >
                  <Calendar size={18} className="mr-2" /> 
                  <span>Prendre rendez-vous</span>
                  <ArrowRight size={18} className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Button>
                <Button 
                  href="/adhesion" 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto group text-white border-white/60 hover:border-white hover:bg-white/10 backdrop-blur-lg font-semibold transition-all duration-300"
                >
                  <Users size={18} className="mr-2" /> 
                  <span>Devenir membre</span>
                  <ArrowRight size={18} className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Button>
              </motion.div>

              {/* Contact info cards */}
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5, staggerChildren: 0.1 }}
              >
                <a 
                  href="tel:+243123456789" 
                  className="flex items-center justify-center py-4 px-6 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl backdrop-blur-sm transition-colors duration-300 group"
                >
                  <Phone size={20} className="mr-3 text-accent-300 group-hover:text-accent-200 transition-colors" />
                  <span className="font-medium group-hover:text-white transition-colors">+243 123 456 789</span>
                </a>
                <a 
                  href="mailto:contact@socomes.org" 
                  className="flex items-center justify-center py-4 px-6 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl backdrop-blur-sm transition-colors duration-300 group"
                >
                  <Mail size={20} className="mr-3 text-accent-300 group-hover:text-accent-200 transition-colors" />
                  <span className="font-medium group-hover:text-white transition-colors">contact@socomes.org</span>
                </a>
                <a 
                  href="https://maps.google.com?q=Kinshasa,RDC" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center py-4 px-6 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl backdrop-blur-sm transition-colors duration-300 group"
                >
                  <MapPin size={20} className="mr-3 text-accent-300 group-hover:text-accent-200 transition-colors" />
                  <span className="font-medium group-hover:text-white transition-colors">Kinshasa, RDC</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}