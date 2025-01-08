import React from "react";
import "./leftbar-toolbar-button.css";

const LeftbarToolbarButton = ({ icon, onClick }) => {
  return (
    <div className="leftbar-toolbar-button">
      <img
        src={`src/assets/icons/${icon}.svg`}
        alt="plus"
        className="leftbar-toolbar-button__icon"
      />
    </div>
  );
};

export default LeftbarToolbarButton;
