import React, {useState, useEffect} from 'react';
import {AiOutlineBars, AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {BsSearch, BsCart2, BsHandbag, BsSuitHeart} from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

const MobHeader = () => {
    const [activeNav, setActiveNav] = useState(false);
    const [searchNav, setSearchNav] = useState(false);
    return (
        <>
            <div className="d-block d-lg-none mobileHeader">
                <div className={`topbarSection py-2 px-3 d-flex`}>
                    <div className="w-25 leftIcons">
                        <div className={`icon bars ${activeNav && 'activeNavIcon'}`}>
                            <button onClick={() => {
                                setSearchNav(false)
                                setActiveNav(!activeNav)
                            }}><AiOutlineBars/></button>
                        </div>
                    </div>
                    <div className="w-50">
                        <div className="logo"><Image src="/images/logo.png" width={180} height={40}/></div>
                    </div>
                    <div className="w-25 d-flex rightIcons">
                        <div className={`icon search ${searchNav && 'activeNavIcon'}`}>
                            <button onClick={() => {
                                setActiveNav(false)
                                setSearchNav(!searchNav)
                            }}><BsSearch/></button>
                        </div>
                        <div className="icon cart"><BsCart2/></div>
                    </div>
                </div>
                <div className={`mainBarSection ${activeNav && 'activeMainSection'}`}>
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
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                </div>
                <div className={`searchBarForm ${searchNav && 'activeSearchBar'}`}>
                    <form action="">
                        <div className="input-group px-3 py-2">
                            <input type="text" className="form-control" placeholder="Search..."
                                   aria-describedby="basic-addon2"/>
                            <span className="input-group-text btn btn-success" id="basic-addon2"><BsSearch/></span>
                        </div>
                    </form>
                </div>
            </div>
            <div className="d-block d-lg-none mobileHeaderBottom">
                <div className="bottomBarSection d-flex">
                    <div className="w-25 icon home">
                        <Link href="#"><a className="navIcon"><AiOutlineHome/></a></Link>
                    </div>
                    <div className="w-25 icon bag">
                        <Link href="#"><a className="navIcon"><BsHandbag/></a></Link>
                    </div>
                    <div className="w-25 icon heart">
                        <Link href="#"><a className="navIcon"><BsSuitHeart/></a></Link>
                    </div>
                    <div className="w-25 icon user">
                        <Link href="#"><a className="navIcon"><AiOutlineUser/></a></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobHeader;
