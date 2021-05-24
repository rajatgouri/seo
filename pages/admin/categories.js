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
  const [id, setId] = useState()
  const [task, setTask] = useState('save')


  const getAllCategory = async () => {
    const res = await fetch(`http://localhost:5000/api/auth/all-cat`, {
    })
    const cate = await res.json()
    setCat([cate.data])

    return {
      props: {
        cate
      }
    }
  }

  useEffect(() => {
    getAllCategory()
  }, [])


  const handleDelete = async (e) => {
    await fetch('http://localhost:5000/api/auth/all-cat-del/' + e.id, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === 'ok') {
          toast.info(e.cat + ' Deleted')
          getAllCategory()
        } else {
          getAllCategory()
          toast.error('Server Error')
        }
      })
  }

  const handleEdit = async (e) => {
    setOpen(!open)
    setId(e.id)
    setTask('edit')
  }

  const handleReset = () => {
    getAllCategory()
  }

  return (
    <>
      <ToastContainer />
      <div className="flex justify-between px-12">
        <h1 className="prose font-black text-3xl dark:text-gray-100">Categories</h1>
        <button className="bg-blue-600 text-white px-4 py-1 rounded-sm transition hover:bg-indigo-900 focus:outline-none transition sm:px-2 sm:py-1" onClick={() => setOpen(!open)}>
          <FontAwesomeIcon icon={faPlus} color="#fff" /> Create new categories</button>
      </div>

      {
        open ? true : <Model width={300} id={id} task={task} handleReset={handleReset} />
      }

      {
        cat.length > 0 ? (
          <div className="flex flex-wrap mx-6 overflow-hidden sm:mx-2 md:mx-4 lg:mx-5 xl:mx-5">
            {
              cat.map(i => {
                return (
                  i.map(c => {
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
                            <button className="edit-btn transition"
                              onClick={() => handleEdit(c)}
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
                )
              })
            }
          </div>
        ) : (

          <div>
            <style jsx>
              {`
        svg{
            position:absolute;
            top:-5%;
            left:46%;
            transform:translate(-50%,-50%)
            height:200px;
            width:100px;
        }
        `}
            </style>
            <svg style={{ margin: 'auto', background: 'transparent', display: 'block', shapeRendering: 'auto' }} width="400px" height="400px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
              <g transform="rotate(0 50 50)">
                <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#46bdfa">
                  <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>
                </rect>
              </g><g transform="rotate(30 50 50)">
                <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#46bdfa">
                  <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>
                </rect>
              </g><g transform="rotate(60 50 50)">
                <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#46bdfa">
                  <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>
                </rect>
              </g><g transform="rotate(90 50 50)">
                <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#46bdfa">
                  <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
                </rect>
              </g><g transform="rotate(120 50 50)">
                <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#46bdfa">
                  <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>
                </rect>
              </g><g transform="rotate(150 50 50)">
                <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#46bdfa">
                  <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
                </rect>
              </g><g transform="rotate(180 50 50)">
                <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#46bdfa">
                  <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>
                </rect>
              </g><g transform="rotate(210 50 50)">
                <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#46bdfa">
                  <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
                </rect>
              </g><g transform="rotate(240 50 50)">
                <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#46bdfa">
                  <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>
                </rect>
              </g><g transform="rotate(270 50 50)">
                <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#46bdfa">
                  <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>
                </rect>
              </g><g transform="rotate(300 50 50)">
                <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#46bdfa">
                  <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>
                </rect>
              </g><g transform="rotate(330 50 50)">
                <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#46bdfa">
                  <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
                </rect>
              </g>
            </svg>
          </div>
        )
      }



    </>
  )
}

export default auth(categories)

