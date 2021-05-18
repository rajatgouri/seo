import siteMetadata from '@/data/siteMetadata'
import { PageSeo } from '@/components/SEO'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBlog, faFilter, faBoxOpen, faEye} from '@fortawesome/free-solid-svg-icons'

function Dashboard() {


  return (
    <>
      <PageSeo
        title={`Admin - ${siteMetadata.author}`}
        description={`About - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/admin/dashboard`}
      />
      {/* grid */}

      <h1 className="prose font-black text-3xl dark:text-gray-100 w-full" style={{marginLeft:'3rem'}}>
      Dashboard
      </h1>

      <div className="flex flex-wrap mx-6 overflow-hidden sm:mx-2 md:mx-4 lg:mx-5 xl:mx-5 items-center">
        <div className="my-6 py-1 px-6 w-1/1 w-full overflow-hidden sm:my-2 sm:px-1 sm:w-1/2 md:my-4 md:px-4 md:w-1/2 lg:my-5 lg:px-5 lg:w-1/4 xl:my-5 xl:px-5 xl:w-1/4">
          <div className="bg-gray-100 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid bg-arun rounded-lg border-2 flex justify-around cursor-pointer">
            <FontAwesomeIcon className="w-16 h-16 object-cover text-5xl" color="#fff" icon={faBlog}/>
            <div className="flex flex-col justify-center">
              <p className="text-gray-100 dark:text-gray-100 font-semibold">Blog</p>
              <p className="text-black dark:text-gray-100 text-justify font-semibold">10</p>
            </div>
          </div>

        </div>

        <div className="my-6 px-6 w-1/1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-4 md:px-4 md:w-1/2 lg:my-5 lg:px-5 lg:w-1/4 xl:my-5 xl:px-5 xl:w-1/4">

          
        <div className="bg-gray-100 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid bg-arun rounded-lg border-2 | flex justify-around cursor-pointer  | transition-colors duration-500">
          <FontAwesomeIcon className="w-16 h-16 object-cover text-5xl" color="#fff" icon={faFilter}/>
            <div className="flex flex-col justify-center">
              <p className="text-gray-900 dark:text-gray-100 font-semibold">Categories</p>
              <p className="text-black dark:text-gray-100 text-justify font-semibold">200</p>
            </div>
          </div>

        </div>

        <div className="my-6 px-6 w-1/1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-4 md:px-4 md:w-1/2 lg:my-5 lg:px-5 lg:w-1/4 xl:my-5 xl:px-5 xl:w-1/4">
       
        <div className="bg-gray-100 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid bg-arun rounded-lg border-2 | flex justify-around cursor-pointer  | transition-colors duration-500">
          <FontAwesomeIcon className="w-16 h-16 object-cover text-5xl" color="#fff" icon={faEye}/>
            <div className="flex flex-col justify-center">
              <p className="text-gray-900 dark:text-gray-100 font-semibold">Total visits</p>
              <p className="text-black dark:text-gray-100 text-justify font-semibold">3,000</p>
            </div>
          </div>
        </div>

        <div className="my-6 px-6 w-1/1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-4 md:px-4 md:w-1/2 lg:my-5 lg:px-5 lg:w-1/4 xl:my-5 xl:px-5 xl:w-1/4">
          
        <div className="bg-gray-100 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid bg-arun rounded-lg border-2 | flex justify-around cursor-pointer  | transition-colors duration-500">
          <FontAwesomeIcon className="w-16 h-16 object-cover text-5xl text-gray-100" color="#fff" icon={faBoxOpen}/>
            <div className="flex flex-col justify-center">
              <p className="dark:text-gray-100 font-semibold">Empty</p>
              <p className="dark:text-gray-100 text-justify font-semibold"> 0</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
