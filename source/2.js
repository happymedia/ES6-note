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

/**
 * 对象的解构赋值
 */
