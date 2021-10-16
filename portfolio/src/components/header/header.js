import React from 'react';


const Header = () => {
    return (
        <header className="header">
            <div className="intro">
                <h1 id="intro-name">Ashleigh Freiler</h1>
                <p id="intro-text">an evolving human in all things great and small</p>
            </div>
            <div className="nav">
                <div className="nav-links">
                    <button className="nav-link">Home</button>
                    <button className="nav-link">About Me</button>
                    <button className="nav-link">My Work</button>
                    <button className="nav-link">Contact</button>
                </div>
            </div>
        </header>
    )
}

export default Header;