import React from 'react'
import SkillCard from '../layouts/SkillCard'
import { skillPercentage, skillColors } from '../data'

const About = ({ darkMode }) => {
  console.log(darkMode)
  const textColor = darkMode ? 'text-white' : 'text-black'

  return (
    <div
      className={`min-h-screen flex flex-col justify-around lg:gap-8 lg:px-32 px-5 ${
        darkMode ? 'bg-black' : 'bg-backgroundColor'
      }`}
    >
      <div className="mt-10">
        <h1
          className={`text-center font-semibold text-4xl mt-16 lg:mt-8 mb-4 lg:mb-4 ${textColor}`}
        >
          About Me
        </h1>
      </div>

      <div className="px-3">
        <div className="mb-10">
          <h2 className={`text-2xl font-semibold ${textColor}`}>Who am I?</h2>
          <p className={`mt-4 lg:mt-2 ${textColor}`}>
            I’m a Front-end Developer with a passion for building seamless and
            engaging user experiences across mobile and web platforms. I work
            with languages like Java, Kotlin, JavaScript, and TypeScript to
            craft creative, efficient, and scalable applications. Specializing
            in responsive and user-friendly interfaces, I use tools like React
            Native, Firebase, and modern front-end practices to deliver
            high-quality solutions.
            <br />
            <br />
            Coding is often about debugging, and that's where I thrive —
            identifying issues, understanding root causes, and delivering
            effective solutions. I'm skilled at breaking down complex problems
            and turning them into clean, maintainable code. As a strong team
            player, I enjoy collaborating on ideas and continuously pushing the
            boundaries of what's possible in front-end development.
          </p>
        </div>
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:flex-wrap md:gap-12">
          <div className="mb-5 flex flex-col gap-4 flex-1 md:w-1/3">
            <h2
              className={`${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              } text-2xl font-semibold`}
            >
              Language Proficiency
            </h2>
            <SkillCard
              title="JavaScript"
              width={skillPercentage[85]}
              val={skillPercentage[85]}
              colors={skillColors.column1}
              darkMode={darkMode}
            />
            <SkillCard
              title="TypeScript"
              width={skillPercentage[80]}
              val={skillPercentage[80]}
              colors={skillColors.column1}
              darkMode={darkMode}
            />
            <SkillCard
              title="Java"
              width={skillPercentage[80]}
              val={skillPercentage[80]}
              colors={skillColors.column1}
              darkMode={darkMode}
            />
            <SkillCard
              title="Kotlin"
              width={skillPercentage[75]}
              val={skillPercentage[75]}
              colors={skillColors.column1}
              darkMode={darkMode}
            />
            <SkillCard
              title="Html"
              width={skillPercentage[85]}
              val={skillPercentage[85]}
              colors={skillColors.column1}
              darkMode={darkMode}
            />
            <SkillCard
              title="CSS"
              width={skillPercentage[85]}
              val={skillPercentage[85]}
              colors={skillColors.column1}
              darkMode={darkMode}
            />
          </div>

          <div className="mb-5 flex flex-col gap-4 flex-1 md:w-1/3">
            <h2
              className={`${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              } text-2xl font-semibold`}
            >
              Frameworks & Tech
            </h2>
            <SkillCard
              title="React"
              width={skillPercentage[90]}
              val={skillPercentage[90]}
              colors={skillColors.column2}
              darkMode={darkMode}
            />
            <SkillCard
              title="Redux"
              width={skillPercentage[90]}
              val={skillPercentage[90]}
              colors={skillColors.column2}
              darkMode={darkMode}
            />
            <SkillCard
              title="React Native"
              width={skillPercentage[90]}
              val={skillPercentage[90]}
              colors={skillColors.column2}
              darkMode={darkMode}
            />
            <SkillCard
              title="Tailwind CSS"
              width={skillPercentage[80]}
              val={skillPercentage[80]}
              colors={skillColors.column2}
              darkMode={darkMode}
            />
            <SkillCard
              title="Jest"
              width={skillPercentage[75]}
              val={skillPercentage[75]}
              colors={skillColors.column2}
              darkMode={darkMode}
            />
            <SkillCard
              title="Android Native"
              width={skillPercentage[70]}
              val={skillPercentage[70]}
              colors={skillColors.column2}
              darkMode={darkMode}
            />
          </div>

          <div className="mb-5 flex flex-col gap-4 flex-1 md:w-1/3">
            <h2
              className={`${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              } text-2xl font-semibold`}
            >
              Databases & Others
            </h2>
            <SkillCard
              title="Firebase"
              width={skillPercentage[80]}
              val={skillPercentage[80]}
              colors={skillColors.column3}
              darkMode={darkMode}
            />
            <SkillCard
              title="Git"
              width={skillPercentage[90]}
              val={skillPercentage[90]}
              colors={skillColors.column3}
              darkMode={darkMode}
            />
            <SkillCard
              title="REST API Integration"
              width={skillPercentage[90]}
              val={skillPercentage[90]}
              colors={skillColors.column3}
              darkMode={darkMode}
            />
            <SkillCard
              title="Jira Software"
              width={skillPercentage[90]}
              val={skillPercentage[90]}
              colors={skillColors.column3}
              darkMode={darkMode}
            />
            <SkillCard
              title="Android Studio"
              width={skillPercentage[85]}
              val={skillPercentage[85]}
              colors={skillColors.column3}
              darkMode={darkMode}
            />
            <SkillCard
              title="Xcode"
              width={skillPercentage[80]}
              val={skillPercentage[80]}
              colors={skillColors.column3}
              darkMode={darkMode}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
