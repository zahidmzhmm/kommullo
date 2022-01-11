import React from 'react';
import Link from "next/link";

const NavItem = ({link, name, csItem, csLink}) => {
    return (
        <>
            <li className={`nav-item ${csItem}`}>
                <Link href={link}>
                    <a className={`nav-link ${csLink}`}>{name}</a>
                </Link>
            </li>
        </>
    );
};

export default NavItem;
