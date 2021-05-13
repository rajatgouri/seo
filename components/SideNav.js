import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield, faBlog, faFilter, faArrowLeft,faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Link from '@/components/Link'

const SideNav = () => {
    const [sidebar, setSidebar] = useState(false)
    return (
        <>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu transition'}>
                <ul className="nav-menu-items" onClick={() => setSidebar(!sidebar)}>
                   <div className="flex justify-center align-center">
                   <h1 className="text-white font-bold">User Name</h1>
                    {
                        sidebar ?   <FontAwesomeIcon style={{fontSize:'20px',margin:'28px 0px',transform:'translateX(50px)'}} icon={faArrowLeft} color="#fff"/> :
                        <FontAwesomeIcon style={{fontSize:'20px',margin:'28px 0px',transform:'translateX(50px)'}} icon={faArrowRight} color="#fff"/>  
                    }
                   </div>
                    <li className={sidebar ? 'nav-Text-Active' : 'nav-text transition'}>
                        <Link href="/">
                            <FontAwesomeIcon icon={faUserShield} color="#fff" />
                            <span className={sidebar ? 'spann-Active' : 'spann transition'}>Dashboard</span>
                        </Link>
                    </li>
                    <li className={sidebar ? 'nav-Text-Active' : 'nav-text transition'}>
                        <Link href="/">
                            <FontAwesomeIcon icon={faBlog} color="#fff" />
                            <span className={sidebar ? 'spann-Active' : 'spann transition'}>Blogs</span>
                        </Link>
                    </li>
                    <li className={sidebar ? 'nav-Text-Active' : 'nav-text transition'}>
                        <Link href="/">
                            <FontAwesomeIcon icon={faFilter} color="#fff" />
                            <span className={sidebar ? 'spann-Active' : 'spann transition'}>Categories</span>
                        </Link>
                    </li>
                </ul>
            </nav>

        </>
    )
}

export default SideNav
