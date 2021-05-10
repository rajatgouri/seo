import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleToggle = () => {
    alert('theme wil change')
  }
  

  return (
    <>
      <div className="flex items-center cursor-pointer px-4">
        {/* tommorow start from here... */}
        <label for="toggle" className="cursor-pointer" onClick={handleToggle} >
          <div className="flex items-center">
            <span className="mr-1">
              <FontAwesomeIcon icon={faSun} />
            </span>
            <input type="checkbox" id="toggle" className="sr-only" />
            <div className="w-14 h-8 flex items-center bg-gray-400 rounded-full p-1">
              <div className="circle w-6 h-6 bg-white rounded-full shadow-md"></div>
            </div>
            <span className="text-sm">
              <span className="ml-1">
                <FontAwesomeIcon icon={faMoon} />
              </span>
            </span>
          </div>
        </label>
      </div>
    </>
  )
}

export default ThemeSwitch
