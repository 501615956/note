<!--
 * @Author: cwg
 * @Date: 2022-12-22 21:01:00
 * @LastEditors: cwg
 * @LastEditTime: 2022-12-22 21:05:05
 * @Description: 数组
-->

## 概念

### 什么是高阶函数
> 函数的参数是函数，或者返回值是函数，满足其中一个就是高阶函数 

### 什么是函数柯里化
> 是把接收多个参数的函数变换成接收一个单一参数的函数

```js
// 举个例子，add函数接收3个参数
function add(a,b,c) {
    return a + b + c
}

// 把add函数变成接收一个单一参数的函数
function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}
```

## 数组属性
* `constructor` 返回创建数组对象的原型函数
* `length` 设置或返回数组元素的个数
* `prototype` 允许你向数组对象添加属性或方法


## 数组方法
### shift()
* 删除并返回数组的第一个元素
* 改变原数组

### pop()
* 删除数组的最后一个元素并返回删除的元素
* 改变原数组

### push()
* 向数组的末尾添加一个或更多元素，并返回新的长度
* 改变原数组

### unshift()
* 向数组的开头添加一个或更多元素，并返回新的长度
* 改变原数组
  
### slice(start,end)
* 选取数组的一部分，并返回一个新数组。
* start: 开始位置的索引
* end: 结束位置的索引
* (左必右开)，无参为复制原数组

### sort()
* 对数组的元素进行排序。（按照asc码来排序的）
```js
//Sort( ) 是按照asc码来排序的，若想正常按数值排序
//从小到大
function demo(){                      
   retion a-b;
}
arr.sort (demo);

//从大到小
function demo(){
    retion b-a;
}
arr.sort(demo)
```

### join(str)
* 把数组分割为字符串
* str:  分隔符，默认为','
```js
let a = [10, 11, 12, 13]
console.log(a.join()) // 10,11,12,13
console.log(a.join('-')) // 10-11-12-13
```

### concat()
* 连接两个或更多的数组，并返回结果

### splice()
* 从数组中添加或删除元素
1. **splice(index, count)**
  * 从数组中删除元素
  * index：开始的位置
  * count：删除的数量
2. **splice(index, count, newItem1, newItem2...)**
  * 在删除的位置添加新的元素，可以是多个

### reverse()
* 反转数组的元素顺序

### toString()
* 把数组转换为字符串，并返回结果

### indexOf()
* 搜索数组中的元素，并返回它所在的位置

### isArray()
* 判断对象是否为数组


