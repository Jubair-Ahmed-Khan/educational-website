import React from 'react';
import { useHistory } from 'react-router';

const Login = () => {
    const src = "./images/login.jpg";
    const history = useHistory();

    const handleClick = () => {
        history.push('/home');
    }
    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-6">
                        <div className="me-5">
                            <img className="img-fluid" src={src} alt="welcome_image" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-6 py-5">
                        <form className="bg-white p-5 shadow-lg">
                            <h1 className="text-primary mb-4">Login</h1>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                                <small><a className="text-decoration-none" href="https://www.facebook.com">Forgot password?</a></small>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button onClick={handleClick} type="submit" className="btn btn-primary w-100">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;