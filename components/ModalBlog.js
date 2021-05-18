import React from 'react'
import Modal from 'react-modal'

const Model = ({width}) => {

    const [open,setOpen] = React.useState(true)

    return (
    <Modal isOpen={open}>
      <div className="centerDIV overflow-hidden">
      <div className="flex flex-col w-11/11 sm:
      style={{color:'#000'}}w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl mx-10 my-10" style={{width:width}}>
        <div
          className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg"
        >
          <p className="font-semibold text-gray-800">Add Blog</p>
        <div className="cursor-pointer rounded-full hover:bg-gray-300" onClick={()=>setOpen(!open)}>
        <svg
            className="w-6 h-6 bg-dark rounded-full"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
        </div>

        <div className="flex flex-col px-6 py-1 bg-gray-50">
          <p className="mb-2 font-semibold text-gray-700">Title</p>
          <input
            type="text"
            name=""
            placeholder="Blog Title"
            className="p-2 bg-white border border-gray-200 rounded shadow-sm"
            style={{color:'#000'}}
          />
        </div>

        <div className="flex flex-col px-6 py-1 bg-gray-50">
          <p className="mb-2 font-semibold text-gray-700">Author</p>
          <input
            type="text"
            name=""
            placeholder="Author name.."
            className="p-2 bg-white border border-gray-200 rounded shadow-sm"
            style={{color:'#000'}}
          />
        </div>

        <div className="flex flex-col px-6 py-1 bg-gray-50">
          <p className="mb-2 font-semibold text-gray-700">Content</p>
          <textarea
            type="text"
            name=""
            placeholder="Content..."
            className="p-2 bg-white border border-gray-200 rounded shadow-sm"
            style={{color:'#000'}}
          />
        </div>

        <div className="flex flex-col px-6 py-1 bg-gray-50">
          <p className="mb-2 font-semibold text-gray-700">Video URL <small style={{float:'right'}}>copy link from YT*</small></p>
          <input
            type="text"
            name=""
            placeholder="Img URL"
            className="p-2 bg-white border border-gray-200 rounded shadow-sm"
            style={{color:'#000'}}
          />
        </div>

        <div className="flex flex-col px-6 py-1 bg-gray-50">
          <p className="mb-2 font-semibold text-gray-700">Categoris</p>
          <input
            type="text"
            name=""
            placeholder="Add categories..."
            className="p-2 bg-white border border-gray-200 rounded shadow-sm"
            style={{color:'#000'}}
          />
        </div>

        <div
          className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
        >
          <button className="px-4 py-2 w-full text-white font-semibold bg-blue-500 rounded">
            Save
          </button>
        </div>
      </div>
    </div>
    </Modal>
    )
}

export default Model
