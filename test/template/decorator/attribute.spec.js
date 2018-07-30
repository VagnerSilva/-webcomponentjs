describe('Attribute instance', () => {
  let el;

  beforeEach(() => {
    document.body.innerHTML = '';
    el = document.createElement('wc-attribute');
  });

  it('[Attribute] Check element was created', () => {
    expect(el.innerHTML).to.be.empty;
    document.body.appendChild(el);
    expect(el.innerText).include('Eureka!');
  });

  it('Observes attribute changes', () => {
    expect(el.lastAttrChanged).not.to.be.ok;
    el.setAttribute('bar', 'pog');
    expect(el.lastAttrChanged).to.equal('bar');

    el.setAttribute('foo', 'banga');
    expect(el.lastAttrChanged).to.equal('foo');
    expect(el.getAttribute('foo')).to.equal('banga');
  });

  it('Does not observe changes to undeclared attributes', () => {
    expect(el.lastAttrChanged).not.to.be.ok;
    el.setAttribute('pog', 'bar');
    expect(el.lastAttrChanged).not.to.be.ok;
    expect(el.getAttribute('pog')).to.equal('bar');
  });

  it('does not observe changes to undeclared attributes', () => {
    expect(el.innerHTML).to.be.empty;
    document.body.appendChild(el);
    expect(el).to.be.ok;
    expect(el.hasAttribute('hidden')).not.to.be.ok;
    el.hiddden = true;
    expect(el.hasAttribute('hidden')).to.be.ok;
  });
});
