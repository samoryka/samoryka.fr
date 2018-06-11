import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Project.css';

class Project extends Component {
    render() {
        return (
            <div className='projectCard'>
                <a href={this.props.link} target='_blank'>
                    <img src={this.props.image} alt={'screenshot of ' + this.props.title} />
                    <div className='projectCardText'>
                        <p><span className='projectTitle'><b>{this.props.title}</b></span></p>
                        <p><span className='projectDescription'>{this.props.description}</span></p>
                    </div>
                    <div className='projectTechnologiesContainer'>
                        <span>Technologies: <b>{this.props.technologies.join(', ')}</b></span>
                        
                    </div>
                </a>
            </div>
        );
    }
}

Project.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Project;
