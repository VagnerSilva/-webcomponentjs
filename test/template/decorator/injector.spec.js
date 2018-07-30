describe('Injector instance', () => {
  let el;

  beforeEach(() => {
    document.body.innerHTML = '';
    el = document.createElement('wc-injection');
  });

  it('[Injector] Check element was created', () => {
    expect(el.innerHTML).to.be.empty;
    document.body.appendChild(el);
    expect(el.innerText).include('Eureka!');
  });

  it('Change text by dependency injection', () => {
    expect(el.innerHTML).to.be.empty;
    document.body.appendChild(el);
    const text = el.injection.changeText('Eureka!!!');
    el.innerText = text;
    expect(el.innerText).include('Eureka!!!');
  });
});
