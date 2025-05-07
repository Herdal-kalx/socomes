'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Calendar, Clock, BookOpen, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function LatestArticlesSection() {
  const articles = [
    {
      id: 1,
      title: "L'importance de l'éducation sexuelle dès le jeune âge",
      excerpt: "L'éducation sexuelle est essentielle pour favoriser des comportements sains et prévenir les risques liés à la santé sexuelle.",
      image: "/images/placeholders/groupe jeune fille.jpeg",
      author: "Dr. Sophie Mulumba",
      date: "12 juin 2025",
      category: "Éducation",
      readTime: "5 min",
      featured: true,
    },
    {
      id: 2,
      title: "Les maladies sexuellement transmissibles : prévention et traitements",
      excerpt: "Un aperçu des différentes MST, leurs symptômes, les moyens de prévention et les traitements disponibles.",
      image: "/images/placeholders/Groupe de cinq hommes et femmes afro-américains souriants marchant dehors par temps nuageux près du lac, étudiants en échange en Russie _ Photo Premium.jpeg",
      author: "Dr. Michel Kabeya",
      date: "5 juin 2025",
      category: "Santé",
      readTime: "8 min",
      featured: false,
    },
    {
      id: 3,
      title: "La santé sexuelle des femmes en RDC : enjeux et perspectives",
      excerpt: "Une analyse des défis spécifiques auxquels sont confrontées les femmes en matière de santé sexuelle en RDC.",
      image: "/images/placeholders/Natural Saramaya - Blog Beauté et Lifestyle pour Femme Noire_.jpeg",
      author: "Dr. Julie Nkanza",
      date: "28 mai 2025",
      category: "Recherche",
      readTime: "10 min",
      featured: false,
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  }

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-gray-50 dark:bg-gray-900/95 overflow-hidden relative" id="latest-articles">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-4/5 h-1/2 bg-gradient-to-br from-primary-100/30 to-transparent dark:from-primary-800/10 rounded-bl-[100px] opacity-80"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-tr from-primary-50/50 to-transparent dark:from-primary-900/10 opacity-70"></div>
        
        {/* Decorative pattern */}
        <div className="absolute right-10 top-40 opacity-20 dark:opacity-10">
          <div className="grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-3 h-3 rounded-full bg-primary-500 dark:bg-primary-400"></div>
            ))}
          </div>
        </div>
        
        <div className="absolute left-10 bottom-40 opacity-20 dark:opacity-10">
          <div className="grid grid-cols-2 gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-3 h-3 rounded-full bg-accent-500 dark:bg-accent-400"></div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="inline-block mb-3 px-4 py-1 bg-primary-100 dark:bg-primary-900/50 rounded-full">
              <span className="text-sm font-medium text-primary-800 dark:text-primary-300">Ressources & Actualités</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
              <span className="inline-block relative">
                Articles <span className="text-primary-600 dark:text-primary-400">&</span> Éducation
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary-600 dark:bg-primary-500 rounded-full opacity-70"></span>
              </span>
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              Découvrez nos derniers articles rédigés par des professionnels de la santé sexuelle et reproductive, basés sur la recherche scientifique et l'expérience clinique.
            </p>
          </div>
          
          <div className="flex-shrink-0 w-full md:w-auto">
            <Button 
              href="/articles" 
              variant="outline" 
              className="relative group w-full md:w-auto justify-between md:justify-start border-primary-600/70 dark:border-primary-400/30 hover:bg-primary-50 dark:hover:bg-primary-900/30 shadow-sm"
            >
              <div className="flex items-center">
                <BookOpen size={16} className="mr-2 text-primary-600 dark:text-primary-400" />
                <span>Tous les articles</span> 
              </div>
              <ChevronRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              <span className="absolute -top-1 -right-1 bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 text-xs px-1.5 py-0.5 rounded-full hidden md:inline-block">
                +20 articles
              </span>
            </Button>
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {articles.map((article) => (
            <motion.article
              key={article.id}
              className={`bg-white dark:bg-gray-800/80 rounded-2xl overflow-hidden shadow-lg dark:shadow-gray-950/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group flex flex-col ${article.featured ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              variants={itemVariants}
            >
              <div className="relative h-52 sm:h-60 w-full overflow-hidden">
                {/* Special badge for featured article */}
                {article.featured && (
                  <div className="absolute top-4 right-4 z-20 bg-accent-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    À la une
                  </div>
                )}
                
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                
                {/* Category badge */}
                <span className="absolute bottom-4 left-4 bg-primary-600 dark:bg-primary-500 text-white text-xs font-medium px-2.5 py-1 rounded-md shadow-md">
                  {article.category}
                </span>
                
                {/* Read article icon - appears on hover */}
                <div className="absolute bottom-4 right-4 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 p-2 rounded-full shadow-md opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={16} />
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                {/* Meta info */}
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    <span>{article.readTime} de lecture</span>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white line-clamp-2 flex-grow">
                  <Link 
                    href={`/articles/${article.id}`} 
                    className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors block"
                  >
                    {article.title}
                  </Link>
                </h3>
                
                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 text-sm leading-relaxed">
                  {article.excerpt}
                </p>
                
                {/* Author info */}
                <div className="flex items-center pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-primary-600 to-primary-800 dark:from-primary-500 dark:to-primary-700 flex items-center justify-center text-white font-bold text-xs shadow-inner">
                    {article.author.split(' ').map(word => word[0]).join('')}
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    {article.author}
                  </span>
                </div>
              </div>
              
              {/* Active link overlay - entire card is clickable */}
              <Link href={`/articles/${article.id}`} className="absolute inset-0 z-10" aria-hidden="true" />
            </motion.article>
          ))}
        </motion.div>
        
        {/* Bottom CTA - Mobile only */}
        <div className="mt-10 text-center md:hidden">
          <Link 
            href="/articles" 
            className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium"
          >
            <span>Voir tous les articles</span>
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}