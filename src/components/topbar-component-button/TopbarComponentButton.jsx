import React from "react";
import { twMerge } from "tailwind-merge";
import "./topbar-component-button.css";

const TopbarComponentButton = ({ src, alt, className, id, onClick }) => {
  return (
    <button
      className={twMerge(
        "topbar-component-button h-10 w-10 flex items-center justify-center m-2 cursor-pointer border border-white rounded-full",
        className
      )}
      id={id}
      onClick={onClick}
    >
      <img src={src} alt={alt} />
    </button>
  );
};

export default TopbarComponentButton;
