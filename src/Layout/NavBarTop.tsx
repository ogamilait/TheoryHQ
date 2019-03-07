import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const NavBarTop = () => {
    return (
        <div>
            NavBarTop
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

export default NavBarTop
