import * as React from "react";
import ComponentTransition from "../../Utils/ComponentTransition";
import profilePic from "../../../assets/images/profilePic.jpg";
import "./About.css";

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
                    I currently live in <b>Berlin</b> and work as a <b>Software Engineer</b> for <a href="https://www.doctolib.fr/" target="_blank" rel="noopener noreferrer" >Doctolib</a>.
                </span>
            </p>
            <p> 
                <span>
                    My interests include <b>Web Development</b>, <b> Software Accessibility</b>, <b>Music</b>, <b>Graphic Arts</b>, <b>Cooking</b> and many other things!
                </span>
            </p>
            <p>
                <span>
                    You can find out more about me on <a href={"https://www.linkedin.com/in/samory-ka"} target="_blank" rel="noopener noreferrer" >LinkedIn</a> or <a href={"https://github.com/samoryka"} target="_blank" rel="noopener noreferrer" >GitHub</a>.
                </span>
            </p>
        </div>
    </ComponentTransition>
);

export default About;
