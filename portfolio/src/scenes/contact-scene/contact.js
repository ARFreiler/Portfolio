import React from 'react';

import Header from '../../containers/header/header';

import './contact.css';


const Contact = () => {
    return (
        <div className="contact-container">
            <Header />
            <div className="contact-content">
                <div className="mail-container">
                    <h2>Get in touch!</h2>
                    <p className="contact-text">If you have a question, would like to collaborate, or just share a thought, please feel free to drop me a line.</p>
                    <p className="contact-text">Thoughtful conversation and potential opportunities to grow or learn are always welcome.</p>
                    <button className="email-button">Write Ashleigh</button>
                </div>
                <div className="alt-links">
                    <h2 className="alt-links-header">Find Ashleigh elsewhere</h2>
                    <hr />
                    <div className="link-list">
                        <ul>

                            <li className="list-link"><a href="https://www.linkedin.com/in/ashleighfreiler">LinkedIn</a></li>
                            <li className="list-link"><a href="https://github.com/ARFreiler">GitHub</a></li>
                        </ul>
                        <ul>
                            <li className="list-link"><a href="https://unsplash.com/@arfreiler">Unsplash</a></li>
                            <li className="list-link"><a href="https://www.instagram.com/ashleigh_freiler">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;