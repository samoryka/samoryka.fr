import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group'

import '../../styles/animations.css'

class ComponentTransition extends Component {
    constructor(props) {
        super(props);
        this.state = { componentDisplayed: false };
    }

    componentDidMount() {
        this.setState({ componentDisplayed: true });
    }

    componentWillUnmount() {
        this.setState({ componentDisplayed: false });
    }

    render() {
        return (
            <CSSTransition
                in={this.state.componentDisplayed}
                timeout={500}
                classNames={this.props.animation}
                appear={true}>
                {this.props.children}
            </CSSTransition>
        );
    }
}

export default ComponentTransition;
