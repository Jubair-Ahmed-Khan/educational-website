import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="footer mt-auto py-3 text-white footer-bg">
                <div className="p-5">
                    <div className="row">

                        {/* footer left content  */}
                        <div className="col-sm-8 col-md-7 py-4">
                            <h4 className="text-warning">Our Motto</h4>
                            <p>Our goal is to provide useful resources to the people of our country at a very reasonable price. Our resources will help our students to go a long way in the future. We wish your every success. Your success is our success.</p>
                        </div>

                        {/* footer right content  */}
                        <div className="col-sm-4 offset-md-1 py-4">
                            <h4 className="text-warning">Contact</h4>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://www.twitter.com" className="text-white">Follow on Twitter</a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com" className="text-white">Like on Facebook</a>
                                </li>
                                <li>
                                    <a href="https://www.yahoo.com" className="text-white">Email me</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* footer copyright  */}
                <p className="text-center text-white my-5">
                    &copy; 2021, All right reserved by E-Learning
                </p>
            </footer>
        </div>
    );
};

export default Footer;