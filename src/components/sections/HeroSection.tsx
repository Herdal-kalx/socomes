'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ChevronRight, ArrowRight, Play } from 'lucide-react'

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
    
    // Fade in animation
    const timer = setTimeout(() => {
      document.querySelector('.hero-gradient')?.classList.add('active')
    }, 300)
    
    return () => clearTimeout(timer)
  }, [])
  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-950">
      {/* Split design with diagonal cut */}
      <div className="absolute inset-0 clip-path-diagonal bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 hero-gradient transition-opacity duration-1000 opacity-0">
        {/* Particle effect - only show on larger screens */}
        <div className="absolute inset-0 opacity-25 hidden md:block">
          {Array.from({ length: 30 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white/30"
              style={{
                width: `${Math.random() * 8 + 3}px`,
                height: `${Math.random() * 8 + 3}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.4 + 0.3,
                animation: `float ${Math.random() * 10 + 10}s infinite linear`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Decorative circle elements - positioned to avoid overflow on small screens */}
      <div className="absolute md:top-1/4 -left-24 w-60 md:w-96 h-60 md:h-96 rounded-full bg-gradient-to-r from-accent-600/20 to-accent-400/10 blur-3xl opacity-50 md:opacity-70"></div>
      <div className="absolute -bottom-32 -right-16 md:right-0 w-72 md:w-[40rem] h-72 md:h-[40rem] rounded-full bg-gradient-to-l from-primary-400/10 to-primary-600/10 blur-3xl opacity-50 md:opacity-70"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-white lg:col-span-6 lg:pr-4 xl:pr-8 order-2 lg:order-1 mt-8 lg:mt-0"
          >
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <span className="h-0.5 w-8 sm:w-10 bg-accent-500"></span>
              <span className="text-accent-500 text-xs sm:text-sm uppercase tracking-wider font-semibold">SOCOMES</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 leading-[1.1]">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300">Médecine</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">Sexuelle</span>
              <span className="block text-xl sm:text-2xl lg:text-3xl mt-2 sm:mt-3 font-medium text-white/80">République Démocratique du Congo</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 md:mb-10 max-w-xl leading-relaxed">
              La Société Congolaise de Médecine Sexuelle œuvre pour l'amélioration de la santé sexuelle à travers l'expertise médicale, la recherche avancée et l'éducation continue.
            </p>
            
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-5 mb-8 sm:mb-10">
              <Button 
                href="/consultations" 
                variant="primary" 
                size="lg" 
                className="group relative overflow-hidden rounded-lg text-white py-4 sm:py-5 px-4 sm:px-6 shadow-xl transition-all duration-300 border-0 bg-gradient-to-r from-accent-600 to-accent-500 hover:-translate-y-1 hover:shadow-accent-500/25 w-full xs:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center xs:justify-start font-medium text-sm sm:text-base">Consulter un spécialiste <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" /></span>
                <span className="absolute inset-0 bg-gradient-to-r from-accent-500 to-accent-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="group relative overflow-hidden rounded-lg border-2 border-white/20 text-white hover:border-white/30 hover:bg-white/5 transition-colors duration-300 py-4 sm:py-5 w-full xs:w-auto"
                onClick={() => setVideoModalOpen(true)}
              >
                <span className="flex items-center justify-center xs:justify-start text-sm sm:text-base">
                  <span className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-accent-500 text-white mr-2 sm:mr-3 group-hover:bg-accent-400 transition-colors duration-300">
                    <Play size={12} className="ml-0.5" />
                  </span>
                  Découvrir notre mission
                </span>
              </Button>
            </div>
            
            <div className="flex items-center gap-3 sm:gap-4 mt-8 sm:mt-10 border-t border-white/10 pt-8 lg:border-0 lg:pt-0">
              <div className="flex -space-x-2 sm:-space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-primary-700 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-gray-400"></div>
                  </div>
                ))}
              </div>
              <div className="text-xs sm:text-sm text-gray-300">
                <span className="font-semibold text-white">+50 Spécialistes</span><br />
                <span>à votre disposition</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 order-1 lg:order-2"
          >
            <div className="relative mx-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-none">
              {/* Main Image Container with 3D effect */}
              <div className="relative h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px] w-full overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 shadow-xl lg:shadow-2xl transform perspective-1000">
                <Image
                  src="/images/placeholders/hero.jpg" 
                  alt="Professionnels de santé" 
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  className="object-cover z-10 transform scale-110"
                  priority
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-primary-900/30 to-transparent z-20"></div>
                
                {/* Featured stats */}
                <div className="absolute left-3 right-3 sm:left-5 sm:right-5 bottom-3 sm:bottom-5 p-3 sm:p-4 backdrop-blur-md bg-black/30 rounded-lg sm:rounded-xl border border-white/10 z-30">
                  <div className="grid grid-cols-3 gap-2 sm:gap-4">
                    {[
                      { value: '10+', label: 'Années', icon: '⭐️' },
                      { value: '5000+', label: 'Patients', icon: '👨‍👩‍👧‍👦' },
                      { value: '20+', label: 'Publications', icon: '📚' },
                    ].map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-base sm:text-xl font-bold">{stat.value}</div>
                        <div className="text-[10px] sm:text-xs text-gray-300">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating elements - only on tablet and larger screens */}
              <div className="absolute -top-5 -left-5 sm:-top-6 sm:-left-6 p-2 sm:p-3 bg-white shadow-lg sm:shadow-xl rounded-lg z-40 transform rotate-3 hidden sm:block">
                <Image 
                  src="/images/placeholders/certification.svg" 
                  alt="Certification" 
                  width={70} 
                  height={70} 
                  className="w-auto h-auto"
                />
              </div>
              
              <div className="absolute -right-3 sm:-right-5 top-1/3 p-3 sm:p-4 bg-accent-500 shadow-md sm:shadow-lg rounded-lg z-40 transform -rotate-3 hidden sm:block">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="text-xl sm:text-2xl">🏆</div>
                  <div className="text-white">
                    <div className="text-xs sm:text-sm font-bold">Excellence</div>
                    <div className="text-[10px] sm:text-xs">Médicale</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 sm:-bottom-6 right-4 sm:right-8 p-2 sm:p-3 bg-white shadow-lg rounded-lg z-40 transform rotate-2 hidden sm:block">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-primary-500 border border-white"></div>
                    ))}
                  </div>
                  <div className="text-[10px] sm:text-xs font-medium">+4.9 <span className="text-yellow-500">★★★★★</span></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="relative w-full mt-16 md:mt-24 lg:absolute lg:left-0 lg:right-0 lg:bottom-8 lg:mt-0 z-20"
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {[
                {
                  title: "Consultations Spécialisées",
                  description: "Accédez à des spécialistes en médecine sexuelle",
                  icon: "🩺",
                  color: "from-blue-500 to-blue-700"
                },
                {
                  title: "Recherche Scientifique",
                  description: "Publications et avancées médicales",
                  icon: "🔬",
                  color: "from-accent-500 to-accent-700"
                },
                {
                  title: "Éducation & Formation",
                  description: "Programmes pour professionnels de santé",
                  icon: "🎓",
                  color: "from-emerald-500 to-emerald-700"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + (index * 0.1) }}
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors duration-300 group cursor-pointer"
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <div className={`flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${feature.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-lg sm:text-xl">{feature.icon}</span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-white text-sm sm:text-base truncate">{feature.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-300 line-clamp-2">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Video Modal */}
      <AnimatePresence>
        {videoModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setVideoModalOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl rounded-2xl overflow-hidden bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative pt-[56.25%]">
                {/* Video would be embedded here */}
                <div className="absolute inset-0 flex items-center justify-center bg-primary-900">
                  <p className="text-white text-center px-6">
                    Vidéo de présentation de la Société Congolaise de Médecine Sexuelle.<br/>
                    <span className="text-sm text-gray-400">(Cliquez ailleurs pour fermer)</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Custom CSS */}
      <style jsx global>{`
        .clip-path-diagonal {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }
        
        .hero-gradient.active {
          opacity: 1;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  )
}