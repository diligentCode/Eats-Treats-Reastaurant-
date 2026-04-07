import "./style.css";
import { home } from "./home.js";

document
  .querySelector(`.nav-right > button:nth-child(1)`)
  .addEventListener(`click`, home);

//home();
