import React, {useState, useEffect, ElementType} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export const projectsList = [
    { id: 1, title: 'Title 1', description: 'Description 1' },
    { id: 2, title: 'Title 2', description: 'Description 2' },
    { id: 3, title: 'Title 3', description: 'Description 3' },
    { id: 4, title: 'Title 4', description: 'Description 4' },
    { id: 5, title: 'Title 5', description: 'Description 5' }
]

const Projects: React.FunctionComponent = () => {
    return (
        <div>
            <div>Projects</div>
            {projectsList.map((project) => (
                <ProjectItem {...project} />
            ))}
        </div>)
};

export interface IProject {
    id: number,
    title: string,
    description: string
}

const ProjectItem: React.FunctionComponent<IProject> = (props: IProject) => {
    // function openProject (event: React.MouseEvent<HTMLDivElement>){
    // }

    return (
        <Link to={'/projects/'+props.id}><div>
            {props.title}
        </div>
        </Link>
        )
};

export default Projects;
