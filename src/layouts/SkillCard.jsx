import React from 'react'

const SkillCard = (props) => {
  const gradientStyle = {
    background: `linear-gradient(to right, ${props.colors.c1} 0%, ${props.colors.c2} ${props.width}, transparent ${props.width}, transparent 100%)`,
  }

  return (
    <div>
      <div className="flex justify-between mt-2">
        <h4
          className={`mt-1 ${
            props.darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          {props.title}
        </h4>
        <h4
          className={`mt-1 ${
            props.darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          {props.val}
        </h4>
      </div>
      <div className="w-full h-2 bg-slate-300 rounded-full mt-1">
        <div
          style={gradientStyle}
          className="h-2 rounded-full transition-all duration-500"
        ></div>
      </div>
    </div>
  )
}

export default SkillCard
