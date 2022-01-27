import { html, LitElement, css } from 'lit';
import { NumberListConverter } from '@patternfly/pfe-core';
import { customElement, property } from 'lit/decorators.js';
import { pfelement } from '@patternfly/pfe-core/decorators';

@customElement('number-list-converter-example') @pfelement()
export class NumberListConverterExample extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: lightblue;
      padding: 1rem;
    }
  `;

  @property() todos: string[] = ['check email', 'get coffee', 'code review'];

  @property({ attribute: 'completed-index', converter: NumberListConverter, reflect: true })
    completedIndex: number[] = [1];

  render() {
    return html`
      <div>Todo list</div>
      <ol>
        ${this.todos.map((todo, index) => html`
          <li>${todo} ${this.completedIndex.includes(index) ? html`✅` : ``}</li>
        `)}
      </ol>
    `;
  }
}