import React from "react";
import photo from '../../src/assets/headshot.jpg'
import "../styles/Home.css";
import { FaReact, FaHtml5, FaCss3, FaBootstrap, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiGraphql, SiMongodb } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr'

function Home() {
  return (
    <div className="home">
      <div className="about">
      <img className="photo" src={photo} alt="headshot" />
        <h2> Hello! I am Jonathan Ray</h2>
        <div className="prompt">
          <p>I am a web developer with a passion for solving problems, and a recent graduate of the Georgia Tech Full Stack Boot Camp.</p>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <h3>
              <FaReact /> <FaHtml5 /> <FaCss3 /> <SiJavascript /> <FaBootstrap />
            </h3>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <h3>
              <FaNodeJs /> <SiGraphql /> <GrMysql /> <SiMongodb />
            </h3>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;