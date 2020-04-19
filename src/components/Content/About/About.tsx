import * as React from "react";
import ComponentTransition from "../../Utils/ComponentTransition";

import resume from "../../../assets/documents/resume.pdf";
import profilePic from "../../../assets/images/profilePic.jpg";
import "./About.css";

const LINKEDIN_LINK = "https://www.linkedin.com/in/samory-ka/";
const GITHUB_LINK = "https://github.com/samoryka";

const About = () => (
    <ComponentTransition animation="contentAnimation">
        <div>
            <h2>About</h2>
            <div className="profilePicContainer">
                <img src={profilePic} alt="This site's owner, Samory Ka" />
            </div>
            <p>
                <span>
                    Hi there, my name is <b>Samory Ka</b>.
                </span>
            </p>
            <p>
                <span>
                    I currently live in <b>Paris</b> and work as a <b>Software Engineer</b> for <a className="resumeLink" href="https://lesfurets.com" target="_blank" rel="noopener noreferrer" >lesfurets</a>.
                </span>
            </p>
            <p>
                <span>
                    My interests include <b>Web Development</b>, <b> Software Accessibility</b>, <b>Music</b>, <b>Graphic Arts</b>, <b>Cooking</b> and many other things!
                </span>
            </p>
            <p>
                <span>
                    You can find out more about me in <a className="resumeLink" href={resume} target="_blank" rel="noopener noreferrer" >my resume</a>, on <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" >LinkedIn</a> or on <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer" >GitHub</a>.
                </span>
            </p>
        </div>
    </ComponentTransition>
);

export default About;
