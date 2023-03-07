import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
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
              ReactJS, HTML, CSS, JavaScript
              BootStrap, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, GraphQL,
              MySQL, MongoDB
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;