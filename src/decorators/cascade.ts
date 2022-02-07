import { html, LitElement, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { pfelement, cascades } from '@patternfly/pfe-core/decorators';

import "@patternfly/pfe-band";
import "@patternfly/pfe-cta";

@customElement('cascade-example') @pfelement()
export class CascadeExample extends LitElement {
  static styles = css`
    .cascade-container {
      outline: 2px dashed #ccc;
      margin: 1rem 0;
      padding: 1rem;
    }
  `;

  @cascades('pfe-band')
  @property({ reflect: true }) color: 'accent'|'base'|'complement'|'darker'|'darkest'|'lightest' = 'base';

  render() {

    return html`
      <div class="cascade-container">
        <pfe-band>
          <slot></slot>
        </pfe-band>
      </div>
    `;
  }
}
