# 内置模块
## fs模块
> 用来操作文件的模块

### fs.readFile()
> 可以读取指定文件中的内容， 语法格式如下：

::: tip fs.readFile(path[, options], callback)

- path：必选参数，字符串，表示文件的路径。

- options：可选参数，表示什么编码格式来读取文件。

- callback：必选参数，文件读取完后，通过回调函数拿到读取的结果。
:::

```javascript
@examp
fs.readFile('./1.txt', 'utf-8', (err, data) => {
  // 如果读取成功，则 err 的值为 null，data 为文件的内容
  // 如果读取失败，则 err 的值为错误对象， data 的值为 undefined
  if (err) {
    console.log('文件读取失败', err);
    return
  }
  console.log('文件读取成功', data);
})

```
### fs.writeFile()
> 可以读取指定文件中的内容
> 注意：
>    1. fs.writeFile()方法只能用来创建文件，不能用来创建路径。
>    2. 重复调用fs.writeFile()写入同一个文件，新写入的内容会覆盖之前的旧内容。
> 语法格式如下：

::: tip fs.writeFile(path, data[, options], callback)
  - path：必选参数，需要指定一个文件路径的字符串，表示文件的存放路径。
  - data：必选参数，表示要写入的内容。
  - options：可选参数，表示什么编码格式来写入文件，默认值是utf-8。
  - callback：必选参数，文件写入完成后的回调函数。
:::
```javascript
fs.writeFile('./1.txt', '33333333', (e) => {
  // 如果文件写入成功，则 err 的值为 null
  // 如果文件写入失败，则 err 的值为一个错误对象
  if (err) {
    console.log('文件写入失败', e);
    return
  }
  console.log('文件写入成功')
})
```

## path模块
### path.join()
> 可以把多个路径片段拼接为完整的路径字符串
> 注意：
>   1. `../`会抵消前面的路径
>   2. 凡是使用路径拼接的时候都要使用`path.join()`方法
> 语法格式如下：

::: tip path.join([...paths])
  - ...paths _string_ 路径片段序列
  - @return _string_ 返回拼接好的路径 
:::
```javascript
let pathStr = path.join(__dirname, '/a/b', 'c')
```
### path.basename()
> 可以获取路径中的最后一部分，经常通过这个方法获取路径中的文件名，语法格式如下：

::: tip path.basename(path[, ext])

- path _string_ 必选，表示一个路径的字符串
- ext _string_ 可选，表示需要移除文件的扩展名
- @return _string_ 返回路径中的最后一部分
:::
```javascript
pathStr = '/a/b/c/123.html

let filename = path.basename(pathStr)
console.log(filename) // 123.html

let filename1 = path.basename(pathStr, '.html')
console.log(filename1) // 123
```
### path.extname()
> 可以获取路径中扩展名部分，语法格式如下：

::: tip path.basename(path)

- path _string_ 必选，表示一个路径的字符串
- @return _string_ 返回路径中得到的扩展名
:::
```javascript
const pathStr = '/a/b/c/index.html'
let name = path.extname(pathStr)
console.log(name) // .html
```

## http模块
### 创建最基本的 web 服务器
> 创建步骤
> * ①  导入http模块
> * ②  创建 web 服务器实例
> * ③  为服务器实例绑定 request 事件，监听客户端的请求
> * ⑤  启动服务器

```javascript
// 1.引入http模块
const http = require('http')
// 2.创建服务器实例
const serve = http.createServer()
// 3.为服务器绑定request事件
serve.on('request', (req, res) => {
  console.log('1111111');
})
// 4.启动服务器
serve.listen(8080, () => {
  console.log('serve reunning at http://127.0.0.1:8080');
})
```

### `res`对象和`req`对象，防止中文乱码的问题
```javascript
const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
  // req 是请求对象，包含了客户端相关的数据和参数
  console.log('req', req.url, req.method);
  // res 是响应对象
  // 解决中文显示乱码的问题
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.end('请求成功')
})
// 4.启动服务器
server.listen(80, () => {
  console.log('serve reunning at http://127.0.0.1:80');
})
```
### 根据不同的url返回不同的内容
```javascript
server.on('request', (req, res) => {
  let { url } = req
  let data = '404'
  if (url === '/' || url === '/home') {
    data = '请求了首页的内容'
  } else if (url === '/about') {
    data = '请求了关于页面的内容'
  }
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.end(data)
})
```