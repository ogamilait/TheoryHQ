import React, { Component } from 'react';
import logo from './logo.svg';
import NavBarTop from './NavBarTop'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
    height: '100%'
  },
  content:{
    padding: 20,
    background: '#D2D1D1',
    margin: '50px 0px',
  }
};

interface IAppProps {
  classes: any
}

const App: React.FunctionComponent<IAppProps> = ({ classes }) => {
  return (
    <div className={classes.body}>
      <NavBarTop />
      <div className={classes.content}>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default injectSheet(styles)(App);
