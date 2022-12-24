
## 判断类型
* `typeof` 判断数据类型
* `instanceof` 判断数据类型（可以判断具体的对象类型）

## 伪数组转成数组
#### 方法一
```
arr = Array.prototype.slice.call(argument)
```

## 阻止默认事件的方法
* 超链接
```js
Javascript: ;       
// 也可以写为 
Javascript:void(0);
```
* 按钮
```js
// 方法一
return false 
// 方法二
Event.preventDefault()
```

## 解决冒泡
```js
// 推荐使用
event.cancelBubblle = true
// 新方法（IE8不支持）
event.stopPropagation()     
```

