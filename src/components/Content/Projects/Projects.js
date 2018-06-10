import React, { Component } from 'react';
import ComponentTransition from '../../Utils/ComponentTransition';

class Projects extends Component {
    render() {
        return (
            <ComponentTransition animation="contentAnimation">
            <div>
                <h2>Projects</h2>
                <span>Here are some example projects : <br/> timeline : carte avec dates + image + decription + lien</span>
            </div>
            </ComponentTransition>
        );
    }
}

export default Projects;
