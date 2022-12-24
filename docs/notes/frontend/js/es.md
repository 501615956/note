## 变量
### let 声明变量
* 1.变量不能重复声明
* 2.块级作用域
* 3.不存在变量提升
* 4.不影响作用域链

### const 声明常量
* 1.一定要赋初始值
* 2.一般常量使用大写
* 3.常量的值不能修改
* 4.不存在变量提升
* 5.块级作用域
* 6.对数组和对元素的修改，不算做对常量的修改，不会报错

### 变量的解构赋值
> ES6允许按照一定模式从数组和对象中提取值，对变量进行赋值，这被称为解构赋值

```javascript
// 1.数组解构
const f4 = ['aaa', 'bbb', 'ccc']
let [a, b, c] = f4

// 2.对象解析
const zhao = {
    name: 'zhao',
    age: '50',
    xiaopin: function(){
        console.log('aaaaaaaaaa');
    }
}
let {name, age, xiaopin} = zhao;

// 方法
let {xiaopin} = zhao;
xiaopin();
```
## 字符串
### 字符串方法
1）includes()
> 判断是否找到参数字符串, 返回布尔值

```javascript
let str = "1.jpg"
str.includes("jpg")     //true
```
2）startsWith()
> 判断参数亨符串是否在原字符串的头部，返回布尔值。

3）endsWith()
> 判断参数字符串是否在原字符串的尾部，返回布尔值。

4）padstart()
> 表示用参数字符串从头部（左侧）补全原字符串，返回新的字符串。

```javascript
console.log("h".padStart(5,"o"));  // "ooooh"
// 不传第二个参数默认为空格
console.log("h".padStart(5));      // "    h"
```
5）padEnd()
> 返回新的字符串，表示用参数字符串从尾部(右侧）补全原字符串。

```javascript
console.log("h".padEnd(5,"o"));    // "hoooo"
```
### 模板字符串
> 引用字符串的方式   [\` \`]

```javascript
// 1.声明 
let str = `我是模板字符串`

// 2.内容中可以直接出现换行符
// 3.变量拼接
let name = '张三';
let age = '20'
console.log(`${name}今年${age}岁了`)
```
### i18n国际化处理
> 转化多元化语言

## 数组
### 扩展运算符
> [ ... ]   扩展运算符能将【数组】转换为逗号分割的【参数序列】，还可以操作对象

```javascript
const str = ['a','b','c'];   // =====>  'a','b','c'
function splitStr(){
    console.log(arguments);  //结果为  'a','b','c'
}
splitStr(...srt)
```
### `flat` 嵌套数组转一维数组
```javascript
console.log([1 ,[2, 3]].flat()); // [1, 2, 3]
// 指定转换的嵌套层数
console.log([1, [2, [3, [4, 5]]]].flat(2)); // [1, 2, 3, [4, 5]]
// 不管嵌套多少层
console.log([1, [2, [3, [4, 5]]]].flat(Infinity)); // [1, 2, 3, 4, 5]
// 自动跳过空位
console.log([1, [2, , 3]].flat());  // [1, 2, 3]
```
### `includes()` 查看数组是否包含指定值
```javascript
// 参数1：包含的指定值
[1, 2, 3].includes(1);  // true
// 参数2：可选，搜索的起始索引，默认为0
[1, 2, 3].includes(1, 2);  // false
```
::: warning 注意
includes()方法实用的全等（===）的方式比较的
:::
## 对象 
### 简化对象写法
> ES6允许在大括内直接写入变量和函数，作为对象的属性和方法。

```javascript
let name = "张三";
let change = function(){
    console.log("aaaaaaaa")
}
const school = {
    name,
    change,
    //在ES6中函数的声明可以这样写
    //原始写法
    //improve:funcrion(){
   //     console.log("bbbbbb")
   //}
   //ES6写法
   improve(){
        console.log("bbbbbb")
   }
}
```
### 合并对象
```javascript
Object.assign(obj1, obj2)  //合并对象, 如果有相同属性，obj2会覆盖obj1中的属性值
```
### 判断两个值否相等
```javascript
Object.is(120,120)   //true
Object.is(NaN,NaN)   //true
```
### 设置和读取原型对象
```javascript
Object.setPrototypeOf()  //设置原型对象
Object.getPrototypeOf()  //读取原型对象
```
## 函数
### 箭头函数
> 1.this 是静态的，this始终指向函数声明时所在作用域下的this的值
> 
> 2.不能作为构造实例化对象
> 
> 3.不能使用arguments变量
> 
> 4.箭头函数简写
> 
>     1）省略小括号，当参数有且只有一个的时候
> 
>     2）省略大括号，当代码题只有一条语句的时候，此时return必须省略
> 
> 注意:
> 
>     1）箭头函数适合用于与this无关的回调 。 定时器，数组方法回调
> 
>     2）箭头函数不适合与this有关的回调 。 事件回调，对象的方法等
> 
> **this指向**
> 
>     所有在全局的函数，它里面的this 的指向，指向的都是window
> 
>     箭头函数里面的this指向，向上寻找非箭头函数，非箭头函数的this就是这个this的指向。

```javascript
let fn = ()=>{}
```
### 函数参数默认值
> ES6允许给函数参数设置初始值 

```javascript
// 1.形参初始值，具有默认值得参数，一般放在后面
function add(b,b,c=10){
    return a+b+c;
}
//不传就使用默认值
let res = add(1,2)     //结果   13
//传了就使用传的值
let res = add(1,2,3)     //结果   6

// 2.与解构赋值结合
function connect({name,age,id=1000}){
    console.log(name, age, id);
}
connect({
    name:"Zhangsan",
    age:20,
    id:1001   //传了就使用传的值，不传就使用默认值
})
```
### `rest` 参数
> ES6中引用rest参数，用于获取函数的实参，用来代替argument
> 注意：
>     当有多个参数时，rest参数必须放到最后

```javascript
function date(...args){
    console.log(args);  // [1, 2, 3]  结果为数组，可以使用数组的方法
}
date(1,2,3)

//扩展运算符的应用
// 1.数组的合并
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr = [...arr1,...arr2];
console.log(arr);    //结果为 [1,2,3,4,5,6]

// 2.数组克隆
const arr1 = [1,2,3];
const arr = [...arr1]

// 3.将伪数组转换成真数组
const arr = [...伪数组]
```
## `Symbol` 基本使用
> ES6引入了一个新的原始数据类型，表示独一无二的值。是一种类似于字符串的数据类型。
> 
> Symbol的特点
> 
>     1）Symbol的值是唯一的
> 
>     2）Symbol值不能与其他数据做运算
> 
>     3）Symbol定义得对象属性不能使用for...in遍历循环，但是可以使用Reflect.ownkeys 来获取对象的所有键名

```javascript
//创建Symbol
//1.
let s = Symbol();
//2.
let s1 = Symbol("a");
let s2 = Symbol("a");
console.log(s1 === s2)     //结果  false
//3.Symbol.for创建（不常用）
let s3 = Symbol.for("b");
let s4 = Symbol.for("b");
console.log(s3 === s4)     //结果  true

//Symbol的使用   使用Symbol向对象中添加方法
//方法一
let game = {
    up:function(){},
    down:function(){}
}
//先声明一个对象
let methods = {
    up:Symbol(),
    down:Symbol()
}
game[methods.up] = function(){}    //可以不影响原有game中的up
//方法二
let youxi = {
    name:"wangzhe",
    [Symbol("方法名")]:function(){}
}

//可以通过该方法拿到Symbol的值
getOwnPropertySymbols
```
## 迭代器和生成器
### `iterator` 迭代器
> iterator遍历器
> 
> 可以遍历的对象 Array、string、Map、set、Dom元素(正在进行中)

```javascript
let arr = [1,2,3]
for(let i of arr){}    //i为每个元素

//原理
//创建一个iterator对象
let iterator = arr[Symbol.iterator]();
//调用对象中的next方法
iterator.next()   //不断调用，不断的指向每一个元素
```
### `generator` 生成器函数
> 生成器就是一个特殊的函数，解决异步编程

```javascript
//声明
function * fn(){
    yield 'aaa';     //yield 可以看做是函数代码的分隔符，可以用next方法调用
    yield 'bbb';
    yield 'ccc'
}

//执行  不能直接执行，需要使用next方法执行
//next方法也可以传参数，作为上一个yield的结果
let iterator = fn();   
iterator.next();
```
## `promise` 对象
### 认识 `promise`
> 1）promise的异步编程的解决方案
> 
> 2）一般在有异步操作时，会使用promise

### 使用
> 1）promise中用then和catch方法来处理成功和错误

```javascript
//创建promise对象
const p = new Promise((resolve, reject)=>{})    //resolve,reject本身又是回调函数
p.then().then().catch()
//then  里面也有两个回调函数，处理成功和错误的结果，错误的回调可以省略

Promise.resolve()   //将数据封装成Promise对象，并调用resolve() 
Promise.reject()    //将数据封装成Promise对象，并调用reject() 
throw   //抛出异常   
```
### `Promise.all()`
> 假设我们希望并行执行多个 promise，并等待所有 promise 都返回结果后执行一些操作。所有的位resolve就只做行then

```javascript
// 多个Promise对象都返回结果时，才能执行后续操作
let promise = Promise.all([promises1,promises2...]);
```
### `Promise.allSettled()`
> 如果任意一个结果是reject的，则 Promise.all 整个的结果将会是 reject。当我们需要所有结果都成功时，它对这种“全有或全无”的情况很有用：

```javascript
Promise.allSettled([
   Promise1,
   Promise2,
   Promise3
]).then(render); // render 方法需要所有的Promise的结果都为resolve才能执行
```
::: warning 注意
Promise.allSettled 等待所有的 promise 都被 settle(解决)，无论结果如何。结果数组具有：<br />{status:"fulfilled", value:result} 对于成功的响应，<br />{status:"rejected", reason:error} 对于 error的响应。
:::
### `Promise.race()`
> 当传给它的首个 promise 被解决时，则 Promise.race() 开始运行，并且只运行一次附加的回调（传入第一个被解决的 promise 的结果）。Promise.race()会返回传入中第一个被解决的结果。

```javascript
let first = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, '第一个')
})
 let second = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, '第二个')
})

Promise.race([first, second]).then(result => {
  console.log(result) // 第二个
})
```
## `set` 和 `map` 集合
### `Set` 集合
> 它类似于数组，但是成员的值都是唯一的，实现了iterator接口，可以使用扩展运算符和for...of
> 
> 集合的属性和方法：
> 
> - 1）size    返回集合的元素个数
> 
> - 2）add     增加一个新的元素，返回当前集合
> 
> - 3）delete    删除元素，返回boolean值
> 
> - 4）has     检测集合中是否包含某个元素，返回boolean值
> 
> - 5)   clear   清空

```javascript
//声明set  set是这样存储值的{1, "2", 3}
let s = new Set();
let s2 = new Set(['a','b','c','d']);    //可以吧数组转化为set集合
//添加元素
s2.add('e');
//删除元素
s2.delete('a');
//检测
s2.has('a');
//清空
s2.clear();

//set 应用
let arr = [1,2,3,4,5,4,3,2,1];
let arr2 = [4,5,6,5,6]
//1 数组去重
let res = [...new Set(arr)];
console.log(res);
//2 交集
let res = [...new Set(arr)].filter(item =>{
    return [...new Set(arr2)].has(item))
})
//3 并集
let res = [...new Set([...arr,...arr2])];
//4 差集
let res = [...new Set(arr)].filter(item =>{
    let s2 = new Set(arr2);
    if(!s2.has(item)){
        return true;
    }else{
        return false;
    }
})
```
### `Map` 集合
> ES6提供了Map数据结构，他类似对象，也是键值对的集合。但是"键"的范围不限于字符串，各种类型的值（包括对象）都可以当做键。Mat也实现了iterator接口。
> 
> Map的属性和方法:
> 
> - 1）size    返回Map的元素个数
> 
> - 2)  set     增加一个新元素，返回当前Map
> 
> - 3）get     返回键名对象的键值
> 
> - 3）delete    删除元素
> 
> - 4)   clear      清空

```javascript
//map可以用for of 迭代
//声明
let m = new Map();

m.set("name","张三")    //添加
m.size    //查个数
m.delete("name")   //删除
m.get("name")    //获取
```
## `Class` 类
### 类的基本使用
> ES6提供了更接近传统语言的写法，引用了class类，作为对象的模板。

```javascript
class Phone{
    //构造方法   名字不能修改
    constructor(brand, price){
        this.brand = brand;
        this.price = price;
    }
    //方法必须使用该方法，不能使用ES5的对象完整形式
    call(){
        console.log("我可以打电话")
    }
}
let p1 = new Phone("huawei",5999)
```
### 类的静态成员
> 属于类，但不属于实例化对象

```javascript
class Phone {
    //static  声明静态成员
    static name = "手机";
    static change(){
        console.log('aaa')
    }
}
```
### `extends` 类的继承
> 不能继承父类的静态方法  
> 
> - super()   继承父类的属性

```javascript
class SmartPhone extends Phone{
    //构造器
    constructor(brand, price, color, size){
        super(brand,price);   //继承父类的属性
        this.color = color;
        this.size = size;
    }
    photo(){
        console.log("拍照")
    }
}
let s1 = new SmartPhone ("1+",3999)
```
### 重写
> 在子类中声明与父类同名的方法就叫重写

### `get` 和 `set`
```javascript
class Phone {
  get price(){
    console.log("价格属性被读取了");
    return 'aaa';
  }
  set price(newVal){
    console.log("价格属性被修改了")
  }
}
```
### `decorator` 修饰器
> 类修饰

```javascript
function aaaa(){}
@aaaa
```
## 数值扩展
### 最大值和最小精度
```javascript
Number.EPSILON     // 表示最小的精度
Number.MAX_VALUE   // 表示最大值
```
### 进制的表示
```javascript
let b = 0b1010     //二进制   以0b开头
let o = 0o777     //八进制  以0o开头
let x = 0xff      //十六进制   以0x开头
```
## 模块化
```javascript
//文件名为m1.js
let a = 20;
function b(){
    console.log("womenhenhao")
}
```
### 暴露方法方法
```javascript
//在js文件中使用export 关键字来暴露
//方法一   分别暴露
export let a = 20;
export function b(){}

//方法二   统一暴露
export {a,b}

//方法三  默认暴露   一个文件只能存在一个 export default
export default {
    a : 20;
    b : function(){}
}
```
### 模块引用
> 在html文件中引用，必须有type="module"属性
> <script type="module"></script>

```javascript
//引入m1.js 模块内容
//1  通用的导入方式
import * as m1 from "./js/m1.js"

//2  解构赋值形式
import {a,b} from "./js/m1.js"
//如果重名还可以使用as 取别名
import {a as a1,b} from "./js/m1.js"
import {default as m1} from "./js/m1.js"  //对应默认暴露

//3  简便形式  针对默认暴露
import m3 from "./js/m1.js"
```
## `Proxy` (代理)与 `Reflect`
> proxy直接监听整个对象

```javascript
let obj = {
    name: "张三"
}
let nProxy = new Proxy(obj, {
    //taget 指的是obj
    get(taget, key) {

    },
    //receiver  指的就是创建的实例nProxy
    set(taget, key, val, receiver) {

    }
})


```
> 拦截函数执行

```javascript
apply(target, ctx, args)  //target 表示目标对象，ctx 表示目标对象上下文，args 表示目标对象的参数数组。
//用于拦截 HasProperty 操作，即在判断 target 对象是否存在 propKey 属性时，会被这个方法拦截。
has(target, propKey)
```
**Reflect**<br />Reflect    //函数的运行前缀


## `Fetch` 网络请求
```javascript
fetch('http://example.com/movies.json')
  .then(function(data) {
    return data.json();
  })
  .then(function(data) {
    console.log(data);
  });

```
## `js` 中 `??` 和 `?.` 的使用  
参考链接：[https://juejin.cn/post/7072274726940311588](https://juejin.cn/post/7072274726940311588)
### `??` 使用
> 用`??`代替`||`，用于判断运算符左侧的值为`null`或`undefined`时，才返回右侧的值
> 
> `??`运算符是 ES2020 引入，也被称为`null`判断运算符( Nullish coalescing operator)
> 
> 它的行为类似`||`，但是更严`||`运算符是左边是空字符串或false或0等false值，都会返回后侧的值。而??必须运算符左侧的值为`null`或`undefined`时，才会返回右侧的值。因此`0||1`的结果为`1`，`0??1`的结果为`0`

### `?.` 使用
> 使用`?.`简化`&&`和三元运算符
> 
> `?.`也是ES2020 引入，有人称为链判断运算符（optional chaining operator）
> 
> `?.`直接在链式调用的时候判断，判断左侧的对象是否为`null`或`undefined`，如果是的，就不再往下运算，返回`undefined`，如果不是，则返回右侧的值



