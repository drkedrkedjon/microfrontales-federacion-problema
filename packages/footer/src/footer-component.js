import { LitElement, css, html } from "lit";
import * as moment from "moment";
import "../../web-components/menu";

export class FooterComponent extends LitElement {
  constructor() {
    super();
  }

  static styles = css`
    footer {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      background-color: lightslategray;
      color: #fff;
      padding: 20px;
      text-align: center;
    }
  `;
  // atributos de menu-global: vertical (boolean), color (string: black, white, red, purple)
  render() {
    return html`
      <footer>
        <menu-global
          vertical
          color="yellow"
        ></menu-global>
        <p>${moment().format("DD/MM/YYYY")}</p>
      </footer>
    `;
  }
}

if (!window.customElements.get("footer-component")) {
  window.customElements.define("footer-component", FooterComponent);
}
