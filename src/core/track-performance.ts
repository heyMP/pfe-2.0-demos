import { html, LitElement } from 'lit';
import { customElement, state, property } from 'lit/decorators.js';
import { trackPerformance } from '@patternfly/pfe-core';
import { pfelement } from '@patternfly/pfe-core/decorators';

@customElement('track-performance') @pfelement()
export class RhElement extends LitElement {
  @state() private _calc = Number(0);

  constructor() {
    super();
    // Enable PFE trackPerformance
    trackPerformance(true);
    this.calculate();
  }

  public async calculate() {
    // If trackPerformance is enabled then mark this calculation
    if (window.PfeConfig.trackPerformance) performance.mark('calculate_start');

    for (let index of [...Array(500)].keys()) {
      // disable batch rendering updates
      await new Promise((resolve) => setTimeout(resolve));
      // update the count
      this._calc = index + 1;
    }

    // If trackPerformance is enabled then stop calculation mark
    // and print the performance resuls to the console.
    if (window.PfeConfig.trackPerformance) {
      performance.mark('calculate_end');
      console.log(performance.measure('measure_calculate', 'calculate_start', 'calculate_end'));
    }
  }

  render() {
    return html`Calculate number: ${this._calc}`;
  }
}