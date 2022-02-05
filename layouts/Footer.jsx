import React from 'react';
import {Container} from "react-bootstrap";
import FooterItem from "./items/FooterItem";

const Footer = () => {
    return (
        <div className="footer py-5">
            <Container>
                <div className="row">
                    <div className="col-12 col-sm-6 col-lg-4 col-xxl-3">
                        <h2>Shop All Product</h2>
                        <ul className="nav flex-column">
                            <FooterItem name="All Kinds of Meter" link="#" itemClass="" linkClass=""/>
                            <FooterItem name="Home Appliances" link="#" itemClass="" linkClass=""/>
                            <FooterItem name="Lifting Equipment" link="#" itemClass="" linkClass=""/>
                            <FooterItem name="Office Equipments" link="#" itemClass="" linkClass=""/>
                            <FooterItem name="Safety Equipments" link="#" itemClass="" linkClass=""/>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xxl-3">
                        <h2>Customer Service</h2>
                        <ul className="nav flex-column">
                            <FooterItem name="Help Center" link="#" itemClass="" linkClass=""/>
                            <FooterItem name="How to Buy" link="#" itemClass="" linkClass=""/>
                            <FooterItem name="Shipping Policy" link="#" itemClass="" linkClass=""/>
                            <FooterItem name="Return Policy" link="#" itemClass="" linkClass=""/>
                            <FooterItem name="Privacy Policy" link="#" itemClass="" linkClass=""/>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xxl-3">
                        <h2>About Us</h2>
                        <ul className="nav flex-column">
                            <FooterItem name="Career" link="#" itemClass="" linkClass=""/>
                            <FooterItem name="Affiliate" link="#" itemClass="" linkClass=""/>
                            <FooterItem name="Payments" link="#" itemClass="" linkClass=""/>
                            <FooterItem name="Events + Expo" link="#" itemClass="" linkClass=""/>
                            <FooterItem name="Daraz App" link="#" itemClass="" linkClass=""/>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xxl-3">
                        <p>Get all the latest information on Events, Sales and Offers. Sign up for Newsletter today.</p>
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
