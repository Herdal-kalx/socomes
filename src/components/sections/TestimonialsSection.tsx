'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation, EffectFade } from 'swiper/modules'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

export function TestimonialsSection() {
  const [mounted, setMounted] = useState(false)
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const testimonials = [
    {
      quote: "Grâce à la SOCOMES, j'ai pu consulter un spécialiste rapidement et recevoir des soins de qualité. Je recommande vivement leurs services à tous ceux qui ont besoin d'aide concernant leur santé sexuelle.",
      name: "Marie K.",
      title: "Patiente",
      image: "/images/placeholders/testimonial.svg",
      rating: 5,
      location: "Kinshasa"
    },
    {
      quote: "En tant que médecin, rejoindre la SOCOMES m'a permis d'approfondir mes connaissances et d'améliorer ma pratique. Les formations sont excellentes et le réseau de professionnels est d'une grande valeur.",
      name: "Dr. Jean L.",
      title: "Médecin généraliste",
      image: "/images/placeholders/testimonial.svg",
      rating: 5,
      location: "Lubumbashi"
    },
    {
      quote: "Les ressources éducatives fournies par la SOCOMES sont précieuses pour notre travail de sensibilisation. Elles sont accessibles et basées sur des preuves scientifiques solides.",
      name: "Sophie M.",
      title: "Infirmière en santé publique",
      image: "/images/placeholders/testimonial.svg",
      rating: 4,
      location: "Goma"
    },
    {
      quote: "J'ai participé à plusieurs conférences organisées par la SOCOMES et j'ai été impressionné par la qualité des intervenants et des sujets abordés. Une organisation vraiment à la pointe dans son domaine.",
      name: "Prof. Robert T.",
      title: "Chercheur en médecine",
      image: "/images/placeholders/testimonial.svg",
      rating: 5,
      location: "Bukavu"
    },
  ]

  if (!mounted) return null

  return (
    <section id="testimonials" className="py-20 sm:py-24 md:py-32 bg-gray-100 dark:bg-gray-900/80 overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-100/50 dark:bg-primary-900/20 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute top-1/3 left-0 w-32 h-32 bg-accent-100/30 dark:bg-accent-900/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-100/30 dark:bg-accent-900/20 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary-100/50 dark:bg-primary-900/20 rounded-full blur-3xl opacity-70"></div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <div className="inline-block mb-3 px-4 py-1 bg-primary-100 dark:bg-primary-900/50 rounded-full">
            <span className="text-sm font-medium text-primary-800 dark:text-primary-300">Ce qu'ils en disent</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Témoignages de nos <span className="text-primary-600 dark:text-primary-400">membres</span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
            Découvrez les expériences de nos patients et de nos membres professionnels qui ont bénéficié de nos services et de notre communauté.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-8">
          {/* Custom navigation buttons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden md:block">
            <button 
              ref={prevRef} 
              className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none transition-colors duration-200"
              aria-label="Précédent"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden md:block">
            <button 
              ref={nextRef} 
              className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none transition-colors duration-200"
              aria-label="Suivant"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <Swiper
            modules={[Pagination, Autoplay, Navigation, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            autoplay={{ 
              delay: 6000, 
              disableOnInteraction: false 
            }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            onInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current
              swiper.navigation.init()
              swiper.navigation.update()
            }}
            className="testimonial-swiper !overflow-visible"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div 
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="md:grid md:grid-cols-12">
                    {/* Testimonial image column - only on md screens and up */}
                    <div className="md:col-span-4 bg-gradient-to-br from-primary-600 to-primary-800 relative hidden md:block">
                      <div className="h-full w-full relative">
                        <div className="absolute inset-0 bg-black/30 z-10"></div>
                        <div className="absolute -left-10 -top-10 text-white/60 z-0">
                          <Quote size={120} strokeWidth={0.5} />
                        </div>
                        <Image 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          fill
                          sizes="(max-width: 768px) 0vw, 30vw"
                          className="object-cover mix-blend-overlay z-0"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                          <div className="text-white/90 bg-black/30 backdrop-blur-sm p-4 rounded-lg">
                            <div className="font-bold text-lg mb-1">{testimonial.name}</div>
                            <div className="text-sm opacity-90">{testimonial.title}</div>
                            <div className="text-xs opacity-75 mt-1">{testimonial.location}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Testimonial content */}
                    <div className="md:col-span-8 p-6 sm:p-8 md:p-10">
                      {/* Mobile profile - only on small screens */}
                      <div className="flex items-center gap-4 mb-6 md:hidden">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary-100 dark:border-primary-900">
                          <Image 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            fill
                            sizes="64px"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-primary-600 dark:text-primary-400">
                            {testimonial.title}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                            {testimonial.location}
                          </div>
                        </div>
                      </div>
                      
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={18} 
                            className={i < testimonial.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300 dark:text-gray-600'} 
                          />
                        ))}
                        <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                          {testimonial.rating}.0
                        </span>
                      </div>
                      
                      {/* Quote symbol */}
                      <div className="hidden sm:block text-primary-300 dark:text-primary-700 mb-4">
                        <Quote size={40} />
                      </div>
                      
                      {/* Testimonial text */}
                      <blockquote className="text-lg sm:text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
                        {testimonial.quote}
                      </blockquote>
                      
                      {/* Date or additional info */}
                      <div className="text-sm text-gray-500 dark:text-gray-400 italic">
                        Patient/Membre depuis 2022
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Mobile navigation - only visible on small screens */}
          <div className="flex justify-center gap-4 mt-8 md:hidden">
            <button 
              ref={prevRef} 
              className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none transition-colors duration-200"
              aria-label="Précédent"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button 
              ref={nextRef} 
              className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none transition-colors duration-200"
              aria-label="Suivant"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="/temoignages" 
            className="inline-flex items-center px-6 py-3 border border-primary-600 dark:border-primary-500 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-lg transition-colors duration-300"
          >
            <span>Voir tous les témoignages</span>
            <ChevronRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}