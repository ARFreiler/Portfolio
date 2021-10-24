import React from 'react';
import '../footer/footer.css'

import { FaTwitter } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="icons">
                <div className="icon">
                    <a href="https://twitter.com/AshleighFreiler"><FaTwitter size={30} /></a>
                </div>
                <div className="icon">
                    <a href="https://github.com/ARFreiler"><FaGithub size={30} /></a>
                </div>
                <div className="icon">
                    <a href="https://linkedin.com/in/ashleighfreiler"><FaLinkedin size={30} /></a>
                </div>
            </div>

        </footer>
    )
}

export default Footer;