import React, { useState } from 'react'
import Link from 'next/link'
import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

import style from '../styles/login/style.module.css'

function Login() {
  const initialState = { email: '', password: '' }
  const [formData, setformData] = useState(initialState)

  const handleSubmit = (e) => {
    e.preventDefault()
    setformData(initialState)
  }

  return (
    <>
      <PageSeo
        title={`Login - ${siteMetadata.author}`}
        description={'Login -' + siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <div className={style.wraper}>
        <div className={style.innerWraper}>
          <div className={style.header}>
            <img src="https://img.icons8.com/cute-clipart/64/000000/user-male.png" />
            <b>Login</b>
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

              <div className={style.other}>
                <p>Forgot your password ?</p>
                <Link href="/signup"><p>Register</p></Link>
              </div>

              <button type="submit" className={style.btn}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
