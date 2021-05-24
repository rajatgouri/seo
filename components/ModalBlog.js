import React, { useState, useEffect, useRef } from 'react'
import Modal from 'react-modal'
import MultiSelect from "react-multi-select-component";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import dynamic from 'next/dynamic'
import 'suneditor/dist/css/suneditor.min.css'


const Model = ({ width, handleSubmit }) => {


  const [open, setOpen] = useState(true)
  const [option, setOption] = useState([])
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [url, setUrl] = useState('')
  const [latest, setLatest] = useState(true)

  

  const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false
  })

  // const editorRef = useRef()

  // const getSunEditor = (sunEditor) =>{
  //   editor.current = sunEditor
  //   console.log(sunEditor.target.value)
  // }

  // useEffect(() => {

  //   fetch('http://localhost:5000/api/auth/all-cat')
  //     .then(res => res.json())
  //     .then(res => {
  //       console.log(res)
  //     })
  // }, [fetch])



  // form 


  const handleBlog = async (e) => {
    e.preventDefault()

    // try {
    //   const res = await fetch('http://localhost:5000/api/auth/blog', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       title, summary, url, latest
    //     })
    //   }).then(res => res.json())

    //   if (res.status === 'ok') {
    //     toast.success('Blog saved')

    //     handleSubmit()

    //     setOpen(!open)
    //   }
    // } catch (error) {
    //   console.log(error)
    // }

    console.log(title, summary, url, latest)
  }


  const [selected, setSelected] = useState([]);

  // const options = [
  //   { label: "Grapes 🍇", value: "grapes" },
  //   { label: "Mango 🥭", value: "mango" },
  //   { label: "Strawberry 🍓", value: "strawberry" },
  //   { label: "Watermelon 🍉", value: "watermelon" },
  //   { label: "Pear 🍐", value: "pear" },
  //   { label: "Apple 🍎", value: "apple" },
  //   { label: "Tangerine 🍊", value: "tangerine" },
  //   { label: "Pineapple 🍍", value: "pineapple" },
  //   { label: "Peach 🍑", value: "peach" }
  // ]


  return (
    <Modal isOpen={open}>
      <ToastContainer />
      <div className="centerDIV overflow-hidden">
        <div className="flex flex-col w-11/11 sm:
      style={{color:'#000'}}w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl mx-10 my-10" style={{ width: '100%' }}>
          <div
            className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg"
          >
            <p className="font-semibold text-gray-800">Add Blog</p>
            <div className="cursor-pointer rounded-full hover:bg-gray-300" onClick={() => setOpen(!open)}>
              <svg
                className="w-6 h-6 bg-dark rounded-full"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
          </div>
          <form onSubmit={handleBlog}>
            <div className="flex flex-col px-6 py-1 bg-gray-50">
              <p className="mb-2 font-semibold text-gray-700">Title</p>
              <input
                type="text"
                name="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
                placeholder="Blog Title"
                autoComplete="off"
                className="p-2 bg-white border border-gray-200 rounded shadow-sm"
                style={{ color: '#000' }}
              />
            </div>

            <div className="flex flex-col px-6 py-1 bg-gray-50">
              <p className="mb-2 font-semibold text-gray-700">Summary</p>
              <SunEditor
                // ref={editorRef}
                height="100%"
                name="summary"
                value={summary}
                onChange={e => setSummary(e)}
                placeholder="Content..."
              />
            </div>

            <div className="flex flex-col px-6 py-1 bg-gray-50">
              <p className="mb-2 font-semibold text-gray-700">Video URL <small style={{ float: 'right' }}>copy link from YT*</small></p>
              <input
                type="text"
                name="YTLink"
                // value={url}
                onChange={e => setUrl(e.target.value)}
                placeholder="Img URL"
                autoComplete="off"
                className="p-2 bg-white border border-gray-200 rounded shadow-sm"
                style={{ color: '#000' }}
              />
            </div>



            <div className="flex flex-col px-6 py-1 bg-gray-50 text-black">
              <p className="mb-2 font-semibold text-gray-700">Categoris</p>

              <MultiSelect
                options={option}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"
              />
            </div>

            <div className="flex flex-col px-6 py-1 bg-gray-50">
              <p className="mb-2 font-semibold text-gray-700">Latest</p>
              <input
                type="checkbox"
                name="latest"

                className="p-2 bg-white border border-gray-200 rounded shadow-sm"
                style={{ color: '#000' }}
              />
            </div>

            <div
              className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
            >
              <button className="px-4 py-2 w-full text-white font-semibold bg-blue-500 rounded"
                type='submit'
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  )
}


export default Model





