import { UpdateClass } from 'decorator-class-update';
import { IoC } from 'di-decorator-js';
import { check } from './utils/helpers/index';


const _shadowCreated = Symbol('_shadowCreated');
let option;
let template;
let tag;
let providers;


function handleError() {
  return {
    tag: new Error("@WebComponent need a tag name specified \n @example tagName: 'my-element'"),
    tagString: new Error("@WebComponent tag name must be of type String \n @example tagName: 'my-element'"),
    tagExist: new Error('@WebComponent tag name already exists'),
  };
}


/**
 *
 * @param {Object} target
 * @param {(String|Symbol)} name
 * @param {Function} action
 */
const _defineProperty = (target, name, action) => {
  (
    Object.defineProperty(target, name, {
      value: action,
      configurable: false,
      enumerable: false,
      writable: false,
    })
  );
};

function viewShadow() {
  if (!this.shadowRoot) this.attachShadow({ mode: option.mode });
  this.shadowRoot.appendChild(template.content.cloneNode(true));
}


/**
 * @typedef {Object} dependencies
 * @typedef {Object} component
 * @property {string} tagName - 'my-element'
 * @property {string} templateUrl - './index.html'
 * @property {string} styleUrl - './style.scss'
 * @property {[string]} extends - 'input'
 * @property {[string]} mode - 'open || closed' - Enabled if shadow true
 * @property {[boolean]} shadow - 'actived shadow dom || true or false
 * @property {dependencies} providers - dependencies
 */

/**
 * Define custom element with web component vanilla
 * @param {...component} component
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
 *  shadow: true,
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
    option = component;
    tag = option.tagName;
    ({ providers } = option);
    template = document.createElement('template');
    template.innerHTML = option.templateUrl;


    if (!option.mode) option.mode = 'open';
    if (!tag || !String(tag).includes('-')) throw handleError().tag;
    if (!check(tag).isString) throw handleError().tagString;
    if (customElements.get(tag)) throw handleError().tagExist;
    if (!providers) providers = [];


    // add observedAttributes
    const result = UpdateClass.watch('attributes', target.prototype);
    if (result !== undefined) {
      Object.defineProperty(target, 'observedAttributes', {
        get: function get() {
          return result;
        },
      });
    }

    const newConstructor = class extends target {
      constructor(...args) {
        // dependency injection
        const self = super(...args.concat(providers
          .slice(args.length)
          .map(instance => IoC.resolve(instance))));

        return self;
      }

      connectedCallback() {
        // create element
        if (option.shadow) {
          this[_shadowCreated]();
        } else {
          this.appendChild(template.content.cloneNode(true));
        }

        super.connectedCallback
          && super.connectedCallback();
      }

      disconnectedCallback() {
        super.disconnectedCallback
          && super.disconnectedCallback();
      }

      attributeChangedCallback(name, oldValue, newValue) {
        // call after connectedCallback
        super.attributeChangedCallback && setTimeout(() => {
          super.attributeChangedCallback(name, oldValue, newValue);
        }, 0);
      }


      adoptedCallback() {
        super.adoptedCallback
          && super.adoptedCallback();
      }
    };


    // created shadow dom
    _defineProperty(newConstructor.prototype, _shadowCreated, viewShadow);


    // //  define element
    return component.extends
      ? window.customElements.define(tag, newConstructor, { extends: component.extends })
      : window.customElements.define(tag, newConstructor);
  };
}
