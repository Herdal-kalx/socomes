'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function LatestArticlesSection() {
  const articles = [
    {
      id: 1,
      title: "L'importance de l'éducation sexuelle dès le jeune âge",
      excerpt: "L'éducation sexuelle est essentielle pour favoriser des comportements sains et prévenir les risques liés à la santé sexuelle.",
      image: "/images/placeholders/article.svg",
      author: "Dr. Sophie Mulumba",
      date: "12 juin 2025",
      category: "Éducation",
      readTime: "5 min",
    },
    {
      id: 2,
      title: "Les maladies sexuellement transmissibles : prévention et traitements",
      excerpt: "Un aperçu des différentes MST, leurs symptômes, les moyens de prévention et les traitements disponibles.",
      image: "/images/placeholders/article.svg",
      author: "Dr. Michel Kabeya",
      date: "5 juin 2025",
      category: "Santé",
      readTime: "8 min",
    },
    {
      id: 3,
      title: "La santé sexuelle des femmes en RDC : enjeux et perspectives",
      excerpt: "Une analyse des défis spécifiques auxquels sont confrontées les femmes en matière de santé sexuelle en RDC.",
      image: "/images/placeholders/article.svg",
      author: "Dr. Julie Nkanza",
      date: "28 mai 2025",
      category: "Recherche",
      readTime: "10 min",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-600 dark:text-primary-400">
              Articles & Éducation
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              Découvrez nos derniers articles rédigés par des professionnels de la santé sexuelle.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button href="/articles" variant="outline">
              Tous les articles <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {articles.map((article) => (
            <motion.article
              key={article.id}
              className="card overflow-hidden hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <span className="absolute bottom-4 left-4 bg-primary-600 text-white text-xs font-semibold px-2 py-1 rounded-md">
                  {article.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-2">
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime} de lecture</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  <Link href={`/articles/${article.id}`} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-gray-300 dark:bg-gray-700">
                    {/* This would be a profile image in a real application */}
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    {article.author}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}