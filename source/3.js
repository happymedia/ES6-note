/**
 * 字符串的扩展
 */

let x = 1;
let y = 2;
`${x} + ${y} = ${x + y}` //1+2=3

function fn() {
    return "Hello world";
}
`foo ${fn()} bar` //foo Hello world bar

`Hello ${'World'}` //Hello World

/**
 * 新增方法
 * String.fromCodePoint() 弥补了fromCharCode方法不足，
 * 可以识别大于oxFFFF的码点，在作用上，正好与下面的codePointAt()方法相反。
 * 注意，fromCodePoint方法定义在String对象上，而codePointAt方法定义在字符串的实例对象上
 * String.codePointAt()
 * String.raw()
 * String.normalize()
 */

/**
 * includes(),startsWith(), endsWith() 这三个方法都支持第二个参数，表示开始搜索的位置
 */
let s = 'Hello world';
s.startsWith('H') //true
s.endsWith('!') //false
s.includes('o') //true

s.startsWith('world', 6) // true
s.endsWith('Hello', 5) // true
s.includes('Hello', 6) // false

/**
 * repeat 方法返回一个新字符串，表示将原字符串重复n次
 * 参数如果是小数，会被取整
 * 如果repeat的参数是负数或者Infinity，会报错
 * 如果参数是 0 到-1 之间的小数，则等同于 0
 * 参数NaN等同于 0
 * 如果repeat的参数是字符串，则会先转换成数字。
 */
'x'.repeat(3) //xxx
'x'.repeat(0) //''
'x'.repeat(2.8) //xx
'x'.repeat(Infinit) //RangeError
'x'.repeat(-0.3) // ''
'x'.repeat(NaN) // ''
'x'.repeat('x') // ""
'x'.repeat('3') // "xxx"

/**
 * padStart, padEnd
 * 如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全。
 * 如果原字符串的长度，等于或大于最大长度，则字符串补全不生效，返回原字符串。
 * 如果用来补全的字符串与原字符串，两者的长度之和超过了最大长度，则会截去超出位数的补全字符串。
 * 如果省略第二个参数，默认使用空格补全长度。
 */
'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'

'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'

'xxx'.padStart(2, 'ab') // 'xxx'
'xxx'.padEnd(2, 'ab') // 'xxx'

'abc'.padStart(10, '0123456789') // '0123456abc'

'x'.padStart(4) // '   x'
'x'.padEnd(4) // 'x   '

/**
 * trimStart, trimEnd
 */
const s = '  abc  ';

s.trim() // "abc"
s.trimStart() // "abc  "
s.trimEnd() // "  abc"