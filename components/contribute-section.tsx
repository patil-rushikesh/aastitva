"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { QrCode, CreditCard, Heart, Banknote } from "lucide-react"

export default function ContributeSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contribute" className="py-20 bg-gradient-to-br from-yellow-50 to-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            Support Our <span className="text-yellow-500">Cause</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your contribution helps us continue our mission of transforming lives and building stronger communities.
            Every donation funds tangible change on the ground.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-4 sm:p-8 shadow-2xl border border-yellow-200 min-w-0"
          >
            <div className="text-center mb-5 sm:mb-8">
              <QrCode className="w-10 h-10 sm:w-16 sm:h-16 text-yellow-500 mx-auto mb-2 sm:mb-4" />
              <h3 className="text-base sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2">Quick Donation</h3>
              <p className="text-sm sm:text-base text-gray-600">Scan the QR code to donate instantly</p>
            </div>
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="w-full flex justify-center">
                <div className="bg-gray-100 p-4 rounded-2xl w-90 sm:w-64">
                  <img
                    src="/Qr.png"
                    alt="QR Code for donations"
                    className="w-full h-auto aspect-square object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-4">Scan with any UPI app to donate securely</p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                <span className="bg-yellow-100 text-yellow-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  Google Pay
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  PhonePe
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">Paytm</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl p-4 sm:p-8 shadow-2xl border border-yellow-200 min-w-0"
          >
            <div className="text-center mb-5 sm:mb-8">
              <CreditCard className="w-10 h-10 sm:w-16 sm:h-16 text-yellow-500 mx-auto mb-2 sm:mb-4" />
              <h3 className="text-base sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2">Bank Transfer</h3>
              <p className="text-sm sm:text-base text-gray-600">Direct bank transfer for larger donations</p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {/* <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-700">Account Name:</span>
                  <span className="text-gray-800">Hope Foundation NGO</span>
                </div>
              </div> */}

              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-2">
                  <span className="font-semibold text-gray-700">Account Number:</span>
                  <span className="text-gray-800 font-mono break-all sm:break-normal">1014169776</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-2">
                  <span className="font-semibold text-gray-700">IFSC Code:</span>
                  <span className="text-gray-800 font-mono break-all sm:break-normal">KKBK0001757</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-2">
                  <span className="font-semibold text-gray-700">Bank Name:</span>
                  <span className="text-gray-800">Kotak Mahindra Bank</span>
                </div>
              </div>


            </div>

            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-yellow-50 rounded-xl border border-yellow-200">
              <div className="flex items-center">
                {/* <Heart className="w-5 h-5 text-yellow-600 mr-2" /> */}
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> Please send us the transaction details at{" "}
                  <a href="mailto:contact@aastitva.org" className="underline">
                    contact@aastitva.org
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 sm:mt-20 text-center"
        >
          <div className="bg-white rounded-2xl p-4 sm:p-7 shadow-lg border border-yellow-200 max-w-2xl mx-auto ">
            <Banknote className="w-9 h-9 sm:w-12 sm:h-12 text-yellow-500 mx-auto mb-2 sm:mb-4 " />
            <h3 className="text-base sm:text-xl font-bold text-gray-800 mb-2 sm:mb-4">Tax Benefits</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              All donations to Aastitva Foundation are eligible for tax deduction under Section 80G of the Income Tax Act.
              You will receive a tax-exempt receipt for your contribution.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
