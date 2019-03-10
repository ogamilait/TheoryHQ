import React, { Component } from 'react';
import logo from './logo.svg';
import NavBarTop from './NavBarTop'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../Home/Home'
import Projects from '../Projects/Projects'
import Project from '../Projects/Project'
import Footer from "../Layout/Footer";
import jss from 'jss';


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

jss.setup()
class App extends Component {
//   const styles = ({ palette, spacing, breakpoints }: Theme) => jss.createStyleSheet({
//     textField: {

//     },
//     main: {
//         width: 'auto',
//         display: 'block', // Fix IE 11 issue.
//         marginLeft: spacing.unit * 3,
//         marginRight: spacing.unit * 3,
//         [breakpoints.up(400 + spacing.unit * 3 * 2)]: {
//             width: 400,
//             marginLeft: 'auto',
//             marginRight: 'auto',
//         },
//     },
//     avatar: {
//         margin: spacing.unit,
//         backgroundColor: palette.secondary.main,
//     },
//     form: {
//         width: '100%', // Fix IE 11 issue.
//         marginTop: spacing.unit,
//     },
//     submit: {
//         marginTop: spacing.unit * 3,
//     },
// });

  render() {
    return (
      <div>
        <NavBarTop />

        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}

        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(App);
