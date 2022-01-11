import Head from 'next/head'
import Image from 'next/image'
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Container} from 'react-bootstrap';
import {FaShippingFast} from 'react-icons/fa';
import {AiOutlineDollarCircle} from 'react-icons/ai';
import {BiSupport} from 'react-icons/bi';
import {RiArrowRightSLine, RiStarFill} from 'react-icons/ri';


export default function Home() {
    const [data, setData] = React.useState([{}, {}, {}, {}, {}, {}])
    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description"
                      content="This is Description"/>
                <meta property="og:image" content="https://zahidmzhmm.com/uploads/169img.jpg"/>
            </Head>
            <Header navActiveStatus={true}/>
            <Container className="sliderSection px-0">
                <Swiper spaceBetween={0}
                        slidesPerView={1}>
                    <SwiperSlide>
                        <Image src="/images/slider_1.jpg" width={1920} height={1080}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/images/slider_2.jpg" width={1920} height={1080}/>
                    </SwiperSlide>
                </Swiper>
            </Container>
            <Container className="online_support mt-2">
                <div className="row">
                    <div className="col-md-4 col-12 ps-0 pe-3 text-center">
                        <ul className="ul_border">
                            <li>
                                <div className="icon"><FaShippingFast/></div>
                            </li>
                            <li>
                                <p className="supportHeading"><span>FREE SHIPPING & RETURN</span></p>
                                <p className="mt-2">Free shipping on all orders</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-12 ps-0 pe-3 text-center">
                        <ul className="ul_border">
                            <li>
                                <div className="icon"><AiOutlineDollarCircle/></div>
                            </li>
                            <li>
                                <p className="supportHeading"><span>MONEY BACK GUARANTEE</span></p>
                                <p className="mt-2">100% money back guarantee</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-12 ps-0 pe-3 text-center">
                        <ul className="ul_bordersm">
                            <li>
                                <div className="icon"><BiSupport/></div>
                            </li>
                            <li>
                                <p className="supportHeading"><span>ONLINE SUPPORT 24/7</span></p>
                                <p className="mt-2">We are available 24/7 for support</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
            <Container className="px-0 mt-3">
                <div className="row mx-0 category">
                    <div className="col-md-4 ps-0 content mb-3">
                        <div className="img"><Image className="me-md-2" src="/images/4.png" width={500} height={300}/></div>
                        <div className="text">
                            <p className="mb-2">
                                Everydoy Fresh & <br/> Clean with Our <br/> Product
                            </p>
                            <button className="btn btn-success">
                                Shop Now <RiArrowRightSLine/>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-4 ps-0 content mb-3">
                        <div className="img"><Image className="me-md-2" src="/images/5.png" width={500} height={300}/></div>
                        <div className="text">
                            <p className="mb-2">
                                Make your breakfast<br/> Healthy and<br/> Easy
                            </p>
                            <button className="btn btn-success">
                                Shop Now <RiArrowRightSLine/>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-4 ps-0 content mb-3">
                        <div className="img"><Image className="me-md-2" src="/images/6.png" width={500} height={300}/></div>
                        <div className="text">
                            <p className="mb-2">
                                The best Organic<br/> Products <br/> Online
                            </p>
                            <button className="btn btn-success">
                                Shop Now <RiArrowRightSLine/>
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
            <Container className="productSection px-md-0">
                <div className="heading py-3 d-flex mt-2 mb-3">
                    <div className="w-50 d-inline-block">
                        <h1 className="text-uppercase ps-3">garments machinery</h1>
                    </div>
                    <div className="viewmBtn ms-auto d-inline-block text-right">
                        <button className="btn-main me-auto">View More</button>
                    </div>
                </div>
                <div className="row mx-md-0">
                    {data.map((data) =>
                        <div className="col-xxl-2 col-xl-3 col-6 px-0 col-md-4 mb-2">
                            <div className="productCard p-2 p-xl-0 m-1">
                                <div className="img"><Image src="/images/7.jpg" width={500} height={500}/></div>
                                <div className="content text-center">
                                    <p className="text-uppercase subTitle">eye wash station, safety equipment</p>
                                    <h1 className="text-capitalize title mb-0">Unicare Indutrial Eye Cacting</h1>
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
                                    <button className="btn1 text-uppercase me-md-2 mb-2 mb-lg-0">View Product</button>
                                    <button className="btn2 text-uppercase">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Container>
            <Container className="productSection px-md-0">
                <div className="heading py-3 d-flex mt-2 mb-3">
                    <div className="w-50 d-inline-block">
                        <h1 className="text-uppercase ps-3">garments machinery</h1>
                    </div>
                    <div className="viewmBtn ms-auto d-inline-block text-right">
                        <button className="btn-main me-auto">View More</button>
                    </div>
                </div>
                <div className="row mx-md-0">
                    {data.map((data) =>
                        <div className="col-xxl-2 col-xl-3 col-6 px-0 col-md-4 mb-2">
                            <div className="productCard p-2 p-xl-0 m-1">
                                <div className="img"><Image src="/images/7.jpg" width={500} height={500}/></div>
                                <div className="content text-center">
                                    <p className="text-uppercase subTitle">eye wash station, safety equipment</p>
                                    <h1 className="text-capitalize title mb-0">Unicare Indutrial Eye Cacting</h1>
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
                                    <button className="btn1 text-uppercase me-md-2 mb-2 mb-lg-0">View Product</button>
                                    <button className="btn2 text-uppercase">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Container>
            <Container className="productSection px-md-0">
                <div className="heading py-3 d-flex mt-2 mb-3">
                    <div className="w-50 d-inline-block">
                        <h1 className="text-uppercase ps-3">garments machinery</h1>
                    </div>
                    <div className="viewmBtn ms-auto d-inline-block text-right">
                        <button className="btn-main me-auto">View More</button>
                    </div>
                </div>
                <div className="row mx-md-0">
                    {data.map((data) =>
                        <div className="col-xxl-2 col-xl-3 col-6 px-0 col-md-4 mb-2">
                            <div className="productCard p-2 p-xl-0 m-1">
                                <div className="img"><Image src="/images/7.jpg" width={500} height={500}/></div>
                                <div className="content text-center">
                                    <p className="text-uppercase subTitle">eye wash station, safety equipment</p>
                                    <h1 className="text-capitalize title mb-0">Unicare Indutrial Eye Cacting asdfsiodgyiosdgisdughsidgsdig</h1>
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
                                    <button className="btn1 text-uppercase me-md-2 mb-2 mb-lg-0">View Product</button>
                                    <button className="btn2 text-uppercase">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Container>
            <Container className="productSection px-md-0">
                <div className="heading py-3 d-flex mt-2 mb-3">
                    <div className="w-50 d-inline-block">
                        <h1 className="text-uppercase ps-3">garments machinery</h1>
                    </div>
                    <div className="viewmBtn ms-auto d-inline-block text-right">
                        <button className="btn-main me-auto">View More</button>
                    </div>
                </div>
                <div className="row mx-md-0">
                    {data.map((data) =>
                        <div className="col-xxl-2 col-xl-3 col-6 px-0 col-md-4 mb-2">
                            <div className="productCard p-2 p-xl-0 m-1">
                                <div className="img"><Image src="/images/7.jpg" width={500} height={500}/></div>
                                <div className="content text-center">
                                    <p className="text-uppercase subTitle">eye wash station, safety equipment</p>
                                    <h1 className="text-capitalize title mb-0">Unicare Indutrial Eye Cacting</h1>
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
                                    <button className="btn1 text-uppercase me-md-2 mb-2 mb-lg-0">View Product</button>
                                    <button className="btn2 text-uppercase">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Container>
            <Container className="productSection px-md-0">
                <div className="heading py-3 d-flex mt-2 mb-3">
                    <div className="w-50 d-inline-block">
                        <h1 className="text-uppercase ps-3">garments machinery</h1>
                    </div>
                    <div className="viewmBtn ms-auto d-inline-block text-right">
                        <button className="btn-main me-auto">View More</button>
                    </div>
                </div>
                <div className="row mx-md-0">
                    {data.map((data) =>
                        <div className="col-xxl-2 col-xl-3 col-6 px-0 col-md-4 mb-2">
                            <div className="productCard p-2 p-xl-0 m-1">
                                <div className="img"><Image src="/images/7.jpg" width={500} height={500}/></div>
                                <div className="content text-center">
                                    <p className="text-uppercase subTitle">eye wash station, safety equipment</p>
                                    <h1 className="text-capitalize title mb-0">Unicare Indutrial Eye Cacting</h1>
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
                                    <button className="btn1 text-uppercase me-md-2 mb-2 mb-lg-0">View Product</button>
                                    <button className="btn2 text-uppercase">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Container>
            <Footer/>
        </>
    )
}
