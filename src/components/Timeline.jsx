import React from 'react'
import { projects } from '../data'

const Timeline = ({ darkMode }) => {
  return (
    // <section className="min-h-screens py-10 x-4 md:px-10 lg:px-20">
    <div
      className={`min-h-screen flex flex-col justify-center lg:px-32 px-5 py-20 ${
        darkMode ? 'bg-black' : 'bg-backgroundColor'
      }`}
    >
      <h1
        className={`text-center font-semibold text-4xl pt-24 lg:pt-16 pb-8 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}
      >
        Live Projects
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 shadow-md transition-all hover:-translate-y-2 flex flex-col justify-between ${
              darkMode
                ? 'bg-gray-800 text-gray-100 shadow-md-dark'
                : 'bg-white text-gray-800'
            }`}
          >
            <div>
              <h3 className="text-xl font-semibold text-brightColor mb-2">
                {project.title}
              </h3>
              <p className="text-sm mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((techItem, i) => (
                  <span
                    key={i}
                    className={`px-2 py-1 text-xs ${
                      !darkMode ? 'bg-gray-200' : 'bg-gray-700'
                    } rounded-full`}
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            </div>
            {project.playStoreLink && (
              <a
                href={project.playStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-sm  text-white bg-green-600 hover:bg-brightColor px-4 py-2 rounded-md transition duration-300 text-center"
              >
                View on Play Store
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline
