import logo from '@/data/logo.png'
import DesktopNav from './DesktopNav'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import ThemeSwitch from './ThemeSwitch'
import { useState, useEffect } from 'react'
import API from '../utils/API'
import SideNav from './SideNav'
import '../styles/adminnavbar/dashboard.module.css'

const LayoutWrapper = ({ children, auth }) => {
  const [token, setToken] = useState('')
  useEffect(() => {
    const token = localStorage.getItem('authToken')
    setToken(token)
    const getServerSideProps = async () => {
      API({
        url: 'auth/dash',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('authToken')}`
        }
      }).then(res => {
        console.log(res)
      })

    }
  }, [token])





  return (
    <SectionContainer >
      <div>
        <header className={auth ? 'custome-styling-admin-panel' : 'flex items-center justify-between p-10'}>
          {
            auth ? <NewAdminBar /> : <UserPanel />
          }
          <div className="flex items-center text-base leading-5">
            {
              auth ? false : <DesktopNav />
            }
            {
              auth ? false : <ThemeSwitch />
            }
          </div>

        </header>
        <main className={auth ? 'mb-auto max-w-full h-full c-main' : 'flex flex-col items-center'}>
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
        {
          auth ? false : <Footer />
        }
      </div>
    </SectionContainer>
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