import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Course = (props) => {
    const { img, name, creator, duration, price } = props.course;
    // console.log(price);
    const url = `./images/${img}`;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
    return (
        <div>
            <div className="col">
                <div className="card shadow-lg mb-sm-3 h-100">
                    {/* card image  */}
                    <img src={url} className="card-img-top  p-3" alt="course-img" style={{ height: "200px" }} />

                    {/* card info */}
                    <div className="card-body">
                        <p><span className="fw-bolder text-primary">Name: </span>{name}</p>
                        <p><span className="fw-bolder text-primary">Instructor: </span>{creator}</p>
                        <p><span className="fw-bolder text-primary">Duration: </span>{duration}</p>
                        <p><span className="fw-bolder text-primary">Price: </span>{price}</p>
                    </div>

                    {/* card footer  */}
                    <div className="card-footer">
                        {/* card submit button  */}
                        <button type="button" className="btn btn-danger text-white w-100">
                            {cartIcon} <span className="ms-2">Add To Cart</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;