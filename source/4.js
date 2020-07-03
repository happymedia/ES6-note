/**
 * 函数
 * 函数参数默认值
 */
function log(x, y = 'World') {
    console.log(x, y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello

function foo({ x, y = 5 }) {
    console.log(x, y);
}
foo({}) // undefined 5
foo({ x: 1 }) // 1 5
foo({ x: 1, y: 2 }) // 1 2
foo() // TypeError: Cannot read property 'x' of undefined

//上面代码只使用了对象的解构赋值默认值， 没有使用函数参数的默认值。 
//只有当函数foo的参数是一个对象时， 变量x和y才会通过解构赋值生成。 
//如果函数foo调用时没提供参数， 变量x和y就不会生成， 从而报错。 
//通过提供函数参数的默认值， 就可以避免这种情况。

function foo({ x, y = 5 } = {}) {
    console.log(x, y);
}

foo() // undefined 5


var f = v => v;

// 等同于
var f = function(v) {
    return v;
};
//如果箭头函数不需要参数或需要多个参数， 就使用一个圆括号代表参数部分。

var f = () => 5;
// 等同于
var f = function() { return 5 };

var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function(num1, num2) {
    return num1 + num2;
};