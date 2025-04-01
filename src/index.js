import "./styles.css";
import * as view from "./view";

const state = {
  menuIsOpen: false,
};

window.state = state;

view.initialRender();
