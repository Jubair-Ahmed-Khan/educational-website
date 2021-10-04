import React from 'react';

const AboutInfo = (props) => {
    const { count, topic } = props.info;
    return (
        <div className="col py-2 mx-4 text-secondary">
            <h2>{count}</h2>
            <p>{topic}</p>
        </div>

    );
};

export default AboutInfo;