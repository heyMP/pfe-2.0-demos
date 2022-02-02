import { html, LitElement, css } from 'lit';
import { getRandomId } from '@patternfly/pfe-core/functions/random';
import { customElement, property } from 'lit/decorators.js';
import { pfelement } from '@patternfly/pfe-core/decorators';

@customElement('random-id') @pfelement()
export class RandomIdExample extends LitElement {

  @property({reflect: true, type: String}) prefix = "";

  static styles = css`
    :host {
      display: inline-block;
      background-color: #eeeeee;
      padding: 0.2rem;
      border-radius: 0.2rem;
    }
  `;

  private _getRandomId() {
    return (this.prefix === "") ? getRandomId() : getRandomId(this.prefix);
  }

  render() {
    return html`
      ${this._getRandomId()}
    `;
  }
}
