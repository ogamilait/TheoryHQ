import React, { Component } from 'react';
import logo from './logo.svg';
import NavBarTop from './NavBarTop'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from '../Home/Home'
import Projects from '../Projects/Projects'
import Project from '../Projects/Project'
import Footer from "../Layout/Footer";
import injectSheet, { jss, ThemeProvider, Styles, CSSProperties } from "react-jss";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />
  },
  {
    path: "/projects",
    exact: true,
    main: () => <Projects />
  },
  {
    path: "/projects/:id",
    main: () => <Project />
  }
];


const styles = {
  body: {
    height: 'calc(100% - 50px)',
    display: 'flex',
    // justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  content:{
    padding: 20,
    margin: '50px 0px',
    height: 'calc(100% - 40px)',
    maxWidth: 1268,
    display: 'flex',
    justifyContent: 'center',
    width: 'calc(100% - 40px)',
  }
}

interface IAppProps {
  classes: any
}

const App: React.FunctionComponent<IAppProps> = ({ classes }) => {
  return (
    <div className={classes.body}>
      <NavBarTop />
      <div className={classes.content}>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default injectSheet(styles)(App);
