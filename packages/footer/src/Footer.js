import "./index.css";
import { Menu } from "../../web-components/menu";
import * as moment from "moment";

export const footer = () => {
  const app = document.getElementById("app");
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  // atributos de menu-global: vertical (boolean), color (string: black, white, red, purple)
  footer.innerHTML = `
    <menu-global vertical  color="yellow"></menu-global>
    <p>${moment().format("DD/MM/YYYY")}</p>
  `;
  app.appendChild(footer);
};
