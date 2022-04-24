import createElement from "../createElement";

export default () => {
  return {
    component: createElement("div", null, null, null, [
      createElement("h1", null, null, "Sign in"),
      createElement("div", null, null, null, [
        createElement("input", null, null, null),
        createElement("input", null, null, null),
      ]),
    ]),
  };
};
