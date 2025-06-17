// App.jsx
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Education from './components/Education'
import Experience from './components/Experience'
// import Portfolio from "./components/Portfolio";
import Footer from './components/Footer'
import Timeline from './components/Timeline'

const App = () => {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={darkMode ? 'bg-black' : 'light-mode'}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main>
        <div id="home">
          <Home darkMode={darkMode} />
        </div>

        <div id="about">
          <About darkMode={darkMode} />
        </div>

        {/* <div id="services">
          <Services darkMode={darkMode} />
        </div> */}

        <div id="education">
          <Education darkMode={darkMode} />
        </div>

        <div id="experience">
          <Experience darkMode={darkMode} />
        </div>

        {/* <div id="portfolio">
          <Portfolio />
        </div> */}

        <div id="services">
          <Timeline darkMode={darkMode} />
        </div>
      </main>
      <div id="contact" className="mt-20">
        <Footer />
      </div>
    </div>
  )
}

export default App
