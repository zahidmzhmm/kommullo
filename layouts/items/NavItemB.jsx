import React from 'react';
import Link from "next/link";
import {RiArrowRightSLine} from 'react-icons/ri'

const NavItemB = ({icon, name, link, toggle, discount}) => {
    return (
        <div className="d-flex dropdownParentItem">
            <div className="dropdownItem pt-1">
                <Link href={link}>
                    <a className="nav-link ms-3 d-inline-block">
                        {icon} <span className="ms-3">{name}</span>
                    </a>
                </Link>
            </div>
            <div className="mt-2 icon">
                {toggle && <RiArrowRightSLine/>}
                {discount && <span className="discount">Save 25%</span>}
            </div>
        </div>
    );
};

export default NavItemB;
