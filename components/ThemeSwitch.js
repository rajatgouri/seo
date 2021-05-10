import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  return (
    <>
      <label
        for="toogle"
        className="flex items-center cursor-pointer px-4">
        <div className="relative">
          <input id="toogle" type="checkbox" className="sr-only" />
          <div className="w-10 h-4 bg-gray-400 rounded-full shadow-lg"></div>
          <div className="dot absolute w-6 h-6 bg-white rounded-full shadow-lg -left-1 -top-1 transition"></div>
        </div>
      </label>
      <style jsx>
        {`
        input:checked ~ .dot {
          transform: translateX(100%);
          background-color: #48bb78;
        }
        `}
      </style>
    </>
  )
}

export default ThemeSwitch
