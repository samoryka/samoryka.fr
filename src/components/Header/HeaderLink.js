import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom';
import './Header.css';

class HeaderLink extends Component {
    render() {
        return (
            <li>
                <Link
                    to={this.props.link}
                    className={this.props.currentPage === this.props.link ? 'currentNavLink' : ''}
                    onClick={() => this.props.onPageChanged(this.props.link)}
                >
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
    onPageChanged: PropTypes.func.isRequired,
}

export default HeaderLink;
