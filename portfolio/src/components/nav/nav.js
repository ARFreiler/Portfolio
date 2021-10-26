import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import { StyledLink } from "../../styles";

import './nav.css';

import Home from '../../scenes/home-scene/home';
import About from '../../scenes/about-scene/about';
import Work from '../../scenes/work/work';
import Contact from '../../scenes/contact-scene/contact';

const Nav = () => {
    return (
        // <div className="nav">
        //     <div className="nav-links">
        //         <button className="nav-link hidden">Home</button>
        //         <button className="nav-link">About Me</button>
        //         <button className="nav-link">My Work</button>
        //         <button className="nav-link">Contact</button>
        //     </div>
        // </div>
        <Router>
            <nav>
                <StyledLink to="/scenes/home-scene/home">Home</StyledLink>
                <StyledLink to="/scenes/about-scene/about">About Me</StyledLink>
                <StyledLink to="/scenes/work/work">My Work</StyledLink>
                <StyledLink to="/scenes/contact-scene/contact">Contact</StyledLink>
            </nav>
            <Switch>
                <Route exact path="/scenes/home-scene/home">
                    <Home />
                </Route>,
          <Route exact path="/scenes/about-scene/about">
                    <About />
                </Route>,
          <Route exact path="/scenes/work-scene/work">
                    <Work />
                </Route>,
          <Route exact path="/scenes/contact-scene/contact">
                    <Contact />
                </Route>

            </Switch>
        </Router>
    )
}

export default Nav;