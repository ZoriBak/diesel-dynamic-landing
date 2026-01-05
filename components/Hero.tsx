
'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center">
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-7xl font-bold tracking-tight"
      >
        SPILL<br/>THE REAL
      </motion.h1>
    </section>
  )
}
