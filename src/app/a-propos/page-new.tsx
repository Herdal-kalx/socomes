import { Metadata } from 'next'
import { Users, Award, Heart, BookOpen, Lightbulb } from 'lucide-react'
import AboutPageClient from '@/components/AboutPageClient'

export const metadata: Metadata = {
  title: 'À propos - SOCOMES | Société Congolaise de Médecine Sexuelle',
  description: 'Découvrez l\'histoire, la mission et l\'équipe derrière la Société Congolaise de Médecine Sexuelle (SOCOMES).',
}

export default function AboutPage() {
  // On définit toutes les données côté serveur
  // Ces données seront passées au composant client pour le rendu
  
  const teamMembers = [
    {
      name: "Dr. Eunice Bilonda",
      role: "Neuropsychiatre MD.MPH.Phd st.",
      bio: "Spécialiste en médecine sexuelle avec plus de 20 ans d'expérience. Diplômé de l'Université de Kinshasa et formé à l'international.",
      image: "/images/placeholders/docteur (1).jpg",
      socialLinks: [
        { type: "mail", url: "mailto:eunice.bilonda@socomes.org" },
        { type: "twitter", url: "#" },
        { type: "linkedin", url: "#" }
      ]
    },
    {
      name: "Professeur Paul Musa",
      role: "MD.PhD",
      bio: "Gynécologue spécialisée en santé reproductive. Chercheuse reconnue dans le domaine de la santé sexuelle féminine.",
      image: "/images/placeholders/docteur (2).jpg",
      socialLinks: [
        { type: "mail", url: "mailto:paul.musa@socomes.org" },
        { type: "twitter", url: "#" },
        { type: "linkedin", url: "#" }
      ]
    },
    {
      name: "Dr. Georges kalenga",
      role: "MD.MPH.PhD st.",
      bio: "Urologue et expert en médecine sexuelle masculine. Auteur de nombreuses publications scientifiques.",
      image: "/images/placeholders/docteur (3).jpg",
      socialLinks: [
        { type: "mail", url: "mailto:georges.kalenga@socomes.org" },
        { type: "twitter", url: "#" },
        { type: "linkedin", url: "#" }
      ]
    },
    {
      name: "Dr. Vinie Mwanza",
      role: "MD.MPH.PhD st.",
      bio: "Psychologue clinicienne spécialisée en thérapie sexuelle. Formatrice internationale en éducation sexuelle.",
      image: "/images/placeholders/docteur 4.jpg",
      socialLinks: [
        { type: "mail", url: "mailto:vinie.mwanza@socomes.org" },
        { type: "twitter", url: "#" },
        { type: "linkedin", url: "#" }
      ]
    }
  ]

  const values = [
    {
      title: "Excellence",
      description: "Nous nous engageons à fournir des soins et des informations de la plus haute qualité, basés sur les dernières avancées scientifiques.",
      icon: <Award className="w-8 h-8 mb-4 text-primary-600 dark:text-primary-400" />
    },
    {
      title: "Respect",
      description: "Nous traitons chaque personne avec dignité et respect, en reconnaissant la diversité des besoins et des expériences en matière de santé sexuelle.",
      icon: <Heart className="w-8 h-8 mb-4 text-primary-600 dark:text-primary-400" />
    },
    {
      title: "Intégrité",
      description: "Nous agissons avec honnêtété, transparence et responsabilité dans toutes nos activités et interactions.",
      icon: <Heart className="w-8 h-8 mb-4 text-primary-600 dark:text-primary-400" />
    },
    {
      title: "Accessibilité",
      description: "Nous nous efforçons de rendre les informations et les soins en matière de santé sexuelle accessibles à tous, indépendamment de leur situation.",
      icon: <Users className="w-8 h-8 mb-4 text-primary-600 dark:text-primary-400" />
    },
    {
      title: "Innovation",
      description: "Nous encourageons l'innovation et la recherche pour améliorer continuellement les pratiques en médecine sexuelle.",
      icon: <Lightbulb className="w-8 h-8 mb-4 text-primary-600 dark:text-primary-400" />
    },
    {
      title: "Éducation",
      description: "Nous croyons au pouvoir de l'éducation pour promouvoir la santé sexuelle et réduire la stigmatisation.",
      icon: <BookOpen className="w-8 h-8 mb-4 text-primary-600 dark:text-primary-400" />
    }
  ]
  
  const missionPoints = [
    "La formation continue des professionnels de santé",
    "La sensibilisation du public aux questions de santé sexuelle",
    "La recherche scientifique adaptée au contexte congolais",
    "L'amélioration de l'accès aux soins en santé sexuelle",
    "Le plaidoyer pour des politiques de santé publique efficaces"
  ]
  
  const achievements = [
    {
      number: "500+",
      text: "Professionnels formés"
    },
    {
      number: "50+",
      text: "Partenariats établis"
    },
    {
      number: "20+",
      text: "Publications scientifiques"
    },
    {
      number: "1000+",
      text: "Patients servis"
    }
  ]

  // Passer toutes les données au composant client qui gère les animations
  return (
    <AboutPageClient 
      teamMembers={teamMembers}
      values={values}
      achievements={achievements}
      missionPoints={missionPoints}
    />
  )
}
