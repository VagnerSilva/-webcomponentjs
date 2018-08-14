import { WebComponent } from '../../../src';

@WebComponent({
  tagName: 'wc-extend',
  templateUrl: './wc.extend.html',
  styleUrl: './wc.extend.scss',
  extends: 'div',
})
export class WcExtend extends HTMLDivElement {
  constructor() {
    super();
    console.log('this.parentNode');
  }

  connectedCallback() {
    console.log('autonomous custom element here');
    this.innerHTML = '<div>I am a beautiful (word) autonomous custom element webcomponent!</div>';
    this.addEventListener('click', () => {
      console.log(`clicked ${this.tagName}`);
    });
  }
}
