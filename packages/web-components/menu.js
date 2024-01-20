import { LitElement, html, css } from "lit";

export class Menu extends LitElement {
  constructor() {
    super();
    this.color = "black";
    this.vertical = false;
  }
  

  static properties = {
    color: { type: String },
    vertical: { type: Boolean },
  };

  static styles = css`
    .container {
      font-size: 1.5rem;
      display: flex;
      gap: 1rem;
      list-style: none;
      padding: 0;
      margin: 0;
    }
  `;

  render() {
    return html`
      <style>
        .container {
          color: ${this.color};
          flex-direction: ${this.vertical ? "column" : "row"};
        }
      </style>
      <ul class="container">
        <li>Home</li>
        <li>About</li>
      </ul>
    `;
  }
}
if (!customElements.get("menu-global")) {
  window.customElements.define("menu-global", Menu);
}
