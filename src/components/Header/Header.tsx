import React, { useState, useEffect } from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";

import HeaderLink from "./HeaderLink/HeaderLink";

import "./Header.css";
import { HEADER_LINKS } from "../../data/header-links";

const withoutSlashes = (string: string) => string.replace(/\//g, "");

const Header: (props: RouteComponentProps) => JSX.Element = ({location}) => {
    const [currentPage, setCurrentPage] = useState("/about");

    useEffect(() => {
        setCurrentPage(location.pathname !== "/" ? location.pathname : "/about")
    }, [location.pathname]);

    const navLinks = HEADER_LINKS.map(headerLink => (
        <HeaderLink
            key={headerLink.title}
            title={headerLink.title}
            link={headerLink.link}
            isCurrent={withoutSlashes(currentPage) === withoutSlashes(headerLink.link)}
        />
    ));
    
    return (
        <header className="appHeader">
            <div className="appHeaderContent">
                <Link to="/" className="appHeaderTitle">Samory Ka</Link>
                <nav className="appHeaderNav">
                    <ul>
                        {navLinks}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default withRouter(Header);
