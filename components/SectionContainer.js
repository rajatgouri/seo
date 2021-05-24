import { useState, useEffect } from 'react'
export default function SectionContainer({ children }) {

  const [admin, setAdmin] = useState(false)

  useEffect(()=>{
    const token = localStorage.getItem('authToken')

    if (token) {
      setAdmin(true)
    }
  
  })
 
  return (
    <div className={admin ? 'max-w-full' : 'max-w-3xl px-4 mx-auto sm:px-6 md:max-w-2xl xl:max-w-5xl xl:px-0'}>
      {children}



      {/* custome styling cause tailwind not wokring */}
      <style jsx>
        {`
          .max-w-3xl{
            max-width:71rem;
          }
          @media screen and (max-with:700px){
            max-width:48rem
          }
          `}
      </style>
    </div>
  )
}
