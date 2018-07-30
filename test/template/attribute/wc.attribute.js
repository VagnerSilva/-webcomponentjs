import { WebComponent, Observer, Attribute } from '../../../lib';

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
    this.connected = true;
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

  @Observer(
    'bar',
    'foo',
    'hiddden',
  )
  attributeChangedCallback(name, oldValue, newValue) {
    this.lastAttrChanged = name;
    console.log(this.lastAttrChanged);
  }

  adoptedCallback() {
  }

  disconnectedCallback() {
  }
}
