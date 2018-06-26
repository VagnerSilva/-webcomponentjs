import { UpdateClass } from 'decorator-class-update';
/**
 * Define custom element with web component vanilla
 * @param {Object} component
 * @WebComponent
 * @example
 * WebComponent({
 *  templateUrl: './index.html',
 *  styleUrl: './style.scss',
 *  tagName: 'my-component',
 * })
 * class MyComponent extends HTMLElement{
 *  constructor() {
 *      super();
 *  }
 * }
 * 
 * // extend element
 * @WebComponent
 * @example
 * WebComponent({
 *  templateUrl: './index.html',
 *  styleUrl: './style.scss',
 *  tagName: 'my-component',
 *  extends: 'input'
 * })
 * class MyComponent extends HTMLInputElement{
 *  constructor(){
 *      super()
 *  }
 * }
 */
export function WebComponent(component) {
    return function (target) {
        const newConstructor = class extends target {
            constructor() {
                super();
                this.attachShadow({ mode: 'open' });
                this.shadowRoot.innerHTML = component.templateUrl;
            }
        }

        // add observedAttributes
        const result = UpdateClass.watch('attributes', target.prototype);
        if (result.length !== 0) {
            Object.defineProperty(target, 'observedAttributes', {
                get: function get() {
                    return result;
                }
            });
        }


        // define element
        component.extends ?
            window.customElements.define(component.tagName, newConstructor, { 'extends': component.extends }) :
            window.customElements.define(component.tagName, newConstructor);

        return newConstructor;

    }
}
WebComponent()