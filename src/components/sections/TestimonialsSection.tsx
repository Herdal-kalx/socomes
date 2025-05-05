'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export function TestimonialsSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const testimonials = [
    {
      quote: "Grâce à la SOCOMES, j'ai pu consulter un spécialiste rapidement et recevoir des soins de qualité. Je recommande vivement leurs services à tous ceux qui ont besoin d'aide concernant leur santé sexuelle.",
      name: "Marie K.",
      title: "Patiente",
      image: "/images/placeholders/testimonial.svg",
    },
    {
      quote: "En tant que médecin, rejoindre la SOCOMES m'a permis d'approfondir mes connaissances et d'améliorer ma pratique. Les formations sont excellentes et le réseau de professionnels est d'une grande valeur.",
      name: "Dr. Jean L.",
      title: "Médecin généraliste",
      image: "/images/placeholders/testimonial.svg",
    },
    {
      quote: "Les ressources éducatives fournies par la SOCOMES sont précieuses pour notre travail de sensibilisation. Elles sont accessibles et basées sur des preuves scientifiques solides.",
      name: "Sophie M.",
      title: "Infirmière en santé publique",
      image: "/images/placeholders/testimonial.svg",
    },
    {
      quote: "J'ai participé à plusieurs conférences organisées par la SOCOMES et j'ai été impressionné par la qualité des intervenants et des sujets abordés. Une organisation vraiment à la pointe dans son domaine.",
      name: "Prof. Robert T.",
      title: "Chercheur en médecine",
      image: "/images/placeholders/testimonial.svg",
    },
  ]

  if (!mounted) return null

  return (
    <section className="section bg-white dark:bg-gray-900">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-600 dark:text-primary-400">
            Témoignages
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Découvrez ce que nos patients et membres disent de nos services et de notre communauté.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div 
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="relative w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center">
                        <div>
                          <div className="font-semibold text-lg text-gray-900 dark:text-white">
                            {testimonial.name}
                          </div>
                          <div className="text-primary-600 dark:text-primary-400">
                            {testimonial.title}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}