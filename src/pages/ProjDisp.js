import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjDisp.css";
import { FaGithubSquare } from "react-icons/fa";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills} 
      </p>
      <p>
        <b>Description: </b>{project.description}
      </p>
      <p>
        <a href={project.repo}><FaGithubSquare /></a> 
      </p>
    </div>
  );
}

export default ProjectDisplay;