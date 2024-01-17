import { LitElement, css, html } from "lit";
import { Menu } from "../../web-components/menu";
import * as moment from "moment";

export class HeaderComponent extends LitElement {
  constructor() {
    super();
  }

  static styles = css`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      color: white;
      background-color: #282c34;
    }
  `;

  render() {
    return html`
      <header>
        <menu-global color="aliceblue"></menu-global>
        <p>${moment().format("DD/MM/YYYY")}</p>
      </header>
    `;
  }
}

window.customElements.define("header-component", HeaderComponent);
