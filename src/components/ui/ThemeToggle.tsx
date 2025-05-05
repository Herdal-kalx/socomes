'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), [])
  
  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={`relative p-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 shadow-sm ${
        theme === 'dark' 
          ? 'bg-primary-100 text-primary-600 hover:bg-primary-200' 
          : 'bg-gray-800 text-yellow-300 hover:bg-gray-700'
      } ${className}`}
      aria-label="Toggle theme"
    >
      <div className="relative h-5 w-5 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={theme}
            initial={{ y: theme === 'dark' ? -30 : 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: theme === 'dark' ? 30 : -30, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="absolute"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Indicateur visuel du mode actif */}
      <span className="sr-only">{theme === 'dark' ? 'Mode clair' : 'Mode sombre'}</span>
      <motion.span
        className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-primary-500 dark:bg-yellow-400 border-2 border-white dark:border-gray-800"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 400, damping: 10 }}
      />
    </button>
  )
}
