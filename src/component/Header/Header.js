import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { useSpring, animated, config } from 'react-spring';

const Header = () => {
    //animation set
    const [flip, set] = useState(false)

    //animation properties
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: true,
        reverse: flip,
        delay: 900,
        config: config.molasses,
        onRest: () => set(!flip),
    })

    return (
        <div>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark header-bg">
                <div className="container-fluid">

                    {/* Website animated logo  */}
                    <animated.div style={props}>
                        <NavLink className="navbar-brand text-danger fs-3 fw-bold" to="/home"><span className="text-warning">E-</span>Programming</NavLink>
                    </animated.div>

                    {/* collapsed navbar  */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* navbar menu  */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link header-link active" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link header-link" to="/about">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link header-link" to="/courses">Courses</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li>
                        </ul>

                        {/* navbar icons  */}
                        <span className="navbar-text fs-3 fw-bold text-white">
                            <i className="fas fa-search me-4"></i>
                            <i className="fas fa-shopping-cart me-4"></i>
                            <i className="far fa-user me-4"></i>
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;