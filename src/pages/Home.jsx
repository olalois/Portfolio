import React from 'react'
import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import officePic from '../assets/officePic.jpg';
// import { faCode, faLaptop, faMobile } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <div className='flex justify-center items-center px-5 sm:px-10 md:px-16 lg:px-20 bg-black'>

      <main className='flex flex-col-reverse md:flex-row bg-black w-full min-h-screen justify-center items-center px-2 md:px-6 lg:px-10 m-0'>
        
        {/* Section 1: Text Content */}
        <div className="section1 bg-black flex flex-col justify-center w-full md:w-1/2 gap-3 text-center md:text-left mt-10 md:mt-0">
          <motion.h1
            className="title text-gray-400 text-base sm:text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 0.5 }}
          >
            FRONT-END DEVELOPER
          </motion.h1>

          <motion.h1
            className="name text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 0.5 }}
          >
            LOIS OLA
          </motion.h1>

          <motion.h1
            className="description text-gray-300 text-sm sm:text-base md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 0.5 }}
          >
            I turn ideas into responsive and user friendly web experiences
          </motion.h1>

          <div className="clicks flex flex-col sm:flex-row gap-5 sm:gap-10 justify-center md:justify-start mt-5">
            <button className="mywork p-3 bg-gray-700 text-white rounded-xl pointer w-full sm:w-auto">
              <Link to="/projects">View My Work</Link>
            </button>
            <button className="contact p-3 bg-transparent text-white border border-gray-200 rounded-xl w-full sm:w-auto">
              <Link to="/contact">Get in Touch</Link>
            </button>
          </div>
        </div>

        {/* Section 2: Image */}
        <div className="section2 flex justify-center items-center w-full md:w-1/2 mb-10 md:mb-0 mt-10 md:mt-0 relative ">
          {/* <span className="relative flex size-5 left-108 bottom-50">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-75"></span>
            <span className="relative inline-flex size-5 rounded-full bg-black"></span>
          </span> */}

          <motion.img
            src={officePic}
            alt="Profile"
            className='w-72 sm:w-64 md:w-80 lg:w-96 h-auto rounded-4xl shadow-md shadow-blue-400'
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </div>
      </main>
    </div>
  )
}

export default Home
