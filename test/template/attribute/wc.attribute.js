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
  }

  connectedCallback() {
    this.displayVal = this.querySelector('[text]');
  }


  @Attribute(true)
  bar() { }

  @Attribute(true)
  hiddden(isHidden) {
    if (isHidden) {
      this.setAttribute('hidden', '');
    } else {
      this.removeAttribute('hidden');
    }
  }

  beforeAttributeChanged() {
    this.before = true;
  }

  @Observer('bar', 'foo', 'hiddden', 'text')
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'bar') {
      this.lastAttrChanged = name;
      this.displayVal.innerHTML = newValue || oldValue;
    }
  }

  afterAttributeChanged() {
    this.after = true;
  }

  adoptedCallback() { }

  disconnectedCallback() { }
}
