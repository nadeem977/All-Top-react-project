import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import Logo from "../../../assetes/images/AllTop.png"

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg Navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"> <img src={Logo} alt="" /> </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className='nav-link' to={"/"}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link'>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link'>Tech</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link'>Bussines</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link signup' to={"Signup"}>Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link login' to={"Login"}>Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
