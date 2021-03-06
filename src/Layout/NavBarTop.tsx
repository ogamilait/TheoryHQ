import React, { useState, useEffect, ElementType, RefObject } from 'react';
import ReactDOM from 'react-dom';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import injectSheet from "react-jss";
import { ReactComponent } from '*.svg';

const styles = {
    header: {
        background: '#a9a9a9',
        height: '50px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        top: 0,
        width: '100%',
        zIndex: 1,
        position: 'fixed',
    },
    menu: {
        listStyleType: 'none',
        margin: 0,
        display: 'inline-flex',
        padding: 0,
        '& li': {
            fontSize: 20,
            padding: 5,
            '& a': {
                padding: 5,
                color: '#fff',
                textDecoration: 'none',
            }
        }
    },
    toggleMenu: {
        display: 'none',
        marginRight: 20,
        cursor: 'pointer',
        '& ul': {
            display: 'table',
            width: 25,
            listStyle: 'none',
            paddingInlineStart: 0,
            '& li': {
                width: '100%',
                height: 3,
                backgroundColor: '#002e5b',
                marginBottom: 4,
                '& :last-child': {
                    marginBottom: 0,
                }
            }
        }
    },
    '@media (max-width: 768px)': {
        toggleMenu: {
            display: 'inline-flex',
        },
        menu: {
            display: 'none',
        },
        active: {
            position: 'absolute',
            right: 10,
            display: 'flex',
            flexDirection: 'column',
            top: 50,
            background: '#b1b1b1',
        },
    }
};

interface INavBarTop {
    classes: any,
}


const NavBarTop: React.FunctionComponent<INavBarTop> = (props: INavBarTop) => {
    let [openMenu, setMenu] = useState(false)
    let classes = props.classes;

    return (
        <div className={classes.header}>
            <div>Logo</div>
            <label onClick={() => setMenu(!openMenu)} className={classes.toggleMenu}><ul><li></li> <li></li><li></li></ul></label>
            <ul className={openMenu ? classes.menu + ' ' + classes.active : classes.menu}>
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
