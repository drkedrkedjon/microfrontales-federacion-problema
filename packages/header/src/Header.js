import "./index.css";
import "./header-component";

export const header = () => {
  const app = document.getElementById("app");
  const headerComponent = document.createElement("header-component");
  app.appendChild(headerComponent);
};
