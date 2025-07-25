"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bell, Calendar, Users, Heart } from "lucide-react"

interface Notice {
  _id: string
  title: string
  content: string
  date: string
  type: "event" | "announcement" | "urgent"
}

export default function NoticeBoard() {
  const [notices, setNotices] = useState<Notice[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchNotices()
  }, [])

  useEffect(() => {
    if (notices.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % notices.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [notices.length])

  const fetchNotices = async () => {
    try {
      const response = await fetch("/api/notices")
      const data = await response.json()
      setNotices(data)
    } catch (error) {
      console.error("Failed to fetch notices:", error)
    } finally {
      setLoading(false)
    }
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "event":
        return <Calendar className="w-5 h-5" />
      case "urgent":
        return <Bell className="w-5 h-5" />
      default:
        return <Users className="w-5 h-5" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "event":
        return "bg-blue-500"
      case "urgent":
        return "bg-red-500"
      default:
        return "bg-green-500"
    }
  }

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md mx-auto border border-yellow-200">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md mx-auto border border-yellow-200 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>

      <div className="flex items-center mb-4">
        <Heart className="w-6 h-6 text-yellow-500 mr-2" />
        <h3 className="text-xl font-bold text-gray-800">Notice Board</h3>
      </div>

      <AnimatePresence mode="wait">
        {notices.length > 0 && (
          <motion.div
            key={currentIndex}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            <div className="flex items-center space-x-2">
              <div className={`p-2 rounded-full ${getTypeColor(notices[currentIndex].type)} text-white`}>
                {getIcon(notices[currentIndex].type)}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800 text-sm">{notices[currentIndex].title}</h4>
                <p className="text-xs text-gray-500">{new Date(notices[currentIndex].date).toLocaleDateString()}</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{notices[currentIndex].content}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {notices.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {notices.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-yellow-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </motion.div>
  )
}
