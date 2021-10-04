import React, { useEffect, useState } from 'react';
import AboutInfo from '../AboutInfo/AboutInfo';
import './About.css';

const About = () => {
    const src = "./images/about.jpg";
    const [info, setInfo] = useState([]);
    useEffect(() => {
        fetch('./aboutInfo.json')
            .then(res => res.json())
            .then(data => setInfo(data))
    }, [])
    const personContainer = {
        backgroundColor: "#fbfaf9"
    }
    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-6">
                        <div className="me-5">
                            <img className="img-fluid imgStyle" src={src} alt="welcome_image" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-6 py-5">
                        <h1 className="heading-style">Our Mission</h1>
                        <p className="text-style">There are three commitments we've made to the world. We've been grounded by these since day one:</p>
                        <ul className="text-style ms-2">
                            <li>Enhance teaching and learning</li>
                            <li>Increase high-quality education access for everyone</li>
                            <li>Advance learning platform create</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container shadow-lg p-5 my-5">
                <div className="row row-cols-sm-1 row-cols-md-4 row-cols-lg-4 text-center ms-4">
                    {
                        info.map(inf => <AboutInfo
                            key={inf.key}
                            info={inf}
                        ></AboutInfo>)
                    }
                </div>
            </div>
            <div style={personContainer}>
                <div className="container">

                </div>
            </div>
        </div>
    );
};

export default About;