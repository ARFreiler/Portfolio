import React from 'react';

import './about.css';

import Header from '../../containers/header/header';
import Footer from '../../containers/footer/footer';

const About = () => {
    return (

        <div className="about-container">
            <Header />
            <div className="about-content">
                <div className="about-content-text">
                    <h1 className="about-title">ABOUT ME ELEMENT TITLE</h1>
                    <p className="about-text-one">Former anti-tech. Dog mom. Yoga practicioner. Nature enthusiast. Plant parent. Eternal student.</p>
                    <p className="about-text-two">Located in Philadelphia, Pennsylvania. Urban dweller, rural explorer. Living each day, faithful pitbull by my side. Growing as a person, evolving as a human.</p>
                </div>
            </div>
            <Footer />
        </div>
    )

}

export default About;