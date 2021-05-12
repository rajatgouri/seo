import React, { useState } from 'react'
import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import style from '../styles/signup/style.module.css'
import Link from 'next/link'

function Signup() {
  const initialState = { fullName: '', email: '', password: '', phone: '' }
  const [formData, setformData] = useState(initialState)

  const handleSubmit = (e) => {
    e.preventDefault()
    
  }



  return (
    <>
      <PageSeo
        title={`Signup - ${siteMetadata.author}`}
        description={'Login -' + siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <div className={style.wraper}>
        <div className={style.innerWraper}>
          <div className={style.header}>
            <img src="https://img.icons8.com/cute-clipart/64/000000/user-male.png" />
            <b>Sign Up</b>
            <p></p>
          </div>
          <div className={style.form}>
            <form>
              <div className={style.row}>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="demo@example.com"/>
              </div>
              <div className={style.row}>
                <label htmlFor="username">Password</label>
                <input type="password" placeholder="*****"/>
              </div>
              <div className={style.row}>
                <label htmlFor="username">Confirm password</label>
                <input type="password" placeholder="*****"/>
              </div>


              <div className={style.other}>
                <p>Already have an account </p>
                <Link href="/login"><p>Login</p></Link>
              </div>

              <button type="submit" className={style.btn}>Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
