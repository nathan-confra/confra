'use client'
import { useRef, useState, useEffect } from 'react'

/**
 * Reusable component that fades and slides content in
 * once it enters the viewport.
 */
export default function FadeInSection({ children, offset = '0px' }) {
  const domRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            // Once visible, unobserve to avoid repeated triggers
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: offset }
    )

    if (domRef.current) {
      observer.observe(domRef.current)
    }

    return () => {
      if (domRef.current) observer.unobserve(domRef.current)
    }
  }, [offset])

  /**
   * Tailwind classes:
   * - "opacity-0 translate-y-4": initial hidden state
   * - "opacity-100 translate-y-0": final visible state
   * - "transition-all duration-700 ease-out": smooth animation
   */
  return (
    <div
      ref={domRef}
      className={`w-full min-h-screen content-center items-center text-center transition-all duration-700 ease-out transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4'
      }`}
    >
      {children}
    </div>
  )
}
