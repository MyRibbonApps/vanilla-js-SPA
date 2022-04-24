import createElement from "../createElement";
import store from "../store/index";

export default () => {
  return {
    component: createElement("div", null, null, null, [
      createElement(
        "h1",
        null,
        null,
        `Profile Name: ${store.get("profileName")}`,
        null
      ),
      ,
      createElement(
        "button",
        null,
        () => store.set("setProfileName", "New name"),
        "Click to change",
        null
      ),
    ]),
  };
};
