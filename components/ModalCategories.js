import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import API from '../utils/API'

const Model = ({ open, id, handleReset, close }) => {

  const [cat, setCat] = useState()

  useEffect(() => {
    if (id !== undefined) {
      getCategory(id)
    }
  }, [id])


  const getCategory = async (id) => {

    API({
      method: 'POST',
      url : '/category/getById',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('authToken')}`
      },
      data: {
        id
      }
    })
      .then(response => {
        setCat(response.data.data.cat)
      })
      .catch(err => {
        console.log(err)
      })
   
  }

  const handleClose = () =>{
    setCat('')
    close()
  }
  

  const handleCat = async () => {
    
    let url = id ? `/category/updateCategory/${id}` : '/category/add-category'
    let method = id ? 'PUT' : 'POST'

    API({
      method,
      url,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('authToken')}`
      },
      data: {
        cat
      }
    })
      .then(response => {
        setCat('')
        close()
        handleReset()
        handleClose()
        toast.success(cat + ' is saved')
      })
      .catch(err => {
        toast.error(err.response.data.error)
      })
  
  }

  return (
    <>
      {
        open ?
          <div>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto  inset-0 z-50 outline-none focus:outline-none"
              style={{
                position: 'absolute',
                width: '100%'
              }}
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <p className="font-semibold text-gray-800">Add new category</p>

                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => handleClose()}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
              </span>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <div className="flex flex-col px-6 py-1 bg-gray-50" >
                      <p className="mb-2 font-semibold text-gray-700">Title</p>
                      <input
                        type="text"
                        name="cat"
                        value={cat}
                        onChange={(e) => setCat(e.target.value)}
                        placeholder="Category..."
                        className="p-2 bg-white border border-gray-200 rounded shadow-sm"
                        style={{ color: '#000' }}
                      />
                    </div>

                    <div
                      className="text-right p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
                    >
                      <button className="px-4 py-2  font-semibold border  rounded"
                        type='button'
                        onClick={() => handleClose()}
                      >
                        close
                    </button>
                      <button className="px-4 py-2 ml-2 text-white font-semibold bg-blue-500 rounded"
                        onClick={handleCat}
                      >
                        Save
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          : null
      }
    </>
  )
}

export default Model