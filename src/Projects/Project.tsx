import React, { useState, useEffect, ElementType } from 'react';
import { RouteComponentProps } from "react-router";
import { IProject, projectsList } from './Projects'
import { withRouter, RouteProps, Route, Router } from 'react-router';
import { Link, Redirect } from 'react-router-dom';


interface Params {
    id: string
}

const Project: React.FunctionComponent<RouteComponentProps<Params>> = ({ match }: RouteComponentProps<Params>) => {
    let id: number = parseInt(match.params.id)
    let project: IProject = projectsList[id-1]
    // let [value, setValue] = useState(0)

    if (project === undefined)
        return (
            <div>
                <h1>Not found</h1>
                <Link to="/projects">Back to list of projects</Link>
            </div>
        )

    let backId: number = id - 1
    let nextId: number = id + 1

    // function back (){
    //     history.push('/projects/'+backId)
    // }

    return (
        <div>
            <div>
                <div>{project.title}</div>
                <div>{project.description}</div>
            </div>
            <div>
                <Link to={"/projects/" + backId}><button>Back</button></Link>
                <Link to={"/projects/" + nextId}><button>Next</button></Link>
            </div>
        </div>
    );
};

export default withRouter(Project);
