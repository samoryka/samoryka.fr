import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import HeaderLink from './HeaderLink';

import './Header.css';

const LINKS = [
    {
        link: '/about',
        title: 'About',
    },
    {
        link: '/projects',
        title: 'Projects',
    },
    {
        link: '/resume',
        title: 'Resume',
    }
]

class Header extends Component {

    componentWillMount() {
        // We default to /about
        let location = this.props.location.pathname !== '/' ? this.props.location.pathname : '/about';
        this.setState({
            currentPage: location,
        });
    }

    onPageChanged(pageRoute) {
        this.setState({
            currentPage: pageRoute ? pageRoute : '/about',
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
            <header className='appHeader'>
                <div className='appHeaderContent'>
                    <Link to='/'
                        className='appHeaderTitle'
                        onClick={() => { this.onPageChanged() }}>Samory Ka</Link>
                    <nav className='appHeaderNav'>
                        <ul>
                            {navLinks}
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default withRouter(Header);
