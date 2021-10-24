import React from 'react';
import Nav from '../../components/nav/nav';
import Brand from '../../components/brand/brand';

import './header.css';

const Header = () => {
    return (
        <header className="header">
            <Brand />
            <Nav />
        </header >
    )
}

export default Header;