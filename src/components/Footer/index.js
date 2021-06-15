import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./style.css"

function Footer() {

    return (
        <footer className="text-center fixed-bottom footer">
            <div className="footer">
                <p className="social">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" onClick={() => window.open("https://www.linkedin.com/in/richard-yvarra-205131205/")}/> 
                        <FontAwesomeIcon icon={faGithub} size="2x" onClick={() => window.open("https://github.com/Vinyl77")}/>
                        <FontAwesomeIcon icon={faInstagram} size="2x" onClick={() => window.open("https://www.instagram.com/archive77/?hl=en")}/>
                </p>
                <p className="col-sm-12 copyright">
                    &copy; 2021 Richard Yvarra
                </p>
                <p>Main Image Photo By William Eggleston</p>
                <p>Contact Form Image By Stephen Shore</p>
  
            </div>
        </footer>
    )
}

export default Footer;