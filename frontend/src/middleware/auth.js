import navigate from "../navigate";

export default () => {
  // Checking if we are loggeed in
  const getToken = localStorage.getItem("token");
  // If token expired make request
  if (getToken) {
    return true;
  }
  navigate("/");
  return false;
};
