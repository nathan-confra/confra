import React from 'react'

export default function Card({ title, description, children }) {
  return (
    <div className="w-full sm:w-80 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center">
      <div className="w-12 h-12 mb-4">
        {children} {/* Icon or Image */}
      </div>
      <h3 className="text-gray-900 dark:text-white text-2xl font-bold mb-2 text-center">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 text-base text-center">{description}</p>
    </div>
  )
}
