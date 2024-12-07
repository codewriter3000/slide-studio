import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { getCurrentWindow } from '@tauri-apps/api/window';
import { Provider } from "react-redux";
import store from "./store";

// when using `"withGlobalTauri": true`, you may use
// const { getCurrentWindow } = window.__TAURI__.window;

const appWindow = getCurrentWindow();

document
  .getElementById('topbar-minimize')
  ?.addEventListener('click', () => {
    console.log('minimize')
    appWindow.minimize()});
document
  .getElementById('topbar-maximize')
  ?.addEventListener('click', () => {
    console.log('maximize')
    appWindow.toggleMaximize()
  });
document
  .getElementById('topbar-close')
  ?.addEventListener('click', () => appWindow.close());

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
