/**
 * 数组的解构赋值
 */

let [a,b,c] = [1,2,3]
console.log(a, typeof(a))
a = "asas"
console.log(a, typeof(a))

let [x, y = 'b'] = ['a', undefined]; 
console.log(x,y)

let [x1, y1 = 'b'] = ['a', 'aaa']; 
console.log(x1,y1)

let [head, ...tail] = [1,2,3,4];
console.log(head, tail) //1, [2, 3, 4]

let [x = 1, y = x] = [];     // x=1; y=1
let [x = 1, y = x] = [2];    // x=2; y=2
let [x = 1, y = x] = [1, 2]; // x=1; y=2
let [x = y, y = 1] = [];     // ReferenceError: y is not defined


/**
 * 对象的解构赋值
 * 对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；
 * 而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
 * 
 * 默认值生效的条件是，对象的属性值严格等于undefined
 */
let { bar, foo } = { foo: 'aaa', bar: 'bbb' };
foo // "aaa"
bar // "bbb"

let { baz } = { foo: 'aaa', bar: 'bbb' };
baz // undefined


var {x = 3} = {x: undefined};
x // 3

var {x = 3} = {x: null};
x // null

/**
 * 用途
 */

//1. 交换变量的值
let x = 1;
let y = 2;

[x, y] = [y, x];

//2. 返回一个数组
function exampleArr(){
    return [1,2,3]
}
let [a, b, c] = exampleArr();

function exampleObj(){
    return {foo:1, bar:2}
}
let {foo, bar} = exampleObj();

//3. 函数参数的定义
// 参数是一组有次序的值
function f([x, y, z]) { ... }
f([1, 2, 3]);

// 参数是一组无次序的值
function f({x, y, z}) { ... }
f({z: 3, y: 2, x: 1});

//4. 解构赋值对提取 JSON 对象中的数据，尤其有用。
let jsonData = {
    id: 42,
    status: "OK",
    data: [867, 5309]
};

let { id, status, data: number } = jsonData;

console.log(id, status, number);//42, "OK", [867, 5309]

//5. 函数参数的默认值

jQuery.ajax = function (url, {
    async = true,
    beforeSend = function () {},
    cache = true,
    complete = function () {},
    crossDomain = false,
    global = true,
    // ... more config
  } = {}) {
    // ... do stuff
  };

//6. 遍历 Map 结构

const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for(let [key, value] of map){
    console.log(key + ' is '+value);
}

for(let [key] of map){}

for(let [,value] of map){}

//7. 输入模块的指定方法
const {SourceMapConsumer, SourceNode} = require("source-map");