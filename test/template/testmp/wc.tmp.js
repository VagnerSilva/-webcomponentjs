class MyComponent extends HTMLElement {
  static get observedAttributes() {
    return ['bar', 'foo', 'hiddden', 'text', 'type'];
  }

  get bar() { return this.getAttribute('bar'); }

  set bar(v) { this.setAttribute('bar', v); }

  constructor() {
    super();
    console.log('AAA');
    const template = document.createElement('template');
    const style = template.appendChild('style');
    template.innerHTML = '<div><h1 text>Eureka!</h1></div>';
    // this.attachShadow({ mode: 'open' });
    this.append(template.content.cloneNode(true));
    this.displayVal = this.querySelector('[text]');
    console.log('criei');
  }

  connectedCallback() {
    console.log('[super]connectedCallback=tpm');
    // console.log(this.displayVal);
  }


  attributeChangedCallback(name, oldValue, newValue) {
    console.log('[super]attributeChangedCallback=tmp');

    if (this[name]) {
      this.lastAttrChanged = name;
      this.displayVal.innerHTML = newValue || oldValue;
      console.log(this.displayVal.innerHTML);
      console.log('[super]attributeChangedCallback=tmp2');
    }
  }
}

window.customElements.define('tag-name', MyComponent);


class XFoo extends HTMLElement {
  static get observedAttributes() {
    return ['foo-attr'];
  }

  constructor() {
    super();
    console.log('x-foo constructed');
  }

  connectedCallback() {
    console.log('x-foo connected');
  }

  attributeChangedCallback(attrName, value) {
    console.log(`x-foo attr change ${attrName}`);
  }
}

customElements.define('x-foo', XFoo);
