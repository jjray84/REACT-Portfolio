import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

import "../styles/Contact.css";

function Contact() {
  return (
    <div className="home">
        <div className="contact">
            <h1> Contact Me </h1>
            <div className="GitHub">
                <h2><FaGithubSquare /> <a href="https://github.com/jjray84"> GitHub </a></h2>
            </div>
            <div className="LinkedIn">
                <h2><FaLinkedin /> <a href="https://www.linkedin.com/in/jon-ray-925a04174/"> LinkedIn </a></h2>
            </div>
            <div className="email">
                <h2><FaEnvelope /> Email me at: jonathanjudsonray@gmail.com </h2>
            </div>
        </div>
    </div>
  );
}

export default Contact;
