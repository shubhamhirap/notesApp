import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.scss"

const Navbar = () => {
    return (
        <nav>
            <div className={`navbar-brand`}>
                Notes
            </div>
            <div className={`navbar-menu-container`}>
                <Link to="/">Notes</Link>
                <Link to="/create">Create a Note</Link>
            </div>
        </nav>
    )
}

export default Navbar
