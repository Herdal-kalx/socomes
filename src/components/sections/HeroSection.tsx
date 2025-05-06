'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ChevronRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-36 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/placeholders/hero.jpg"
          alt="Healthcare professionals"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-primary-800/80"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Société Congolaise de Médecine Sexuelle
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Promouvoir la santé sexuelle et le bien-être à travers l'expertise médicale, la recherche et l'éducation
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/consultations" variant="white" size="lg">
                Consulter un spécialiste
              </Button>
              <Button href="/a-propos" variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                En savoir plus <ChevronRight size={18} className="ml-1" />
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative h-[450px] w-full max-w-[500px] mx-auto">
              <div className="absolute top-0 right-0 bottom-0 left-0 bg-white/10 backdrop-blur-sm rounded-2xl transform rotate-3"></div>
              <div className="absolute top-4 right-4 bottom-4 left-4 rounded-2xl overflow-hidden border-4 border-white/30 shadow-2xl">
                <Image
                  src="/images/placeholders/consultation.svg"
                  alt="Professional medical consultation"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center text-white"
        >
          {[
            { value: '10+', label: 'Années d\'expérience' },
            { value: '50+', label: 'Spécialistes' },
            { value: '5000+', label: 'Patients aidés' },
            { value: '20+', label: 'Publications scientifiques' },
          ].map((stat, index) => (
            <div key={index} className="backdrop-blur-sm bg-white/10 rounded-xl p-6">
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm opacity-80">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}