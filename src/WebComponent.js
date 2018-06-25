import { UpdateClass } from 'decorator-class-update';
/**
 * 
 * @param {Object} component
 * @example
 * @WebComponent({
 *  templateUrl: './index.html',
 *  styleUrl: './style.scss',
 *  tagName: 'my-component',
 * })
 * class MyComponent extends HTMLElement{}
 * 
 * // extend element
 *  * @WebComponent({
 *  templateUrl: './index.html',
 *  styleUrl: './style.scss',
 *  tagName: 'my-component',
 *  extends: 'input'
 * })
 * class MyComponent extends HTMLInputElement{}
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
            window.customElements.define(component.tagName, newConstructo);

        return newConstructor;

    }
}
