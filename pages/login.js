import React, { useState } from 'react'
import Link from 'next/link'
import LayoutWrapper from '@/components/LayoutWrapper'

function Login() {
  const initialState = { email: '', password: '' }
  const [formData, setformData] = useState(initialState)
  const handleSubmit = (e) => {
    e.preventDefault()
    setformData(initialState)
  }

  return (
    <>
      <LayoutWrapper>
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12 col-12">
              <div className="card">
                <h1 className="text-center font-bold mb-5 text-3xl">Sign in to your account</h1>
                <form onSubmit={handleSubmit}>
                  <div className="mt-4">
                    <input
                      required
                      value={formData.email}
                      onChange={(e) => {
                        setformData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }}
                      name="email"
                      type="email"
                      className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
                      placeholder="Email/Number"
                    />
                  </div>
                  <div className="mt-4">
                    <input
                      required
                      value={formData.password}
                      onChange={(e) => {
                        setformData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }}
                      name="password"
                      type="password"
                      className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
                      placeholder="Password"
                    />
                  </div>
                  <div className="flex justify-between">
                    <Link href="/signup">
                      <div className=" mt-4 py-3 px-3 grey-hover">
                        Become a member <span className="ml-2 text-blue-600	">Signup</span>
                      </div>
                    </Link>
                    <p className=" font-demi  mt-4 py-3 px-3 hover-click grey-hover">
                      Forgot Password
                    </p>
                  </div>
                  <div className="text-center mt-5">
                    <button className="btn-blue" type="submit">
                      Signin
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </>
  )
}

export default Login
