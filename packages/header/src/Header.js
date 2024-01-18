import "./index.css";
// import { Menu } from "../../web-components/menu";
import { HeaderComponent } from "./header-component";
import * as moment from "moment";

export const header = () => {
  const app = document.getElementById("app");
  const headerComponent = document.createElement("header-component");
  app.appendChild(headerComponent);
};
