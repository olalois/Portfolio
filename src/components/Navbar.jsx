import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglass, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className=''>
      <div className="navline flex flex-row justify-between items-center px-7 py-2 pt-7 text-white 
       bg-black border-b-1 border-gray-900 font-sans font-semibold ">
        <div className="logo flex items-center gap-2 text-lg">
          <FontAwesomeIcon icon={faHourglass} />
          <span>Lois</span>
        </div>

        {/* Hamburger / Cancel icons (visible only on mobile) */}
        <div className="md:hidden">
          {menuOpen ? (
            <FontAwesomeIcon
              icon={faTimes}
              size="lg"
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer"
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              size="lg"
              onClick={() => setMenuOpen(true)}
              className="cursor-pointer"
            />
          )}
        </div>

        {/* Menu Links */}
        <div
          className={`menulinks h-7 md:flex md:flex-row gap-10 h-7 ${
            menuOpen
              ? 'absolute top-16 left-0 w-full bg-black flex flex-col items-center py-5 gap-6 z-10'
              : 'hidden md:flex'
          }`}
        >
          <ul className="flex flex-col md:flex-row md:gap-10 gap-6 text-center md:bg-black lg:bg-black bg-black/60 backdrop-blur-md text-white w-full md:w-auto py-5 md:py-0">
            <li className="hover:text-sm duration-300 ease-in-out">
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li className="hover:text-sm duration-300 ease-in-out">
              <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            </li>
            <li className="hover:text-sm duration-300 ease-in-out">
              <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
            </li>
            <li className="hover:text-sm duration-300 ease-in-out">
              <Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link>
            </li>
            <li className="hover:text-sm duration-300 ease-in-out">
              <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </li>
          </ul>
        </div>

        <div className="darkmode hidden md:block"></div>
      </div>
    </div>
  )
}

export default Navbar
