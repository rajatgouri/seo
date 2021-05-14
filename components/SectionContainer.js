import { useState } from "react"

export default function SectionContainer({ children }) {
  
  
  // set auth to false to user mode
  // this will change after auth 
  const [admin, setAdmin] = useState(false);
  
  return (
    <>
      <div className={admin ? "px-10 cusstom" : "cusstom px-4 mx-auto xl:max-w-5xl xl:px-0 "}>
        {children}
      </div>
    </>
  )
}
