import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEF57ETKdRQ8BmE1glfF-yEMgbHl9T9OAHPUghwOZc4A&s" alt="SBCE" width="40" height="35"/>
                     Sree Buddha College of Engineering
                </NavLink>
                <div>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
                    </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
