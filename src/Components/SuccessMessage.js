import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SuccessMessage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { res, message, desc } = location.state || {};

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, [navigate]);
  return (
    <div>
      <h1 className="projectHeading">
        <b>{res}</b>
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="projectDetails">
          <div className="projectParent">
            <h3>{message} </h3>
            <br />
            <br />
            {desc}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
