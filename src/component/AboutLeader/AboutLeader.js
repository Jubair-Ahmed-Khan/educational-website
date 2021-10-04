import React from 'react';
import './AboutLeader.css';

const AboutLeader = (props) => {
    // object destructuring 
    const { key, name, designation } = props.leader;

    //dynamic image link
    const imgSrc = `./images/leader-${key}.jpg`;

    return (

        <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card shadow-lg mb-3">
                {/* leader image  */}
                <div className="mx-auto pt-3">
                    <img src={imgSrc} className="styled-image" alt="leader_image" />
                </div>

                {/* leader description  */}
                <div className="card-body">
                    <h5 className="card-title text-center text-primary">{name}</h5>
                    <p className="card-text text-center">{designation}</p>
                </div>
            </div>
        </div>
    );
};

export default AboutLeader;