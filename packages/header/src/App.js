import "./index.css";
import { header } from "./Header";

document.getElementById("app").innerHTML = `
<div class="container-header">
  <div>Name: header</div>
  <div>Framework: vanilla</div>
  <div>Language: JavaScript</div>
  <div>CSS: Empty CSS</div>
</div>
`;

header();
