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
          <p>I am a junior developer with a passion for solving problems</p>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              <FaReact /> ReactJS, <FaHtml5 /> HTML, <FaCss3 /> CSS, <SiJavascript /> JavaScript, <FaBootstrap /> BootStrap
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              <FaNodeJs /> NodeJS, <SiGraphql /> GraphQL, <GrMysql /> MySQL, <SiMongodb /> MongoDB
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;