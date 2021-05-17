import React from 'react'
import Modal from 'react-modal'
const Model = ({width}) => {

    const [open,setOpen] = React.useState(true)

    return (
    <Modal isOpen={open}>
      <div class="centerDIV overflow-hidden">
      <div class="flex flex-col w-11/11 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl" style={{width:width}}>
        <div
          class="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg"
        >
          <p class="font-semibold text-gray-800">Add Categori</p>
        <div className="cursor-pointer rounded-full hover:bg-gray-300" onClick={()=>setOpen(!open)}>
        <svg
            class="w-6 h-6"
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
        <div class="flex flex-col px-6 py-5 bg-gray-50">
          <p class="mb-2 font-semibold text-gray-700">Title</p>
          <input
            type="text"
            name=""
            placeholder="Catogries..."
            class="p-2 mb-5 bg-white border border-gray-200 rounded shadow-sm"
          />
        </div>
        <div
          class="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
        >
          <button class="px-4 py-2 w-full text-white font-semibold bg-blue-500 rounded">
            Save
          </button>
        </div>
      </div>
    </div>
    </Modal>
    )
}

export default Model
