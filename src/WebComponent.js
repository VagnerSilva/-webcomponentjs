/**
 * {
 *  templateUrl: './index.html',
 *  tagName: 'my-component',
 *  extends: 'buttom'
 * }
 * @param {object} component 
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

        component.extends ?
            window.customElements.define(component.tagName, newConstructor, component.extends) :
            window.customElements.define(component.tagName, newConstructo);

        return newConstructor;

    }
}
