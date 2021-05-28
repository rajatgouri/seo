import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSeo } from '@/components/SEO'

// export async function getStaticProps() {
//   const posts = await getAllFilesFrontMatter('blog')
//   return { props: { posts } }
// }


export default function Blog() {
  const posts = [{
    title: 'Hello, World',
    summary: 'Hello, Summary',
    url: '',
    tags: ['one' , 'two'],
    date: ''
  }]
  return (
    <>
      <PageSeo
        title={`Blog - ${siteMetadata.author}`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/blog`}
      />
      <ListLayout posts={posts} title="All Blogs" />
    </>
  )
}
