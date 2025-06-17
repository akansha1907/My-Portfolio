const EducationCard = (props) => {
  const { title, values, darkMode } = props
  const { degree, college, timePeriod, grade } = values

  return (
    <div
      className={`flex flex-col items-center ${
        darkMode ? 'bg-gray-900' : 'bg-backgroundColor'
      } transition-all hover:-translate-y-2 w-full py-5 gap-2 cursor-pointer rounded-md ${
        darkMode ? 'shadow-md-dark' : 'shadow-md'
      }`}
    >
      <div style={{ minHeight: '150px' }} className="w-full px-4 text-center">
        {/* Degree Title */}
        <h2
          className={`text-xl font-semibold ${
            darkMode ? 'text-white' : 'text-black'
          }`}
        >
          {degree}
        </h2>

        {/* College Name - different color */}
        <h2 className={`text-lg font-medium ${'text-brightColor'}`}>
          {college}
        </h2>

        {/* Time Period */}
        <p
          className={`text-sm mt-2 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {timePeriod}
        </p>

        {/* Grade */}
        <p
          className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
        >
          Grade: {grade}
        </p>
      </div>
    </div>
  )
}
export default EducationCard
