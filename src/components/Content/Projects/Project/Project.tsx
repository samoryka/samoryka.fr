import React from 'react';
import './Project.css';
import { ProjectItem } from "../../../../types";


const Project: (props: ProjectItem) => JSX.Element = ({title, description, link, image, technologies}) => (
    <div className='projectCard'>
        <a href={link} target='_blank' rel="noopener noreferrer">
            <img src={image} alt={`screenshot of ${title}`} />
            <div className='projectCardText'>
                <p><span className='projectTitle'><b>{title}</b></span></p>
                <p><span className='projectDescription'>{description}</span></p>
            </div>
            <div className='projectTechnologiesContainer'>
                <span>Technologies: <b>{technologies.join(', ')}</b></span>

            </div>
        </a>
    </div>
);

export default Project;
