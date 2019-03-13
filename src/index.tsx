import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Layout/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import withStyles, {ThemeProvider} from 'react-jss'
import {ThemeStyles} from './Layout/Theme'

const Index = (
    <Router>
        <ThemeProvider theme={ThemeStyles}>
            <App />
        </ThemeProvider>
    </Router>
)

ReactDOM.render(Index, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
