
import {
  check, functionToString, hasReturn, hasParameter, hasThis,
} from './utils/helpers';

import { UpdateClass } from 'decorator-class-update';

/**
 * Default and custom properties
 * @param {[Object]} attribute
 * @WebComponent
 * @Attribute
 * @example
 * WebComponent({
 *  tagName='my-tag',
 *  templateUrl: './index.html',
 *  styleUrl: './style.scss'
 * })
 * class myComponent extends HTMLElement {
 *      constructor() {
 *          super();
 *      }
 *
 *      // default property
 *      Attribute()
 *      myProperty() { }
 *
 *      // boolean property
 *      Attribute(true) // out: get hidden() {return this.hasAttribute('hidden');}
 *      hidden(disable) {
 *          if(disable) {
 *              this.setAttribute('hidden', '')
 *          } else {
 *              this.removeAttribute('hidden');
 *          }
 *      }
 *
 *      // custom property
 *      Attribute({
 *          get: function () { return this.style.animationName }
 *      })
 *      animate() {
 *          // code
 *      }
 *
 * }
 */
export function Attribute(attribute = 'default') {
  return (target, key, descriptor) => {
    const original = descriptor.value;

    if (!attribute === 'default') {
      if (hasReturn(original)) throw new Error(`@Attribute - Remove 'return' in method ${key}`);
      if (!hasReturn(attribute.get)) throw new Error("@Attribute - Parameter without 'return' \n @example:  @Attribute({get: function() { return ''; }})");
      if (!check(attribute).isObject) throw new Error("@Attribute - Not found 'Object' argument \n @example: @Attribute({get: function() { return this; }})");
      if (hasThis(attribute.get)) throw new Error("@Attribute - Unsupport arrow function with 'this' \n @example: @Attribute({get: function () {return this }");
    }

    delete descriptor.value;
    delete descriptor.writable;


    check(attribute).isBoolean
      ? descriptor.get = function () { return this.hasAttribute(`${key}`); }
      : attribute === 'default'
        ? descriptor.get = function () { return this.getAttribute(`${key}`); }
        : descriptor.get = global.eval(`(${functionToString(attribute.get)})`);

    hasParameter(original)
      ? descriptor.set = global.eval(`(${functionToString(original)})`)
      : descriptor.set = function (newValue) { this.setAttribute(`${key}`, newValue); };

    return descriptor;
  };
}

/**
 * Observe is used to indicate which attributes will trigger the attributeChangedCallback function
 *
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

    if (!check(args[0]).isString) {
      throw '@Observer supports string parameter only';
    }

    UpdateClass.subscribe('attributes', target, () => args);
  };
}
