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
    console.log('Iniciado');
  }

  connectedCallback() {
    this.connected = true;
    console.log('inicioou mesmo', this.start);
  }

  attributeChangedCallback() {
  }

  adoptedCallback() {
  }

  disconnectedCallback() {
    this.connected = false;
  }
}
