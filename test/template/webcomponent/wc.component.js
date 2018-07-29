import { WebComponent } from '../../../src/WebComponent';

@WebComponent({
  tagName: 'wc-component',
  templateUrl: './wc.component.html',
  styleUrl: './wc.component.scss',
})
export class WcComponent extends HTMLElement {
  constructor() {
    super();
  }

  initProperty() {
    this.start = 'Eureka!';
  }

  connectedCallback() {
    this.connected = true;
  }

  attributeChangedCallback() {
  }

  adoptedCallback() {
  }

  disconnectedCallback() {
    this.connected = false;
  }
}
