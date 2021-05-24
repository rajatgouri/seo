import logo from '@/data/logo.png'
import DesktopNav from './DesktopNav'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import ThemeSwitch from './ThemeSwitch'
import { useState, useEffect } from 'react'

import SideNav from './SideNav'
import '../styles/adminnavbar/dashboard.module.css'

const LayoutWrapper = ({ children, auth }) => {

  const [user, setUser] = useState([])
  const [token, setToken] = useState('')
  const [username,setUsername] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    setToken(token)
    const getServerSideProps = async () => {
      const res = await fetch(`http://localhost:5000/api/auth/dash`, {
        headers: {
          'Content-Type': 'application/json',
          token
        }
      })
      const userr = await res.json()

     setUser([userr.data])

      return {
        props: {
          userr
        }
      }
    }
    getServerSideProps()

    user.map(name=>{
      setUsername(name.fullName)
    })



  },[setUser,token])
  
  



  return (
    <SectionContainer >
      <div>
        <header className={auth ? 'custome-styling-admin-panel' : 'flex items-center justify-between p-10'}>
          {
            auth ? <NewAdminBar name={username} /> : <UserPanel />
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
        <Footer />
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


const NewAdminBar = ({ name }) => {

  const [username,setName] = useState('')
  useEffect(()=>{
    localStorage.setItem('Na',name)
    setName(name)
  },[])



  return (
    <div className="w-full bg-dark pl-3">
      <SideNav />
      <h1 className="userName">{ username ? username : localStorage.getItem('Na') }</h1>
      <style jsx>
        {`
        .userName{
          float: right;
          margin: 13px 52px;
        }
        `}
      </style>
    </div>
  )
}
export default LayoutWrapper