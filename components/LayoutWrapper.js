import logo from '@/data/logo.png'
import DesktopNav from './DesktopNav'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { useState } from 'react'



const LayoutWrapper = ({ children }) => {
  const[auth,setAuth] = useState(true)

  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label="Tailwind CSS Blog">
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <img src={logo} height="100%" width="200px" />
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            {
              auth ?  <Profile/> : <DesktopNav />
            }
           {
             auth ? true :  <ThemeSwitch />
           }
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

const Profile = () =>{
  return(
    <div>
      <img src="https://tusd.tusdemo.net/files/95ddf64eaffaeb8e05fdd1e3a3af7b9c+gyeJfvYENIK_CtrXazivYd0QeRX0qbYZ.FBvp5l9hivHxe617Gxv85ZHzG8T8gCKuHqjkJ5vbVc4heEM3FOTNkEt8k0TeYiNHwwVxeWWMP8AZBpIEPuYVz.QTTVvkAAn" className="object-cover h-16 w-16 rounded-full border-blue-200 cursor-pointer hover:border-blue-500 border-2 p-1 hover:shadow-lg"/>

    </div>
  )
}

export default LayoutWrapper
