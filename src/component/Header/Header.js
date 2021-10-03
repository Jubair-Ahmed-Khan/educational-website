import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="navbar sticky-top navbar-expand-lg header-bg">
                <div className="container-fluid">
                    <NavLink className="navbar-brand text-danger fs-3 fw-bold" to="/products">E-Learning</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link header-link active" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link header-link active" to="/about">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link header-link active" to="/services">Services</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link active" to="/contact">Contact</NavLink>
                            </li> */}
                        </ul>

                        <span class="navbar-text fs-3 fw-bold text-info">
                            <button className="btn btn-info text-white me-2">Log in</button>
                            <button className="btn btn-info text-white me-2">Sign up</button>
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;