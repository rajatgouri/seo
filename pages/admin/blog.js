// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus, faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
// import Modal from '@/components/ModalBlog'
// import React, { useEffect, useState } from 'react'
// import auth from '@/components/Auth'
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import API from '../../utils/API'
// import { useRouter } from 'next/router'
// import EditBlog from '@/components/edit/editBlog'

// const Blog = () => {

//     const router = useRouter()

//     const [open, setOpen] = useState(true)
//     const [changeModel, setChangeModel] = useState(true)
//     const [id, setId] = useState()

//     const [blog, setBlog] = useState([])
//     const [token, setToken] = useState()

//     const getAllBlog = async () => {

//         API({
//             method: 'POST',
//             url: '/blogs/getBlogs',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${localStorage.getItem('authToken')}`
//             },
//             data: { id: 'All', type: 1 }

//         })
//             .then(response => {
//                 console.log(response)
//                 if (response.data.status === 'error') {
//                     localStorage.removeItem('authToken')
//                     window.location.href = '/'
//                 }
//                 setBlog(response.data.data)
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     }

//     useEffect(() => {
//         const token = localStorage.getItem('authToken')
//         setToken(token)
//         getAllBlog()
//     }, [token])


//     const handleDeleteBlog = async (e) => {
//         API({
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${localStorage.getItem('authToken')}`
//             },
//             url: 'blogs/deleteById/' + e.id,

//         }).then(response => {
//             if (response.data.status === 'ok') {
//                 toast.info(e.title + 'be patient deleting query is processing...')
//                 getAllBlog()
//             } else {
//                 getAllBlog()
//                 toast.error('Not Authrized')
//                 localStorage.removeItem('authToken')
//                 window.location.href = '/'
//             }
//         })
//             .catch(err => {
//                 console.log(err)
//             })


//     }

//     const handleSubmit = () => {
//         getAllBlog()
//     }

//     const handleEdit = (c) => {
//         setChangeModel(!open)
//         setId(c)
//     }

//     return (
//         <>
//             <ToastContainer />

//             <div className="flex justify-between" style={{ margin: '0px 3rem' }}>
//                 <h1 className="prose font-black text-3xl dark:text-gray-100">Blogs</h1>
//                 <button
//                     className="px-4 py-2 text-white font-semibold bg-blue-500 rounded"
//                     type='button'
//                     onClick={() => setOpen(!open)}>
//                     <FontAwesomeIcon icon={faPlus} color="#fff" />
//                     Create New Blog
//                 </button>
//             </div>

//             {
//                 // open ? true : <Modal handleSubmit={handleSubmit} />
//             }

//             {
//                 changeModel ? true : <EditBlog blog={id} handleSubmit={handleSubmit} />
//             }


//             {
//                 blog.length > 0 ? (
//                     <div className="flex flex-wrap mx-6 overflow-hidden sm:mx-2 md:mx-4 lg:mx-5 xl:mx-5"
//                     >
//                         {
//                             blog.map(c => {

//                                 return (
//                                     <div style={{
//                                         minHeight: '300px'
//                                     }} className="my-6 px-6 py-1 w-1/1 w-full overflow-hidden sm:my-2 sm:px-1 sm:w-1/1 md:my-4 md:px-4 md:w-1/2 lg:my-5 lg:px-5 lg:w-1/2 xl:my-5 xl:px-5 xl:w-1/2">
//                                         <div className="flex flex-wrap border-2 border-gray-200 overflow-hidden transition bg-arun h-full" key={c.id}>
//                                             <div className="w-full flex"
//                                                 style={{
//                                                     padding: '12px 47px', justifyContent: 'space-between',
//                                                     alignItems: 'center'
//                                                 }}>
//                                                 <h6 className="text-3xl font-bold leading-8 tracking-tight my-3 dark:text-gray-100"
//                                                     style={{ textTransform: 'capitalize' }}
//                                                 >
//                                                     {c.title}
//                                                 </h6>
//                                                 <p className="text-gray-100"><span style={{ fontWeight: 'bold' }}>date: </span> {c.createdAt.split('T')[0]}</p>
//                                             </div>

//                                             <p
//                                                 style={{
//                                                     padding: "0px 2.5rem"
//                                                 }}
//                                                 className="w-full text-gray-500 dark:text-gray-200"
//                                                 dangerouslySetInnerHTML={{ __html: c.summary.substring(0, 100) }}>

//                                             </p>
//                                             <br />
//                                             <div className="px-10 py-5">
//                                                 <button className="edit-btn ransition" onClick={() => handleEdit(c)}>
//                                                     <FontAwesomeIcon icon={faPen} />
//                                                 </button>
//                                                 <button className="delete-btn transition" onClick={() => handleDeleteBlog(c)}>
//                                                     <FontAwesomeIcon icon={faTrashAlt} />
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 )

//                             })
//                         }
//                     </div>

//                 ) : (
//                     <div style={{ minHeight: '500px' }}>
//                         <style jsx>
//                             {`
//                             svg{
//                                 position:absolute;
//                                 top:-10%;
//                                 left:46%;
//                                 transform:translate(-50%,-50%)
//                                 height:200px;
//                                 width:100px;
//                             }
//                             `}
//                         </style>
//                         <svg style={{ margin: 'auto', background: 'transparent', display: 'block', shapeRendering: 'auto' }} width="400px" height="400px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
//                             <g transform="rotate(0 50 50)">
//                                 <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#46bdfa">
//                                     <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>
//                                 </rect>
//                             </g><g transform="rotate(30 50 50)">
//                                 <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#46bdfa">
//                                     <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>
//                                 </rect>
//                             </g><g transform="rotate(60 50 50)">
//                                 <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#46bdfa">
//                                     <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>
//                                 </rect>
//                             </g><g transform="rotate(90 50 50)">
//                                 <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#46bdfa">
//                                     <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
//                                 </rect>
//                             </g><g transform="rotate(120 50 50)">
//                                 <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#46bdfa">
//                                     <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>
//                                 </rect>
//                             </g><g transform="rotate(150 50 50)">
//                                 <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#46bdfa">
//                                     <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
//                                 </rect>
//                             </g><g transform="rotate(180 50 50)">
//                                 <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#46bdfa">
//                                     <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>
//                                 </rect>
//                             </g><g transform="rotate(210 50 50)">
//                                 <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#46bdfa">
//                                     <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
//                                 </rect>
//                             </g><g transform="rotate(240 50 50)">
//                                 <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#46bdfa">
//                                     <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>
//                                 </rect>
//                             </g><g transform="rotate(270 50 50)">
//                                 <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#46bdfa">
//                                     <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>
//                                 </rect>
//                             </g><g transform="rotate(300 50 50)">
//                                 <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#46bdfa">
//                                     <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>
//                                 </rect>
//                             </g><g transform="rotate(330 50 50)">
//                                 <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#46bdfa">
//                                     <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
//                                 </rect>
//                             </g>
//                         </svg>
//                     </div>)
//             }
//         </>
//     )
// }

// export default auth(Blog)



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Modal from '@/components/ModalBlog'
import React, { useEffect, useState } from 'react'
import auth from '@/components/Auth'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import API from '../../utils/API'

const Blog = () => {
    const [open, setOpen] = useState(false)
    const [blog, setBlog] = useState([])
    const [token, setToken] = useState()
    const [id, setId] = useState(null)

    const getAllBlog = async () => {

        API({
            method: 'POST',
            url: '/blogs/getBlogs',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('authToken')}`
            },
            data: { id: 'All', type: 1 }

        })
            .then(response => {
                setBlog(response.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        const token = localStorage.getItem('authToken')
        setToken(token)
        getAllBlog()
    }, [token])


    const handleDeleteBlog = async (e) => {
        API({
            method: 'DELETE',
            url: 'blogs/deleteById/' + e.id,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('authToken')}`
            }
        })
            .then(response => {

                if (response.data.status === 'ok') {
                    toast.info(e.title + 'be patient deleting query is processing...')
                    getAllBlog()
                } else {
                    getAllBlog()
                    toast.error('Server Error')
                }
            })
            .catch(err => {
                console.log(err)
            })


    }

    const handleSubmit = () => {
        setId(null)
        getAllBlog()
    }

    const handleEdit = (c) => {
        setOpen(true)
        setId(c.id)
    }

    return (
        <>
            <ToastContainer />
            <Modal open={open} id={id} handleSubmit={handleSubmit} close={() => setOpen(false)} />

            <div className="flex justify-between" style={{ margin: '0px 3rem' }}>
                <h1 className="prose font-black text-3xl dark:text-gray-100">Blogs</h1>
                <button
                    className="px-4 py-2 text-white font-semibold bg-blue-500 rounded"
                    type='button'
                    onClick={() => {
                        setOpen(true)
                        setId(null)
                        }
                    }
                >
                    <FontAwesomeIcon icon={faPlus} color="#fff" />
                    Create New Blog
                </button>
            </div>

            {
                blog.length > 0 ? (
                    <div className="flex flex-wrap mx-6 overflow-hidden sm:mx-2 md:mx-4 lg:mx-5 xl:mx-5"
                    >
                        {
                            blog.map(c => {

                                return (
                                    <div key={c.id} style={{
                                        minHeight: '300px'
                                    }} className="my-6 px-6 py-1 w-1/1 w-full overflow-hidden sm:my-2 sm:px-1 sm:w-1/1 md:my-4 md:px-4 md:w-1/2 lg:my-5 lg:px-5 lg:w-1/2 xl:my-5 xl:px-5 xl:w-1/2">
                                        <div className="flex flex-wrap border-2 border-gray-200 overflow-hidden transition bg-arun h-full" key={c.id}>
                                            <div className="w-full flex"
                                                style={{
                                                    padding: '12px 47px', justifyContent: 'space-between',
                                                    alignItems: 'center'
                                                }}>
                                                <h6 className="text-3xl font-bold leading-8 tracking-tight my-3 dark:text-gray-100"
                                                    style={{ textTransform: 'capitalize' }}
                                                >
                                                    {c.title}
                                                </h6>
                                                <p className="text-gray-100"><span style={{ fontWeight: 'bold' }}>date: </span> {c.createdAt.split('T')[0]}</p>
                                            </div>

                                            <p
                                                style={{
                                                    padding: "0px 2.5rem"
                                                }}
                                                className="w-full text-gray-500 dark:text-gray-200"
                                                dangerouslySetInnerHTML={{ __html: c.summary.substring(0, 100) }}>

                                            </p>
                                            <br />
                                            <div className="px-10 py-5">
                                                <button className="edit-btn ransition" onClick={() => handleEdit(c)}>
                                                    <FontAwesomeIcon icon={faPen} />
                                                </button>
                                                <button className="delete-btn transition" onClick={() => handleDeleteBlog(c)}>
                                                    <FontAwesomeIcon icon={faTrashAlt} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )

                            })
                        }
                    </div>

                ) : (
                    <div style={{ minHeight: '500px' }}>
                        <style jsx>
                            {`
                            svg{
                                position:absolute;
                                top:-10%;
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
                    </div>)
            }
        </>
    )
}

export default auth(Blog)
