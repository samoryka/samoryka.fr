import React, { Component } from 'react';
import ComponentTransition from '../../Utils/ComponentTransition';

class Resume extends Component {
    render() {
        return (
            <ComponentTransition animation="contentAnimation">
            <div>
                <h2>Resume</h2>
                <span>résumé du resumé, lien CV</span>
            </div>
            </ComponentTransition>
        );
    }
}

export default Resume;
