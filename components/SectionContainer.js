import { useState } from "react"

export default function SectionContainer({ children }) {
  
  
  // set auth to false to user mode
  // this will change after auth 
  const [admin, setAdmin] = useState(true);
  
  return (
    <>
      <div className={admin ? "cutomee" : "cusstom px-1 sm:px-1 md:px-2 mx-auto xl:px-14"}>
        {children}
      </div>

      <style jsx>
      {`
      .cutomee{
        display:block;
        margin:0 157px;
      }
      `}
      </style>
    </>
  )
}
