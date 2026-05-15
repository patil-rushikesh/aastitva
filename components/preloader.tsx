"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const hasSeenLoader = typeof window !== "undefined" && window.sessionStorage.getItem("aastitvaLoaderSeen") === "true"
    if (hasSeenLoader) {
      setLoading(false)
      return
    }

    window.sessionStorage.setItem("aastitvaLoaderSeen", "true")
    document.body.style.overflow = "hidden"
    const timer = setTimeout(() => {
      setLoading(false)
      document.body.style.overflow = ""
    }, 1200)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = ""
    }
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-yellow-100"
        >
          <div className="relative flex flex-col items-center justify-center w-full text-center px-6">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-64 w-64 rounded-full bg-yellow-200/40 blur-3xl"></div>
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 flex flex-col items-center"
            >
              <div className="relative mb-5">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute -inset-3 rounded-full border border-yellow-400/40"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute -inset-6 rounded-full border border-yellow-300/30"
                />
                <div className="relative h-20 w-20 rounded-full bg-white shadow-xl flex items-center justify-center">
                  <img
                    src="/aastitvaLogo.png"
                    alt="Aastitva Foundation logo"
                    className="h-12 w-12 object-contain"
                  />
                </div>
              </div>

              <motion.h1
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl sm:text-3xl font-bold text-gray-900"
              >
                Aastitva Foundation
              </motion.h1>
              <motion.p
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="text-gray-600 mt-2 text-sm sm:text-base"
              >
                Empowering Identity, Embracing Existence
              </motion.p>

              <div className="mt-6 flex items-center gap-2 text-xs sm:text-sm text-yellow-700">
                <span className="uppercase tracking-[0.3em] font-semibold">Loading</span>
                <span className="flex gap-1">
                  <motion.span
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                    className="h-2 w-2 rounded-full bg-yellow-500"
                  />
                  <motion.span
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                    className="h-2 w-2 rounded-full bg-yellow-500"
                  />
                  <motion.span
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
                    className="h-2 w-2 rounded-full bg-yellow-500"
                  />
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
