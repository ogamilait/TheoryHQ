import React, {useState, useEffect, ElementType} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import injectSheet from "react-jss";

export const projectsList = [
    { id: 1, title: 'Title 1', description: 'Description 1' },
    { id: 2, title: 'Title 2', description: 'Description 2' },
    { id: 3, title: 'Title 3', description: 'Description 3' },
    { id: 4, title: 'Title 4', description: 'Description 4' },
    { id: 5, title: 'Title 5', description: 'Description 5' },
    { id: 6, title: 'Title 6', description: 'Description 6' },
]

const styles = {
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
        '& a':{
            textDecoration: 'none',
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
        "&:nth-child(odd)": {
            marginRight: 10,
        },
        "&:nth-child(even)": {
            marginLeft: 10,
        },
    }
  };

interface IProjects {
    classes: any
}

const Projects: React.FunctionComponent<IProjects> = ({classes}) => {
    return (
        <div>
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
            <Link to={'/projects/'+props.id}>{props.title}</Link>
        </div>
        )
}

const ProjectItem = injectSheet(styles)(ProjectTmp)

export default injectSheet(styles)(Projects);

