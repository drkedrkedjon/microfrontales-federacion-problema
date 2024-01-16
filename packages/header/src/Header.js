import "./index.css";
import { Menu } from "../../web-components/menu";

export const header = () => {
  const app = document.getElementById("app");
  const header = document.createElement("header");
  header.classList.add("header");
  header.innerHTML = `
    <menu-global></menu-global>
    <p>FECHA</p>
  `;
  app.appendChild(header);
};
