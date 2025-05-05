'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

const navItems = [
  { label: 'Accueil', href: '/' },
  { label: 'À Propos', href: '/a-propos' },
  { 
    label: 'Services', 
    href: '#',
    children: [
      { label: 'Consultations', href: '/consultations' },
      { label: 'Télémédecine', href: '/telemedecine' },
      { label: 'Formations', href: '/formations' },
    ]
  },
  { label: 'Articles', href: '/articles' },
  { label: 'Événements', href: '/evenements' },
  { label: 'Devenir Membre', href: '/adhesion' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  const toggleDropdown = (label: string) => {
    if (openDropdown === label) {
      setOpenDropdown(null)
    } else {
      setOpenDropdown(label)
    }
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              item.children ? (
                <div key={item.label} className="relative group">
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${
                      openDropdown === item.label 
                        ? 'text-primary-600 dark:text-primary-400' 
                        : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                    }`}
                  >
                    {item.label}
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                  
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-10"
                      >
                        <div className="py-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            
            <Button href="/consultations" variant="primary" size="sm">
              Prendre Rendez-vous
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <ThemeToggle className="mr-2" />
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white dark:bg-gray-900 shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        {item.label}
                        <ChevronDown size={16} className={`transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {openDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-1"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        pathname === item.href
                          ? 'text-primary-600 dark:text-primary-400 bg-gray-100 dark:bg-gray-800'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-4">
                <Button href="/consultations" variant="primary" className="w-full">
                  Prendre Rendez-vous
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}