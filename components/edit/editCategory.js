import React, { useState } from 'react'
import Modal from 'react-modal'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import API from '../../utils/API'
const EditModel = ({ width, handleReset, category }) => {

  const [cat, setCat] = useState(category.cat)
  const [open, setOpen] = useState(true)



  const handleChange = async () => {
    if (cat.length == '') {
      toast.error("you can't submit empty category !!")
    }
    if(cat === category.cat){
      toast.error("can't change same category")
    }

    API({
      url : `category/updateCategory/${category.id}`,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('authToken')}`
      },
      data: {
        cat
      }
    }).then(res => {
      if (res.data.status === 'ok') {
        setCat('')
        setOpen(!open)
        handleReset()
        toast.info("new " + cat + " is saved")
      }
    })
    .catch(err =>{
      toast.error('server error')
    })
  }



  return (
    <Modal isOpen={open}>
      <ToastContainer />
      <div className="centerDIV overflow-hidden">
        <div className="flex flex-col w-11/11 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl" style={{ width: width + 300 }}>
          <div
            className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg"
          >
            <p className="font-semibold text-gray-800">Edit Category</p>
            <div className="cursor-pointer rounded-full hover:bg-gray-300" onClick={() => setOpen(!open)}>
              <svg
                className="w-6 h-6 bg-dark rounded-full"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
          </div>
          <div className="flex flex-col px-6 py-5 bg-gray-50">
            {/* <pre className="text-center text-gray-900" style={{ fontSize: "12px" }}>Change title {category.cat} to <span >{cat}</span></pre> */}
            <p className="mb-2 font-semibold text-gray-700">Title</p>
            <input
              type="text"
              name="cat"
              onChange={(e) => setCat(e.target.value)}
              placeholder="Category..."
              className="p-2 bg-white border border-gray-200 rounded shadow-sm"
              style={{ color: '#000' }}
            />
          </div>
          <div
            className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
          >
            <button className="px-4 py-2 w-full text-white font-semibold bg-blue-500 rounded" onClick={handleChange}>
              Change
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default EditModel

