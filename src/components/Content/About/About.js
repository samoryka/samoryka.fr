import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const LINKEDIN_LINK = 'https://www.linkedin.com/in/samory-ka/';
const GITHUB_LINK = 'https://github.com/samoryka';

class About extends Component {
    render() {
        return (
            <div>
                <h2>About</h2>
                <p>
                    <span>
                        Hi there, my name is <b>Samory Ka</b> and I am a Software Engineer.
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
                        I am mostly interested in <b>Frontend development</b>,
                        <b> UX</b> and <b>software accessibility</b>.
                        <br />
                        Though, I am always open to try solving interesting problems and improving my skills.
                    </span>
                </p>
                <p>
                    <span>
                        Please feel free to check out my <Link to="/projects">past projects</Link> and my <Link to="/resume">resume</Link>.
                        <br />
                        You can also find me on <a href={LINKEDIN_LINK} target="_blank">LinkedIn</a> and <a href={GITHUB_LINK} target="_blank">GitHub</a>.
                    </span>
                </p>
            </div>
        );
    }
}

export default About;
