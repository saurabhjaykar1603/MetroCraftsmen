import React, { useState, useEffect } from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Navbar() {

    const [user, setUser] = useState({});


    useEffect(() => {
        const storageUser = JSON.parse(localStorage.getItem("user") || '{}');
        setUser(storageUser);
    }, [])

    return (
        <div>
            <div>
                <nav class="navbar navbar-expand-lg bg-body-tertiary py-3 shadow">
                    <div class="container-fluid">
                        <Link to="/" class="navbar-brand fw-bolder" href="#">
                            Metro Crafts Men
                        </Link>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0  fw-bold">
                                <li class="nav-item">
                                    <Link to="/" class="nav-link " aria-current="page" href="#">
                                        Home
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/about" class="nav-link" href="#">
                                        About
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/addappointment" class="nav-link" href="#">
                                        Add Appoiment
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/myappointment" class="nav-link" href="#">
                                        My Appoiment
                                    </Link>
                                </li>

                                <li class="nav-item">
                                    <div class="btn-group">
                                        <button class="btn dropdown-toggle nav-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Services
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><Link to="/electrician" class="dropdown-item" >Electrician</Link></li>
                                            <li><Link to="/plumber" class="dropdown-item" >Plumber</Link></li>
                                            <li><Link to="/carpenter" class="dropdown-item" >Carpenter</Link></li>
                                        </ul>
                                    </div>
                                </li>

                                <li class="nav-item">
                                    <Link to="/contact" class="nav-link" href="#">
                                       Contact
                                    </Link>
                                </li>
                            </ul>
                            {/* <ul class="navbar-nav mb-2 me-3 mb-lg-0">
                                <li class="nav-item">
                                    <Link to="" class="nav-link" href="#">
                                        User
                                    </Link>
                                </li>
                            </ul> */}

                            <div class="d-flex  ">
                                <ul class="navbar-nav mb-2 me-3 mb-lg-0">
                                    <li class="nav-item">
                                        <Link to="/login" class="nav-link" href="#">
                                            Login
                                        </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="/signup" class="nav-link" href="#">
                                            signup
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>Hello, {user.name || "Guest"}

                                {
                                    user?.name ?
                                        (<span className='navbar-logout' onClick={() => {
                                            localStorage.removeItem("user");
                                            window.location.href = "/login";
                                        }}>Logout</span>)
                                        : null
                                }

                            </div>
                            {/* <button type="button" className="btn btn-secondary d-block">
                                log out
                            </button> */}
                        </div>
                    </div>
                </nav>

            </div>
        </div>
    );
}

export default Navbar;
