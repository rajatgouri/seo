import { useState } from 'react'
import { useTheme } from 'next-themes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme('class')


  

  // When mounted on client, now we can show the UI

  

  function toggleTheme(){
    setMounted(!mounted)
    if(!mounted){
      setTheme('light')
    }else{
      setTheme('dark')
    }
  }

  return (
      <div className="flex items-center cursor-pointer ml-1 border p-2 rounded-lg hover:border-blue-400" onClick={toggleTheme}>
        {
          mounted ? <FontAwesomeIcon icon={faMoon}/> : <FontAwesomeIcon icon={faSun}/>
        }
      </div>
  )
}

export default ThemeSwitch
