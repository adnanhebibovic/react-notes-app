import {useEffect, useState} from 'react'

const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
  
    const handleMouseMove = (e) => {
      setPosition({x: e.clientX, y: e.clientY})
    }
  
    useEffect(() => {
      document.addEventListener('mousemove', (e) => handleMouseMove(e))
  
      return () => {
        document.removeEventListener('mousemove', (e) => handleMouseMove(e))
      }
    }, [])
  
    return position
  }

  export default useMousePosition