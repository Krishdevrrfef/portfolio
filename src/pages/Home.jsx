import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

// ✅ Import images from src/assets
import avatar from '../assets/hero-avatar.png'
import resumeFile from '/resume.pdf' // if resume is in public/

export default function Home() {
  return (
    <section className="min-h-[80vh] flex items-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side – Text Content */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white"
          >
            Hi, I’m Krishna Vardhan Reddy
          </motion.h1>

          <TypeAnimation
            sequence={[
              'Frontend Developer', 1500,
              'Anime Lover', 1500,
              'UI Designer', 1500,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            className="block text-indigo-600 dark:text-indigo-400 text-2xl mt-2 font-semibold"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-gray-700 dark:text-gray-300 max-w-xl"
          >
            I build fast, accessible, and beautiful web apps. I like anime and clean UI design. 
            Explore my projects and get in touch.
          </motion.p>

          {/* Buttons */}
          <div className="mt-8 flex gap-3">
            <Link
              to="/projects"
              className="px-4 py-2 bg-indigo-600 text-white rounded shadow hover:brightness-90 transition-all"
            >
              View Projects
            </Link>
            <a
              href={resumeFile}
              download
              className="px-4 py-2 border rounded text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
            >
              Download Resume
            </a>
            <a
              href="mailto:krishnavardhanreddysathi@gmail.com"
              className="px-4 py-2 bg-green-600 text-white rounded shadow hover:brightness-90 transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side – Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mx-auto w-full max-w-md md:ml-12"
        >
          <div className="rounded-2xl p-6 bg-white/60 dark:bg-gray-800/60 border dark:border-gray-700 shadow-lg backdrop-blur-lg transition-colors duration-500">
            <img
              src={avatar}
              alt="avatar"
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-white dark:border-gray-900 shadow-md transition-transform hover:scale-105 duration-300"
            />
            <div className="mt-4 text-center">
              <h3 className="font-bold text-xl text-gray-900 dark:text-white">Krishna Vardhan Reddy</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">React | Tailwind | Vite</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
