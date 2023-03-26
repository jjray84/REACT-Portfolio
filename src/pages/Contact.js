import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { BsFillTelephoneOutboundFill, BsTelephoneOutboundFill } from "react-icons/bs";

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
                <h2><FaEnvelope /> <a href="mailto:jonathanjudsonray@gmail.com"> Email </a></h2>
            </div>
            <div className="Phone">
                <h2><BsTelephoneOutboundFill /> <a href="tel:678-886-7306"> Call Me</a></h2>
            </div>
        </div>
    </div>
  );
}

export default Contact;
