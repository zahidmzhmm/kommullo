import Head from 'next/head';
import React from 'react';
import Header from "../layouts/Header";
import {Container} from "react-bootstrap";
import Footer from "../layouts/Footer";

const Shop = () => {
    return (
        <>
            <Head>
                <title>Shop</title>
                <meta name="description"
                      content="This is Description"/>
                <meta property="og:image" content="https://zahidmzhmm.com/uploads/169img.jpg"/>
            </Head>
            <Header navActiveStatus={false}/>
            <Container className="mainContentData">
                Shop Contents
            </Container>
            <Footer/>
        </>
    );
};

export default Shop;
