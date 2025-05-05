'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), [])
  
  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={`p-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${
        theme === 'dark' 
          ? 'bg-gray-200 text-gray-900 hover:bg-gray-300' 
          : 'bg-gray-800 text-gray-100 hover:bg-gray-700'
      } ${className}`}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0, rotate: -30 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        exit={{ scale: 0.5, opacity: 0, rotate: 30 }}
        transition={{ duration: 0.2 }}
        key={theme}
      >
        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
      </motion.div>
    </button>
  )
}
