import React from 'react';

const FooterItem = ({name, link, linkClass, itemClass}) => {
    return (
        <>
            <li className={`nav-item ${itemClass}`}>
                <a className={`nav-link ${linkClass}`} href={link}>{name}</a>
            </li>
        </>
    );
};

export default FooterItem;