import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom';
import './HeaderLink.css';

class HeaderLink extends Component {
    render() {
        return (
            <li className='navLinkContainer'>
                <Link
                    to={this.props.link}
                    className={
                        [
                            'navLink',
                            this.props.currentPage === this.props.link ? 'currentNavLink' : ''
                        ].join(' ')
                    }>
                    {this.props.title}
                </Link>
            </li>
        );
    }
}

HeaderLink.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    currentPage: PropTypes.string.isRequired,
}

export default HeaderLink;
