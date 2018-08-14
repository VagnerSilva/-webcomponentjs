// // customized built-in
// class MyDiv extends HTMLDivElement {
//   constructor() {
//     super();
//   }

//   connectedCallback() {
//     console.log('customized built-in here');
//     this.innerHTML = 'I am a beautiful customized built-in element webcomponent!';
//     this.addEventListener('click', () => {
//       console.log(`clicked ${this.tagName}`);
//     });
//   }
// }


// // // customized built-in
// // class MyDiv2 extends window.HTMLButtonElement {
// //   constructor() {
// //     super();
// //   }

// //   connectedCallback() {
// //     console.log('customized built-in here');
// //     this.innerHTML = 'I am a beautiful customized built-in element webcomponent!';
// //     this.addEventListener('click', () => {
// //       console.log(`clicked ${this.tagName}`);
// //     });
// //   }
// // }


// // autonomous custom element
// class MyCustomDiv extends HTMLElement {
//   constructor() {
//     super();
//   }

//   connectedCallback() {
//     console.log('autonomous custom element here');
//     this.innerHTML = '<div>I am a beautiful autonomous custom element webcomponent!</div>';
//     this.addEventListener('click', () => {
//       console.log(`clicked ${this.tagName}`);
//     });
//   }
// }
// // customElements.define('plastic-button', MyDiv2, { extends: 'button' });
// customElements.define('my-div', MyDiv, { extends: 'div' });
// window.customElements.define('my-custom-div', MyCustomDiv);
