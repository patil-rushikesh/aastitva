"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { MessageCircle, Users, QrCode, ArrowRight } from "lucide-react"

export default function MemberSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi, I'm interested in becoming a member of your NGO!")
    const whatsappUrl = `https://wa.me/message/XPEVRULGH7JRP1?src=qr`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="membership" className="py-20 bg-gradient-to-br from-white to-yellow-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Become a <span className="text-yellow-500">Member</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join our community of changemakers and be part of the solution. Together, we can create a lasting impact on
            society.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-yellow-200">
              <Users className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Join Us?</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                  Be part of meaningful community projects
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                  Develop leadership and social skills
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                  Network with like-minded individuals
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                  Make a real difference in people's lives
                </li>
              </ul>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppClick}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Join via WhatsApp</span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-2xl border border-yellow-200"
          >
            <div className="text-center mb-8">
              <QrCode className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Quick Join</h3>
              <p className="text-gray-600">Scan to start your membership journey</p>
            </div>

            <div className="flex justify-center mb-6">
              <div
                className="bg-gray-100 p-4 rounded-2xl cursor-pointer hover:bg-gray-200 transition-colors duration-300"
                onClick={handleWhatsAppClick}
              >
                <img
                  src="/wp_qr.png"
                  alt="WhatsApp QR Code for membership"
                  className="w-48 h-48"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-500 mb-4">Scan with your phone camera or WhatsApp</p>
              <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                <p className="text-green-800 text-sm">
                  <strong>Message on above Whatsapp Account:</strong>
                  <br />
                  "Hi, I'm interested in becoming a member of your NGO!"
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-yellow-200">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-yellow-600">1</span>
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Connect</h4>
            <p className="text-gray-600">Reach out via WhatsApp or scan the QR code</p>
          </div>

          <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-yellow-200">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-yellow-600">2</span>
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Interview</h4>
            <p className="text-gray-600">Brief conversation about your interests and availability</p>
          </div>

          <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-yellow-200">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-yellow-600">3</span>
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Welcome</h4>
            <p className="text-gray-600">Join our team and start making a difference</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
