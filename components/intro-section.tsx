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
      className="min-h-screen bg-gradient-to-br from-yellow-50 to-white flex items-center justify-center px-2 sm:px-4 py-6 sm:py-10"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left px-2 sm:px-0"
        >
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-400 mb-2 ml-0 sm:ml-1 mt-[-10px] sm:mt-[-30px] md:mt-[-50px] lg:mt-[-70px]">
            Reg.No. : MH/1488/2019/Pune
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-6 leading-tight">
            Welcome to{" "}
            <span className="text-yellow-500 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Aastitva Foundation
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-3 sm:mb-4 md:mb-2 leading-relaxed">
            Aastitva is a non profit organisation based out of Pune, Maharashtra. It took its form in the year 2017. It was formed with the aim of providing a guiding light to those striving to make an identity and to help build a socially conscious tomorrow.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center mt-4 sm:mt-0 md:mt-[-60px] lg:mt-[-150px]"
        >
          <NoticeBoard />
        </motion.div>
      </div>
    </section>
  )
}
