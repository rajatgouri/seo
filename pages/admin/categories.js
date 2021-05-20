import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import Model from '@/components/ModalCategories'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import auth from '@/components/Auth'

const categories = () => {
  const [open, setOpen] = useState(true)
  const [cat, setCat] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/auth/all-cat')
      .then(res => res.json())
      .then(data => setCat([data]))
  })


  const handleDelete = async (e) => {
    await fetch('http://localhost:5000/api/auth/all-cat-del/' + e.id, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === 'ok') {
          toast.info(e.cat + ' Deleted')
        } else {
          toast.error('Server Error')
        }
      })
  }

  const handleEdit = async (e) => {
    
  }


  return (
    <>
      <ToastContainer />
      <div className="flex justify-between px-12">
        <h1 className="prose font-black text-3xl dark:text-gray-100">Categories</h1>
        <button className="bg-blue-600 text-white px-4 py-1 rounded-sm transition hover:bg-indigo-900 focus:outline-none transition sm:px-2 sm:py-1" onClick={() => setOpen(!open)}>
          <FontAwesomeIcon icon={faPlus} color="#fff" /> Create new categories</button>
      </div>

      {/* model for adding categories */}
      {
        open ? true : <Model width={300} />
      }


      <div className="flex flex-wrap mx-6 overflow-hidden sm:mx-2 md:mx-4 lg:mx-5 xl:mx-5">
        {
          cat.map(i => {
            return (
              i.data.map(c => {
                return (
                  <div className="my-6 px-6 py-1 w-1/1 w-full overflow-hidden sm:my-2 sm:px-1 sm:w-1/2 md:my-4 md:px-4 md:w-1/2 lg:my-5 lg:px-5 lg:w-1/3 xl:my-5 xl:px-5 xl:w-1/4" key={c.id}>


                    <div className="border-2 border-indigo-200 h-full border-opacity-60 dark:border-gray-700 rounded-md overflow-hidden transition bg-arun">
                      <div className="p-6">
                        <h2 className="text-2xl font-bold leading-8 tracking-tight mb-3 dark:text-gray-200">
                          {c.cat}
                        </h2>
                        <p className="text-gray-500 max-w-none dark:text-gray-300 mb-3">
                          <span className="prose font-black dark:text-gray-100">Name :</span> {c.cat}
                        </p>
                        <button className="border border-indigo-600 text-blue-600 hover:text-blue-500 rounded py-1 px-3 transition arunCard">
                          <FontAwesomeIcon icon={faPen} />
                        </button>
                        <button className="border border-indigo-600 hover:text-red-600 rounded py-1 px-3 ml-2 transition arunCard" onClick={() => handleDelete(c)}>
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })
            )
          })
        }


      </div>


    </>
  )
}

export default auth(categories)


// export const getStaticProps = async () => {
//   const res = await fetch('http://localhost:5000/api/auth/all-cat')
//   const cate = await res.json()

//   return{
//     props: {
//       cate
//     }
//   }
// }