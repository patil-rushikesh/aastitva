"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Target, Eye, Users, Award } from "lucide-react"

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { icon: Users, label: "Lives Impacted", value: "10,000+" },
    { icon: Award, label: "Projects Completed", value: "150+" },
    { icon: Target, label: "Communities Served", value: "25+" },
    { icon: Eye, label: "Years of Service", value: "8+" },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-yellow-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            About <span className="text-yellow-500">Aastitva Foundation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded with a vision to create lasting change, Aastitva Foundation has been at the forefront of community
            development, education, and healthcare initiatives.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-yellow-200">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-yellow-500 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                 Aastitva is committed to supporting individuals on their journey of self-discovery and social upliftment by fostering awareness, encouraging community involvement, and promoting values that build a compassionate and progressive society."
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-yellow-200">
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-yellow-500 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To nurture a society where every individual finds their true identity and contributes to a socially conscious, inclusive, and empowered tomorrow
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/main.png"
                alt="Hope Foundation team members working together in the community"
                className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
<div className="absolute inset-0 flex flex-col items-center justify-end pb-12 text-white text-center">
  <h4 className="text-4xl font-bold mb-2">Our Dedicated Team</h4>
  <p className="text-white/90">Working together for a better tomorrow</p>
</div>

            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-lg border border-yellow-200 hover:shadow-xl transition-all duration-300"
            >
              <stat.icon className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
