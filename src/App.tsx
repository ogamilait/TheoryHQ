import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBarTop from './Layout/NavBarTop'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <h2>sad</h2>
  },
  {
    path: "/projects",
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: "/project",
    main: () => <h2>Shoelaces</h2>
  }
];

class App extends Component {
  render() {
    return (
      <div>
        <NavBarTop />
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
      </div>
    );
  }
}

export default App;
