import React from "react";
import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, Dropdown} from "react-bootstrap";
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <>
            <Container className="topBar">
                <div className="row">
                    <div className="col-lg-4">
                        <p>FREE RETURNS, STANDARD SHIPPING ORDERS $99+</p>
                    </div>
                    <div className="col-lg-8 text-capitalize">
                        <ul className="nav">
                            <li className="nav-item">
                                <Link className="nav-link" href="/user/account">My Account</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/contact">Contact us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/whishlist">My Wishlist</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/cart">Cart</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/login">Log in</Link>
                            </li>
                        </ul>
                        <div className="d-flex topbarDropdown">
                            <select className="form-control" name="" id="">
                                <option value="en">ENG</option>
                                <option value="bn">BN</option>
                            </select>
                            <select className="form-control" name="" id="">
                                <option value="en">USD</option>
                                <option value="bn">EU</option>
                            </select>
                        </div>
                    </div>
                </div>
            </Container>
            <Navbar bg="light" className="mainNavbar" expand="lg">
                <Container>
                    <Navbar.Brand href="#">
                        <Image src="/images/logo.png" width={150} height={40}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{maxHeight: '100px'}}
                            navbarScroll>
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
