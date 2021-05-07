import { useState } from 'react'
import Link from 'next/link'

function Sidebar() {
  const [shouldtoggle, setShouldToggle] = useState(true)
  const sideToggle = () => {
    if (shouldtoggle) {
      document.getElementById('navSide').style.width = '0px'
      document.getElementById('toggler').style.width = '60px'
      document.querySelector('.home-page-wrapper').style.marginLeft = '0px'
      setShouldToggle(false)
    } else {
      document.getElementById('navSide').style.width = '264px'
      document.getElementById('toggler').style.width = '264px'
      document.querySelector('.home-page-wrapper').style.marginLeft = '270px'
      setShouldToggle(true)
    }
  }

  return (
    <>
      <button className="side-toggler" id="toggler" onClick={sideToggle}>
        <span className="navbar-toggler-icon">&#9776;</span>
      </button>
      <div className="nav-left-sidebar sidebar-dark" id="navSide">
        <div className="menu-list">
          <nav className="navbar navbar-expand-lg navbar-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            ></button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav flex-column">
                <li className="nav-item active">
                  <a className="nav-link custom-nav-link">Dashboard</a>
                </li>
                <li className="nav-item active">
                  <Link href="/dashboard/blogs">
                    <a className="nav-link custom-nav-link">Blogs</a>
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link href="/dashboard/users">
                    <a className="nav-link custom-nav-link">Users</a>
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link href="/dashboard/categories">
                    <a className="nav-link custom-nav-link">Categories</a>
                  </Link>
                </li>
                <li className="nav-item active">
                  <a className="nav-link custom-nav-link">Logout</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Sidebar
