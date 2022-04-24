import router from "./router";
export default () => {
  // Calls the render function and renders whatever needs to be rendered.
  // Can be called when we change routes or needs oour UI to update becuase of state change.
  router();
  return;
};
