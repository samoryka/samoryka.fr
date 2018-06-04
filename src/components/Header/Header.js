import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Header.css';

import HeaderLink from './HeaderLink';

const LINKS = [
    {
        link: "/about",
        title: "About",
    },
    {
        link: "/projects",
        title: "Projects",
    },
    {
        link: "/resume",
        title: "Resume",
    }
]

class Header extends Component {

    componentWillMount() {
        this.setState({
            currentPage: this.props.location.pathname,
        });
    }

    onPageChanged(pageRoute) {
        this.setState({
            currentPage: pageRoute,
        });
    }

    render() {
        let navLinks = [];

        for (let headerLink of LINKS) {
            navLinks.push(
                <HeaderLink
                    key={headerLink.title}
                    title={headerLink.title}
                    link={headerLink.link}
                    currentPage={this.state.currentPage}
                    onPageChanged={page => this.onPageChanged(page)}
                />
            );
        };
        return (
            <header>
                <h1><Link to='/'>Samory Ka</Link></h1>
                <nav>
                    <ul>
                        {navLinks}
                    </ul>
                </nav>
            </header>
        );
    }
}

export default withRouter(Header);
