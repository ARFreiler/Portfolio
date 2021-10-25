import React from 'react';
// import { FaEnvelope } from "react-icons/fa"

import './contact.css';
// import Content from '../containers/content-panel/content';

const Contact = () => {
    return (
        <div className="contact-container">
            {/* <Content />
            <FaEnvelope size={40} />
            <h1>CONTACT ELEMENT</h1> */}
            <div className="mail-container">
                <h2>Get in touch!</h2>
                <p className="contact-text">If you have a question, would like to collaborate, or just share a thought, please feel free to drop me a line.</p>
                <p className="contact-text">Thoughtful conversation and potential opportunities to grow or learn are always welcome.</p>
                <button className="email-button">Write Ashleigh</button>
            </div>
            <div className="alt-links">
                <h2>Find Ashleigh elsewhere</h2>
                <hr />
                <div className="link-list">
                    <ul>
                        <li className="list-link"><a href=""></a>LinkedIn</li>
                        <li className="list-link"><a href=""></a>GitHub</li>
                    </ul>
                    <ul>
                        <li className="list-link"><a href=""></a>Unsplash</li>
                        <li className="list-link"><a href=""></a>Instagram</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Contact;