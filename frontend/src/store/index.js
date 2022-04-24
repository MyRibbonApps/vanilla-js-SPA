import render from "../render";
const store = new Store();
export default store;

class Store {
  constructor() {
    this.state = {};
    this.state.profileName = "Anton";
  }
  getProfileName() {
    return this.state.profileName;
  }
  setProfileName(profileName) {
    this.state.profileName = profileName;
    localStorage.setItem("token", profileName);
  }

  getState() {
    return Object.freeze({ ...this.state });
  }
  // We pass this the method we want to call and return it
  get(prop) {
    // return this[fn]();
    return this.state[prop];
  }
  // We pass this the method we want to call and the props
  set(fn, props) {
    this[fn](props);
    render();
  }
}
