import React from 'react';

import './nav.css';

const Nav = () => {
    return (
        <div className="nav">
            <div className="nav-links">
                <button className="nav-link hidden">Home</button>
                <button className="nav-link">About Me</button>
                <button className="nav-link">My Work</button>
                <button className="nav-link">Contact</button>
            </div>
        </div>
    )
}

export default Nav;