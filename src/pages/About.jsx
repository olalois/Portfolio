import React from 'react'

const About = () => {
  return (
    <div className='about-page bg-black text-gray-300 flex justify-center p-3 sm:p-5 font-sans'>
      <div className="container mx-auto flex flex-col justify-center items-center p-4 sm:p-6 md:p-10 w-full max-w-6xl gap-7">
        
        {/* Header Section */}
        <header className='w-full flex flex-col justify-center items-center gap-1 text-center'>
          <h1 className='text-3xl sm:text-4xl text-gray-500 font-bold'>About Me</h1>
          <h4 className='text-sm sm:text-base md:text-lg'>My Journey into the World of Web Development</h4>
        </header>

        {/* Intro Paragraph */}
        <div className="body1 border border-gray-500 p-4 sm:p-6 md:p-8 flex justify-center items-center rounded-xl text-sm sm:text-base md:text-lg text-center md:text-left w-full md:w-4/5 lg:w-3/4 leading-relaxed">
          I am Lois, a front-end developer with a knack for creating engaging and user-friendly web experiences. My journey started with a fascination for the virtual aspects of the web, leading me to master HTML, CSS, and JavaScript. I thrive on turning design concepts into functional interactive realities. I am always eager to learn new technologies and collaborate on exciting projects, focused on continuous growth and creating elegant solutions.
        </div>

        {/* Main Content Section */}
        <div className="body2 w-full flex justify-center items-center rounded-xl lg:w-3/4">
          <div className="box flex flex-col lg:flex-row w-full gap-6">
            
            {/* Left Side (Skills & Education) */}
            <div className="box1 w-full lg:w-1/2 p-0">
              <div className="border border-gray-600 px-5 py-7 rounded-lg mb-6">
                <h2 className='text-2xl text-gray-500 font-bold mb-3 text-center md:text-left'>My Skills</h2>
                <p className="skills text-sm sm:text-base md:text-lg text-gray-300">
                  HTML, CSS, JavaScript, React JS, Tailwind CSS, Automated A.I Response
                </p>
              </div>

              <div className="border border-gray-600 px-5 py-7 rounded-lg">
                <h2 className='text-2xl text-gray-500 font-bold mb-3 text-center md:text-left'>Education</h2>
                <p className="education text-sm sm:text-base md:text-lg text-gray-300">
                  Bachelor of Science in Computer Science, Landmark University, Nigeria. [2021 - 2024]
                </p>
              </div>
            </div>

            {/* Right Side (Experience) */}
            <div className="box2 w-full lg:w-1/2 p-4 border border-gray-600 rounded-lg">
              <h2 className='text-2xl text-gray-500 font-bold mb-5 text-center md:text-left'>Experience</h2>

              <div className='gap flex flex-col mb-5'>
                <h3 className='font-bold text-white text-base sm:text-lg'>Front-End Developer (Freelance)</h3>
                <h4 className='text-sm text-gray-400'>Remote | 2023 – Present</h4>
                <span className='text-sm sm:text-base mt-2 leading-relaxed'>
                  Built responsive and user-friendly web pages using HTML, CSS, and JavaScript. Designed and implemented a Reset Password page integrated with an existing website for a client. Collaborated with another front-end developer to refine UI components and improve site responsiveness. Cloned and recreated modern website interfaces to enhance practical experience and strengthen design skills.
                </span>
              </div>

              <hr className='border-orange-200 my-3' />

              <div className='gap flex flex-col mb-5'>
                <h3 className='font-bold text-white text-base sm:text-lg'>Front-End Intern – National Institute for Information Technology (NIIT)</h3>
                <h4 className='text-sm text-gray-400'>Abuja, Nigeria | 2023</h4>
                <span className='text-sm sm:text-base leading-relaxed'>
                  Advanced practical knowledge of frontend tools and web technologies. Completed multiple tasks focused on layout structuring, UI styling, and component design. Learned industry practices for building responsive and cross-browser compatible websites.
                </span>
              </div>

              <hr className='border-orange-200 my-3' />

              <div className='gap flex flex-col'>
                <h3 className='font-bold text-white text-base sm:text-lg'>Volunteer – Frontend Mentor</h3>
                <h4 className='text-sm text-gray-400'>Online | 2023 – Present</h4>
                <span className='text-sm sm:text-base leading-relaxed'>
                  Participated in community challenges to replicate real-world UI/UX designs. Improved coding efficiency, layout precision, and problem-solving skills through peer feedback.
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
