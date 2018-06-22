/**
 * {
 *  templateUrl: './index.html',
 *  tagName: 'my-component'
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

        window.customElements.define(component.tagName, newConstructor);

        return newConstructor;

    }
}
