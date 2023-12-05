import React from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light nav-bg pt-3 bg-secondary-subtle">
                    <div class="container-fluid">
                        <Link to="/" class="navbar-brand fs-3 ms-4" href="#">MetroCraftsmen</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav fs-5 ms-5 ms-5">
                                <li class="nav-item">
                                    <Link to="/" class="nav-link active fw-bold" aria-current="page">Home</Link>
                                </li>

                                <li class="nav-item">
                                    <Link to="/about" class="nav-link fw-bold">About</Link>
                                </li>
                                <div class="dropdown">

                                </div>

                                <li class="nav-item">
                                    <Link to="/plumber" class="nav-link fw-bold" >Plumber</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/electrician" class="nav-link fw-bold" href="">Electrician</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/carpenter" class="nav-link fw-bold" href="">Carpenter</Link>
                                </li>

                            </ul>
                        </div>
                        <div class="d-flex me-1" className='sub-login-container'>
                            <button class="btn btn-outline-dark me-2">Login</button>
                        </div>
                        <div class="d-flex me-3 ps-2">
                            <button class="btn btn-outline-dark me-2">Signup</button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
