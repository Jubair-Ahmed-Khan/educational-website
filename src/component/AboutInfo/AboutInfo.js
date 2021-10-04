import React from 'react';

const AboutInfo = (props) => {
    // destructuring object 
    const { count, topic } = props.info;
    return (
        <div className="col-sm-12 col-md-4 col-lg-4 py-2 text-secondary">
            <h2>{count}</h2>
            <p>{topic}</p>
        </div>

    );
};

export default AboutInfo;