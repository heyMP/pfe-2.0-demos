import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import '@patternfly/pfe-band/dist/pfe-band.js';
import '@patternfly/pfe-cta/dist/pfe-cta.js';

export class RhElement extends LitElement {
  static styles = css``;

  render() {
    return html`
      <pfe-band>
        <ul>
          <li><pfe-cta><a href="./demo/core/track-performance">Track Performance</a></pfe-cta></li>
          <li><pfe-cta><a href="./demo/core/number-list-converter">Number List Converter</a></pfe-cta></li>
          <li><pfe-cta><a href="./demo/functions/get-random-id">Random ID</a></pfe-cta></li>
        </ul>
      </pfe-band>
    `;
  }
}
