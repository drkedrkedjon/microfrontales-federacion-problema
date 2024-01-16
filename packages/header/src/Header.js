import "./index.css";
import { Menu } from "../../web-components/menu";
import * as moment from "moment";

export const header = () => {
  const app = document.getElementById("app");
  const header = document.createElement("header");
  header.classList.add("header");
  // atributos de menu-global: vertical (boolean), color (string: black, white, red, purple)
  header.innerHTML = `
    <menu-global color="aliceblue"></menu-global>
    <p>${moment().format("DD/MM/YYYY")}</p>
  `;
  app.appendChild(header);
};
