import React from 'react'

export default function Section({ title, subtitle, children, bgColor = 'bg-white', textColor = 'text-gray-900' }) {
  return (
    <section className={`${bgColor} py-16 px-4 sm:px-6 lg:px-8 min-h-screen content-center`}>
      <div className="max-w-7xl mx-auto text-center">
        {title && <h2 className={`text-4xl sm:text-5xl font-bold mb-4 ${textColor}`}>{title}</h2>}
        {subtitle && <p className={`text-lg sm:text-xl mb-12 ${textColor === 'text-gray-900' ? 'text-gray-700' : 'text-white/70'}`}>{subtitle}</p>}
        <div className="flex flex-wrap justify-center gap-8">
          {children}
        </div>
      </div>
    </section>
  )
}
