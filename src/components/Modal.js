import React, { useEffect, useRef } from 'react'

export default function Modal({ isOpen, onClose }) {
  const modalRef = useRef(null)

  // Close the modal when pressing the Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  // Close modal when clicking outside of the modal content
  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 py-10 bg-black/50 backdrop-blur-sm"
      onClick={handleOverlayClick}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={modalRef}
        className="w-full max-w-md bg-white rounded-lg p-6 relative shadow-lg transition-transform transform scale-100"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          aria-label="Close modal"
        >
          <span className="text-xl font-bold">&times;</span>
        </button>

        {/* Modal Content */}
        <h2 id="modal-title" className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Contact Us
        </h2>

        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="text-[#00cdff] text-xl">✉️</span>
              Email: david@confra.xyz
          </div>

          <div className="flex items-center justify-center gap-2">
            <span className="text-[#00cdff] text-xl">💬</span>
            <a
              href="https://t.me/daveengel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 font-medium hover:underline"
            >
               Telegram: @daveengel
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
