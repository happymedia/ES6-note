/**
 * let 
 * 不存在变量提升
 * 不允许重复声明
 * 块级作用域
 */
console.log(foo); //undefined
var foo = 2;

console.log(bar); //ReferenceError
let bar = 2;

/**
 * const
 * const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值
 * 
 * const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。
 * 对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。
 * 但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，
 * const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，
 * 就完全不能控制了。因此，将一个对象声明为常量必须非常小心。
 */

const PI = "3.14"
PI = "3.1415926"

const fooo = {}
// 为 foo 添加一个属性，可以成功
fooo.prop = 123;
fooo.prop // 123
// 将 foo 指向另一个对象，就会报错
fooo = {}; // TypeError: "foo" is read-only

