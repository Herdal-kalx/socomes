'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Calendar, User, Tag, Clock, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

// Article type definition
type Article = {
  id: string
  title: string
  excerpt: string
  category: string
  author: string
  date: string
  readTime: string
  tags: string[]
}

export default function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Sample article data
  const articles: Article[] = [
    {
      id: '1',
      title: "Comprendre la dysfonction érectile: causes, traitements et conseils",
      excerpt: "La dysfonction érectile touche de nombreux hommes et peut avoir diverses causes. Cet article explore les facteurs médicaux et psychologiques ainsi que les approches thérapeutiques modernes.",
      category: "Santé masculine",
      author: "Dr. Joseph Mukwege",
      date: "12 avril 2025",
      readTime: "8 min",
      tags: ["dysfonction érectile", "santé masculine", "traitement"]
    },
    {
      id: '2',
      title: "La santé sexuelle des femmes après 50 ans: ce qu'il faut savoir",
      excerpt: "La ménopause entraîne des changements hormonaux qui peuvent affecter la vie sexuelle. Découvrez comment maintenir une sexualité épanouie pendant cette période de transition.",
      category: "Santé féminine",
      author: "Dr. Marie Kalonda",
      date: "29 mars 2025",
      readTime: "7 min",
      tags: ["ménopause", "santé féminine", "hormones"]
    },
    {
      id: '3',
      title: "Infections sexuellement transmissibles: prévention et dépistage",
      excerpt: "Les IST constituent un enjeu majeur de santé publique. Découvrez comment vous protéger, reconnaître les symptômes et l'importance du dépistage régulier.",
      category: "Prévention",
      author: "Dr. Emmanuel Kabongo",
      date: "15 mars 2025",
      readTime: "6 min",
      tags: ["IST", "prévention", "dépistage"]
    },
    {
      id: '4',
      title: "L'impact du stress sur la vie sexuelle et comment y remédier",
      excerpt: "Le stress chronique peut considérablement affecter le désir et les performances sexuelles. Cet article propose des stratégies pour gérer le stress et améliorer votre vie intime.",
      category: "Bien-être",
      author: "Dr. Christine Mbuyi",
      date: "2 mars 2025",
      readTime: "5 min",
      tags: ["stress", "désir", "bien-être"]
    },
    {
      id: '5',
      title: "Communication dans le couple: parler de sexualité sans tabou",
      excerpt: "Une communication ouverte sur la sexualité est essentielle pour une relation épanouie. Découvrez des conseils pratiques pour aborder ces sujets avec votre partenaire.",
      category: "Relations",
      author: "Dr. Paul Mutombo",
      date: "18 février 2025",
      readTime: "6 min",
      tags: ["communication", "couple", "intimité"]
    },
    {
      id: '6',
      title: "Fertilité masculine: mythes et réalités",
      excerpt: "Démystifiez les croyances populaires sur la fertilité masculine et découvrez les facteurs qui influencent réellement la qualité du sperme et les chances de conception.",
      category: "Fertilité",
      author: "Dr. Joseph Mukwege",
      date: "5 février 2025",
      readTime: "9 min",
      tags: ["fertilité", "conception", "santé masculine"]
    }
  ]

  // All unique categories
  const categories = Array.from(new Set(articles.map(article => article.category)))

  // Filter articles based on search query and selected category
  const filteredArticles = articles.filter(article => {
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesCategory = selectedCategory === null || article.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      }
    })
  }

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-800">
        <div className="absolute inset-0 bg-[url('/images/pattern-dots.png')] opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Articles et ressources en médecine sexuelle
            </motion.h1>
            
            <motion.p 
              className="text-lg mb-8 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Explorez nos articles rédigés par des experts en santé sexuelle pour vous informer et vous éduquer
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative max-w-lg mx-auto"
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-4 py-3 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 bg-white/10 backdrop-blur-sm text-white placeholder-white/70"
                placeholder="Rechercher un article, un sujet..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full lg:w-1/4">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Catégories</h3>
                
                <div className="space-y-2">
                  <button
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      selectedCategory === null
                        ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-medium'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                    onClick={() => setSelectedCategory(null)}
                  >
                    Tous les articles
                  </button>
                  
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        selectedCategory === category
                          ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-medium'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Articles populaires</h3>
                  
                  <div className="space-y-4">
                    {articles.slice(0, 3).map((article, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-12 h-12 rounded-md bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                            <Link href={`/articles/${article.id}`}>
                              {article.title}
                            </Link>
                          </h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{article.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Articles Grid */}
            <div className="w-full lg:w-3/4">
              {filteredArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredArticles.map((article, index) => (
                    <motion.article
                      key={article.id}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                      custom={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeIn}
                    >
                      <div className="p-6">
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
                            {article.category}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                            <Clock size={14} className="mr-1" /> {article.readTime}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                          <Link href={`/articles/${article.id}`}>{article.title}</Link>
                        </h3>
                        
                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{article.excerpt}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                              <User size={16} className="text-gray-500 dark:text-gray-400" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{article.author}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                                <Calendar size={12} className="mr-1" /> {article.date}
                              </p>
                            </div>
                          </div>
                          
                          <Button href={`/articles/${article.id}`} variant="outline" size="sm" className="flex items-center">
                            Lire
                            <ChevronRight size={16} className="ml-1" />
                          </Button>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              ) : (
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
                  <Search size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Aucun article trouvé</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Aucun article ne correspond à votre recherche. Essayez d'autres termes ou explorez toutes les catégories.
                  </p>
                  <Button onClick={() => { setSearchQuery(''); setSelectedCategory(null); }} variant="outline">
                    Voir tous les articles
                  </Button>
                </div>
              )}
              
              {/* Tags */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Sujets populaires</h3>
                
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(articles.flatMap(article => article.tags))).map((tag, index) => (
                    <button
                      key={index}
                      className="inline-flex items-center px-3 py-1.5 rounded-full text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-800 dark:hover:text-primary-300 transition-colors"
                      onClick={() => setSearchQuery(tag)}
                    >
                      <Tag size={14} className="mr-1" />
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Newsletter */}
              <div className="mt-12 bg-primary-50 dark:bg-primary-900/20 rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="md:flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Abonnez-vous à notre newsletter</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Recevez les derniers articles et actualités en médecine sexuelle directement dans votre boîte mail.
                    </p>
                  </div>
                  <div className="md:flex-1">
                    <form className="flex gap-2">
                      <input
                        type="email"
                        placeholder="Votre adresse email"
                        className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      />
                      <Button type="submit" variant="primary">S'abonner</Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
