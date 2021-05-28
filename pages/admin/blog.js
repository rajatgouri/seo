


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
            <Modal open={open} id={id} handleSubmit={handleSubmit} close={() => {
                setOpen(false)
                setId(null)
            }} />

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

                ) : 
                null
            }
        </>
    )
}

export default auth(Blog)
