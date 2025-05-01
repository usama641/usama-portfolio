import React from "react";
import { useLocation } from "react-router-dom";

const ProjectDetails = () => {
  const location = useLocation();
  const { project } = location.state || {};
  const { title, desc, projectPhoto, website } = project || {};
  return (
    <div>
      <h1
        className=""
        style={{
          marginTop: "55px",
          padding: "55px 0",
          textAlign: "center",
          fontSize: "36px",
          letterSpacing: "0.4px",
        }}
      >
        <a
          style={{ textDecoration: "none", color: "black" }}
          href={website}
          target="_blank"
        >
          <b>{title}</b>
        </a>
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="projectDetails">
          <img
            className="projectPhoto"
            src={projectPhoto}
            alt="Project display"
          />
          <div className="projectParent">
            <br />
            <h3>{title}</h3>
            <br />
            {desc}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
