import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJs, faReact, faGitAlt } from '@fortawesome/free-brands-svg-icons'
import { SiTailwindcss } from "react-icons/si"

const Skills = () => {
  const skills = [
    {
      icon: <FontAwesomeIcon icon={faHtml5} className='text-4xl text-gray-200' />,
      title: "HTML"
    },
    {
      icon: <FontAwesomeIcon icon={faCss3Alt} className='text-4xl text-gray-200' />,
      title: "CSS"
    },
    {
      icon: <FontAwesomeIcon icon={faJs} className='text-4xl text-gray-200' />,
      title: "JavaScript"
    },
    {
      icon: <FontAwesomeIcon icon={faReact} className='text-4xl text-gray-200' />,
      title: "React JS"
    },
    {
      icon: <SiTailwindcss className='text-4xl text-gray-200' />,
      title: "Tailwind CSS"
    },
    {
      icon: <FontAwesomeIcon icon={faGitAlt} className='text-4xl text-gray-200' />,
      title: "GIT"
    },
  ]

  return (
    <div className='bg-black min-h-screen text-gray-100 flex flex-col items-center font-sans'>

      {/* Header Section */}
      <header className='flex flex-col text-center gap-2 mt-20 px-3'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-400'>
          My Skillset
        </h1>
        <h4 className='text-sm sm:text-base md:text-lg tracking-wide font-semibold text-gray-300'>
          Tools and Technologies I'm Proficient In
        </h4>
      </header>

      {/* Skills Grid */}
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-10 px-5 sm:px-10 md:px-20 pb-20 w-full max-w-6xl">
        {skills.map((skill, index) => (
          <li
            key={index}
            className='list-none flex flex-col justify-center items-center gap-3 p-5 border border-gray-500 rounded-lg hover:scale-105 duration-300 ease-in-out w-full h-40 shadow-md shadow-gray-500 text-center'
          >
            <span className='w-10 h-10 flex justify-center items-center'>{skill.icon}</span>
            <h2 className='text-xl sm:text-2xl font-semibold'>{skill.title}</h2>
          </li>
        ))}
      </div>
    </div>
  )
}

export default Skills
