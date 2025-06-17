import React from 'react'
import EducationCard from '../layouts/EducationCard'

const Education = (props) => {
  const { darkMode } = props
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5">
      <h1
        className={`text-center font-semibold text-4xl mt-24 lg:mt-16 mb-8 lg:mb-7 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}
      >
        Education
      </h1>

      <div className=" bg-white rounded-md">
        <EducationCard
          darkMode={darkMode}
          values={{
            degree:
              'Bachelor of Technology in Computer Science & Information Technology',
            college: 'Mahatma Jyotiba Phule Rohilkhand University Bareilly',
            timePeriod: 'July 2019 - May 2023',
            grade: '8 CGPA',
          }}
        />
      </div>
    </div>
  )
}

export default Education
