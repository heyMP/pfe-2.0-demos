import { html, LitElement, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { pfelement, initializer } from '@patternfly/pfe-core/decorators';

@customElement('initializer-example') @pfelement()
export class InitializerExample extends LitElement {
  static styles = css`
    .error {
      color: #EE0000;
    }

    .check {
      color: green;
    }

    .hide {
      display: none;
    }
  `;

  public input: HTMLInputElement | null = null;

  public button: Element | null = null;

  public span: Element | null = null;

  render() {
    if (this.input) {
      return html`
        <slot></slot>
        <button @click="${this._handleClick}">Change input value</button>
        <span class="check hide">✅ Mutation Observer triggered</span>
      `;
    }
    return html`
      <div class="error">
        <p>No Light DOM: <code>&lt;initializer-example&gt;&lt;/initializer-example&gt;</code></p>
      </div>
    `;
  }

  @initializer({
    observe: { childList: true, subtree: true, attributes: true },
    emptyWarning: `This initializer-element does not contain Light DOM`
  })
  private _init() {
    this.input = this.querySelector('input') || null;
    this.span = this.shadowRoot?.querySelector('span.check') || null;

    if (this.input?.value === "Goodbye") {
      this.span?.classList.toggle("hide");
    }
  }

  private _handleClick() {
    if (this.input)
      // By setting the attribute on the input it triggers the mutation observer to run _init() again.
      this.input.setAttribute("value", "Goodbye");
  }

}
