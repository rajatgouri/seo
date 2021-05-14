import logo from '@/data/logo.png'
import DesktopNav from './DesktopNav'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import ThemeSwitch from './ThemeSwitch'
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faUserEdit } from "@fortawesome/free-solid-svg-icons"

import SideNav from './SideNav'
import '../styles/adminnavbar/dashboard.module.css'

const LayoutWrapper = ({ children }) => {

  // set auth to false to user mode
  // this will change after auth 

  const [auth, setAuth] = useState(true)

  const [admin, setAdmin] = useState(true)

  return (
    <SectionContainer>
      <div>
        <header className={auth && admin ? 'custome-styling-admin-panel' : 'flex items-center justify-between p-10'}>
          {
            auth && admin ? <NewAdminBar /> : <UserPanel />
          }
          {
            auth && admin ? <Profile /> : false
          }
          <div className="flex items-center text-base leading-5">
            {
              auth && admin ? false : <DesktopNav />
            }
            {
              auth && admin ? false : <ThemeSwitch />
            }
          </div>

        </header>
        <main className={auth ? 'mb-auto max-w-full h-full c-main': 'mb-auto max-w-full h-full'}>
          {children}
        </main>
        <style jsx>
          {`
             .custome-styling-admin-panel{
              position:fixed;
               top:0px;
               left:0px;
               width:100%;
               line-height:55px;
               height:80px !important;
               display:flex; 
               justify-content:flex-end;
               padidng:5px 10px !important;
             }
             .c-main{
               margin-top:100px;
               margin-left:54px;
               overflow-wrap:anywhere;
               color:#000;
             }
             `}
        </style>
        <Footer />
      </div>
    </SectionContainer>
  )
}

const Profile = () => {
  const [open, setOpen] = useState(false)



  return (
    <div style={{ position: 'absolute', padding: '6px 30px' }}>
      {/* <img src="https://source.unsplash.com/random" className="object-cover h-16 w-16 rounded-full border-blue-200 cursor-pointer p-1 hover:shadow-xl" onClick={() => { setOpen(!open); }} />
      {
        open ? <Model /> : null
      } */}
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

const UserPanel = () => {
  return (
    <div>
      <Link href="/">
        <div className="flex items-center justify-between">
          <div className="mr-3">
            <img src={logo} height="100%" width="200px" />
          </div>
        </div>
      </Link>
    </div>
  )
}


const NewAdminBar = () => {
  return (
    <div className="w-full bg-dark pl-3">
      <SideNav />
    </div>
  )
}
export default LayoutWrapper