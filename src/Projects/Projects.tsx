import React, { useState, useEffect, ElementType } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import injectSheet from "react-jss";

export const projectsList = [
    { id: 1, title: 'Title 1', description: 'Dolor duis deserunt et non excepteur ex adipisicing reprehenderit. Esse ea commodo labore sit officia non velit tempor sint eiusmod minim culpa eiusmod. Ad exercitation proident laboris irure enim enim sint laborum elit mollit occaecat occaecat dolore non. Ipsum sunt elit ipsum excepteur non nisi consequat nostrud aliqua mollit velit. Pariatur eu nostrud nostrud reprehenderit sit. Incididunt ullamco cupidatat in voluptate dolor do eu.' },
    { id: 2, title: 'Title 2', description: 'Dolor duis deserunt et non excepteur ex adipisicing reprehenderit. Esse ea commodo labore sit officia non velit tempor sint eiusmod minim culpa eiusmod.' },
    { id: 3, title: 'Title 3', description: 'Esse ea commodo labore sit officia non velit tempor sint eiusmod minim culpa eiusmod.' },
    { id: 4, title: 'Title 4', description: 'Esse ea commodo labore sit officia non velit tempor sint eiusmod minim culpa eiusmod. Esse ea commodo labore sit officia non velit tempor sint eiusmod minim culpa eiusmod. Esse ea commodo labore sit officia non velit tempor sint eiusmod minim culpa eiusmod.' },
    { id: 5, title: 'Title 5', description: 'Esse ea commodo labore sit officia non velit tempor sint eiusmod minim culpa eiusmod.' },
    { id: 6, title: 'Title 6', description: 'Description 6' },
    { id: 1, title: 'Title 1', description: 'Dolor duis deserunt et non excepteur ex adipisicing reprehenderit. Esse ea commodo labore sit officia non velit tempor sint eiusmod minim culpa eiusmod. Ad exercitation proident laboris irure enim enim sint laborum elit mollit occaecat occaecat dolore non. Ipsum sunt elit ipsum excepteur non nisi consequat nostrud aliqua mollit velit. Pariatur eu nostrud nostrud reprehenderit sit. Incididunt ullamco cupidatat in voluptate dolor do eu.' },
    { id: 2, title: 'Title 2', description: 'Dolor duis deserunt et non excepteur ex adipisicing reprehenderit. Esse ea commodo labore sit officia non velit tempor sint eiusmod minim culpa eiusmod.' },
    { id: 3, title: 'Title 3', description: 'Esse ea commodo labore sit officia non velit tempor sint eiusmod minim culpa eiusmod.' },
    { id: 4, title: 'Title 4', description: 'Esse ea commodo labore sit officia non velit tempor sint eiusmod minim culpa eiusmod. Esse ea commodo labore sit officia non velit tempor sint eiusmod minim culpa eiusmod. Esse ea commodo labore sit officia non velit tempor sint eiusmod minim culpa eiusmod.' },
    { id: 5, title: 'Title 5', description: 'Esse ea commodo labore sit officia non velit tempor sint eiusmod minim culpa eiusmod.' },
    { id: 6, title: 'Title 6', description: 'Description 6' },
]

const styles = {
    projects: {
        width: '100%',
    },
    title: {
        background: '#fff',
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
        borderRadius: 10,
    },
    content: {
        display: 'flex',
        marginTop: 20,
        flexWrap: 'wrap',
        '& a': {
            // textDecoration: 'none',
        }
    },
    block: {
        height: 100,
        background: '#fff',
        padding: 10,
        borderRadius: 10,
        width: 'calc(50% - 30px)',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        marginBottom: 20,
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        "&:nth-child(odd)": {
            marginRight: 10,
        },
        "&:nth-child(even)": {
            marginLeft: 10,
        },
        "&:nth-child(4n+2)": {
            background: 'red'
        },
        "&:nth-child(4n-1)": {
            background: 'red'
        },
    },
    '@media (max-width: 768px)': {
        block: {
            width: '100%',
            marginRight: '0 !important',
            marginLeft: '0 !important',
        },
    },
};

interface IProjects {
    classes: any
}

const Projects: React.FunctionComponent<IProjects> = ({ classes }) => {
    return (
        <div className={classes.projects}>
            <div className={classes.title}>Projects</div>
            <div className={classes.content}>
                {projectsList.map((project) => (
                    <ProjectItem {...project} />
                ))}
            </div>
        </div>)
};

export interface IProject {
    id: number,
    title: string,
    description: string,
    classes?: any
}

const ProjectTmp: React.FunctionComponent<IProject> = (props: IProject) => {
    // function openProject (event: React.MouseEvent<HTMLDivElement>){
    // }

    let classes = props.classes

    return (
        <div className={classes.block}>
            <Link to={'/projects/' + props.id}>{props.title}</Link>
        </div>
    )
}

const ProjectItem = injectSheet(styles)(ProjectTmp)

export default injectSheet(styles)(Projects);

