

/**
 * check if method has parameter
 * @param {Function} f
 * @returns {Boolean}
 */
export function hasParameter(f) {
  return !String(f)
    .replace(/[\s\r\f\t]+[ \s\t\r\f]?/, '')
    .includes('()');
}


/**
* Convert function to string function - anonymous
* @param {Function} f
* @returns {String} anonymous function
*/
export function functionToString(f) {
  return String(f)
    .replace(/\s[a-zA-z]+[\s(]+/, '(');
}

/**
 *  check if method has return
 * @param {Function} f
 */
export function hasReturn(f) {
  return String(f)
    .includes('return');
}


/**
 * check types
 * @param {*} property
 * @example
 * check(property).isFunction
 * @returns boolean
 */
export function check(property) {
  const propType = String(typeof (property))
    .toLowerCase();
  return {
    isArray: Array.isArray(property),
    isFunction: propType === 'function',
    isNumber: propType === 'number',
    isObject: propType === 'object',
    isString: propType === 'string',
    isSymbol: propType === 'symbol',
    isBoolean: propType === 'boolean',
    isUndefined: propType === 'undefined',
    isArrowFunction: String(property).includes('=>'),
  };
}


/**
 * To unsupport arrow function
 * @param {function} property
 */
export function hasThis(property) {
  const prop = String(property);
  const that = prop.match(/_this/);
  if (that === null) return false;
  return that;
}
