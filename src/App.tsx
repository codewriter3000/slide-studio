import { useState } from "react";
import {
  Topbar,
  Ribbon,
  LeftbarSlides,
  SlideView,
  BottomPanel,
  PropertiesPanel,
} from "./sections";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="flex flex-col h-screen">
      <Topbar />
      <div className="flex-none mt-16">
        <Ribbon />
      </div>
      <div className="flex m-8 grow gap-8">
        <LeftbarSlides />
        <div className="flex flex-col h-full gap-8 grow">
          <SlideView />
          <BottomPanel />
        </div>
        <PropertiesPanel />
      </div>
    </div>
  );
}

export default App;
