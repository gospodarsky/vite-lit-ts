import { html, css, LitElement } from 'lit';

export class MyElement extends LitElement {
  static styles = css`p { color: blue }`;

  static properties = {
    name: { type: String },
  };

  constructor() {
    super();
  }

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}

customElements.define('my-element', MyElement);
