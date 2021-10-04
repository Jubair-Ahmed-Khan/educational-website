import React, { useEffect, useState } from 'react';
import AboutInfo from '../AboutInfo/AboutInfo';
import AboutLeader from '../AboutLeader/AboutLeader';
import './About.css';

const About = () => {
    const src = "./images/about.jpg";
    const [info, setInfo] = useState([]);
    const [leaders, setLeaders] = useState([]);
    useEffect(() => {
        fetch('./aboutInfo.json')
            .then(res => res.json())
            .then(data => setInfo(data))
    }, [])
    useEffect(() => {
        fetch('./aboutLeader.json')
            .then(res => res.json())
            .then(data => setLeaders(data))
    }, [])

    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-6">
                        <div className="me-5">
                            <img className="img-fluid img-style" src={src} alt="welcome_image" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-6 py-5">
                        <h1 className="heading-style text-primary">Our Mission</h1>
                        <p className="text-style">There are three commitments we've made to the world. We've been grounded by these since day one:</p>
                        <ul className="text-style ms-2">
                            <li>Enhance teaching and learning</li>
                            <li>Increase high-quality education access for everyone</li>
                            <li>Advance learning platform create</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container shadow-lg p-3 my-5">
                <div className="row text-center">
                    {
                        info.map(inf => <AboutInfo
                            key={inf.key}
                            info={inf}
                        ></AboutInfo>)
                    }
                </div>
            </div>
            <div className="leader-container">
                <div className="container">
                    <div className="mb-5">
                        <p className="text-center text-danger">Our Team</p>
                        <h2 className="text-center text-danger">Leadership</h2>
                    </div>
                    <div className="row my-5">
                        {
                            leaders.map(leader => <AboutLeader
                                key={leader.key}
                                leader={leader}
                            ></AboutLeader>)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;