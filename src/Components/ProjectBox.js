import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { HiLink } from "react-icons/hi2";

const ProjectBox = ({
  projectPhoto,
  projectName,
  projectDesc,
  projectLink,
}) => {
  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div className="projectParent">
        <br />
        <h3>{projectName}</h3>
        <br />
        {projectDesc}
        <br />

        <a href={projectLink} target="_blank">
          <button className="projectbtn">
            <HiLink /> Live Preview
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
