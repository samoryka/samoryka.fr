import React from 'react';

import { Link } from 'react-router-dom';
import './HeaderLink.css';
import { HeaderItem } from 'src/types';

const HeaderLink: (props: HeaderItem & {isCurrent: boolean}) => JSX.Element = ({link, title, isCurrent}) => (
    <li className='navLinkContainer'>
        <Link
            to={link}
            className={`navLink ${isCurrent ? 'currentNavLink' : ''}`}>
            {title}
        </Link>
    </li>
);

export default HeaderLink;
