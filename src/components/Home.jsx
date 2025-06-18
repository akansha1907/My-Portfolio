import React from 'react'
import { BiLogoGmail } from 'react-icons/bi'
import { FaFacebook, FaLinkedin, FaDiscord, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import bgImage from '../assets/img/myself.png'
import lightImg from '../assets/img/myself1.jpg'
import myImg from '../assets/img/Akansha-photo.png'
import Button from '../layouts/Button'
import { Typewriter } from 'react-simple-typewriter'

const Home = ({ darkMode }) => {
  const textColor = darkMode ? 'text-white' : 'text-black'
  const iconColor = darkMode ? 'white' : 'black'

  return (
    <div
      className={`min-h-screen flex flex-col justify-center lg:flex-row items-center pt-20 lg:pt-0  lg:px-24 px-5 ${
        darkMode ? 'bg-black' : 'bg-backgroundColor'
      }`}
    >
      <div className="flex flex-col items-center text-center lg:text-start lg:items-start w-full lg:w-3/4 space-y-4">
        <h1
          className={`text-2xl md:text-4xl font-semibold  lg:text-5xl leading-tight mt-5 ${textColor}`}
        >
          I'm Akansha <br />
          <span style={{ color: 'tomato' }}>
            <Typewriter
              words={[
                'Mobile App Developer',
                'React Native Developer',
                'Android Developer',
                'React Developer',
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>
        <p className={`pr-5 ${textColor}`}>
          Crafting high-paced, responsive, and user-friendly applications.
        </p>
        <a
          href="https://drive.google.com/file/d/1TTT5VCBjhVXZpwrp7zojWwdtoUXrq1UI/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button title="View CV" darkMode={darkMode} />
        </a>
        <br />
        {/* <h2 className={`text-base uppercase font-titleFont mb-4 ${textColor}`}>
          Find me in
        </h2> */}
        {/* <div className="flex gap-10">
          <a
            href="https://www.linkedin.com/in/merugu-v-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin color={`${iconColor}`} size={32} />
          </a>
          <a href="mailto:meruguvenkatesh96@gmail.com">
            <BiLogoGmail color={`${iconColor}`} size={32} />
          </a>
          <a
            href="https://github.com/MeruguVenkatesh2766"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub color={`${iconColor}`} size={32} />
          </a>
          <FaFacebook color={`${iconColor}`} size={32} />
        </div> */}
      </div>
      <div className="">
        <img width={450} src={myImg} alt="img" />
      </div>
    </div>
  )
}

export default Home
