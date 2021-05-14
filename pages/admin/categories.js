import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function categories() {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="prose font-black text-3xl">Categories</h1>
        <button className="bg-dark text-white px-3 py-1 rounded-md transition hover:bg-indigo-900 focus:outline-none transition sm:px-1 sm:py-0 ">
          <FontAwesomeIcon icon={faPlus} color="#fff" /> Create new categories</button>
      </div>
      <div className="flex flex-wrap mx-6 overflow-hidden sm:-mx-1 md:-mx-4 lg:-mx-5 xl:-mx-5">
        <div class="my-6 px-6 py-1 w-1/1 w-full overflow-hidden sm:my-2 sm:px-1 sm:w-1/2 md:my-4 md:px-4 md:w-1/2 lg:my-5 lg:px-5 lg:w-1/3 xl:my-5 xl:px-5 xl:w-1/4">

          <div className="border-2 border-indigo-200 h-full border-opacity-60 dark:border-gray-700 rounded-md overflow-hidden transition arunCard">
            <div className="p-6">
              <h2 className="text-2xl font-bold leading-8 tracking-tight mb-3">
              Science
              </h2>
              <p className="text-gray-500 max-w-none dark:text-gray-400 mb-3">
              <span className="prose font-black">Title</span> Science
              </p>
              <button className="border border-indigo-600 text-blue-600 hover:text-blue-500 rounded py-1 px-3 transition arunCard">
                <FontAwesomeIcon icon={faPen}/>
              </button>
              <button className="border border-indigo-600 hover:text-red-600 rounded py-1 px-3 ml-2 transition arunCard">
              <FontAwesomeIcon icon={faTrashAlt}/>
               </button>
            </div>
          </div>

        </div>

        <div className="my-6 px-6 py-1 w-1/1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-4 md:px-4 md:w-1/2 lg:my-5 lg:px-5 lg:w-1/3 xl:my-5 xl:px-5 xl:w-1/4">

          <div className="h-full border-2 border-indigo-200 border-opacity-60 dark:border-gray-700 rounded-md overflow-hidden transition arunCard">
            <div className="p-6">
              <h2 className="text-2xl font-bold leading-8 tracking-tight mb-3">
              Notes
              </h2>
              <p className="text-gray-500 max-w-none dark:text-gray-400 mb-3">
              <span className="prose font-black">Title</span> Notes
              </p>
              <button className="border border-indigo-600 text-blue-600 hover:text-blue-500 rounded py-1 px-3 transition arunCard">
                <FontAwesomeIcon icon={faPen}/>
              </button>
              <button className="border border-indigo-600 hover:text-red-600 rounded py-1 px-3 ml-2 transition arunCard">
              <FontAwesomeIcon icon={faTrashAlt}/>
              </button>
            </div>
          </div>

        </div>

        <div class="my-6 px-6 py-1 w-1/1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-4 md:px-4 md:w-1/2 lg:my-5 lg:px-5 lg:w-1/3 xl:my-5 xl:px-5 xl:w-1/4">
          <div className="h-auto border-2 border-indigo-200 border-opacity-60 dark:border-gray-700 rounded-md overflow-hidden transition arunCard">
            <div className="p-6">
              <h2 className="text-2xl font-bold leading-8 tracking-tight mb-3">
              Book
              </h2>
              <p className="text-gray-500 max-w-none dark:text-gray-400 mb-3">
              <span className="prose font-black">Title</span> Book  
              </p>
              <button className="border border-indigo-600 text-blue-600 hover:text-blue-500 rounded py-1 px-3 transition arunCard">
                <FontAwesomeIcon icon={faPen}/>
              </button>
              <button className="border border-indigo-600 hover:text-red-600 rounded py-1 px-3 ml-2 transition arunCard">
              <FontAwesomeIcon icon={faTrashAlt}/>
              </button>
            </div>
          </div>

        </div>

        <div class="my-6 px-6 py-1 w-1/1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-4 md:px-4 md:w-1/2 lg:my-5 lg:px-5 lg:w-1/3 xl:my-5 xl:px-5 xl:w-1/4">

          <div className="h-full border-2 border-indigo-200 border-opacity-60 dark:border-gray-700 rounded-md overflow-hidden transition arunCard">
            <div className="p-6">
              <h2 className="text-2xl font-bold leading-8 tracking-tight mb-3">
              Space
              </h2>
              <p className="text-gray-500 max-w-none dark:text-gray-400 mb-3">
              <span className="prose font-black">Title</span> Space
              </p>
              <button className="border border-indigo-600 text-blue-600 hover:text-blue-500 rounded py-1 px-3 transition arunCard">
                <FontAwesomeIcon icon={faPen}/>
              </button>
              <button className="border border-indigo-600 hover:text-red-600 rounded py-1 px-3 ml-2 transition arunCard">
              <FontAwesomeIcon icon={faTrashAlt}/>
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default categories
