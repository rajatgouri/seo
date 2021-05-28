const { default: Search } = require("@/components/Search")
import siteMetadata from '@/data/siteMetadata'
import { PageSeo } from '@/components/SEO'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import API from '../utils/API'

import { useState, useEffect } from 'react'



const Categories = () => {
    const [cats, setCats] = useState([])
    const getAllCategories = async () => {
        API({
            method: 'GET',
            url: '/category/getAllcategories',
            headers: {
              'Content-Type': 'application/json',
            }
          })
            .then(response => {
              setCats(response.data.data)
              console.log(response.data.data)
            })
            .catch(err => {
              console.log(err)
            })
      
    }
    useEffect(() => {
        getAllCategories()
        console.log(cats)
      }, [])
    // const sortedTags = cats.map(tags => { Object.keys(tags).sort((a, b) => tags[b] - tags[a]) })
    return (
        <div>
            <PageSeo
                title={`Categories - ${siteMetadata.author}`}
                description={siteMetadata.description}
                url={`${siteMetadata.siteUrl}/categories`}
            />
            <Search />

            {/* tag */}
            <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:justify-center md:items-center md:divide-y-0 md:flex-row md:space-x-6 md:mt-18">
                {/* <div className="pt-6 pb-8 space-x-2 md:space-y-5">
                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 md:border-r-2 md:px-6">
                        Categories
          </h1>
                </div> */}
                <div className="flex flex-wrap max-w-full">
                    {cats && cats.length > 0 && cats.map((t) => {
                        return (
                            <div key={t.id} className="mt-2 mb-2 mr-5">
                                <Tag text={t.cat} />
                                <Link
                                    href={`/tags/${t.id}`}
                                    className="-ml-2 text-sm font-semibold text-gray-600 uppercase dark:text-gray-300"
                                >
                                    {/* {` (${tags[t]})`} */}
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default Categories
