import React, { useState } from 'react'

function Signup() {
  const initialState = { fullName: '', email: '', password: '', phone: '' }

  const [formData, setformData] = useState([
    initialState.fullName = '',
    initialState.email = '',
    initialState.password = '',
    initialState.phone = ''
  ])

  const handleSubmit = async(e) => {
    e.preventDefault()
    setformData([
      initialState.fullName = e.target[0].value,
      initialState.email = e.target[1].value,
      initialState.phone = e.target[2].value,
      initialState.password = e.target[3].value,
    ])
    const res = await fetch('http://localhost:5000/api/auth/signup',{
      method : 'POST',
      headers : {
        'Content-Type':'Application/json'
      },
      body : JSON.stringify({
        user : initialState
      })
    }).then(res => res.json())
    // handle page accoring to response
    if(res.status === 'ok'){
      alert('form submited')
    }
    if(res.status === 'error'){
      alert(res.error)
    }
    alert(res.msg)
  }

  return (
    <>
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="card">
              <h4 className="text-center font-bold  mb-4">Create your account</h4>
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
                    className="c form-control shadow-lg"
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
                    className="c form-control shadow-lg"
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
                    className="c form-control shadow-lg"
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
                    className="c form-control shadow-lg"
                    placeholder="Password"
                  />
                </div>
                <style jsx>
                  {`
                    .c{
                      background-color : #eee !important;
                      color:#000 !important;
                    }
                  `}
                </style>
                <div className="font-demi grey-hover mt-4 py-3 px-3">
                  Already a member?{' '}
                  <a href="/login" className="ml-2">
                    Signin
                  </a>
                </div>
                <div className="text-center mt-4">
                  <button className="bg-secondaryColor font-demi btn-blue" type="submit">
                    Signup
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

export default Signup
