describe('Attribute instance', () => {
  let el;

  beforeEach(() => {
    el = document.querySelector('wc-attribute');
  });

  it('[Attribute] Check element was created', () => {
    const inside = el.querySelector('[text]');
    expect(el.innerHTML).to.be.ok;
    expect(el.innerHTML).include('Eureka!');
    expect(inside.getAttribute('text')).to.be.equal('Eu');
  });

  it('Observes attribute changes', () => {
    expect(el.lastAttrChanged).not.to.be.ok;
    el.setAttribute('bar', 'pog');
    expect(el.lastAttrChanged).to.equal('bar');
    expect(el.getAttribute('bar')).to.equal('pog');
    expect(el.innerHTML).include('pog');
  });

  it('Does not observe changes to undeclared attributes', () => {
    el.setAttribute('pog', 'bar');
    expect(el.getAttribute('pog')).to.equal('bar');
    expect(el.innerText).not.to.be.equal('bar');
  });

  it('Hidden attribute', () => {
    expect(el.innerHTML).to.be.ok;
    el.hiddden = true;
    expect(el.hasAttribute('hidden')).to.be.ok;
    el.hiddden = false;
    expect(el.hasAttribute('hidden')).not.to.be.ok;
  });

  it('Check beforeAttributeChanged and afterAttributeChanged', () => {
    expect(el.before).to.be.ok;
    expect(el.after).to.be.ok;
  });
});
