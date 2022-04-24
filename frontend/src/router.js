import navigate from "./navigate";
import home from "./components/home";
import about from "./components/about";
import renderComponent from "./renderComponent";
import middlewareIsLoggedIn from "./middleware/auth";
import login from "./components/login";

export default () => {
  // The pre defined routes and what each route should render.
  const routes = [
    {
      path: "/",
      render: () => renderComponent(home().component),
    },
    {
      path: "/about",
      render: () => renderComponent(about().component),
    },
    {
      path: "/login",
      render: () => renderComponent(login().component),
    },
    // The dashboard route, first it checks if we are logged in, else it sends us to the login page.
    {
      path: "/dashboard",
      render: () =>
        middlewareIsLoggedIn()
          ? renderComponent(about().component)
          : renderComponent(home().component),
    },
  ];

  // Here we return all our pre defined routes with a isMatch boolean, true if the url in the searchbar match with any of our routes.
  const mathinchRoutes = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  // Here we return the route if it is matching
  let matching = mathinchRoutes.filter((item) => {
    if (item.isMatch) {
      return item;
    }
  });

  // If the url match with any of our routes we render it corresponding component
  if (matching.length === 1) {
    matching[0].route.render();
    console.log(matching);
    return;
  }

  // If the url in the searchbar does not match we navigate home and render the home page
  navigate("/");
  matching = {
    route: routes[0],
    isMatch: true,
  };
  matching.route.render();
  console.log(matching);
  return;
};
