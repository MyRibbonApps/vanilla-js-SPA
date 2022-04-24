import navigate from "../navigate";
const navs = document.querySelectorAll("a");
navs.forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    // Here we call the navigate function to push the route to the url and render the page we wanna render.
    navigate(e.target.getAttribute("data-target"));
  });
});
