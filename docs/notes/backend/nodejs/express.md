
# `Express`
## 初识Express
> 官方给出的概念：`Express`是基于`Node.js`平台，快速、开放、极简的`Web`开发框架。
> 
> 通俗的理解：`Express`的作用和`Node.js`内置的htp模块类似，是专门用来创健`Web`服务器的。
> 
> `Express`的本质：就是一个`npm`上的第三方包，提供了快速创建`Web`服务器的便捷方法
> 
> `Express`的中文官网：[http://www.expressjs.com.cn/](http://www.expressjs.com.cn/)

### `Express` 能作什么
> 对于前端程序员来说，最常见的两种服务器，分别是：
> - `Web`网站服务器：专门对外提供`Web`网页资源的服务器。
> - `API`接口服务器：专门对外提供`API`接口的服务器.。
> 
使用`Express`,我们可以方便、快速的创建`Web`网站的服务器或`API`接口的服务器。

## `Express` 的基本使用
### 安装
```shell
npm install express --save
```
### 创建最基本的服务器
```javascript
// 导入
const express = require('express')
// 创建 web 服务器
const app = express()
// 启动 web 服务器
app.listen(80, () => {
  console.log('express server running at http://127.0.0.1');
})
```
### 监听GET请求
> 通过`app.get()`方法，可以监听客户端的`GET`请求，具体的语法格式如下：
> `app.get(url, collback)`
> 1. `url`：客户端请球的UL地址
> 2. `collback`：请求对应的处理函数有两个参数
> 
         ·  `req` 请求对像（包含了与请球相关的属性与方法）
>          ·  `res` 响应对像（包含了与响应相关的属性与方法）

```javascript
app.get('请求URL', function (req, res) { /*处理函数*/ })
```
### 监听POST请求
> 通过`app.post()`方法，可以监听客户端的`POST`请求，具体的语法格式如下：
> `app.post(url, collback)`
> 1. `url`：客户端请球的UL地址
> 2. `collback`：请求对应的处理函数有两个参数 
> 
         ·  `req`:请求对像（包含了与请球相关的属性与方法）
>          ·  `res`响应对像（包含了与响应相关的属性与方法）

```javascript
app.post('请求URL', function (req, res) { /*处理函数*/ })
```
### 把内容相应给客户端
> 通过`res.send()`方法，可以把处理好的内容，发送给客户端：

```javascript
app.get('/user',(req.res)=>{
  // 向客户端发送JSON对象
	res.send({name:'zs',age:20,gender:}
})
app.post('/user',(req,res)=>{
	// 向客户端发送文本内容
	res.send('请求成功')
})
```
### 获取 url 中携带的查询参数
> 通过`req.quey`对象，可以访问到客户端通过查询字符串的形式，发送到服务器的参数：

```javascript
app.get('/', (req,res)=>
//req.query默认是一个空对象
//客户端使用？name=zs&age=20这种查询字符串形式，发送到服务器的参数，
//可以通过req.query对像访问到，例如：
//req.query.name  req.query.age
console.log(req.query)
)
```
### 获取 url 中的动态参数
> 通过`req.params`对象，可以访问到`URL`中，通过`:`匹配到的动态参数：

```javascript
//URL地址中，可以通过：参数名的形式，匹配动态参数值
app.get('/user/:id',(req,res)=>
  // req.params默认是一个空对像
  // 里面存放着通过：动态四配到的参数值
  console.log(req.params)
})
```
## `Express` 托管静态资源
### `express.static()`
> express提供了一个非常好用的函数，叫做`express.static()`,通过它，我们可以非常方便地创健一个静态资源服务器，例如，通过如下代码就可以将`public`目录下的图片、`CSS`文件、`JavaScript`文件对外开放访问了：

```javascript
app.use(express.static('../public'))
app.use(express.static('./file')) // 需要多个的话，就调用多次，先调用的优先访问
```
> 现在，你就可以访问public目录中的所有文件了：
> http://localhost:3000/index.css
> http://localhost:3000/index.js
> 注意：`Express`在指定的静态目录中查找文件，并对外提件资源的访问路径。因此，存放静态文件的目录名不会出现在`URL`中。

### 挂在路径前缀
> 如果希望在托管的静态资源访问路径之前，挂载路径前缀，则可以使用如下的方式：

```javascript
app.use('/public', express.static('public'))
```
> 现在，访问的路径就变为了：
> http://localhost:3000/pubilc/index.css
> http://localhost:3000/public/index.js

##  `nodemon` 热更新
### 为什么要是用`nodemon`
> 在编写调试`Node.js`项目的时候，如果修改了项目的代码，则需要频繁的手动`close`掉，然后再重新启动，非常繁琐。现在，我们可以使用`nodemon`(https://ww.npmjs.com/package/nodemon)这个工具，它能够监听项目文件的变动，当代码被修改后，`nodemon`会自动帮我们重启项目，极大方便了开发和调试。

### 安装
> 在终端中，运行如下命令，即可将`nodemon`安装为全局可用的工具：

```shell
npm i -g nodemon
```
### 使用`nodemon`
> 当基于`Node.js`编写了一个网站应用的时候，传统的方式，是运行`node app.js`命令，来启动项目。这样做的坏处是：代码被修改之后，需要手动重启项目。
> 现在，我们可以将`node`命令替换为`nodemon`命令，使用`nodemon app.js`来启动项目。这样做的好处是：代码被修改之后，会被`nodemon`监听到，从希实现自动重启项目的效果。

```shell
node app.js
# 将上面的终端命令，替换为下面的终端命令，即可实现自动重启项目的效果
nodemon app.js
```
## `Express` 路由
### 路由的概念
> 广义上来讲，路由就是映射关系。

#### `Express` 中的路由
> 在Express中，路由指的是客户端的请求与服务器处理函数之间的映射关系。
> Express中的路由分3部分组成，分别是请求的类型、请求的URL地址、处理函数，格式如下：

```javascript
app.METHOD(path, handler)
```
#### `Express` 中的路由的例子
```javascript
//匹配GET请求，且请求UL为/a
app.get('/a', function (req,res){
	res.send('Hello World!')
})
//匹配POST请球，且请求URL为/b
app.post('/b', function (req,res){
	res.send('Got a POST request')
)
```
### 路由匹配的过程
> 每当一个请求到达服务器之后，需要先经过路由的匹配，只有匹配成功之后，才会调用对应的处理函数。
> 在匹配时，会按照路由的顺序进行匹配，如果请求类型和请求的`URL`同时匹配成功，则`Express`会将这次请求，转交给对应的`function`函数进行处理。
> 路由匹配的注意点：
>     ① 按照定义的先后顺序进行匹配
>     ② 请求类型和请求的URL同时匹配成功，才会调用对应的处理函数

### 路由的使用
#### 简单使用
```javascript
// 监听客户端的 get 请求
app.get('/', (req, res) => {
  res.send(req.params)
})
// 监听客户端的 post 请求
app.post('/', (req, res) => {
  res.send('请求成功')
})
```
#### 模块化路由
> 为了方便对路由进行模块化的管理，Express不建议将路由直接挂载到app上，而是推荐将路由抽离为单独的模。
> 将路由抽离为单独模块的步骤如下：
> ① 创建路由模块对应的`.js`文件
> ② 调用`express.Router()`函数创建路由对象
> ③ 向路由对象上挂载具体的路由
> ④ 使用`module.exports`向外共享路由对象
> ⑤ 使用`app.use()`函数注册路由模块

```javascript
// router.js 文件
const express = require('express')
// 创建路由对象
const router = express.Router()
// 挂在具体的路由
router.get('/user/list', (req, res) => {
  res.send('get user list')
})
router.post('/user/add', (req, res) => {
  res.send('add user success')
})
// 导出路由对象
module.exports = router
```
```javascript
// 主文件， 使用roouter.js的文件
const router = require('./router.js')
// app.use() 的作用是注册全局中间件
app.use(router)
```
#### 为路由模块添加前缀
> 类似于托管静态资源时，为静态资源统一挂载访问前缀一样，路由模块添加前缀的方式也非常简单：

```javascript
//1,导入路由模块
const userRouter require('./router/user.js')
//2,使用app.use()注册路由模块，并添加统一的访问前缀/api
app.use('/api',userRouter)
```
## `Express`中间件
### 中间件的调用流程
> 当一个请求到达`Express`的服务器之后，可以连续调用多个中间件，从而对这次请求进行预处理。

<img src="https://cdn.nlark.com/yuque/0/2022/png/28469598/1667559454737-26838176-9b4a-49a2-b5ca-dba7fd57708e.png#averageHue=%23f3f2f2&clientId=u79ded6ef-2834-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=274&id=ufa28a0d4&margin=%5Bobject%20Object%5D&name=image.png&originHeight=377&originWidth=715&originalType=binary&ratio=1&rotation=0&showTitle=false&size=74874&status=done&style=none&taskId=ubad53ab2-326d-4507-8db1-0d784400f19&title=&width=520" referrerpolicy='no-referrer'/>

### `Express`中间件格式
> `Express`的中间件，本质上就是一个`function`处理函数，`Express`中间件的格式如下：

<img src="https://cdn.nlark.com/yuque/0/2022/png/28469598/1667559924343-22460cee-a816-4bf2-90d1-9c9dbdc4bcb5.png#averageHue=%23fafaf9&clientId=u79ded6ef-2834-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=212&id=u713927ee&margin=%5Bobject%20Object%5D&name=image.png&originHeight=291&originWidth=942&originalType=binary&ratio=1&rotation=0&showTitle=false&size=172008&status=done&style=none&taskId=u6a70030d-863f-438b-83fc-be3f0bd59ad&title=&width=685.0909090909091" referrerpolicy='no-referrer'/>
> 注意：中间件函数的形参列表中，必须包含`next`参数。而路由处理函数中只包含`req`和`res`。

#### `next`函数的作用
> `next`函数是实现多个中间件连续调用的关键，它表示把流转关系转交给下一个中间件或路由。

<img src="https://cdn.nlark.com/yuque/0/2022/png/28469598/1667560487244-d93816d8-19c4-46ef-9957-797c56aabbfb.png#averageHue=%23f2f2f2&clientId=u79ded6ef-2834-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=224&id=ua0919fd2&margin=%5Bobject%20Object%5D&name=image.png&originHeight=308&originWidth=581&originalType=binary&ratio=1&rotation=0&showTitle=false&size=61392&status=done&style=none&taskId=u96ae236d-a099-4146-9f07-bac66d772cc&title=&width=422.54545454545456" referrerpolicy='no-referrer'/>

### 中间件体验
#### 1、定义最简单的中间件函数
```javascript
// 定义一个最简单的中间件函数
const mw = (req, res, next) => {
  console.log(111111);
  next()
}
```
#### 2、全局生效的中间件函数
> 客户端发起的任何请求，到达服务器之后，都会触发的中间件，叫做全局生效的中间件。
> 通过调用`āpp.use(中间件函数)`，即可定义一个全局生效的中间件，示例代码如下：

```javascript
// 定义一个最简单的全局中间件函数
const mw = (req, res, next) => {
  console.log(111111);
  next()
}
app.use(mw)
```
**全局中间件的简化形式**
```javascript
app.use((req, res, next) => {
  console.log('全局中间件的简化形式')
  next()
})
```
#### 3、中间件的作用
> 多个中间件之间，共享同一份`req`和`res`。基于这样的特性，我们可以在上游的中间件中，统一为`req`或`res`对象添加自定义的属性或方法，供下游的中间件或路由进行使用。
> 可以使用`app.use()`连续定义多个全局中间件。客户端请求到达服务器之后，会按照中间件定义的先后顺序依次进行调用。

#### 4、局部生效的中间件
> 不使用`app.use()`定义的中间件，叫做局部生效的中间件，示例代码如下：

```javascript
// 定义一个中间件
const mw = (req, res, next) => {
  console.log(111111);
  next()
}
// 这个中间件只在"当前路由中生效”，这种用法属于“局部生效的中间件”
app.get('/', mw1, (req, res) => {
	res.send('Home page.')
)
```
#### 5、定义多个局部中间件
> 可以在路由中，通过如下两种等价的方式，使用多个局部中间件：

```javascript
// 以下两种写法是"完全等价"的，可根据自己的喜好，选择任意一种方式进行使用
app.get('/', mw1, mw2, (req,res) => { res.send('Home page.') })
app.get('/', [mw1,mw2], (req,res) => { res.send('Home page.') })
```
#### 6、中间件的使用注意事项
> ① 一定要在路由之前注册中间件.
> ② 客户端发送过来的请求，可以连续调用多个中间件进行处理.
> ③ 执行完中间件的业务代码之后，不要忘记调用`next()`函数.
> ④ 为了防止代码逻辑混乱，调用`next()`函数后不要再写额外的代码.
> ⑤ 连续调用多个中间件时，多个中间件之间，共享`req`和r`es`对象.

### 中间件的分类
> 为了方便大家理解和记忆中间件的使用，Express官方把常见的中间件用法，分成了5大类，分别是：
> ① 应用级别的中间件
> ② 路由级别的中间件
> ③ 错误级别的中间件
> ④ Express内置的中间件
> ⑤ 第三方的中间件
> 注意： 
>     1）除了错误的中间件，其他的都要在路由之前注册

#### 1、应用级别的中间件
> 通过`app.use()`或`app.get()`或`app.post()`,绑定到`app`实例上的中间件，叫做应用级别的中间件，代码示例如下：

```javascript
// 应用级别的中间件（全局中间件）
app.use((req,res,next)=>{
	next()
})
// 应用极别的中间件（局部中间件）
app.get('/', mw1, (req, res)=>{
	res.send('Home page.')
})
```
#### 2、路由级别的中间件
> 绑定到`express.Router()`实例上的中间件，叫做路由级别的中间件。它的用法和应用级别中间件没有任何区别。只不过，应用级别中间件是绑定到`app`实例上，路由级别中间件绑定到`router`实例上，代码示例如下：

```javascript
let app express()
let router express.Router()
//路由级别的中问件
router.use(function (req, res, next){
	cokole.log('Time:'.Date.now())
	next()
)
app.use('/', router)
```
#### 3、错误级别的中间件
> 错误级别中间件的作用：专门用来捕获整个项目中发生的异常错误，从而防止项目异常崩溃的问题。
> 格式：错误级别中间件的`function`处理函数中，必须有4个形参，形参顺序从前到后，分别是`(err, req, res, next)`。

```javascript
app.get('/', function (req, res){ // 路由
	throw new Error('服务器内部发生了错误！') // 抛出一个自定义的错误
	res.send('Home Page.')
})
// 错误级别的中间件
app.use(function(err,req,res,next){ // 错误级的中间件
	console,1og('发生了错误：·+err,message') // 在服务器打D错误消息
	res.send('Error!' + err.message) // 向客户响应错误相关的内容
})
```
> 注意：错误中间件一定放在所有路由之后。

#### 4、`Express`内置的中间件
> 自`Express4.16.0`版本开始，E`xpress`内置了3个常用的中间件，极大的提高了`Express`项目的开发效率和体验：
> ① `express..static`快速托管静态资源的内置中间件，例如：`HTML`文件、图片、`CSS`样式等（无兼容性）
> ② `express.json`解析`JSON`格式的请求体数据（有兼容性，仅在4.16.0+版本中可用）
> ③ `express..urlencoded`解析`URL-encoded`格式的请求体数据（有兼容性，仅在4.16.0+版本中可用）

```javascript
// 在服务器端，可以通过req,body来获取JSO格式的表单数据和url-encoded格式的数据

// 配置解析application/json格试数据的内置中间件
app.use(express.json())
// 配置解析application/x-ww-form-urlencoded格式数的内置中间件
app.use(express.urlencoded({ extended:false })
```
> 注意： 默认情况下，如果不配置解析表单数据的中间件，则`req.body`默认等于`undefined`

#### 5、第三方中间件
> 非`Express`宫方内置的，而是由第三方开发出来的中间件，叫做第三方中间件。在项目中，大家可以按需下载并配置第三方中间件，从而提高项目的开发效率。
> 例如：在`express@4.16.0`之前的版本中，经常使用`body-parser`这个第三方中间件，来解析请求体数据。使用步骤如下：
> ① 运行`npm install body-parser`安装中间件
> ② 使用`require`导入中间件
> ③ 调用`app.use()`注册并使用中间件

```javascript
const parser = require('body-parser')
app.use(parser.urlencoded({ extended: false }))

app.post('/user/add', (req, res) => {
  console.log('ok', req.body);
  // 默认情况下，如果不配置解析表单数据的中间件，则reg.body默认等于undefined
  res.send({ status: 200, message: '/user/add', data: [] })
})
```
> 注意：Express内置的express.urlencoded中间件，就是基于body-parser这个第三方中间件进一步封装出来的。

### 自定义中间件
#### 1、需求描述与实现步骤
> 自己手动模拟一个类似于`express.urlencoded`这样的中间件，来解析`POST`提交到服务器的表单数据。
> 实现步骤：
> ① 定义中间件
> ② 监听`req`的`data`事件
> ③ 监听`req`的`end`事件
> ④ 使用`querystring`模块解析请求体数据
> ⑤ 将解析出来的数据对象挂载为`req.body`
> ⑥ 将自定义中间件封装为模块

#### 2、监听req的data事件
> 在中间件中，需要监听`req`对象的`data`事件，来获取客户端发送到服务器的数据.
> 如果数据量比较大，无法一次性发送完毕，则客户端会把数据切后，分批发送到服务器。所以dta事件可能会触发多次，每一次触发dta事件时，获取到数据只是完整数据的一部分，需要手动对接收到的数据进行拼接。

```javascript
let str = ''
req.on('data', (d) => {
  str += d
})
```
#### 3、监听 `req` 的 `end` 事件
> 当请求体数据接收完毕之后，会自动触发`req`的`end`事件。
> 因此，我们可以在`req`的`end`事件中，拿到并处理完整的请求体数据。示例代码如下：

```javascript
req.on('end', () => {
  console.log({ str });
})
```
#### 4、使用 `querystring` 模块解析请求体数据
> `Node.js`内置了一个`querystring`模块，专门用来处理查询字符串。通过这个模块提供的`parse()`函数，可以轻松把查询字符串，解析成对象的格式。示例代码如下：

#### 5、将解析出来的数据对象挂载为`req.body`
```javascript
req.on('end', () => {
  req.body = qs.parse(str)
  next()
})
```
## `Express` 写接口
### 创建基本的文件
```javascript
// apiRouter 文件
const express = require('express')
const router = express.Router()

module.exports = router
// ------------------***********----------------
// 引入文件
const express = require('express')
const router = require('./apiRouter')
// 创建 web 服务器
const app = express()
app.use('/api', router)
// 启动 web 服务器
app.listen(80, () => {
  console.log('express server running at http://127.0.0.1');
})
```
### 编写 GET 接口
```javascript
const express = require('express')
const router = express.Router()
router.get('/get', (req, res) => {
  const data = req.query
  res.send({
    status: 200,
    message: 'GET请求成功',
    data
  })
})
module.exports = router
```
### 编写 POST 接口
```javascript
const express = require('express')
const router = express.Router()
router.use(express.urlencoded({ extended: false }))
router.post('/post', (req, res) => {
  const data = req.body
  res.send({
    status: 200,
    message: 'post请求成功',
    data
  })
})
module.exports = router
```
### cors 解决跨域问题
> `cors`是`Express`的一个第三方中间件。通过安装和配置`cors`中间件，可以很方便地解决跨域问题。
> 使用步骤分为如下3步：
> ① 运行`npm install cors`安装中间件
> ② 使用`const cors=require(cors)`导入中间件
> ③ 在路由之前调用`app.use(cors())`配置中间件

```javascript
const cors = require('cors)
// 一定要在路由之前，配置cors这个中间件，从而解决接口跨域问题
app.use(cors())
```
### CORS 跨域资源共享
#### 1、什么是CORS 
> `CORS`(Cross-Origin Resource Sharing，跨域资源共享)由一系列HTTP响应头组成，这些HTTP响应头决定浏览器是否阻止前端S代码跨域获取资源。
> 浏览器的同源安全策略默认会阻止网页“跨域”获取资源。但如果接口服务器配置了`CORS`相关的`HTTP`响应头，就可以解除览器端的跨域访问限制.

#### 2、CORS 的注意事项
> ① `CORS`主要在服务器端进行配置。客户端浏览器无须做任何额外的配置，即可请求开启了CORS的接口。
> ② `CORS`在浏览器中有兼容性。只有支持`XMLHttpRequest Level.2`的浏览器，才能正常访问开启了`CORS`的服务端接口（例如：`IE10+、Chrome4+、FireFox3.5+`)。

#### 3、CoRS响应头部-Access-Control-Allow-Origin
> 响应头部中可以携带一个Access-Control--Allow-Origin字段，其语法如下

```javascript
Access-Control-Allow-Origin: <origin> | *
```
> 其中，origin参数的值指定了允许访问该资源的外域URL。

```javascript
// 例如，下面的字段值将只允许来自http:/itcast.cn的请求：
res.setHeader('Access-Control-Allow-Origin', 'http://itcast.cn')
// 如果指定了Access-Control--Allow-Origin字段的值为通配符·，
// 表示允许来自任何域的请求，示例代码如下：
res.setHeader('Access-Control-Allow-Origin', '*')
```
#### 4、CORS响应头部-Access-Control-Allow-Headers
> 默认情况下，CORS仅支持客户端向服务器发送如下的9个请求头：
> `Accept`、`Accept-Language`、`Content-Language`、`DPR`、`Downlink`、`Save-Data`、`Viewport-Width`、`Width`、`Content-Type`(值仅限于`text/plain`、`multipart/form-data`、`application/x-www-form-urlencoded`三者之一)如果客户端向服务器发送了额外的请求头信息，则需要在服务器端，通过`Access-Contro-Allow-Headers`对额外的请求头进行声明，否则这次请求会失败！

```javascript
// 允许客户端额外向服务器发送Content-Type请求头和X-Custom-Header请求头
// 注意：多个请求头之间使用英文的逗号进行分割
res.setHeader('Access-Control-Allow-Headers','Content-Type, X-Custom-Header')
```
#### 5、CORS响应头部-Access-Control-Allow-Methods
> 默认情况下，`CORS`仅支持客户端发起`GET`、`POST`、`HEAD`请求。
> 如果客户端希望通过`PUT`、`DELETE`等方式请求服务器的资源，则需要在服务器端，通过`Access-Control-Alow-Methods`来指明实际请求所允许使用的`HTTP`方法。

```javascript
// 只允许POST、GET、DELETE、HEAD请求方法
res.setHeader('Access-Control-Allow-Methods','POST, GET, DELETE, HEAD')
// 允许所有的HTTP请求方法
res.setHeader('Access-Control-Allow-Methods', '*')
```
#### 6、CORS 请求的分类
> 客户端在请求`CORS`接口时，根据请求方式和请求头的不同，可以将`CORS`的请求分为两大类，分别是：
> ① 简单请求  ② 预检请求

**1）简单请求：**
> ① 请求方式：`GET`、`POST`、`HEAD`三者之一
> ② `HTTP`头部信息不超过以下几种字段：无自定义头部字段、`Accept`、`Accept-Language`、`Content-Language`、`DPR`、`Downlink`、`Save-Data`、`Viewport-Width`、`Width`、`Content-Type`(只有三个值`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`)

**2）预检请求：**
> 只要符合以下任何一个条件的请求，都需要进行预检请求：
> ① 请求方式为`GET`、`POST`、`HEAD`之外的请求`Method`类型
> ② 请求头中包含自定义头部字段
> ③ 向服务器发送了`application/json`格式的数据

> 在浏览器与服务器正式通信之前，浏览器会先发送`OPTION`请求进行预检，以获知服务器是否允许该实际请求，所以这一次的`OPTION`请求称为“预检请求”。服务器成功响应预检请求后，才会发送真正的请求，并目携带真实数据。

**3）简单请求和预检请求的区别**
> 简单请求的特点：客户端与服务器之间只会发生一次请求。
> 预检请求的特点：客户端与服务器之间会发生两次请求，OPTION预检请求成功之后，才会发起真正的请求。

### JSONP接口
> 概念：浏览器端通过`<scipt>`标签的src属性，请求服务器上的数据，同时，服务器返回一个函数的调用。这种请求数据的方式叫做`JSONP`.
> 特点：
>     ① JSONP不属于真正的Ajax请求，因为它没有使用XMLHttpRequest这个对象。
>     ② JSONP仅支持GET请求，不支持POST、PUT、DELETE等请求

#### 1、JSONP 接口的实现步骤
> ① 获取客户端发送过来的回调函数的名字
> ② 得到要通过`JSONP`形式发送给客户端的数据
> ③ 根据前两步得到的数据，拼接出一个函数调用的字符串
> ④ 把上一步拼接得到的字符串，响应给客户端的`<script>`标签进行解析执行

#### 2、具体实现-接口
```javascript
app.get('/api/jsonp', (req, res) => {
  // 拿到客户端的函数名称
  let { query: { callback } } = req
  // 定义发送到客户端的数据
  let data = { name: '张三', age: 20 }
  // 拼接函数调用的字符串
  const dataStr = `${callback}(${JSON.stringify(data)})`
  // 响应给客户端
  res.send(dataStr)
})
```
#### 3、在网页中使用jQuery发起JSONP请求
> 调用$.ajax0函数，提供SONP的配置选项，从而发起SONP请求，示例代码如下：

```javascript
$('#btnJSONP').on('click'.function () {
  $.ajax({
  	method:'GET',
  	url: 'http://127.0.0.1/api/jsonp',
  	dataType: 'jsonp',//表示要发起JS0NP的请求
  	success: function (res){
  		console.log(res)
    }
  })
})
```