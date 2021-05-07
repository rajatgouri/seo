import React, { useState } from 'react'
import Link from 'next/link'

function Login() {
  const initialState = { email: '', password: '' }
  const [formData, setformData] = useState(initialState)
  const handleSubmit = (e) => {
    e.preventDefault()
    setformData(initialState)
  }

  return (
    <>
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="card">
              <h4 className="text-center font-bold mb-4">
                Sign in to your account
              </h4>
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
                <div className="d-flex justify-content-between">
                  <Link href="/signup">
                    <div className=" mt-4 py-3 px-3 hover-click">
                      Become a member <span className="ml-2">Signup</span>
                    </div>
                  </Link>
                  <p className=" font-demi  mt-4 py-3 px-3 hover-click">
                    Forgot Password
                  </p>
                </div>
                <div className="text-center mt-5">
                  <button className="" type="submit">
                    Signin
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
