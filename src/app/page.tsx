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
      <section className="section bg-white dark:bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="mb-6 text-primary-600">Notre Mission & Vision</h2>
              <p className="mb-4 text-lg">
                La Société Congolaise de Médecine Sexuelle (SOCOMES) est une organisation professionnelle dédiée 
                à l'avancement de la santé sexuelle en République Démocratique du Congo à travers l'éducation, 
                la recherche et les soins cliniques.
              </p>
              <p className="mb-6 text-lg">
                Notre vision est de créer une société où chaque personne a accès à des informations précises 
                et à des soins de qualité concernant sa santé sexuelle, dans un environnement exempt de stigmatisation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/a-propos" variant="outline">
                  En savoir plus
                </Button>
                <Button href="/consultations" variant="primary">
                  Consulter un spécialiste
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-96 rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="/images/placeholders/team.jpg"
                alt="Équipe médicale de SOCOMES" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      
      <FeaturesSection />
      
      {/* Services Section */}
      <section className="section bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Nos Services</h2>
            <p className="max-w-3xl mx-auto text-lg opacity-90">
              La SOCOMES offre une gamme complète de services pour répondre aux besoins 
              en santé sexuelle des patients et des professionnels de santé.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Consultations Médicales",
                description: "Consultations personnalisées avec des spécialistes en médecine sexuelle.",
                icon: "stethoscope"
              },
              {
                title: "Éducation & Formation",
                description: "Programmes de formation continue pour les professionnels de santé.",
                icon: "graduation-cap"
              },
              {
                title: "Recherche Scientifique",
                description: "Participation à des études cliniques et à la recherche en santé sexuelle.",
                icon: "microscope"
              },
              {
                title: "Sensibilisation",
                description: "Campagnes de sensibilisation sur les problématiques de santé sexuelle.",
                icon: "megaphone"
              },
              {
                title: "Ressources Éducatives",
                description: "Accès à des ressources éducatives validées scientifiquement.",
                icon: "book-open"
              },
              {
                title: "Conseil Psychologique",
                description: "Accompagnement psychologique dans le cadre des problématiques de sexualité.",
                icon: "heart-handshake"
              }
            ].map((service, index) => (
              <div key={index} className="card bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all duration-300 p-8">
                <div className="text-accent-500 mb-4">
                  {/* Icon would be replaced by the appropriate icon component */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20">
                    <span className="text-2xl">{/* Icon */}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="opacity-80">{service.description}</p>
              </div>
            ))}
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