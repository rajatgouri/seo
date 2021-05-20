import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ToastContainer , toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function Login() {
  const router = useRouter()

  const initialState = { email: '', password: '' }

  useEffect(()=>{
    if(localStorage.getItem('authToken')){
      router.push('/')
    }
  },[])


  const [formData, setformData] = useState([
    initialState.email = '',
    initialState.password = ''
  ])

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(e)
    setformData([
      initialState.email = e.target[0].value,
      initialState.password = e.target[1].value
    ])
    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: initialState
      })
    }).then(res => res.json())
    // form hanldw accorifing to api res
    if (res.status === 'ok') {
      localStorage.setItem('authToken',res.token)
      toast.dark('Login Successfull')
      router.push('/admin/dashboard')
    } 
    if(res.status === 'error'){
      toast.error(res.error)
    }  
   
   
  }

  return (
    <>
    <ToastContainer/>
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="card">
              <h4 className="text-center font-bold  mb-4">
                Sign in to your account
              </h4>
              <form onSubmit={handleSubmit}>
                <div className="input-group mt-4">
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
                    className="c form-control shadow-lg"
                    placeholder="Email/Number"
                  />
                </div>
                <div className="input-group mt-4">
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
                <div className="d-flex justify-content-between">
                  <Link href="/signup">
                    <div className="font-demi grey-hover  mt-4 py-3 px-3">
                      Become a member <span className="ml-2 ">Signup</span>
                    </div>
                  </Link>
                  <p className=" font-demi grey-hover mt-4 py-3 px-3">
                    Forgot Password
                  </p>
                </div>
                <div className="text-center mt-5">
                  <button className=" bg-secondaryColor font-demi btn-blue" type="submit">
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
