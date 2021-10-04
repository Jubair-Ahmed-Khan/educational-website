import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const containerStyle = {
        backgroundColor: "lightGreen"
    }

    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div style={containerStyle}>
            <div className="container">
                <h2 className="text-primary text-center pt-5">Programming Courses</h2>
                <div>
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
        </div>

    );
};

export default Courses;