import { WebComponent } from '../../../src';
import { Injection } from './injectionClass';

@WebComponent({
  tagName: 'wc-injection',
  templateUrl: './wc.injection.html',
  styleUrl: './wc.injection.scss',
  providers: [Injection],
})
export class WcComponent extends HTMLElement {
  constructor(injection) {
    super();
    this.injection = injection;
  }

  connectedCallback() {
    this.innerHTML = this.injection.start();
  }
}
