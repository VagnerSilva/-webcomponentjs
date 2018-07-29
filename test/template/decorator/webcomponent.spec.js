
describe('WebComponent instance', () => {
  let el;

  beforeEach(() => {
    document.body.innerHTML = '';
    el = document.createElement('wc-component');
  });

  describe('Custom Elements spec behavior', () => {
    it('Check element was created', () => {
      document.body.appendChild(el);
      expect(el.innerText).include('Eureka!');
    });
  });
});
