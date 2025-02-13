import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./preview.css";

// Mapping of component names to actual components
import SomeComponent from "./SomeComponent"; // Example component
import AnotherComponent from "./AnotherComponent"; // Add more as needed

const componentMap = {
  SomeComponent,
  AnotherComponent,
};

const ExpandedPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { componentName } = location.state || {};

  const ComponentToRender = componentMap[componentName];

  return (
    <div className="overlay">
      <div className="modal">
        <button className="close-button" onClick={() => navigate(-1)}>
          &times;
        </button>
        {ComponentToRender ? <ComponentToRender /> : <p>Component not found.</p>}
      </div>
    </div>
  );
};

export default ExpandedPage;
