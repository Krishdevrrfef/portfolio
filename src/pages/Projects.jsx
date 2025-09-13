import React from 'react'
import { motion } from 'framer-motion'

import placeholderImg from '../assets/placeholder.png'
import obtImg from '../assets/obt.png'
import svdImg from '../assets/svd.png'

export default function Projects() {
  const projects = [
    { 
      id: 1, 
      title: 'Portfolio Website', 
      desc: 'Built with React, Tailwind, and Vite', 
      img: placeholderImg, 
      live: '#', 
      code: 'https://github.com/Krishdevrrfef' 
    },
    { 
      id: 2, 
      title: 'Software Vulnerability Detection Tool', 
      desc: 'Django-based web app with Machine Learning for detecting software vulnerabilities', 
      img: svdImg, 
      live: '#', 
      code: 'https://github.com/Krishdevrrfef/Software-Vulnerability-Detection-tool' 
    },
    { 
      id: 3, 
      title: 'Online Transport Booking', 
      desc: 'This project is built using HTML, CSS, JavaScript (jQuery + Bootstrap + plugins), PHP, and MySQL.', 
      img: obtImg, 
      live: '#', // change if deployed
      code: 'https://github.com/Krishdevrrfef/Online-Booking-Transport' 
    }
  ]

  return (
    <section className="max-w-6xl mx-auto p-8">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-bold mb-6 text-center"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {projects.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ scale: 1.03, boxShadow: '0px 8px 24px rgba(0,0,0,0.15)' }}
            className="relative rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 border dark:border-gray-700 hover:border-indigo-500 transition-all max-w-md mx-auto"
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700">
              <img
                src={p.img}
                alt={p.title}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">{p.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{p.desc}</p>
              <div className="mt-3 flex gap-3">
                {p.live && (
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-1 bg-indigo-600 text-white rounded text-sm hover:bg-indigo-700 transition"
                  >
                    🔗 Live
                  </motion.a>
                )}
                {p.code && (
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-1 border rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    💻 Code
                  </motion.a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}



