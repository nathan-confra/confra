import React from 'react'

export default function Button({ children, onClick }) {
    return (
      <button
        onClick={onClick}
        className="w-[15em] px-8 py-4 bg-[#00cdff] rounded-full text-white text-lg font-medium hover:bg-[#00b3e6] transition-colors"
      >
        {children}
      </button>
    )
  }
  