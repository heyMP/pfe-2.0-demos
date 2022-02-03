import { html, LitElement, css } from 'lit';
import { ContextEvent, createContext } from '@patternfly/pfe-core/context';
import type { Context, UnknownContext } from '@patternfly/pfe-core/context';
import { customElement, property } from 'lit/decorators.js';
import { pfelement, bound, observed } from '@patternfly/pfe-core/decorators';

@customElement('darkmode-context') @pfelement()
export class DarkmodeContextDemo extends LitElement {
  // @observed throws typescript warning
  @property({ type: Boolean, reflect: true }) darkmode = false;
  @property({ type: Boolean, reflect: true }) provider = false;
  @property({ type: Boolean, reflect: true }) consumer = false;

  private context: Context<boolean> = createContext(`pfe-darkmode-context`, this.darkmode as boolean);
  private dispose?: () => void;

  static styles = css`
    :host {
      display: block;
      padding: 1em;
      background-color: white;
      color: black;
      outline: 2px dotted black;
    }
    :host([darkmode]) {
      background-color: #4b2b5b;
      color: white;
      outline-color: beige;
    }
  `;

  connectedCallback(): void {
    super.connectedCallback();
    // register as a context consumer on the nearest context-aware ancestor
    if (this.consumer)
      this.dispatchEvent(new ContextEvent(this.context, this.contextCallback, true));
    // become a context provider
    if (this.provider)
      this.addEventListener('context-request', this.onChildContextEvent);
  }

  render() {
    return html`
      <slot></slot>
    `;
  }

  @bound private contextCallback(value: boolean, dispose?: () => void) {
    // protect against changing providers
    if (dispose && dispose !== this.dispose) {
      this.dispose?.();
    }
    this.darkmode = value;
    this.dispose = dispose;
  }

  @bound private onChildContextEvent(event: ContextEvent<UnknownContext>) {
    if (event.context.name === `pfe-darkmode-context`) {
      // claim the context-request event for ourselves (required by context protocol)
      event.stopPropagation();
      // send the current darkmode to its child.
      event.callback(this.darkmode);
    }
  }
}