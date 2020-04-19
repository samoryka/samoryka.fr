import React from "react";

import ComponentTransition from "../../Utils/ComponentTransition";
import Project from "./Project/Project";

import "./Projects.css";
import {PROJECTS} from "../../../data/projects";

const Projects = () => {
    const projects = PROJECTS.map(project => (
        <Project
        key={project.title}
        title={project.title}
        link={project.link}
        description={project.description}
        image={project.image}
        technologies={project.technologies} />
    ));

    return (
        <ComponentTransition animation="contentAnimation">
            <div>
                <h2>Projects</h2>
                <p><span>Here are some of the projects I have worked on in the past:</span></p>
                <div className="projectsContainer">
                    {projects}
                </div>
            </div>
        </ComponentTransition>
    );
}

export default Projects;
