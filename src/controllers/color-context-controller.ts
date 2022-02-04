import { html, LitElement, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { pfelement } from '@patternfly/pfe-core/decorators';

@customElement('color-context') @pfelement()
export class ColorContext extends LitElement {
  @property({ type: Boolean, reflect: true }) darkmode = false;

  static styles = css`
    :host {
      display: block;
      padding: 1em;
      color: black;
      outline: 2px dotted black;
    }
    :host([darkmode]) {
      --context: dark;
    }
    :host([on=dark]) {
      background-color: #4b2b5b;
      color: white;
      outline-color: beige;
    }
  `;

  render() {
    return html`
      <slot></slot>
    `;
  }
}