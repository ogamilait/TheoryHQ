import React, { useState, useEffect, ElementType } from 'react';
import { IProject, projectsList } from './Projects'
import rr, { withRouter, RouteProps, Route, Router, RouteComponentProps, match } from 'react-router';
import { Link, Redirect } from 'react-router-dom';
import injectSheet from "react-jss";

const styles = {
    title: {
        background: '#fff',
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
        borderRadius: 10,
    },
    description: {
        display: 'flex',
        marginTop: 20,
        flexWrap: 'wrap',
        padding: 10,
        background: '#fff',
        borderRadius: 10,
        '& a': {
            // textDecoration: 'none',
        }
    },
    pagination: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30
    },
    btn: {
        background: '#000',
        color: '#fff',
        border: 0,
        padding: '6px',
        width: '80px',
    }
};

// interface IParams {
//     classes: any,
//     match: any
// }

const Project: React.FunctionComponent<RouteComponentProps<any>> = (props: any) => {
    let match = props.match
    let classes = props.classes
    let id: number = parseInt(match.params.id)
    let project: IProject = projectsList[id - 1]
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
        <div >
            <div>
                <div className={classes.title}>{project.title}</div>
                <div className={classes.description}>{project.description}</div>
            </div>
            <div className={classes.pagination}>
                <Link to={"/projects/" + backId}><button className={classes.btn}>Back</button></Link>
                <Link to={"/projects/" + nextId}><button className={classes.btn}>Next</button></Link>
            </div>
        </div>
    );
};
export default withRouter(injectSheet(styles)(Project));

// export default withRouter(Project);
