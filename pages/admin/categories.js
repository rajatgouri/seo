
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import Model from '@/components/ModalCategories'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import auth from '@/components/Auth'
import API from '../../utils/API'


const categories = () => {
  const [open, setOpen] = useState(false)
  const [cat, setCat] = useState([])
  const [id, setId] = useState()
  const [task, setTask] = useState('save')

  const getAllCategory = async () => {

    API({
      method: 'GET',
      url: '/category/get-categories',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('authToken')}`
      }
    })
      .then(response => {
        console.log(response)
        setCat(response.data.data)

      })
      .catch(err => {
        console.log(err)
      })

  }

  useEffect(() => {
    getAllCategory()
  }, [])


  const handleDelete = async (e) => {
    API({
      method: 'DELETE',
      url: '/category/deleteById/' + e.id,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('authToken')}`
      }
    })
      .then(response => {
        toast.info(e.cat + ' Deleted')
        handleReset()

      })
      .catch(err => {
        console.log(err)
      })


  }

  const handleReset = () => {
    setCat([])
    setTimeout(() => {
      getAllCategory()
    }, 500)
  }

  return (
    <>
      <ToastContainer />
      <div className="flex justify-between px-12">
        <h1 className="prose font-black text-3xl dark:text-gray-100">Categories</h1>
        <button className="bg-blue-600 text-white px-4 py-1 rounded-sm transition hover:bg-indigo-900 focus:outline-none transition sm:px-2 sm:py-1" onClick={() => setOpen(true)}>
          <FontAwesomeIcon icon={faPlus} color="#fff" /> Create new categories</button>
      </div>

      <Model open={open} id={id} handleReset={handleReset}  close={ () =>{ 
        setOpen(false)
        setId(null)
        }} />

      {
        cat.length > 0 ? (
          <div className="flex flex-wrap mx-6 overflow-hidden sm:mx-2 md:mx-4 lg:mx-5 xl:mx-5"
            style={{ minHeight: "500px" }}

          >
            {
              cat.map(c => {
                return (

                  <div className="my-6 px-6 py-1 w-1/1 w-full overflow-hidden sm:my-2 sm:px-1 sm:w-1/2 md:my-4 md:px-4 md:w-1/2 lg:my-5 lg:px-5 lg:w-1/3 xl:my-5 xl:px-5 xl:w-1/4"
                    key={c.id}
                  >
                    <div className="border-2 border-indigo-200 h-full border-opacity-60 dark:border-gray-700 rounded-md overflow-hidden transition bg-arun"
                      style={{ height: "200px" }}
                    >
                      <div className="p-6">
                        <h2 className="text-2xl font-bold leading-8 tracking-tight mb-3 dark:text-gray-200">
                        {c.cat.length > 15 ? c.cat.substring(0,15) : c.cat }...
                        </h2>
                        <p className="text-gray-500 max-w-none dark:text-gray-300 mb-3">
                          <span className="prose font-black dark:text-gray-100">Name :</span>  {c.cat.length > 15 ? c.cat.substring(0,15) : c.cat }...
                        </p>
                        <button className="edit-btn transition"
                          onClick={(e) => {
                            setId(c.id)
                            setOpen(true)
                          }}
                        >
                          <FontAwesomeIcon icon={faPen} />
                        </button>
                        <button className="delete-btn transition" onClick={() => handleDelete(c)}>
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        ) : null

         
      }
    </>
  )
}

export default auth(categories)
