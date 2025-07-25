"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react"

export default function FooterSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/hopefoundation", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/hopefoundation", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/hopefoundation", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/hopefoundation", label: "LinkedIn" },
  ]

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Information */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6 text-yellow-400">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Our Location</p>
                    <p className="text-gray-300 leading-relaxed">
                      123 Hope Street, Community Center
                      <br />
                      City Name, State 123456
                      <br />
                      Country
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <a href="tel:+1234567890" className="text-gray-300 hover:text-yellow-400 transition-colors">
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a
                      href="mailto:info@hopefoundation.org"
                      className="text-gray-300 hover:text-yellow-400 transition-colors"
                    >
                      info@hopefoundation.org
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className="text-xl font-bold mb-4 text-yellow-400">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-yellow-500 p-3 rounded-full transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-full min-h-[400px]"
          >
            <h3 className="text-3xl font-bold mb-6 text-yellow-400">Find Us</h3>
            <div className="bg-gray-700 rounded-2xl overflow-hidden shadow-2xl h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1635959655654!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "350px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hope Foundation Location"
              ></iframe>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-yellow-400" />
              <p className="text-gray-300">© 2024 Hope Foundation NGO. All rights reserved.</p>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-yellow-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-yellow-400 transition-colors">
                Terms of Service
              </a>
              <a href="/transparency" className="hover:text-yellow-400 transition-colors">
                Transparency Report
              </a>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              Hope Foundation is a registered non-profit organization dedicated to creating positive change in
              communities worldwide.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
