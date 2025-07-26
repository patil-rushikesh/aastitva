"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Heart, Phone, Mail, MapPin } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Contribute", href: "#contribute" },
    { name: "Membership", href: "#membership" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-yellow-500 text-white py-2 px-2 sm:px-4 text-xs sm:text-sm hidden md:block">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4 sm:space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+91 77200 01488</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>contact@aastitva.org</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Pune, Maharashtra</span>
            </div>
          </div>
          <div className="text-xs sm:text-sm font-medium">Working Since 2017</div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-yellow-200"
            : "bg-white/90 backdrop-blur-sm"
        }`}
        style={{ marginTop: scrolled ? "0" : "40px" }}
      >
        <div className="max-w-6xl mx-auto px-2 sm:px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 sm:space-x-3 cursor-pointer"
              onClick={() => scrollToSection("#home")}
            >
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg">
                  <img
                    src="/aastitvaLogo.png"
                    alt="Astitva Logo"
                    className="w-10 h-10 sm:w-14 sm:h-14 object-contain"
                  />
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-base sm:text-xl font-bold text-gray-800">Aastitva Foundation</h1>
                <p className="text-xs text-gray-600 -mt-1">Empowering Identity, Embracing Existence</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  onClick={() => scrollToSection(item.href)}
                  className="relative text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-200 py-2 px-1 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                </motion.button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.15)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("#contribute")}
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Donate Now
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
            >
              <div className="px-2 py-4 sm:px-4 sm:py-6 space-y-3 sm:space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left py-2 sm:py-3 px-2 sm:px-4 text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg font-medium transition-all duration-200"
                  >
                    {item.name}
                  </motion.button>
                ))}

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-3 sm:pt-4 border-t border-gray-200"
                >
                  <button
                    onClick={() => scrollToSection("#contribute")}
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full font-semibold shadow-lg"
                  >
                    Donate Now
                  </button>
                </motion.div>

                {/* Mobile Contact Info */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: (navItems.length + 1) * 0.1 }}
                  className="pt-3 sm:pt-4 border-t border-gray-200 space-y-2 sm:space-y-3"
                >
                  <div className="flex items-center space-x-2 sm:space-x-3 text-gray-600">
                    <Phone className="w-4 h-4 text-yellow-500" />
                    <span className="text-xs sm:text-sm">+91 77200 01488</span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 text-gray-600">
                    <Mail className="w-4 h-4 text-yellow-500" />
                    <span className="text-xs sm:text-sm">contact@aastitva.org</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className={`${scrolled ? "h-16" : "h-24"} transition-all duration-300`}></div>
    </>
  )
}
