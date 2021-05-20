import React, { useState , useEffect } from 'react'
import Modal from 'react-modal'
import { spiner } from '../data/spinner.gif'
import MultiSelect from "react-multi-select-component";


const Model = ({ width }) => {

  const initialState = {
    title: '',
    tages: '',
    summary: '',
    YTLink: '',
    draft: false,
    date: '',
    latest: false
  }

  const [open, setOpen] = useState(true)
  const [cat, setCat] = useState([])
  const [loading, setLoading] = useState(false)

  const [cate,setCate] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/api/auth/all-cat')
    .then(res => res.json())
    .then(data => {
      setCat([data.data])

      cat.map((i)=>{
        i.map((w)=> setCate([w.cat]))
      })
      
    })
   

  },[])


  // cat.map((i)=>{
  //   i.map((w)=> setCate([w.cat]))
  // })
 
  const [selected, setSelected] = useState([]);



  const options = [
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry" },
    { label: "Watermelon 🍉", value: "watermelon" },
    { label: "Pear 🍐", value: "pear" },
    { label: "Apple 🍎", value: "apple" },
    { label: "Tangerine 🍊", value: "tangerine" },
    { label: "Pineapple 🍍", value: "pineapple" },
    { label: "Peach 🍑", value: "peach" }
  ]


  const [formdata, setformData] = useState([
    initialState.YTLink = '',
    initialState.date = '',
    initialState.draft = false,
    initialState.latest = '',
    initialState.summary = '',
    initialState.title = '',
    initialState.tages = ''
  ])

  const handleBlog = async (e) => {
    e.preventDefault()
    setformData([
      initialState.date = new Date,
      initialState.title = e.target[0].value,
      initialState.summary = e.target[1].value,
      initialState.YTLink = e.target[2].value,
      initialState.tages = e.target[3].value,
      initialState.latest = e.target[4].value,
      initialState.draft
    ])
    console.log(formdata)
  }


  // define date to date vaiable

  return (
    <Modal isOpen={open}>
      <div className="centerDIV overflow-hidden">
        <div className="flex flex-col w-11/11 sm:
      style={{color:'#000'}}w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl mx-10 my-10" style={{ width: width }}>
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
                value={formdata.title}
                onChange={(e) => {
                  setformData({
                    ...formdata,
                    [e.target.name]: e.target.value
                  })
                }}
                required
                placeholder="Blog Title"
                className="p-2 bg-white border border-gray-200 rounded shadow-sm"
                style={{ color: '#000' }}
              />
            </div>

            <div className="flex flex-col px-6 py-1 bg-gray-50">
              <p className="mb-2 font-semibold text-gray-700">Summary</p>
              <textarea
                type="text"
                name="summary"
                value={formdata.summary}
                onChange={(e) => {
                  setformData({
                    ...formdata,
                    [e.target.name]: e.target.value
                  })
                }}
                placeholder="Content..."
                className="p-2 bg-white border border-gray-200 rounded shadow-sm"
                style={{ color: '#000' }}
              />
            </div>

            <div className="flex flex-col px-6 py-1 bg-gray-50">
              <p className="mb-2 font-semibold text-gray-700">Video URL <small style={{ float: 'right' }}>copy link from YT*</small></p>
              <input
                type="text"
                name="YTLink"
                value={formdata.YTLink}
                onChange={(e) => {
                  setformData({
                    ...formdata,
                    [e.target.name]: e.target.value
                  })
                }}
                placeholder="Img URL"
                className="p-2 bg-white border border-gray-200 rounded shadow-sm"
              />
            </div>



            <div className="flex flex-col px-6 py-1 bg-gray-50 text-black">
              <p className="mb-2 font-semibold text-gray-700">Categoris</p>
              <MultiSelect
                options={cate}
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
                value={formdata.latest}
                onChange={(e) => {
                  setformData({
                    ...formdata,
                    [e.target.name]: e.target.value
                  })
                }}
                className="p-2 bg-white border border-gray-200 rounded shadow-sm"
                style={{ color: '#000' }}
              />
            </div>

            <div
              className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
            >
              <button className="px-4 py-2 w-full text-white font-semibold bg-blue-500 rounded"
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
