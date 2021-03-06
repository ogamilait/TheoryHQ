import React, { useState, useEffect, ElementType } from 'react';
import { IProject, projectsList } from './Projects'
import rr, { withRouter, RouteProps, Route, Router, RouteComponentProps, match } from 'react-router';
import { Link, Redirect } from 'react-router-dom';
import withStyles, {InjectOptions, Theming, withTheme } from "react-jss";
import { Theme } from "theming";

const styles = {
    body: {
        width: '100%',
    },
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
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        height: 100,
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
        '&:disabled': {
            background: '#999',
            color: '#777',
        },
    }
};

const Project: React.FunctionComponent<RouteComponentProps<any>> = (props: any) => {
    let match = props.match
    let classes = props.classes
    const theme = props.theme
    let id: number = parseInt(match.params.id)
    let backId: number = id - 1
    let nextId: number = id + 1
    let project: IProject = projectsList[id - 1]
    let disableBack: boolean = projectsList[id - 2] ? false : true;
    let disableNext: boolean = projectsList[id] ? false : true;

    if (project === undefined)
        return (
            <div>
                <h1>Not found</h1>
                <Link to="/projects">Back to list of projects</Link>
            </div>
        )

    return (
        <div className={classes.body}>
            <div>
                <div className={classes.title}>{project.title}</div>
                <div className={classes.description}>{project.description}</div>
            </div>
            <div className={classes.pagination}>
                <Link to={"/projects/" + backId}><button disabled={disableBack} className={classes.btn}>Back</button></Link>
                <Link to={"/projects/" + nextId}><button disabled={disableNext} className={classes.btn}>Next</button></Link>
            </div>
        </div>
    );
};

export default withRouter(withStyles(styles)(Project));
