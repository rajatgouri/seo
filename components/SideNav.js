import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield, faBlog, faBars, faAlignLeft, faSignOutAlt } from "@fortawesome/free-solid-svg-icons"
import Link from '@/components/Link'


const SideNav = () => {
    const [sidebar, setSidebar] = useState(false)

    return (
        <>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu transition'}>
                <ul className="nav-menu-items">
                   <div className="flex justify-center align-center" onClick={() => setSidebar(!sidebar)}>
                   <h1 className="text-white font-bold " style={{lineHeight: "80px"}}>
                       
                   </h1>
                    {
                        sidebar ? <FontAwesomeIcon style={{fontSize:'20px',margin:'28px 0px',transform:'translateX(92px)'}} icon={faBars} color="#fff"/> :
                        <FontAwesomeIcon style={{fontSize:'20px',margin:'28px 0px',transform:'translateX(92px)'}} icon={faBars} color="#fff"/>  
                    }
                   </div>
                    <li className={sidebar ? 'nav-Text-Active' : 'nav-text transition'} onClick={() => setSidebar(false)}>
                        <Link href="/admin/dashboard">
                            <FontAwesomeIcon icon={faUserShield} color="#fff" />
                            <span className={sidebar ? 'spann-Active' : 'spann transition'}>Dashboard</span>
                        </Link>
                    </li>
                    <li className={sidebar ? 'nav-Text-Active' : 'nav-text transition'} onClick={() => setSidebar(false)} >
                        <Link href="/admin/blog">
                            <FontAwesomeIcon icon={faBlog} color="#fff" />
                            <span className={sidebar ? 'spann-Active' : 'spann transition'}>Blogs</span>
                        </Link>
                    </li>
                    <li className={sidebar ? 'nav-Text-Active' : 'nav-text transition'} onClick={() => setSidebar(false)}>
                        <Link href="/admin/categories">
                            <FontAwesomeIcon icon={faAlignLeft} color="#fff" />
                            <span className={sidebar ? 'spann-Active' : 'spann transition'}>Categories</span>
                        </Link>
                    </li>
                    <li className={sidebar ? 'nav-Text-Active' : 'nav-text transition'}
                    onClick={()=>{
                        setSidebar(false)
                        localStorage.removeItem('authToken')
                        window.location.href = '/'
                    }}
                    >
                            <Link href="/">
                            <FontAwesomeIcon icon={faSignOutAlt} color="#fff" />
                            <span className={sidebar ? 'spann-Active' : 'spann transition'}>Logout</span>
                            </Link>
                    </li>
                </ul>
            </nav>

        </>
    )
}

export default SideNav
