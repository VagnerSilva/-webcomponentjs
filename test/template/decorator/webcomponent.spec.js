
describe('WebComponent instance', () => {
  let el;


  beforeEach(() => {
    document.body.innerHTML = '';
    el = document.createElement('wc-component');
  });


  it('Check if property was loaded before element was created', () => {
    expect(el.start).to.be.equal('Eureka!');
    expect(el.innerHTML).to.be.empty;
    document.body.appendChild(el);
    expect(el.start).to.be.equal('Eureka!');
  });

  it('Check element was created', () => {
    expect(el.connected).not.to.be.ok;
    expect(el.innerHTML).to.be.empty;
    document.body.appendChild(el);
    expect(el.connected).to.be.ok;
    expect(el.innerText).include('Eureka!');
  });

  it('Calls disconnectedCallback when removed from DOM', () => {
    expect(el.connected).not.to.be.ok;
    document.body.appendChild(el);
    expect(el.connected).to.be.ok;
    document.body.innerHTML = '';
    expect(el.connected).not.to.be.ok;
  });
});
