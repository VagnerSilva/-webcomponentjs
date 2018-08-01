import { WebComponent, Observer, Attribute } from '../../../src';

@WebComponent({
  tagName: 'wc-attribute',
  templateUrl: './wc.attribute.html',
  styleUrl: './wc.attribute.scss',
})
export class WcAttribute extends HTMLElement {
  constructor() {
    super();
  }

  initProperty() {
    this.start = 'Eureka!';
    console.log('this.innerHTML');
    console.log(this.innerHTML);
  }

  connectedCallback() {
    this.displayVal = document.querySelector('div');
    console.log(this.displayVal);
    console.log('[super]connectedCallback');
  }

  @Attribute()
  bar() {}

  @Attribute(true)
  hiddden(isHidden) {
    if (isHidden) {
      this.setAttribute('hidden', '');
    } else {
      this.removeAttribute('hidden');
    }
  }

  @Observer('bar', 'foo', 'hiddden', 'text')
  attributeChangedCallback(name, oldValue, newValue) {
    this.lastAttrChanged = name;
    this.displayVal.innerHTML = newValue || oldValue;
    console.log('[super]attributeChangedCallback');
  }

  adoptedCallback() {
  }

  disconnectedCallback() {
  }
}
