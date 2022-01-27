import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import '@patternfly/pfe-band/dist/pfe-band.js';
import '@patternfly/pfe-cta/dist/pfe-cta.js';

export class RhElement extends LitElement {
  static styles = css``;

  render() {
    return html`
      <pfe-band>
        <pfe-cta><a href="./demo/track-performance">Track Performance</a></pfe-cta>
      </pfe-band>
    `;
  }
}
