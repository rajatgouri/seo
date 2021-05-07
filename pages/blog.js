import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSeo } from '@/components/SEO'
import LayoutWrapper from '@/components/LayoutWrapper'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  return { props: { posts } }
}

export default function Blog({ posts }) {
  return (
    <>
      <LayoutWrapper>
        <PageSeo
          title={`Blog - ${siteMetadata.author}`}
          description={siteMetadata.description}
          url={`${siteMetadata.siteUrl}/blog`}
        />
        <ListLayout posts={posts} title="All Blogs" />
      </LayoutWrapper>
    </>
  )
}
