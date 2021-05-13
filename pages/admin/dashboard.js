import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import { PageSeo } from '@/components/SEO'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes ,faUserShield , faBlog, faFilter} from "@fortawesome/free-solid-svg-icons"
import Link from '@/components/Link'


import adminLink from '@/data/headerAdminLinks'

function Dashboard() {
  const [sidebar, setSidebar] = useState(false)

  return (
    <>
      <PageSeo
        title={`Admin - ${siteMetadata.author}`}
        description={`About - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/admin/dashboard`}
      />
      <div>
        <FontAwesomeIcon icon={faBars} className={sidebar ? 'hidden' : 'cursor-pointer'} onClick={() => setSidebar(!sidebar)} />
      </div>

      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items" onClick={() => setSidebar(!sidebar)}>
          <li className='navbar-toggle'>
            <div className='menu-bars'>
              <FontAwesomeIcon icon={faTimes} color="#fff" />
            </div>
          </li>
          {
            adminLink.map((i) => {
              return (
                <>
                  <li key={1} className="nav-text">

                      <Link href={i.href}>
                      <FontAwesomeIcon icon={faTimes} color="#fff" />
                      <span className="spann">{i.title}</span>
                    </Link>
                  </li>
                </>
              )
            })
          }
        </ul>
      </nav>

    </>
  )
}

export default Dashboard
