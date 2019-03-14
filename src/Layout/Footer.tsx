import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import injectSheet from "react-jss";
import rr, { withRouter, RouteProps, RouteComponentProps, match,  } from 'react-router';
import {History} from 'history';
import { setTimeout } from 'timers';

const styles = {
    main: {
        width: '100%',
        background: '#a9a9a9',
        height: '50px',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: -50,
        position: 'relative',
        '&.fixed': {
            position: 'fixed',
            bottom: 0,
        },
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
            bottom: 50,
            background: '#b1b1b1',
        },
    }
};

interface INavBarTop {
    classes: any,
}

const Footer: React.FunctionComponent<RouteComponentProps<any>> = (props: any) => {
    let [fixed, setFixed] = useState()
    let [openMenu, setMenu] = useState(false)

    let classes = props.classes
    let history: History = props.history 

    const resize = () => {
        if (window.innerHeight > document.body.clientHeight)
            setFixed('')
        else
            setFixed('fixed')
    }

    history.listen((location: any, action: any) => {
        // TODO: not very reliable
        setTimeout(()=>{
            resize()
        }, 0)
    });

    useEffect(() => {
        window.addEventListener('resize', resize)
        resize();
    }, []);

    return (
        <div className={classes.main + ' ' + fixed}>
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

export default withRouter(injectSheet(styles)(Footer));

