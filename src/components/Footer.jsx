import React from 'react'
import { BiLogoGmail } from 'react-icons/bi'
import { BsInstagram } from 'react-icons/bs'
import {
  FaFacebook,
  FaLinkedin,
  FaDiscord,
  FaGithub,
  FaHackerrank,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:text-white px-6 py-20  lg:px-32 shadow-md ">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-8 lg:flex-row justify-between items-center">
        {/* Logo or Name */}
        <div className="text-3xl font-bold cursor-pointer text-center lg:text-left text-white">
          Akansha.
        </div>

        {/* Social Icons */}
        <div className="flex gap-8">
          <a
            href="https://www.linkedin.com/in/akansha1719/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brightColor transition-all text-white"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="mailto:gautamakansha312@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brightColor transition-all text-white"
          >
            <BiLogoGmail size={30} />
          </a>
          <a
            href="https://www.hackerrank.com/profile/gautamakansha312"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brightColor transition-all text-white"
          >
            <FaHackerrank size={30} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brightColor transition-all text-white"
          >
            <BsInstagram size={30} />
          </a>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="mt-10 text-center text-sm text-gray-600 dark:text-gray-200">
        &copy; {new Date().getFullYear()} Akansha. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
