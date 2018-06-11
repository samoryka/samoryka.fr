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
    }
]

class Header extends Component {

    componentWillMount() {
        this.updateCurrentPage();
    }

    componentDidUpdate(previousProps) {
        if (this.props.location !== previousProps.location) {
            this.updateCurrentPage();
        }
    }

    updateCurrentPage() {
        // We default to /about
        let location = this.props.location.pathname !== '/' ? this.props.location.pathname : '/about';
        this.setState({
            currentPage: location,
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
                />
            );
        };
        return (
            <header className='appHeader'>
                <div className='appHeaderContent'>
                    <Link to='/' className='appHeaderTitle'>Samory Ka</Link>
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
