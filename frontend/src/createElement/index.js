export default (
  element,
  type = null,
  onClick = null,
  textContent = null,
  children = null
) => {
  const createElement = document.createElement(element);
  if (textContent) {
    createElement.textContent = textContent;
  }
  if (children) {
    children.forEach((childEl) => {
      createElement.appendChild(childEl);
    });
  }
  if (onClick) {
    createElement.addEventListener("click", onClick);
  }
  return createElement;
};
