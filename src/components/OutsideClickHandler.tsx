import React, { useEffect, useRef } from 'react'

interface OutsideClickHandlerProps {
  children: React.ReactNode
  callback: () => void
}

const OutsideClickHandler = ({ children, callback }: OutsideClickHandlerProps) => {
  const wrapper = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapper.current && !wrapper.current.contains(e.target as Node)) {
        callback()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [wrapper, callback])

  return <div ref={wrapper}>{children}</div>
}

export default OutsideClickHandler
