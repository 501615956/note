# 模块化
## 模块化的基本概念
### 什么是模块化
 就是遵循固定的规则，把一个大文件拆分成独立并相互依赖的多个小模块
### 模块化的好处
①  提高了代码的复用性<br />②  提高了代码的可维护性<br />③  可以实现按需加载
## Node.js 中的模块化
### Node.js 中模块的分类
> `Node.js`中根据模块来源的不同，将模块分为了3大类，分别是：
> - 内置模块（内置模块是由`Node.js`官方提供的，例妆如`fs`、`path`、`http`等）
> - 自定以模块（用户创建的每个`js`文件，都是自定义模块）
> - 第三方模块（由第三方开发出来的模块，并非官方提供的内置模块，也不是用户创建的自定义模块，使用前需要先下载
> 
注意：使用`require()`方法加载其它模块时，会执行被加载模块中的代码。

### 向外共享模块作用域中的成员
1）`module` 对象
> 在每个` .js`自定义模块中都有一个`module`对象，它里面存储了和当前模块有关的信息。

```javascript
Module {
  id: '.',
  path: 'E:\\node\\learn-nodejs\\04_模块化',
  exports: {},
  filename: 'E:\\node\\learn-nodejs\\04_模块化\\01_module.js',
  loaded: false,
  children: [],
  paths: [
    'E:\\node\\learn-nodejs\\04_模块化\\node_modules',
    'E:\\node\\learn-nodejs\\node_modules',
    'E:\\node\\node_modules',
    'E:\\node_modules'
  ]
}
```
2）`module.exports`对象
> 在自定义模块中，可以使用`module.exports`对象，将模块内的成员共享出去，供外界使用。外界用`require()`方法导入自定义模块时，得到的就是`module.exports`所指向的对象。

```javascript
// 第一种使用方法
module.exports.a = 1
module.exports.b = 2

// 第二种使用方法
module.exports = {
  a: 1,
  b: 2
}
```
3）`exports` 对象
> 由于`module.exports`单词写起来比较复杂，为了简化向外共享成员的代码，`Node`提供了`exports`对象。默认情况下，`exports`和`module.exports`指向同一个对象。最终共享的结果，还是以`module.exports`指向的对象为准。

```javascript
// 第一种使用方法
exports.a = 1
exports.b = 2

// 第二种使用方法
exports = {
  a: 1,
  b: 2
}
```
### Node.js 中的模块化规范
> `Node.js`遵循了`CommonJS`模块化规范，`CommonJS`规定了模块的特性和各模块之间如何相互依赖
> `CommonJS`规定：
>     ① 每个模块内部，`module`变量代表当前模块。
>     ② `module`变量是一个对象，它的`exports`属性（即`module.exports`）是对外的接口.
>     ③ 加载某个模块，其实是加载该模块的`module.exports`属性。`require()`方法用于加载模块。 
