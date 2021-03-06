import { useState } from 'react'
import { useTheme } from 'next-themes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme('class')
  

  function toggleTheme(){
    setMounted(!mounted)
    !mounted ? setTheme('dark') : setTheme('light')
  }

  return (
      <div className="flex items-center cursor-pointer ml-1 border p-2 rounded-lg hover:border-blue-400" onClick={toggleTheme}>
        {
          mounted ? <FontAwesomeIcon icon={faSun }/> : <FontAwesomeIcon icon={faMoon}/>
        }
      </div>
  )
}

export default ThemeSwitch
