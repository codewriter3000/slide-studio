import React from "react";
import "./ribbon.css";

import { fonts, fontSizes, presentOptions, saveOptions } from "./constants";

import RibbonButton from "./RibbonButton";
import RibbonDropdown from "./RibbonDropdown";
import RibbonMenu from "./RibbonMenu";
import RibbonToggleButton from "./RibbonToggleButton";

const Ribbon = () => {
  const ribbons = [
    {
      name: "Font Name",
      control: "dropdown",
      items: fonts,
    },
    {
      name: "Font Size",
      control: "dropdown",
      items: fontSizes,
    },
    {
      name: "Font Color",
      control: "color",
    },
    {
      control: "divider",
    },
    {
      name: "Bold",
      icon: "bold",
      control: "toggle",
    },
    {
      name: "Italic",
      icon: "italic",
      control: "toggle",
      size: 8,
    },
    {
      name: "Underline",
      icon: "underline",
      control: "toggle",
    },
    {
      control: "divider",
    },
    {
      name: "Add Shape",
      icon: "add-shape",
      size: 20,
    },
    {
      name: "Add Image",
      icon: "add-image",
      size: 20,
    },
    {
      name: "Add Textbox",
      icon: "add-textbox",
      size: 20,
    },
    {
      control: "divider",
    },
    {
      name: "Present",
      control: "menu",
      icon: "present",
      items: presentOptions,
    },
    {
      control: "divider",
    },
    {
      name: "Open Presentation",
      icon: "open",
      size: 20,
    },
    {
      name: "Save Presentation",
      control: "menu",
      icon: "save",
      items: saveOptions,
    },
  ];

  return (
    <div className="ribbon">
      {ribbons.map((ribbon, index) => (
        <>
          {ribbon.control === "divider" && <div className="divider" />}
          {ribbon.control === "dropdown" && (
            <RibbonDropdown
              key={index}
              className={ribbon?.className || ""}
              {...ribbon}
            />
          )}
          {ribbon.control === "menu" && <RibbonMenu key={index} {...ribbon} />}
          {ribbon.control === "toggle" && (
            <RibbonToggleButton key={index} {...ribbon} />
          )}
          {!ribbon.control && <RibbonButton key={index} {...ribbon} />}
        </>
      ))}
    </div>
  );
};

export default Ribbon;
