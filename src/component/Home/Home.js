import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Home = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    const src = "./images/book.png";
    const headerStyle = {
        backgroundColor: "lightblue"
    }
    return (
        <div>

            {/* header container  */}
            <div style={headerStyle}>
                <div className="container">
                    <div className="row py-5">
                        <div className="col-sm-12 col-md-8 col-lg-6 my-5">
                            <div>
                                <h1 className="text-success text-uppercase">
                                    We Transform Vision <br />
                                    into Creative Results
                                </h1>
                                <p className="my-5">
                                    Stuck in learning programming languages ? Can't figure out what to do ? Lack of useful resources? We are here to help you to figure out your learning technique and take best preparation for brightening your future.
                                </p>
                                <a className="btn btn-danger text-white" href="https://www.youtube.com">Explore Us</a>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-8 col-lg-6">
                            <div className="ms-5">
                                <img className="img-fluid" src={src} alt="welcome_image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* course container  */}
            <div className="container my-5">
                <h2 className="text-center text-danger">Our Courses</h2>
                <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-1 py-5">
                    {
                        courses.slice(0, 4).map(course => <Course
                            key={course.key}
                            course={course}
                        ></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;