import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import injectSheet from "react-jss";

const styles = {
    header: {
        background: '#a9a9a9',
        height: '50px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& ul': {
            listStyleType: 'none',
            margin: 0,
            display: 'inline-flex',
            padding: 0,
            '& li': {
                fontSize: 20,
                padding: 5,
                '& a': {
                    padding: 5
                }
            }
        }
    },
};

interface INavBarTop {
    classes: any
}

const NavBarTop: React.FunctionComponent<INavBarTop> = ({ classes }) => {
    return (
        <div className={classes.header}>
            <div>Logo</div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
            </ul>
        </div>
    );
}

export default injectSheet(styles)(NavBarTop);
