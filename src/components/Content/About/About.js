import React, { Component } from 'react';
import ComponentTransition from '../../Utils/ComponentTransition';

import resume from '../../../assets/documents/resume.pdf';
import profilePic from '../../../assets/images/profilePic.jpg';
import './About.css';

const LINKEDIN_LINK = 'https://www.linkedin.com/in/samory-ka/';
const GITHUB_LINK = 'https://github.com/samoryka';

class About extends Component {
    render() {
        return (
            <ComponentTransition animation="contentAnimation">
                <div>
                    <h2>About</h2>
                    <div className="profilePicContainer">
                        <img src={profilePic} alt="This site's owner, Samory Ka" />
                    </div>
                    <p>
                        <span>
                            Hi there, my name is <b>Samory Ka</b> and I am a <b>Software Engineer</b>.
                    </span>
                    </p>
                    <p>
                        <span>
                            I am about to graduate from <b>INSA Lyon</b> and am currently
                        looking for a <b>Junior Software Engineer</b> position in <b>Berlin</b>.
                    </span>
                    </p>
                    <p>
                        <span>
                            I am mostly interested in <b>Web Development</b>,
                        <b> Software Accessibility</b> and <b>UX Design</b>.
                    </span>
                    </p>
                    <p>
                        <span>
                            You can find out more about me in <a className="resumeLink" href={resume} target="_blank">my resume</a>, on <a href={LINKEDIN_LINK} target="_blank">LinkedIn</a> or on <a href={GITHUB_LINK} target="_blank">GitHub</a>.
                        </span>
                    </p>
                </div>
            </ComponentTransition>
        );
    }
}

export default About;
