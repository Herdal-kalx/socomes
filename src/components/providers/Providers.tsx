'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode, useEffect, useState } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  // Utilisé pour éviter les problèmes d'hydratation
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
    
    // Ajout d'une classe pour les transitions de thème
    document.documentElement.classList.add('theme-transition')
    
    // Nettoyage de l'effet
    return () => {
      document.documentElement.classList.remove('theme-transition')
    }
  }, [])

  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="light" 
      enableSystem 
      disableTransitionOnChange={false}
    >
      {mounted && children}
    </ThemeProvider>
  )
}