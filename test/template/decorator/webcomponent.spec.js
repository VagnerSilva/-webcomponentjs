
// describe('WebComponent instance', () => {
//   let el;


//   before(() => {
//     el = document.querySelector('wc-component');
//   });


//   it('Check if property was loaded before element was created', () => {
//     expect(el.innerHTML).not.to.be.empty;
//     expect(el.start).to.be.equal('Eureka!');
//   });

//   it('Call connectedCallback when element is created', () => {
//     expect(el.connected).to.be.ok;
//     expect(el.innerHTML).to.have.include('Eureka!');
//   });

//   it('Call disconnectedCallback when removed from DOM', () => {
//     expect(el.connected).to.be.ok;
//     el.remove();
//     expect(el.connected).not.to.be.ok;
//   });
// });
