import React from "react";
import ProjectBox from "./ProjectBox";
import { desc } from "../constants";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        {desc.map((project, index) => (
          <div
            key={index}
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/Project-Details`, { state: { project } })}
          >
            <ProjectBox
              projectPhoto={project?.projectPhoto}
              projectName={project?.title}
              projectDesc={
                project?.desc?.length > 17
                  ? project?.desc?.substring(0, 155) + "...."
                  : project?.desc
              }
              projectLink={project?.website}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
