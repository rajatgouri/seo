import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { PageSeo } from '@/components/SEO'
const MAX_DISPLAY = 5
const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }
// import { getAllFilesFrontMatter } from '@/lib/mdx'
import Search from '@/components/Search'
import { useEffect, useState } from 'react'
import API from 'utils/API'
// import { create } from 'eslint/lib/rules/*'

const latest = () => {
    const [lBlogs, setLBlogs] = useState([]);
    useEffect(() => {
        const fetchBlogs = async () => {
            try{
                API({
                    method: 'GET',
                    url: '/blogs/getBlogs',
                })
                .then((data) => {
                    // console.log(data.data.data);
                    setLBlogs(data.data.data);
                })
                .catch(err => console.log(err));
            }
            catch(eror){
                console.log(error);
            }
        }
        fetchBlogs()
    } , [])
    return (
        <>
        <PageSeo
        title={`Latest - ${siteMetadata.author}`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/latest`}
      />
      <Search/>
            <div className="divide-y divide-gray-200 w-full dark:divide-gray-700" style={{padding:'0 40px' , width: '100% !important'}}>
                <div className="pt-6 pb-8 space-y-2 md:space-y-5">
                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                        Latest
                    </h1>
                    <p className="text-lg leading-7 hy text-gray-500 dark:text-gray-400">
                        {siteMetadata.description}
                    </p>
                </div>
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {!lBlogs.length && 'No posts found.'}
                    
                    {lBlogs.slice(0, MAX_DISPLAY).map((frontMatter) => {
                        const { id, title, summary, url, latest, category, createdAt } = frontMatter
                        console.log(id, title, summary, url, latest, category[0].value , createdAt)
                        return (
                            <li key={id} className="py-12">
                                <article>
                                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                                        <dl>
                                            <dt className="sr-only">Published on</dt>
                                            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                                <time dateTime={createdAt}>
                                                    {new Date(createdAt).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                                                </time>
                                            </dd>
                                        </dl>
                                        <div className="space-y-5 xl:col-span-3">
                                            <div className="space-y-6">
                                                <div>
                                                    <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                                        <Link
                                                            href={`/blog/${id}`}
                                                            className="text-gray-900 dark:text-gray-100"
                                                        >
                                                            {title}
                                                        </Link>
                                                    </h2>
                                                    <div className="flex flex-wrap">
                                                        {category.map((tag) => (
                                                            <Tag key={tag.label} text={tag.value} />
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="prose text-gray-500 max-w-none dark:text-gray-400"
                                                  dangerouslySetInnerHTML={{ __html: summary}}  >
                                                </div>
                                            </div>
                                            <div className="text-base font-medium leading-6">
                                                <Link
                                                    href={`blog/${id}`}
                                                    className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                                                    aria-label={`Read "${title}"`}
                                                >
                                                    Read more &rarr;
                        </Link>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </li>
                        )
                    })}
                </ul>
            </div>
            {/* {posts.length > MAX_DISPLAY && (
                <div className="flex justify-end text-base font-medium leading-6">
                    <Link
                        href="/blog"
                        className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                        aria-label="all posts"
                    >
                        All Posts &rarr;
                    </Link>
                </div>
            )} */}
        </>
    )
}

export default latest
