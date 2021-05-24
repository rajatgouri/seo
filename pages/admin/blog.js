import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Modal from '@/components/ModalBlog'
import React, { useEffect, useState } from 'react'
import auth from '@/components/Auth'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from "next/router";

const Blog = () => {
    const [open, setOpen] = useState(true)
    const [blog, setBlog] = useState([])
    const [token, setToken] = useState()
    // api/auth/blogShow
    const router = useRouter()


    const getAllBlog = async () => {
        const res = await fetch(`http://localhost:5000/api/auth/blogShow`, {
            headers: {
                'Content-Type': 'application/json',
                token
            }
        })
        const blog = await res.json()
        setBlog([blog.data])

        return {
            props: {
                blog
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('authToken')
        setToken(token)
        getAllBlog()
    }, [token])

    const handleDeleteBlog = async (e) => {
        await fetch('http://localhost:5000/api/auth/blog-delete/' + e.id, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(res => {
                if (res.status === 'ok') {
                    toast.info(e.title + 'be patient deleting query is processing...')
                    getAllBlog()
                } else {
                    getAllBlog()
                    toast.error('Server Error')
                }
            })
    }

    const handleSubmit = () => {
        getAllBlog()
    }

    const handleEdit = (c) => {
        return (
        <Modal width={600} />
        )
    }

    return (
        <>
            <ToastContainer />
            <div className="flex justify-between" style={{ margin: '0px 3rem' }}>
                <h1 className="prose font-black text-3xl dark:text-gray-100">Blogs</h1>
                <button className="bg-dark text-white px-5 py-2 rounded-lg transition hover:bg-indigo-900 focus:outline-none transition hover:text-white" onClick={() => setOpen(!open)}>
                    <FontAwesomeIcon icon={faPlus} color="#fff" /> Create new blog</button>
            </div>
            {/* model for adding categories */}
            {
                open ? true : <Modal width={600} handleSubmit={handleSubmit} />
            }
            {
                blog.length > 0 ? (
                    <div className="flex flex-wrap mx-6 overflow-hidden sm:mx-2 md:mx-4 lg:mx-5 xl:mx-5">
                        {
                            blog.map(b => {
                                return (
                                    b.map(c => {
                                        return (
                                            <div style={{ maxHeight: '400px' }} className="my-6 px-6 py-1 w-1/1 w-full overflow-hidden sm:my-2 sm:px-1 sm:w-1/1 md:my-4 md:px-4 md:w-1/2 lg:my-5 lg:px-5 lg:w-1/2 xl:my-5 xl:px-5 xl:w-1/2">
                                                <div className="flex flex-wrap border-2 border-gray-200 overflow-hidden transition bg-arun h-full" key={c.id}>
                                                    <div className="w-full flex"
                                                        style={{
                                                            padding: '12px 47px', justifyContent: 'space-between',
                                                            alignItems: 'center'
                                                        }}>
                                                        <h2 className="text-3xl font-bold leading-8 tracking-tight my-3 dark:text-gray-100"
                                                            style={{ textTransform: 'capitalize' }}
                                                        >
                                                            {c.title}
                                                        </h2>
                                                        <p className="text-gray-100">{c.date}</p>
                                                    </div>
                                                    <p className="w-full text-gray-500 dark:text-gray-200 mb-4 p-10">
                                                        <span className="porse font-black" style={{ color: 'cyan' }}>Blog : </span>
                                                        {c.summary.substring(0, 300)}...
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
