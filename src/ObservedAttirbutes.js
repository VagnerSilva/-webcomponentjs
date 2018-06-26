import { UpdateClass } from 'decorator-class-update';

/**
 * Observe attributes
 * @param {*} args 
 * @WebComponent
 * @Observe
 * @example
 * WebComponent({
 *  tagName: 'my-element',
 *  templateUrl: './index.html',
 *  styleUrl: './style.scss'
 * })
 * class MyElement extends HTMLElement {
 *  construcotr() {
 *      super()
 *  }
 *  Observer('value', 'min')
 *  attributeChangedCallback(name, oldValue, newValue) { //code }
 * }
 * 
 */
export function Observer(...args) {
    return function (target, key, descriptor) {

        if (key !== 'attributeChangedCallback') {
            throw '@Observer not found "attributeChangedCallback"';
        }

        UpdateClass.subscribe('attributes', target, () => args);

    }
}