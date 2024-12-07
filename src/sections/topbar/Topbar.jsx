import React from "react";
import "./topbar.css";
import { TopbarComponentButton } from "../../components";
import { getCurrentWindow } from "@tauri-apps/api/window";

const Topbar = () => {
  return (
    <div data-tauri-drag-region className="topbar h-10 flex items-center justify-between pt-10">
      <div className="flex items-center ml-8">
        <img src="src/assets/icons/slide-studio.svg" alt="logo" className="topbar__logo" height="44" width="44" />
        <span className="ml-20 flex items-center">
          Untitled Presentation
        </span>
      </div>
      <div className="mx-40 h-10 flex-grow border border-white">
        Search
      </div>
      <div className="float-right inline-flex mr-4">
        <TopbarComponentButton
          src="src/assets/icons/minimize.svg"
          alt="minimize"
          className="topbar__logo hover:bg-orange-500/40"
          id="topbar-minimize"
          onClick={() => {
            getCurrentWindow().minimize();
          }}
        />
        <TopbarComponentButton
          src="src/assets/icons/maximize.svg"
          alt="maximize"
          className="topbar__logo hover:bg-orange-500/40"
          id="topbar-maximize"
          onClick={() => {
            getCurrentWindow().maximize();
          }}
        />
        <TopbarComponentButton
          src="src/assets/icons/close.svg"
          alt="close"
          className="topbar__logo hover:bg-red-500/40"
          id="topbar-close"
          onClick={() => {
            getCurrentWindow().close();
          }}
        />
      </div>
    </div>
  );
};

export default Topbar;
