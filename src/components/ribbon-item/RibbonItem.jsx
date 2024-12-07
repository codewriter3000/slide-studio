import React from "react";
import "./ribbon-item.css";

const RibbonItem = ({ children, onClick }) => {
  return <button className="ribbon-item" onClick={onClick}>{children}</button>;
};

export default RibbonItem;
