describe('Injector instance', () => {
  let el;

  beforeEach(() => {
    el = document.querySelector('wc-injection');
  });

  it('[Injector] Check if element exist', () => {
    expect(el.innerHTML).not.to.be.empty;
    expect(el.innerHTML).include('Eureka!');
  });

  it('Change text by dependency injection', () => {
    const text = el.injection.changeText('Eureka!!!');
    el.innerText = text;
    expect(el.innerText).include('Eureka!!!');
  });
});
