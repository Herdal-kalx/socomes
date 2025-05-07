import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { LatestArticlesSection } from '@/components/sections/LatestArticlesSection'
import { UpcomingEventsSection } from '@/components/sections/UpcomingEventsSection'
import { CTASection } from '@/components/sections/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      
      {/* Mission & Vision Section */}
      <section id="mission" className="py-20 sm:py-24 md:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="flex flex-col items-center text-center mb-12 md:mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-0.5 w-6 bg-primary-500"></span>
              <span className="text-primary-500 text-sm uppercase tracking-wider font-semibold">QUI SOMMES-NOUS</span>
              <span className="h-0.5 w-6 bg-primary-500"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Notre <span className="text-primary-600 dark:text-primary-500">Mission</span> & <span className="text-primary-600 dark:text-primary-500">Vision</span>
            </h2>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-300">
              Découvrez notre engagement envers l'amélioration de la santé sexuelle en République Démocratique du Congo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Notre Mission</h3>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  La Société Congolaise de Médecine Sexuelle (SOCOMES) est une organisation professionnelle dédiée 
                  à l'avancement de la santé sexuelle en République Démocratique du Congo à travers l'éducation, 
                  la recherche et les soins cliniques de qualité.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent-100 dark:bg-accent-900/50 rounded-lg flex items-center justify-center text-accent-600 dark:text-accent-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Notre Vision</h3>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Créer une société où chaque personne a accès à des informations précises 
                  et à des soins de qualité concernant sa santé sexuelle, dans un environnement 
                  exempt de stigmatisation et centré sur le bien-être.
                </p>
              </div>
              
              <div className="pt-4 flex flex-col xs:flex-row gap-4">
                <Button 
                  href="/a-propos" 
                  variant="outline" 
                  className="w-full xs:w-auto rounded-lg text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 justify-center"
                >
                  En savoir plus
                </Button>
                <Button 
                  href="/consultations" 
                  variant="primary" 
                  className="w-full xs:w-auto rounded-lg justify-center group transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-primary-500/20"
                >
                  <span>Consulter un spécialiste</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-[4/3] w-full relative rounded-xl overflow-hidden shadow-xl">
                <div className="absolute -inset-0.5 bg-gradient-to-tr from-primary-500 to-accent-500 opacity-30 blur-sm rounded-xl"></div>
                <div className="absolute inset-1 rounded-xl overflow-hidden">
                  <Image 
                    src="/images/placeholders/team.jpg"
                    alt="Équipe médicale de SOCOMES" 
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-primary-500 rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute top-4 -left-4 w-24 h-24 bg-accent-500 rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md text-sm font-semibold text-primary-700 dark:text-primary-400 border border-primary-100 dark:border-primary-900">
                  Fondée en 2015
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturesSection />
      
      {/* Services Section */}
      <section id="services" className="py-20 sm:py-24 md:py-32 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white overflow-hidden relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-[10%] right-[5%] w-64 h-64 rounded-full border border-white/10 animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full border border-white/10 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-[40%] left-[15%] w-48 h-48 rounded-full border border-white/10 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute w-full h-full bg-gradient-to-b from-primary-500/0 via-primary-500/10 to-primary-500/20"></div>
        </div>
        
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
          <div className="flex flex-col items-center text-center mb-16 md:mb-20">
            <div className="inline-block mb-3 px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <span className="text-sm md:text-base font-medium">Des soins de qualité</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent drop-shadow">
              Nos Services Spécialisés
            </h2>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/90 leading-relaxed">
              La SOCOMES offre une gamme complète de services pour répondre aux besoins 
              en santé sexuelle des patients et des professionnels de santé.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Consultations Médicales",
                description: "Consultations personnalisées avec des spécialistes en médecine sexuelle.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M19.5 22.5a3 3 0 003-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 01-.712 1.321l-5.683-3.06a1.5 1.5 0 00-1.422 0l-5.683 3.06a.75.75 0 01-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 003 3h15z" />
                    <path d="M1.5 9.589v-.745a3 3 0 011.578-2.641l7.5-4.039a3 3 0 012.844 0l7.5 4.039A3 3 0 0122.5 8.844v.745l-8.426 4.926-.652-.35a3 3 0 00-2.844 0l-.652.35L1.5 9.59z" />
                  </svg>
                ),
                color: "from-blue-500 to-blue-700"
              },
              {
                title: "Éducation & Formation",
                description: "Programmes de formation continue pour les professionnels de santé.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                    <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                    <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                  </svg>
                ),
                color: "from-emerald-500 to-emerald-700"
              },
              {
                title: "Recherche Scientifique",
                description: "Participation à des études cliniques et à la recherche en santé sexuelle.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M10.5 3.798v5.02a3 3 0 01-.879 2.121l-2.377 2.377a9.845 9.845 0 015.091 1.013 8.315 8.315 0 005.713.636l.285-.071-3.954-3.955a3 3 0 01-.879-2.121v-5.02a23.614 23.614 0 00-3 0zm4.5.138a.75.75 0 00.093-1.495A24.837 24.837 0 0012 2.25a25.048 25.048 0 00-3.093.191A.75.75 0 009 3.936v4.882a1.5 1.5 0 01-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0115 8.818V3.936z" clipRule="evenodd" />
                  </svg>
                ),
                color: "from-violet-500 to-violet-700"
              },
              {
                title: "Sensibilisation",
                description: "Campagnes de sensibilisation sur les problématiques de santé sexuelle.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z" clipRule="evenodd" />
                  </svg>
                ),
                color: "from-amber-500 to-amber-700"
              },
              {
                title: "Ressources Éducatives",
                description: "Accès à des ressources éducatives validées scientifiquement.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                  </svg>
                ),
                color: "from-teal-500 to-teal-700"
              },
              {
                title: "Conseil Psychologique",
                description: "Accompagnement psychologique dans le cadre des problématiques de sexualité.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                  </svg>
                ),
                color: "from-rose-500 to-rose-700"
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="rounded-xl overflow-hidden backdrop-blur-lg border border-white/10 hover:border-white/20 shadow-lg transition-all duration-300 hover:shadow-xl group relative h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 z-0"></div>
                <div className="absolute -inset-1 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${service.color} rounded-xl blur-sm"></div>
                <div className="p-6 sm:p-8 flex flex-col h-full relative z-10">
                  <div className="mb-5">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} p-3 shadow-lg mb-4`}>
                      <div className="w-full h-full text-white">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors">{service.title}</h3>
                    <p className="text-white/80 text-base leading-relaxed">{service.description}</p>
                  </div>
                  <div className="mt-auto pt-5">
                    <a href="#" className="inline-flex items-center text-sm text-white/70 hover:text-white group/link">
                      <span className="mr-2">En savoir plus</span>
                      <span className="w-5 h-5 rounded bg-white/10 flex items-center justify-center group-hover/link:bg-white/20 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                          <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button 
              href="/services" 
              variant="white" 
              className="rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group "
            >
              <span className="flex items-center">
                <span>Tous nos services</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </span>
            </Button>
          </div>
        </div>
      </section>
      
      <LatestArticlesSection />
      <UpcomingEventsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}