import React from 'react'
import { Link} from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container fw-bolder">
          <Link className="navbar-brand" to="/">
            MayorTech
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn btn-primary text-white px-3" to="/signin">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn btn-primary text-white px-3" to="/signup">
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
    </nav>
    </div>
  )
}

export default NavBar