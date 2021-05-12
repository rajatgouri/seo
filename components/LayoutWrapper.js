import logo from '@/data/logo.png'
import DesktopNav from './DesktopNav'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import ThemeSwitch from './ThemeSwitch'
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faUserEdit } from "@fortawesome/free-solid-svg-icons"


const LayoutWrapper = ({ children }) => {

  // set auth to false to user mode
  // this will change after auth 

  const [auth, setAuth] = useState(true)

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
              auth ? <Profile /> : <DesktopNav />
            }
            {
              auth ? true : <ThemeSwitch />
            }
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

const Profile = () => {
  const [open, setOpen] = useState(false)



  return (
    <div style={{ position: 'absolute' }}>
      <img src="https://source.unsplash.com/random" className="object-cover h-16 w-16 rounded-full border-blue-200 cursor-pointer p-1 hover:shadow-xl" onClick={()=>{setOpen(!open);}}/>
      {
        open ?  <Model /> : null
      }
    </div>
  )
}

const Model = () => {
  return (
    <div className="model transition rounded-md shadow-lg">
      <ul>
      <Link href="/admin/dashboard"><li className="hover:bg-blue-200"><FontAwesomeIcon icon={faSignOutAlt} />Dashboard</li></Link>
        <li className="hover:bg-blue-200"><FontAwesomeIcon icon={faUserEdit} />	&nbsp; Profile</li>
        <li className="hover:bg-blue-200"><FontAwesomeIcon icon={faSignOutAlt} />	&nbsp;&nbsp; Logout</li>
      </ul>
      <style jsx>
        {`
         .model{
          height : 100px;
          width : 130px;
          background : #fff;
          position : absolute;
          left : -30px;
          top : 65px;
         }
         .model li{
           margin-top : 3px;
           cursor : pointer;
           padding : 5px 10px;
         }
        `}
      </style>
    </div>
  )
}

export default LayoutWrapper
