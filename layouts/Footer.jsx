import React from 'react';
import {Container} from "react-bootstrap";

const Footer = () => {
    return (
        <div className="footer py-5">
            <Container>
                <div className="row">
                    <div className="col-12 col-sm-6 col-lg-4 col-xxl-3">
                        <h2>Shop All Product</h2>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Active</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xxl-3">
                        <h2>Customer Service</h2>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Active</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xxl-3">
                        <h2>About Us</h2>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Active</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xxl-3">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa deserunt doloribus illo ipsa
                            iste magni nobis quia sunt</p>
                        <form action="">
                            <div className="input-group mt-3 mb-3">
                                <input type="text" className="form-control" placeholder="Email Address"
                                       aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                    <span className="input-group-text btn btn-success" id="basic-addon2">Subscribe</span>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
