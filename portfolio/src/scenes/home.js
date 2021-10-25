import React from 'react';

import './home.css';
import Content from '../containers/content-panel/content';
import Footer from '../containers/footer/footer';
import Header from '../containers/header/header';

const Home = () => {
    return (
        <div className="home-container">
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default Home;