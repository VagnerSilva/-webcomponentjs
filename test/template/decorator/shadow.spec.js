// import { expect } from 'chai';

// describe('Shadow instance', () => {
//   let el;

//   beforeEach(() => {
//     el = document.querySelector('wc-shadow');
//   });

//   it('[Shadow] Check if element is not "Document"', () => {
//     expect(el.innerHTML).to.be.empty;
//     expect(el.innerHTML).does.not.include('Shadow');
//   });

//   it('Element should to be Shadow Dom', () => {
//     expect(el).to.have.property('shadowRoot');
//     expect(el.shadowRoot.innerHTML).has.include('Shadow');
//   });

//   it('Changed text', () => {
//     const div = el.shadowRoot.querySelector('div');
//     expect(el.shadowRoot.innerHTML).has.include('Shadow');
//     el.innerHTML = 'Eureka';
//     expect(el.shadowRoot.innerHTML).does.not.include('Eureka');
//     div.innerHTML = 'Eureka';
//     expect(el.shadowRoot.innerHTML).has.include('Eureka');
//   });
// });
