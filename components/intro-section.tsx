"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import NoticeBoard from "./notice-board"

export default function IntroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-yellow-50 to-white flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <h1 className="text-5xl lg:text-5xl font-bold text-gray-800 mb-6   leading-tight">
            Welcome to{" "}
            <span className="text-yellow-500 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Aastitva Foundation
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Aastitva is a non profit organisation based out of Pune, Maharashtra. It took its form in the year 2017. It was formed with the aim of providing a guiding light to those striving to make an identity and to help build a socially conscious tomorrow.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Learn More About Our Mission
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center"
        >
          <NoticeBoard />
        </motion.div>
      </div>
    </section>
  )
}
