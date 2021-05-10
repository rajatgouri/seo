import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Search from '@/components/Search'


export default function Home() {
  return (
    <>
      <PageSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
     <Search/>
    </>
  )
}
