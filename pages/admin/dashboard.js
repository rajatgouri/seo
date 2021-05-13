import siteMetadata from '@/data/siteMetadata'
import { PageSeo } from '@/components/SEO'

function Dashboard() {


  return (
    <>
      <PageSeo
        title={`Admin - ${siteMetadata.author}`}
        description={`About - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/admin/dashboard`}
      />
    </>  
  )
}

export default Dashboard
