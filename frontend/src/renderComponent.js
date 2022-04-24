export default (component) => {
  const app = document.getElementById("app");
  app.innerHTML = null;
  app.appendChild(component);
};