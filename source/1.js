/**
 * Object
 * Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
 * Object.create() 使用指定的原型对象和属性创建一个新对象。
 * Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
 */

let obj = { foo: 123 , test: 456};
console.log(Object.getOwnPropertyDescriptor(obj, 'test'))
console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'toString'))


//Object.defineProperty() 
//Object.defineProperty(obj, prop, descriptor)
const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1);
// expected output: 42

const foo = Object.freeze({});

// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
foo.prop = 123;