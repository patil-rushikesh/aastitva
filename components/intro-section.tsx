"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import NoticeBoard from "./notice-board"

export default function IntroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="home"
      className="hero-surface min-h-[90vh] bg-gradient-to-br from-yellow-50 via-white to-amber-50 flex items-center justify-center px-3 sm:px-6 py-10 sm:py-16"
    >
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left px-2 sm:px-0"
        >
          <p className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-gray-500 mb-3">
            Reg.No. : MH/1488/2019/Pune
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Empowering Identity,
            <span className="block text-yellow-500 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Embracing Existence
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 leading-relaxed">
            Aastitva Foundation is a nonprofit based in Pune, Maharashtra. Since 2017, we have supported individuals on
            their journey of self-discovery, education, and social upliftment while building a compassionate and
            progressive community.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center lg:justify-start gap-3 sm:gap-4">
            <a
              href="#contribute"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 px-6 py-3 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Donate Now
            </a>
            <a
              href="#membership"
              className="inline-flex items-center justify-center rounded-full border border-yellow-300 px-6 py-3 text-gray-800 font-semibold hover:border-yellow-500 hover:text-yellow-700 transition-all duration-300"
            >
              Become a Member
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center mt-4 sm:mt-0"
        >
          <NoticeBoard />
        </motion.div>
      </div>
    </section>
  )
}
