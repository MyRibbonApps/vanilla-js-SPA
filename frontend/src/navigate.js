import render from "./render";

export default (path) => {
  // Navigate and render if we havn't already done so
  if (path !== location.pathname) {
    history.pushState(null, null, path);
    render();
  }
  return;
};
