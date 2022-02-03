import { html, LitElement, css } from 'lit';
import { ComposedEvent } from '@patternfly/pfe-core';
import { customElement, property } from 'lit/decorators.js';
import { pfelement } from '@patternfly/pfe-core/decorators';

export class CounterIncrementEvent extends ComposedEvent {
  constructor(
    public count: number,
    public incAmount: number,
  ) {
    super('increment');
  }
}

export class CounterResetEvent extends ComposedEvent {
  constructor(
  ) {
    super('reset');
  }
}

@customElement('composed-event') @pfelement()
export class ComposedEventDemo extends LitElement {
  @property() count = 0;
  @property() incAmount = 1;

  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html`
      <div>Current Count: ${this.count}</div>
      <div>Increment Amount: ${this.incAmount}</div>

      <div>
        <input type="range" min="1" max="10" @input=${(e:any) => this.incAmount = e.target.value} value=${this.incAmount}>
        <button @click=${this._incrementHandler}>Increment</button>
        <button @click=${this._resetHandler}>Reset</button>
      </div>
    `;
  }

  _incrementHandler() {
    this.count = this.count + Number(this.incAmount);
    this.dispatchEvent(new CounterIncrementEvent(this.count, this.incAmount));
  }

  _resetHandler() {
    this.count = 0;
    this.dispatchEvent(new CounterResetEvent);
  }
}