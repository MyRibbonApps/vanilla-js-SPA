import render from "./render";
import "./events";
import store from "./store";

// reRender();
window.addEventListener("popstate", () => {
  render();
});

document.addEventListener("DOMContentLoaded", () => {
  console.log(store);
  render();
});
