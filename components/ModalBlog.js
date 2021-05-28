
import React, { useState, useEffect, useRef } from 'react'
import MultiSelect from "react-multi-select-component";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import dynamic from 'next/dynamic';
import 'suneditor/dist/css/suneditor.min.css';
import API from '../utils/API';

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false
})


const setOptions = {
  buttonList: [
    ['fontSize', 'formatBlock'],
    ['bold', 'underline', 'italic', 'removeFormat'],
    ['fontColor', 'hiliteColor', 'outdent', 'indent', 'align', 'horizontalRule', 'list'],
    ['fullScreen']],
}


const Model = ({ open, handleSubmit, close, id }) => {

  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [url, setUrl] = useState('')
  const [latest, setLatest] = useState(true)
  const [selected, setSelected] = useState([]);
  const [categories, setCategories] = useState();
  const [hide, setHide] = useState(false);

  const fetchBlogById = async()=>{

    API({
      method: 'GET',
      url: `/blogs/getById/${id}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('authToken')}`
      }
    }).then((response) => { 
      console.log(response)
      setTitle(response.data.blog.title)
      setSummary(response.data.blog.summary)
      setSelected(response.data.blog.category)
      setUrl(response.data.blog.url)
      setLatest(response.data.blog.latest)

    }).catch(err => {
      console.log(err)
    })
  }


  useEffect(() => {
    API({
      method: 'GET',
      url: '/category/get-categories',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('authToken')}`
      }
    })
      .then(response => {
        let categories = response.data.data.map(cat => {
          return { label: cat.cat, value: cat.cat }
        });
        setCategories(categories)
        console.log(categories)
      })
      .catch(err => {
        toast.error(err.response.data.error)
      })
  }, [])



  useEffect(() => {
    
    console.log('hi')
    if (typeof id === 'number') {
      fetchBlogById()
    }   
  }, [id])




  const handleClose = () => {
    setTitle('')
    setSummary('')
    close()
    setSelected('')
    setLatest(false)
    setUrl('')
    setHide(false)
  }


  const handleBlog = async () => {

    let requestUrl = id ? `/blogs/updateBlog/${id}` : '/blogs/blog'
    let method = id ? 'PUT' : 'POST'
    console.log("From Latest - ",latest);
    console.log(url)
    API({
      method,
      url:requestUrl,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('authToken')}`
      },
      data: {
        title,
        summary,
        selected,
        latest,
        url,
      }
    })
      .then(response => {
        if (response.data.status === 'error') {
          toast.warn(response.data.error)
        }

        handleSubmit()
        setHide(true)
        handleClose()
        
      })
      .catch(err => {
        toast.error(err.response.data.error)
      })
  }



  return (

    <>
      {
        open ?
          <div
            className="justify-center items-center overflow-x-auto overflow-y-auto  inset-0 z-50 outline-none focus:outline-none"
            style={{
              position: 'absolute',
              width: '100%'
            }}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <p> Add Blog</p>


                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => {
                      handleClose()
                    }}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">

                  <div className="flex flex-col px-6 py-1 bg-gray-50" >
                    <p className="mb-2 font-semibold text-gray-700">Title</p>
                    <input
                      type="text"
                      name="title"
                      value={title}
                      onChange={e => {
                        e.preventDefault()
                        setTitle(e.target.value)
                      }}
                      required
                      placeholder="Blog Title"
                      autoComplete="off"
                      className="p-2 bg-white border border-gray-200 rounded shadow-sm"
                      style={{ color: '#000' }}
                    />
                  </div>

                  <div className="flex flex-col px-6 py-1 bg-gray-50">
                    <p className="mb-2 font-semibold text-gray-700">Summary</p>
                    { !hide ? <SunEditor
                      setOptions={setOptions}
                      height="100%"
                      name="summary"
                      value={summary}
                      setContents={summary}
                      onChange={e => setSummary(e)}
                      placeholder="Content..."
                    /> : null}
                  </div>

                  <div className="flex flex-col px-6 py-1 bg-gray-50" >
                    <p className="mb-2 font-semibold text-gray-700">Video URL</p>
                    <input
                      type="text"
                      name="url"
                      value={url}
                      onChange={e => {
                        e.preventDefault()
                        setUrl(e.target.value)
                      }}
                      required
                      placeholder="video url..."
                      autoComplete="off"
                      className="p-2 bg-white border border-gray-200 rounded shadow-sm"
                      style={{ color: '#000' }}
                    />
                  </div>

                  <div className="flex flex-col px-6 py-1 bg-gray-50 text-black">
                    <p className="mb-2 font-semibold text-gray-700">Categoris</p>

                  {
                    categories ? <MultiSelect
                    options={categories}
                    value={selected}
                    onChange={setSelected}
                    labelledBy="Select"
                  /> : null
                  }
                  </div>


                  <div
                    className="px-6 py-1 bg-gray-50"
                    style={{
                      paddingTop: "15px",
                      paddingBottom: "15px",
                    }}
                  >
                    <input
                      type="checkbox"
                      name="latest"
                      checked={latest}
                      value={latest}
                      onChange={(e)=> setLatest(e.target.checked)}
                      className="p-2 bg-white border border-gray-200 rounded shadow-sm"
                      style={{ color: '#000' }}
                    />
                    <span className="mb-3 ml-2 mt-3  font-semibold text-gray-700">Latest</span>

                  </div>

                  <div
                    className="text-right p-2 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
                  >
                    <button className="px-4 py-2  font-semibold border  rounded"
                      type='button'
                      onClick={handleClose}
                    >
                      close
                    </button>
                    <button className="px-4 py-2 ml-2 text-white font-semibold bg-blue-500 rounded"
                      type='submit'
                      onClick={handleBlog}
                    >
                      Save
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
          : null
      }
    </>
  )
}

export default Model