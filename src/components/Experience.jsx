import React from 'react'
import EducationCard from '../layouts/EducationCard'
import { techstackDescriptions } from '../data'
import { expertiseDescriptions } from '../data'
import ServicesCard from '../layouts/ServicesCard'

const Experience = ({ darkMode }) => {
  return (
    <div
      className={`min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-10 ${
        darkMode ? 'bg-black' : 'bg-backgroundColor'
      }`}
    >
      <h1
        className={`text-center font-semibold text-4xl pt-24 lg:pt-16 pb-8 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}
      >
        Work Experience
      </h1>

      <div className={`rounded-md`}>
        {/* Add the new work experience section here */}
        <div
          className={`p-6 rounded-md ${darkMode ? 'bg-gray-900' : 'bg-white'} ${
            darkMode ? 'text-white' : ''
          }`}
        >
          <h2 className="font-semibold text-xl mb-2">
            Ikrux-Client: GlobalLogic &nbsp;&nbsp;|&nbsp;&nbsp;{' '}
            <span
              className={`${
                darkMode
                  ? 'text-gray-400 dark:text-gray-400'
                  : 'text-gray-400 dark:text-gray-400'
              }`}
            >
              {' '}
              Software Developer 1
            </span>
          </h2>
          <p
            className={`text-sm font-normal leading-none ${
              darkMode
                ? 'text-gray-400 dark:text-gray-500'
                : 'text-gray-400 dark:text-gray-500'
            }`}
          >
            March 2025 - June 2025
          </p>
          <ul className="list-disc pl-8 pt-4 space-y-3">
            <li
              className={`text-md font-normal leading-relaxed ${
                darkMode
                  ? 'text-gray-500 dark:text-gray-400'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              Developed highly dynamic, schema-driven nested forms using{' '}
              <strong>React Native CLI, TypeScript, </strong> and{' '}
              <strong>Formik</strong> to handle complex user input flows.
              Modularized form logic and components to improve{' '}
              <strong>code reusability and maintainability</strong>
              {' across the app.'}
            </li>
            <li
              className={`text-md font-normal leading-relaxed ${
                darkMode
                  ? 'text-gray-500 dark:text-gray-400'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              Optimized core rendering logic, leading to a
              <strong> 70–75% performance improvement</strong>, in form handling
              and screen transitions. Collaborated closely with backend
              developers to ensure seamless{' '}
              <strong>data integration and validation</strong> using real-time
              schemas.
            </li>
            <li
              className={`text-md font-normal leading-relaxed ${
                darkMode
                  ? 'text-gray-500 dark:text-gray-400'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              Implemented scalable UI structures, enabling faster onboarding of
              new form types without major code changes.
            </li>
          </ul>
        </div>
        <br />
        <div
          className={`p-6 rounded-md ${darkMode ? 'bg-gray-900' : 'bg-white'} ${
            darkMode ? 'text-white' : ''
          }`}
        >
          <h2 className="font-semibold text-xl mb-2">
            Zealth Health Tech Pvt. Ltd. &nbsp;&nbsp;|&nbsp;&nbsp;{' '}
            <span
              className={`${
                darkMode
                  ? 'text-gray-400 dark:text-gray-400'
                  : 'text-gray-400 dark:text-gray-400'
              }`}
            >
              {' '}
              Mobile Application Developer
            </span>
          </h2>
          <p
            className={`text-sm font-normal leading-none ${
              darkMode
                ? 'text-gray-400 dark:text-gray-500'
                : 'text-gray-400 dark:text-gray-500'
            }`}
          >
            June 2024 - February 2025
          </p>
          <ul className="list-disc pl-8 pt-4 space-y-3">
            <li
              className={`text-md font-normal leading-relaxed ${
                darkMode
                  ? 'text-gray-500 dark:text-gray-400'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              Developed the LivFitt app, a React Native fitness discovery
              platform, Android‐development leading to a 30% increase in yoga
              class bookings and delivering personalized diet plans and workout
              recommendations to users.{' '}
              <strong>enhancing user experience</strong> and performance.
            </li>
            <li
              className={`text-md font-normal leading-relaxed ${
                darkMode
                  ? 'text-gray-500 dark:text-gray-400'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              Architected{' '}
              <strong>reusable hooks and custom UI components</strong> to
              accelerate development and maintain visual and functional
              consistency across the app.
            </li>
            <li
              className={`text-md font-normal leading-relaxed ${
                darkMode
                  ? 'text-gray-500 dark:text-gray-400'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              Integrated <strong>PayU SDK</strong> to enable secure and seamless
              payments, and implemented{' '}
              <strong>Push notification services</strong> for real‐time user
              engagement. Deployed a cross‐platform app built from scratch using{' '}
              <strong>
                React Native, achieving 100K+ downloads on both the Play Store
                and App Store.
              </strong>{' '}
            </li>
          </ul>
        </div>
        <br />
        <div
          className={`p-6 rounded-md ${darkMode ? 'bg-gray-900' : 'bg-white'} ${
            darkMode ? 'text-white' : ''
          }`}
        >
          <h2 className="font-semibold text-xl mb-2">
            Quara Holding &nbsp;&nbsp;|&nbsp;&nbsp;{' '}
            <span
              className={`${
                darkMode
                  ? 'text-gray-400 dark:text-gray-400'
                  : 'text-gray-400 dark:text-gray-400'
              }`}
            >
              {' '}
              Associate Software Engineer
            </span>
          </h2>
          <p
            className={`text-sm font-normal leading-none ${
              darkMode
                ? 'text-gray-400 dark:text-gray-500'
                : 'text-gray-400 dark:text-gray-500'
            }`}
          >
            February 2023 - April 2024
          </p>
          <ul className="list-disc pl-8 pt-4 space-y-3">
            <li
              className={`text-md font-normal leading-relaxed ${
                darkMode
                  ? 'text-gray-500 dark:text-gray-400'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              Contributed to the{' '}
              <strong>Wasalt Business App and Wasalt App</strong> , supporting
              the addition of 5K+ property listings.{' '}
              <strong>Improved code quality and application performance</strong>{' '}
              by <strong>fixing over 1,000 Sonar issues</strong>. Ensured
              maintainability by adhering to best coding practices and
              addressing critical concerns.
            </li>
            <li
              className={`text-md font-normal leading-relaxed ${
                darkMode
                  ? 'text-gray-500 dark:text-gray-400'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              Implemented <strong>unit test cases</strong> using{' '}
              <strong>Jest</strong>in a{' '}
              <strong>test‐driven environment(TDD)</strong>, achieving over 70%
              code coverage across the application. , ensuring data integrity
              and eliminating 100% manual effort in validation.
            </li>
          </ul>
        </div>
        <br />
        {/* <div
          className={`p-6 rounded-md ${darkMode ? 'bg-gray-900' : 'bg-white'} ${
            darkMode ? 'text-white' : ''
          }`}
        >
          <h2 className="font-semibold text-xl mb-2">
            Avrutti Research &nbsp;&nbsp;|&nbsp;&nbsp;{' '}
            <span
              className={`${
                darkMode
                  ? 'text-gray-400 dark:text-gray-400'
                  : 'text-gray-400 dark:text-gray-400'
              }`}
            >
              {' '}
              Android Developer Intern
            </span>
          </h2>
          <p
            className={`text-sm font-normal leading-none ${
              darkMode
                ? 'text-gray-400 dark:text-gray-500'
                : 'text-gray-400 dark:text-gray-500'
            }`}
          >
            October 2022 - February 2023
          </p>
          <ul className="list-disc pl-8 pt-4 space-y-3">
            <li
              className={`text-md font-normal leading-relaxed ${
                darkMode
                  ? 'text-gray-500 dark:text-gray-400'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              Leveraged <strong>Prompt Engineering</strong> and{' '}
              <strong>Python Development</strong>, integrating{' '}
              <strong>
                AI models like ChatGPT, Gemini-AI, Llama, and Qwen with Python
              </strong>{' '}
              for generating large-scale, high-quality datasets,{' '}
              <strong>achieving an 80% efficiency improvement</strong> with
              efficient algorithms.
            </li>
            <li
              className={`text-md font-normal leading-relaxed ${
                darkMode
                  ? 'text-gray-500 dark:text-gray-400'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              <strong>Automated data validation pipelines</strong>, ensuring
              data integrity and{' '}
              <strong>eliminating 100% manual effort in validation</strong> and
              Excel reporting for large-scale datasets.
            </li>
            <li
              className={`text-md font-normal leading-relaxed ${
                darkMode
                  ? 'text-gray-500 dark:text-gray-400'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              Contributed to modifying the main{' '}
              <strong>Python-based server</strong> and engineering responsive,
              user-friendly note-types using JavaScript and jQuery, enhancing
              UI/UX and overall product performance.
            </li>
          </ul>
        </div> */}
        <br />
        {/* Techsatck cards */}
        {/* <div className="flex flex-wrap items-center justify-between w-full gap-5 mt-4 mb-4">
          <div className="w-full md:w-custom-width lg:w-custom-width">
            <EducationCard title="Frontend Development" values={techstackDescriptions.Frontend} darkMode={darkMode} />
          </div>
          <div className="w-full md:w-custom-width lg:w-custom-width">
            <EducationCard title="Backend Development" values={techstackDescriptions.Backend} darkMode={darkMode} />
          </div>
          <div className="w-full md:w-custom-width lg:w-custom-width">
            <EducationCard title="Database Management" values={techstackDescriptions.Database} darkMode={darkMode} />
          </div>
          <div className="w-full md:w-custom-width lg:w-custom-width">
            <EducationCard title="Cross-Platform Development" values={techstackDescriptions.CrossPlatform} darkMode={darkMode} />
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Experience
