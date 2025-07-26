"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-yellow-400 to-yellow-600"
        >
          <div className="flex flex-col items-center justify-center w-full text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="w-16 h-16 border-4 border-white border-t-transparent rounded-full mb-4 mx-auto"
            />
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-3xl font-bold text-white mb-2 flex flex-col items-center justify-center"
            >
              <img
                src="/aastitvaLogo.png"
                alt="Astitva Logo"
                className="w-14 h-14 bg-white rounded-full object-contain mb-2 mx-auto"
              />
              Aastitva Foundation
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-white/90 text-center"
            >
              Empowering Identity, Embracing Existence
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
