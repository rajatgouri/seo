import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Modal from '@/components/ModalBlog'
import React from 'react'
import auth from '@/components/Auth'

const Blog = () => {
    const [open,setOpen] = React.useState(true)
    return (
        <>
            <div className="flex justify-between" style={{margin:'0px 3rem'}}>
                <h1 className="prose font-black text-3xl dark:text-gray-100">Blogs</h1>
                <button className="bg-dark text-white px-5 py-2 rounded-lg transition hover:bg-indigo-900 focus:outline-none transition hover:text-white" onClick={()=>setOpen(!open)}>
                    <FontAwesomeIcon icon={faPlus} color="#fff" /> Create new blog</button>
            </div>
            {/* model for adding categories */}
            {
                open ? true : <Modal width={600} />
            }
            <div className="flex flex-wrap mx-6 overflow-hidden sm:mx-2 md:mx-4 lg:mx-5 xl:mx-5">

                <div className="my-6 px-6 py-1 w-1/1 w-full overflow-hidden sm:my-2 sm:px-1 sm:w-1/2 md:my-4 md:px-4 md:w-1/2 lg:my-5 lg:px-5 lg:w-1/2 xl:my-5 xl:px-5 xl:w-1/2">

                    <div className="flex flex-wrap border-2 border-gray-200 overflow-hidden transition  
                    bg-arun">
                        <div className="flex justify-center flex-col items-center">
                            <h2 className="text-2xl font-bold leading-8 tracking-tight my-3 dark:text-gray-100">
                                Science
                            </h2>
                            <p className="text-gray-500 dark:text-gray-200 mb-4 text-center">
                                <span className="porse font-black" style={{color:'cyan'}}>Blog : </span>
                                With the discovery of just a few hundred radioactive atoms in seabed deposits, researchers have confirmed that blast debris from a pair of stellar explosions swept across Earth.
                            </p>
                            <div className="py-2">
                                <button className="border border-indigo-600 hover:text-blue-500 rounded py-1 px-10 transition arunCard">
                                    <FontAwesomeIcon icon={faPen} />
                                </button>
                                <button className="border border-indigo-600 hover:text-red-600 rounded py-1 px-10 ml-2 transition arunCard">
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="my-6 px-6 py-1 w-1/1 w-full overflow-hidden sm:my-2 sm:px-1 sm:w-1/2 md:my-4 md:px-4 md:w-1/2 lg:my-5 lg:px-5 lg:w-1/2 xl:my-5 xl:px-5 xl:w-1/2">

                    <div className="flex flex-wrap border-2 border-gray-200 overflow-hidden transition bg-arun">
                    <div className="flex justify-center flex-col items-center">
                            <h2 className="text-2xl font-bold leading-8 tracking-tight my-3 dark:text-gray-100">
                                Science
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 mb-4 text-center">
                                <span className="porse font-black text-black">Blog : </span>
                                With the discovery of just a few hundred radioactive atoms in seabed deposits, researchers have confirmed that blast debris from a pair of stellar explosions swept across Earth.
                            </p>
                            <div className="py-2">
                                <button className="border border-indigo-600 hover:text-blue-500 rounded py-1 px-10 transition arunCard">
                                    <FontAwesomeIcon icon={faPen} />
                                </button>
                                <button className="border border-indigo-600 hover:text-red-600 rounded py-1 px-10 ml-2 transition arunCard">
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="my-6 px-6 py-1 w-1/1 w-full overflow-hidden sm:my-2 sm:px-1 sm:w-1/2 md:my-4 md:px-4 md:w-1/2 lg:my-5 lg:px-5 lg:w-1/2 xl:my-5 xl:px-5 xl:w-1/2">

                    <div className="flex flex-wrap border-2 border-gray-200 overflow-hidden transition bg-arun">

                    <div className="flex justify-center flex-col items-center">
                            <h2 className="text-2xl font-bold leading-8 tracking-tight my-3 dark:text-gray-100">
                                Science
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 mb-4 text-center">
                                <span className="porse font-black text-black">Blog : </span>
                                With the discovery of just a few hundred radioactive atoms in seabed deposits, researchers have confirmed that blast debris from a pair of stellar explosions swept across Earth.
                            </p>
                            <div className="py-2">
                                <button className="border border-indigo-600 hover:text-blue-500 rounded py-1 px-10 transition arunCard">
                                    <FontAwesomeIcon icon={faPen} />
                                </button>
                                <button className="border border-indigo-600 hover:text-red-600 rounded py-1 px-10 ml-2 transition arunCard">
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="my-6 px-6 py-1 w-1/1 w-full overflow-hidden sm:my-2 sm:px-1 sm:w-1/2 md:my-4 md:px-4 md:w-1/2 lg:my-5 lg:px-5 lg:w-1/2 xl:my-5 xl:px-5 xl:w-1/2">

                    <div className="flex flex-wrap border-2 border-gray-200 overflow-hidden transition bg-arun">

                    <div className="flex justify-center flex-col items-center">
                            <h2 className="text-2xl font-bold leading-8 tracking-tight my-3 dark:text-gray-100">
                                Science
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 mb-4 text-center">
                                <span className="porse font-black text-black">Blog : </span>
                                With the discovery of just a few hundred radioactive atoms in seabed deposits, researchers have confirmed that blast debris from a pair of stellar explosions swept across Earth.
                            </p>
                            <div className="py-2">
                                <button className="border border-indigo-600 hover:text-blue-500 rounded py-1 px-10 transition arunCard">
                                    <FontAwesomeIcon icon={faPen} />
                                </button>
                                <button className="border border-indigo-600 hover:text-red-600 rounded py-1 px-10 ml-2 transition arunCard">
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default auth(Blog)
