import Head from 'next/head';
import React from 'react';
import Header from "../layouts/Header";
import {Container} from "react-bootstrap";
import Footer from "../layouts/Footer";
import {IoHome} from 'react-icons/io5';
import {AiOutlineBars} from 'react-icons/ai';
import {RiArrowRightSLine, RiStarFill, RiArrowDownSLine} from 'react-icons/ri';
import Link from 'next/link';
import Image from "next/image";

const Shop = () => {
    const [data, setData] = React.useState([{}, {}, {}, {}, {}, {}])
    return (
        <>
            <Head>
                <title>Shop</title>
                <meta name="description"
                      content="This is Description"/>
                <meta property="og:image" content="https://zahidmzhmm.com/uploads/169img.jpg"/>
            </Head>
            <Header navActiveStatus={false}/>
            <Container className="mainContentData mainPadding pt-lg-0">
                <h1 className="pt-3 heading">Safety Equiment in Bangladesh</h1>
                <p className="mb-3 paragraph mt-2">
                    <strong> Safety Equipment </strong> is Safety Product
                    <strong> Safety Equipment </strong> protects the works from injuries. Different types of
                    <strong> Safety Equipment </strong> are used by workes. There are different types of Safety
                    Equipment
                    available: Fire Safety Equipment, Lab Safety Equipment, Bpat Safety Equipment, Welding Safety
                    Equipment,
                    Industrial Safety Equipment,
                    Construction Safety Equipment, Marine Safety Equipment, Bathroom Safety Equipment, Pool Safety
                    Equipment, Marine Safety Equipment, PersoaSafety Equipment ETC. If you are looking for the best
                    Safety
                    Equipment. We are the best supplier of
                    <strong> Safety Equipment </strong>
                </p>
                <div className="row mx-0">
                    <div className="col-lg-3 px-0">
                        <ul className="list-group leftList rounded-0 border-0">
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <Link href="#">Categories</Link>
                                </div>
                                <span className="badge text-dark"><RiArrowDownSLine/></span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <Link href="#">All kinds of Meter</Link>
                                </div>
                                <span className="badge text-dark"><RiArrowRightSLine/></span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <Link href="#">Covid-19 Safety Equipment</Link>
                                </div>
                                <span className="badge text-dark"><RiArrowRightSLine/></span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <Link href="#">Digital Scale and Balance</Link>
                                </div>
                                <span className="badge text-dark"><RiArrowRightSLine/></span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <Link href="#">Garments Machinery</Link>
                                </div>
                                <span className="badge text-dark"><RiArrowRightSLine/></span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <Link href="#">Home Appliences</Link>
                                </div>
                                <span className="badge text-dark"><RiArrowRightSLine/></span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <Link href="#">Lifting Equipments</Link>
                                </div>
                                <span className="badge text-dark"><RiArrowRightSLine/></span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <Link href="#">Safety Equipments</Link>
                                </div>
                                <span className="badge text-dark"><RiArrowRightSLine/></span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <Link href="#"> Office Equipments </Link>
                                </div>
                                <span className="badge text-dark"><RiArrowRightSLine/></span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <Link href="#">Texile Lab Consumables</Link>
                                </div>
                                <span className="badge text-dark"><RiArrowRightSLine/></span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <Link href="#">Textile Lab Machinery</Link>
                                </div>
                                <span className="badge text-dark"><RiArrowRightSLine/></span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-9 px-0">
                        <div className="nav border-bottom border-top">
                            <ol className="breadcrumb px-3 mt-2">
                                <li className="breadcrumb-item me-2 icon"><Link href="#"><a><IoHome/></a></Link></li>
                                <li className="breadcrumb-item mx-2"><Link href="#"><a>Shop</a></Link></li>
                                <li className="breadcrumb-item mx-2 text-uppercase active">Breakfast</li>
                            </ol>
                        </div>
                        <p className="my-2 px-3 paragraph">
                            <strong> Safety Equipment </strong> is Safety Product
                            <strong> Safety Equipment </strong> protects the works from injuries. Different types of
                            <strong> Safety Equipment </strong> are used by workes. There are different types of Safety
                            Equipment available: Fire Safety Equipment, Lab Safety Equipment, Bpat Safety Equipment,
                            Welding Safety Equipment, Industrial Safety
                            Equipment, Construction Safety Equipment, Marine Safety Equipment, Bathroom Safety
                            Equipment, Pool Safety Equipment, Marine Safety Equipment, PersoaSafety Equipment ETC. If
                            you are looking for the best Safety Equipment. We
                            are the best supplier of
                            <strong> Safety Equipment </strong>
                        </p>
                        <div className="d-flex mx-3 my-3 paragraph">
                            <div className="w-50">
                                Sort By: <select name="" id="">
                                <option value="">Default Sorting</option>
                            </select>
                            </div>
                            <div className="w-50 text-right">
                                Show: <select name="" id="">
                                <option value="12">12</option>
                            </select>
                                <div className="barIcon d-inline-block"><AiOutlineBars/></div>
                            </div>
                        </div>
                        <div className="productSection row mx-2">
                            {data.map((data) =>
                                <div className="col-xl-3 col-6 px-0 col-md-4 mb-2">
                                    <div className="productCard p-2 p-xl-0 m-1">
                                        <div className="img"><Image src="/images/7.jpg" width={500} height={500}/></div>
                                        <div className="content text-center">
                                            <p className="text-uppercase subTitle">eye wash station, safety
                                                equipment</p>
                                            <h1 className="text-capitalize title mb-0">Unicare Indutrial Eye
                                                Cacting</h1>
                                            <h5 className="text-capitalize price mb-0">
                                                <del className="pe-2">$13,500</del>
                                                <p>$11,500</p>
                                            </h5>
                                            <div className="stars">
                                                <span className="text-warning"><RiStarFill/></span>
                                                <span className="text-warning"><RiStarFill/></span>
                                                <span className="text-warning"><RiStarFill/></span>
                                                <span className="text-warning"><RiStarFill/></span>
                                                <span className="text-warning"><RiStarFill/></span>
                                                <span className="ml-2 text">(20)</span>
                                            </div>
                                        </div>
                                        <div className="buttons pt-2 text-center">
                                            <button className="btn1 text-uppercase me-md-2 mb-2 mb-lg-0">View Product
                                            </button>
                                            <button className="btn2 text-uppercase">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="d-flex mx-3">
                            <div className="w-50 paragraph">
                                Show: <select name="" id="">
                                <option value="">12</option>
                            </select>
                            </div>
                            <div className="w-50 text-right">
                                <div className="nav text-right">
                                    <ul className="pagination text-right ms-auto pagination-md">
                                        <li className="page-item active" aria-current="page">
                                            <span className="page-link">1</span>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr className="mt-3 mx-3"/>
                        <p className="my-2 paragraph mx-3">
                            <strong> Safety Equipment </strong> is Safety Product
                            <strong> Safety Equipment </strong> protects the works from injuries. Different
                            types of
                            <strong> Safety Equipment </strong> are used by workes. There are different types of
                            Safety Equipment available: Fire Safety Equipment, Lab Safety Equipment, Bpat Safety
                            Equipment, Welding Safety Equipment, Industrial
                            Safety Equipment, Construction Safety Equipment, Marine Safety Equipment, Bathroom
                            Safety Equipment, Pool Safety Equipment, Marine Safety Equipment, PersoaSafety
                            Equipment ETC. If you are looking for the best Safety
                            Equipment. We are the best supplier of
                            <strong> Safety Equipment </strong>
                        </p>
                        <hr className="mb-3 mx-3"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="heading">Safety Equiment in Bangladesh</h3>
                        <p className="mb-1 paragraph">
                            <strong> Safety Equipment </strong> is Safety Product
                            <strong> Safety Equipment </strong> protects the works from injuries. Different types of
                            <strong> Safety Equipment </strong> are used by workes. There are different types of Safety
                            Equipment
                            available: Fire Safety Equipment, Lab Safety Equipment, Bpat Safety Equipment, Welding
                            Safety
                            Equipment,
                            Industrial Safety Equipment,
                            Construction Safety Equipment, Marine Safety Equipment, Bathroom Safety Equipment, Pool
                            Safety
                            Equipment, Marine Safety Equipment, PersoaSafety Equipment ETC. If you are looking for the
                            best
                            Safety
                            Equipment. We are the best supplier of
                            <strong> Safety Equipment </strong>
                        </p>
                        <hr className="my-3"/>
                        <h4> TOP BEST SAFETY EQUIPMENT UPDATE LIST 2022 IN BANGLADESH </h4>
                        <div className="py-3">
                            <table className="table  table-bordered ">
                                <thead>
                                <tr>
                                    <th>Best Safety Equipment List in 2022</th>
                                    <th>Price</th>
                                </tr>
                                <tr>
                                    <td><a href="">Eye Wash Station Safety Equipment</a></td>
                                    <td>৳11,500-৳45,000</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="">Safety Shower Starion Safety Equipment</a>
                                    </td>
                                    <td>৳26,500-৳30,000</td>
                                </tr>
                                <tr>
                                    <td><a href="">Safety Cabinet Safety Equipment</a></td>
                                    <td>৳15,500-৳30,000</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="">Industrial Spill kit Safety Equipment </a>
                                    </td>
                                    <td>৳6,500-৳85,000</td>
                                </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer/>
        </>
    );
};

export default Shop;
