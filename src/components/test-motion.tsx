'use client'

import { motion } from 'framer-motion'

export default function TestMotion() {
  return (
    <div className="p-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-blue-100 p-5 rounded-lg"
      >
        <h2>Test de Framer Motion</h2>
        <p>Ce composant teste si framer-motion fonctionne correctement.</p>
      </motion.div>
    </div>
  )
}
