import { expect } from 'chai';

import {
  hasParameter,
  hasReturn,
  hasThis,
  functionToString,
  check,
} from '../../../../src/utils/helpers';

describe('Utils', () => {
  const _this = 'this';
  function myFunc(a) { return a; }
  function anotherFunc() { _this; }
  context('Check functions', () => {
    it('Should check if the function has parameter', () => {
      expect(hasParameter).to.be.a('function');
      expect(hasParameter(myFunc)).to.be.eql(true);
      expect(hasParameter(anotherFunc)).to.be.eql(false);
    });

    it('Should check if the function has return', () => {
      expect(hasReturn).to.be.a('function');
      expect(hasReturn(myFunc)).to.be.eql(true);
      expect(hasReturn(anotherFunc)).to.be.eql(false);
    });

    it('Should check if the function has _this', () => {
      expect(hasThis).to.be.a('function');
      expect(hasThis(myFunc)).to.be.eq(false);
      expect(hasThis(anotherFunc)).to.deep.include('_this');
    });
  });

  it('Should convert functions in String', () => {
    expect(functionToString).to.be.a('function');
    expect(functionToString(myFunc)).to.be.equal('function(a) {\n    return a;\n  }');
    expect(functionToString(myFunc)).to.be.a('String');
  });

  context('Should check the types of the properties', () => {
    it('Should be array', () => {
      const x = ['a'];
      const y = new Array(x.length);
      expect(check(x).isArray).to.be.equal(true);
      expect(check(y).isArray).to.be.equal(true);
    });

    it('Should be arrow function', () => {
      const x = () => { };
      const y = function () { };
      //    expect(check().isArrowFunction).to.be.equal(true);
      // expect(check(y).isArrowFunction).to.be.equal(false);
    });

    it('Should be boolean', () => {
      const x = true;
      const y = 0;
      expect(check(x).isBoolean).to.be.equal(true);
      expect(check(y).isBoolean).to.be.equal(false);
    });

    it('Should be a function', () => {
      const x = function () {};
      const y = 0;
      expect(check(x).isFunction).to.be.equal(true);
      expect(check(y).isFunction).to.be.equal(false);
    });


    it('Should be a number', () => {
      const x = function () {};
      const y = 0;
      expect(check(x).isNumber).to.be.equal(false);
      expect(check(y).isNumber).to.be.equal(true);
    });

    it('Should be a object', () => {
      function AB() {}
      const x = new AB();
      const y = { a: 1 };
      expect(check(x).isObject).to.be.equal(true);
      expect(check(y).isObject).to.be.equal(true);
    });

    it('Should be a string', () => {
      function AB() {}
      const x = new AB();
      const y = '{ a: 1 }';
      expect(check(x).isString).to.be.equal(false);
      expect(check(y).isString).to.be.equal(true);
    });

    it('Should be a string', () => {
      const x = 0;
      const y = Symbol('{ a: 1 }');
      expect(check(x).isSymbol).to.be.equal(false);
      expect(check(y).isSymbol).to.be.equal(true);
    });


    it('Should be undefined', () => {
      const x = null;
      const y = undefined;
      let z;
      expect(check(x).isUndefined).to.be.equal(false);
      expect(check(y).isUndefined).to.be.equal(true);
      expect(check(z).isUndefined).to.be.equal(true);
    });
  });
});
