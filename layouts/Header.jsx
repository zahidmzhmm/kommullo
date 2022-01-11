import React, {useState, useEffect} from "react";
import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, Dropdown} from "react-bootstrap";
import Image from 'next/image';
import NavItem from "./items/NavItem";
import {
    RiInstagramFill,
    RiUserLine,
    RiTwitterFill,
    RiFacebookCircleFill,
    RiSearchLine,
    RiPhoneLine
} from 'react-icons/ri';
import {VscHeart} from 'react-icons/vsc';
import {BsBag, BsChevronDown} from 'react-icons/bs';
import {AiOutlineBars} from 'react-icons/ai';
import Link from 'next/link';
import NavItemB from "./items/NavItemB";

const Header = ({navActiveStatus}) => {
    const [activeNav, setActiveNav] = useState(navActiveStatus);
    return (
        <div className="d-none d-lg-block">
            <Container className="topBar px-0">
                <div className="row">
                    <div className="col-xl-4 col-lg-3">
                        <p className="mb-0 mt-2">FREE RETURNS, STANDARD SHIPPING ORDERS $99+</p>
                    </div>
                    <div className="col-xl-8 col-lg-9 d-flex justify-content-end text-capitalize">
                        <ul className="nav">
                            <NavItem link="/user/account" name="My Account"/>
                            <NavItem link="/contact" name="Contact us"/>
                            <NavItem link="/blog" name="Blog"/>
                            <NavItem link="/wish-list" name="My Wishlist"/>
                            <NavItem link="/cart" name="Cart"/>
                            <NavItem link="/login" name="Login"/>
                        </ul>
                        <div className="d-flex topbarDropdown py-2">
                            <select className="form-control" name="" id="">
                                <option value="en">ENG</option>
                                <option value="bn">BN</option>
                            </select>
                            <select className="form-control ms-2" name="" id="">
                                <option value="en">USD</option>
                                <option value="bn">EU</option>
                            </select>
                        </div>
                        <div className="iconsSection d-flex py-1 ms-2">
                            <a href="#" className="facebook ms-1"><RiFacebookCircleFill/></a>
                            <a href="#" className="twitter ms-1"><RiTwitterFill/></a>
                            <a href="#" className="instagram ms-1"><RiInstagramFill/></a>
                        </div>
                    </div>
                </div>
            </Container>
            <hr className="my-0 bar"/>
            <div className="mainNavbarSection py-3">
                <Container className="px-0">
                    <div className="d-flex">
                        <div className="logo"><Image src="/images/logo.png" width={300} height={80} alt="Logo"/></div>
                        <div className="bigSearchBar mt-2 d-flex">
                            <input type="text" className="form-control" placeholder="Search..."/>
                            <button className="icon"><RiSearchLine/></button>
                        </div>
                        <div className="callNow">
                            <div className="d-flex">
                                <div className="icon"><RiPhoneLine/></div>
                                <span className="text-uppercase ms-1">Call Us Now</span>
                            </div>
                            <h4><a href="tel:0123456789">+123 5678 890</a></h4>
                        </div>
                        <div className="mainIconSection d-flex mt-1">
                            <Link href="#"><a className="iconItem"><RiUserLine/></a></Link>
                            <Link href="#"><a className="iconItem"><VscHeart/></a></Link>
                            <Link href="#"><a className="iconItem"><BsBag/></a></Link>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="navbarBottom bg-light">
                <Container className="d-flex px-0">
                    <div className="firstNav">
                        <button onClick={(e) => setActiveNav(!activeNav)}>
                            <span className="icon me-3"><AiOutlineBars/></span>
                            All Departments
                            <span className="icon iconRight"><BsChevronDown/></span>
                        </button>
                        <div className={`deptDropdown ${activeNav && 'activeDeptDropdown'}`}>
                            <NavItemB discount={false} toggle={true} name="Cell Phones" link="#"
                                      icon={<AiOutlineBars/>}/>
                            <NavItemB discount={false} toggle={true} name="Computers & Accessories" link="#"
                                      icon={<AiOutlineBars/>}/>
                            <NavItemB discount={false} toggle={false} name="Television & Video" link="#"
                                      icon={<AiOutlineBars/>}/>
                            <NavItemB discount={false} toggle={false} name="Smartwatches" link="#"
                                      icon={<AiOutlineBars/>}/>
                            <NavItemB discount={false} toggle={false} name="Headphones" link="#"
                                      icon={<AiOutlineBars/>}/>
                            <NavItemB discount={false} toggle={false} name="Camera & Photos" link="#"
                                      icon={<AiOutlineBars/>}/>
                            <NavItemB discount={false} toggle={false} name="Video Games" link="#"
                                      icon={<AiOutlineBars/>}/>
                            <NavItemB discount={false} toggle={false} name="Sports & Outdoors" link="#"
                                      icon={<AiOutlineBars/>}/>
                            <NavItemB discount={true} toggle={false} name="Best Sellers" link="#"
                                      icon={<AiOutlineBars/>}/>
                            <NavItemB discount={false} toggle={false} name="Top 100 Offers" link="#"
                                      icon={<AiOutlineBars/>}/>
                            <NavItemB discount={false} toggle={false} name="New Arrivals" link="#"
                                      icon={<AiOutlineBars/>}/>
                            <NavItemB discount={false} toggle={false} name="View Games" link="#"
                                      icon={<AiOutlineBars/>}/>
                        </div>
                    </div>
                    <div className="middleNav d-flex">
                        <Dropdown className="mDropdown ms-2 mt-1">
                            <Dropdown.Toggle variant="na" id="dropdown-basic">Home</Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Link href="#"><Dropdown.Item>Action</Dropdown.Item></Link>
                                <Link href="#"><Dropdown.Item>Action</Dropdown.Item></Link>
                                <Link href="#"><Dropdown.Item>Action</Dropdown.Item></Link>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className="mDropdown ms-2 mt-1">
                            <Dropdown.Toggle variant="na" id="dropdown-basic">Shop</Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Link href="#"><Dropdown.Item>Action</Dropdown.Item></Link>
                                <Link href="#"><Dropdown.Item>Action</Dropdown.Item></Link>
                                <Link href="#"><Dropdown.Item>Action</Dropdown.Item></Link>
                                <Link href="#"><Dropdown.Item>Action</Dropdown.Item></Link>
                            </Dropdown.Menu>
                        </Dropdown>
                        <ul className="nav">
                            <li className="nav-item ms-xl-2 mt-1">
                                <Link href="#"><a href="" className="nav-link">Cell Phones</a></Link>
                            </li>
                            <li className="nav-item ms-xl-2 mt-1">
                                <Link href="#"><a href="" className="nav-link">Headphones</a></Link>
                            </li>
                            <li className="nav-item ms-xl-2 mt-1">
                                <Link href="#"><a href="" className="nav-link">Blog</a></Link>
                            </li>
                            <li className="nav-item ms-xl-2 mt-1">
                                <Link href="#"><a href="" className="nav-link">Contact</a></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="lastNav ms-auto">
                        <Dropdown className="mt-1">
                            <Dropdown.Toggle variant="na" id="dropdown-basic">Super Discount</Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Link href="#"><Dropdown.Item>Action</Dropdown.Item></Link>
                                <Link href="#"><Dropdown.Item>Action</Dropdown.Item></Link>
                                <Link href="#"><Dropdown.Item>Action</Dropdown.Item></Link>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Header;
