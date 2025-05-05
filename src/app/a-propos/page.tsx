import Image from 'next/image'
import { Metadata } from 'next'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'À propos - SOCOMES | Société Congolaise de Médecine Sexuelle',
  description: 'Découvrez l\'histoire, la mission et l\'équipe derrière la Société Congolaise de Médecine Sexuelle (SOCOMES).',
}

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Jean-Pierre Mulumba",
      role: "Président & Fondateur",
      bio: "Spécialiste en médecine sexuelle avec plus de 20 ans d'expérience. Diplômé de l'Université de Kinshasa et formé à l'international.",
      image: "/images/placeholders/team-member.svg"
    },
    {
      name: "Dr. Marie Kenda",
      role: "Vice-Présidente",
      bio: "Gynécologue spécialisée en santé reproductive. Chercheuse reconnue dans le domaine de la santé sexuelle féminine.",
      image: "/images/placeholders/team-member.svg"
    },
    {
      name: "Dr. Thomas Lusamba",
      role: "Secrétaire Général",
      bio: "Urologue et expert en médecine sexuelle masculine. Auteur de nombreuses publications scientifiques.",
      image: "/images/placeholders/team-member.svg"
    },
    {
      name: "Dr. Sylvie Mutombo",
      role: "Responsable de la Formation",
      bio: "Psychologue clinicienne spécialisée en thérapie sexuelle. Formatrice internationale en éducation sexuelle.",
      image: "/images/placeholders/team-member.svg"
    }
  ]

  const values = [
    {
      title: "Excellence",
      description: "Nous nous engageons à fournir des soins et des informations de la plus haute qualité, basés sur les dernières avancées scientifiques."
    },
    {
      title: "Respect",
      description: "Nous traitons chaque personne avec dignité et respect, en reconnaissant la diversité des besoins et des expériences en matière de santé sexuelle."
    },
    {
      title: "Intégrité",
      description: "Nous agissons avec honnêteté, transparence et responsabilité dans toutes nos activités et interactions."
    },
    {
      title: "Accessibilité",
      description: "Nous nous efforçons de rendre les informations et les soins en matière de santé sexuelle accessibles à tous, indépendamment de leur situation."
    },
    {
      title: "Innovation",
      description: "Nous encourageons l'innovation et la recherche pour améliorer continuellement les pratiques en médecine sexuelle."
    },
    {
      title: "Éducation",
      description: "Nous croyons au pouvoir de l'éducation pour promouvoir la santé sexuelle et réduire la stigmatisation."
    }
  ]

  return (
    <div className="min-h-screen pt-32 pb-16">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">À propos de la SOCOMES</h1>
            <p className="text-xl opacity-90">
              La Société Congolaise de Médecine Sexuelle (SOCOMES) est une organisation 
              professionnelle dédiée à l'avancement de la santé sexuelle en République 
              Démocratique du Congo à travers l'éducation, la recherche et les soins cliniques.
            </p>
          </div>
        </div>
      </section>

      {/* History & Mission Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary-600 dark:text-primary-400">
                Notre Histoire
              </h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Fondée en 2015 par un groupe de médecins passionnés, la SOCOMES est née de la volonté 
                de créer une plateforme permettant aux professionnels de la santé de collaborer pour 
                améliorer la santé sexuelle en RDC.
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Face aux défis importants en matière de santé sexuelle et reproductive dans le pays, 
                nos fondateurs ont reconnu la nécessité d'une approche concertée, basée sur la science 
                et adaptée aux réalités culturelles congolaises.
              </p>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                Depuis sa création, la SOCOMES a formé des centaines de professionnels de santé, 
                participé à des campagnes de sensibilisation nationales et établi des partenariats 
                avec des organisations internationales pour promouvoir la santé sexuelle.
              </p>
              
              <h2 className="text-3xl font-bold mb-6 text-primary-600 dark:text-primary-400">
                Notre Mission
              </h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                La mission de la SOCOMES est de promouvoir l'excellence dans le domaine de la médecine 
                sexuelle en République Démocratique du Congo à travers :
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>La formation continue des professionnels de santé</li>
                <li>La sensibilisation du public aux questions de santé sexuelle</li>
                <li>La recherche scientifique adaptée au contexte congolais</li>
                <li>L'amélioration de l'accès aux soins en santé sexuelle</li>
                <li>Le plaidoyer pour des politiques de santé publique efficaces</li>
              </ul>
            </div>
            
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="/images/placeholders/team.svg"
                alt="L'équipe de la SOCOMES en action" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary-600 dark:text-primary-400">
              Nos Valeurs
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Les valeurs fondamentales qui guident toutes nos actions et décisions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-3 text-primary-600 dark:text-primary-400">
                  {value.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary-600 dark:text-primary-400">
              Notre Équipe
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Des professionnels dévoués qui dirigent la SOCOMES avec passion et expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64 w-full">
                  <Image 
                    src={member.image}
                    alt={member.name} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button href="/equipe" variant="outline">
              Voir toute l'équipe
            </Button>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Rejoignez-nous dans notre mission
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Que vous soyez un professionnel de la santé souhaitant contribuer à notre cause 
              ou une personne intéressée par nos services, nous vous invitons à rejoindre notre communauté.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button href="/adhesion" variant="white" size="lg">
                Devenir membre
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}