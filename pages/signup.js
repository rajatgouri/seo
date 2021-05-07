import LayoutWrapper from '@/components/LayoutWrapper'
import React, { useState } from 'react'

function Signup() {
  const initialState = { fullName: '', email: '', password: '', phone: '' }
  const [formData, setformData] = useState(initialState)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <LayoutWrapper>
        <div className="container my-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8 col-md-8 col-sm-12 col-12">
              <div className="card">
                <h1 className="text-center font-bold mb-4 text-3xl">Create your account</h1>
                <form onSubmit={handleSubmit}>
                  <div className="input-group mt-4">
                    <input
                      value={formData.fullName}
                      onChange={(e) => {
                        setformData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }}
                      required
                      name="fullName"
                      type="text"
                      className="placeholder-gray-500::placeholder	block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="input-group mt-4">
                    <input
                      value={formData.email}
                      onChange={(e) => {
                        setformData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }}
                      required
                      name="email"
                      type="email"
                      className="placeholder-gray-500::placeholder	block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
                      placeholder="Email"
                    />
                  </div>
                  <div className="input-group mt-4">
                    <input
                      value={formData.phone}
                      onChange={(e) => {
                        setformData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }}
                      required
                      name="phone"
                      type="text"
                      className="placeholder-gray-500::placeholder	block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="input-group mt-4">
                    <input
                      value={formData.password}
                      onChange={(e) => {
                        setformData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }}
                      required
                      name="password"
                      type="password"
                      className="placeholder-gray-500::placeholder	block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
                      placeholder="Password"
                    />
                  </div>
                  <div className="mt-4 py-3 px-3 hover-click grey-hover">
                    Already a member?{' '}
                    <a href="/login" className="ml-2 text-blue-600	">
                      Signin
                    </a>
                  </div>
                  <div className="text-center mt-4">
                    <button className="btn-blue" type="submit">
                      Signup
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

export default Signup
