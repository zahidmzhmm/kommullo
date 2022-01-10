import Head from 'next/head'
import Image from 'next/image'
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';


export default function Home() {
    const [stateCheck, setStateCheck] = React.useState(1);
    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description"
                      content="This is Description"/>
                <meta property="og:image" content="https://zahidmzhmm.com/uploads/169img.jpg"/>
            </Head>
            <Header/>
            <Swiper className="pt-5" spaceBetween={0}
                    slidesPerView={1}>
                <SwiperSlide>
                    <Image src="/images/slider_1.jpg" width={1950} height={910}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/slider_2.jpg" width={1950} height={910}/>
                </SwiperSlide>
            </Swiper>
            <Footer/>
        </>
    )
}
