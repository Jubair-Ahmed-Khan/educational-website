import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {

    //set courses
    const [courses, setCourses] = useState([]);

    // load courses 
    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="course-container">
            <div className="container">
                <h2 className="text-primary text-center pt-5">Programming Courses</h2>

                {/* display courses  */}
                <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-1 py-5">
                    {
                        courses.map(course => <Course
                            key={course.key}
                            course={course}
                        ></Course>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Courses;