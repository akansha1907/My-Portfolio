import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { MdOutlineLightMode } from 'react-icons/md'
import { MdDarkMode } from 'react-icons/md'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [menu, setMenu] = useState(false)

  const handleChange = () => {
    setMenu(!menu)
  }

  const closeMenu = () => {
    setMenu(false)
  }

  return (
    <div className="w-full z-10 fixed top-0 left-0">
      {/* <div> */}
      <div
        className={`flex flex-row justify-between p-5 md:px-32 px-5 ${
          darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
        } shadow-md`}
      >
        {/* <div className="flex flex-row items-center cursor-pointer"> */}
        <h1 className="text-3xl font-semibold">Portfolio</h1>
        {/* </div> */}

        <nav
          className={`hidden lg:flex flex-row items-center text-lg font-medium gap-8 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="
    hover:text-brightColor
    hover:text-xl
   
    transition-all
    cursor-pointer
  "
          >
            Home
          </Link>

          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="
    hover:text-brightColor
    hover:text-xl
    
    transition-all
    cursor-pointer
  "
          >
            About Me
          </Link>

          <Link
            to="experience"
            spy={true}
            smooth={true}
            duration={500}
            className="
    hover:text-brightColor
    hover:text-xl
  
    transition-all
    cursor-pointer
  "
          >
            Experience
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            className="
    hover:text-brightColor
    hover:text-xl
   
    transition-all
    cursor-pointer
  "
          >
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="
    hover:text-brightColor
    hover:text-xl
    
    transition-all
    cursor-pointer
  "
          >
            Contact Me
          </Link>

          <div
            className={`cursor-pointer hover:${'text-brightColor'} transition-all`}
            onClick={toggleDarkMode}
          >
            {darkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
          </div>
        </nav>

        <div className="lg:hidden flex items-center justify-between gap-4">
          <div
            className={`cursor-pointer hover:${'text-brightColor'} transition-all `}
            onClick={toggleDarkMode}
          >
            {darkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
          </div>
          <div className="flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <HiOutlineMenuAlt1 size={28} onClick={handleChange} />
            )}
          </div>
        </div>
      </div>

      <div
        className={`${
          menu ? 'translate-x-0' : '-translate-x-full'
        } lg:hidden flex flex-col absolute ${
          darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
        } left-0 top-20 font-semibold text-2xl text-center z-10 pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
      >
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className={`hover:${
            darkMode ? 'text-gray-300' : 'text-brightColor'
          } transition-all cursor-pointer`}
          onClick={closeMenu}
        >
          Home
        </Link>

        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className={`hover:${
            darkMode ? 'text-gray-300' : 'text-brightColor'
          } transition-all cursor-pointer`}
          onClick={closeMenu}
        >
          About Me
        </Link>

        <Link
          to="experience"
          spy={true}
          smooth={true}
          duration={500}
          className={`hover:${
            darkMode ? 'text-gray-300' : 'text-brightColor'
          } transition-all cursor-pointer`}
          onClick={closeMenu}
        >
          Experience
        </Link>

        <Link
          to="services"
          spy={true}
          smooth={true}
          duration={500}
          className={`hover:${
            darkMode ? 'text-gray-300' : 'text-brightColor'
          } transition-all cursor-pointer`}
          onClick={closeMenu}
        >
          Projects
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          onClick={closeMenu}
          className="
    hover:text-brightColor
    hover:text-xl
    
    transition-all
    cursor-pointer
  "
        >
          Contact Me
        </Link>
      </div>
      {/* </div> */}
    </div>
  )
}

export default Navbar
