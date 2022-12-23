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