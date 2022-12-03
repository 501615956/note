# 数据库与身份认证
## 数据库的基本概念
### 什么是数据库
> 数据库(database)是用来组织、存储和管理数据的仓库。
> 当今世界是一个充满着数据的互联网世界，充斥看着大量的数据。数据的来源有很多，比如出行记录、消费记录浏览的网页、发送的消息等等。除了文本类型的数据，图像、音乐、声音都是数据。
> 为了方便管理互联网世界中的数据，就有了数据库管理系统的概念（简称：数据库）。用户可以对数据库中的数据进行新增、查询、更新、删除等操作。

### 常见数据库及分类
> - `MySQL`数据库（目前使用最广泛、流行度最高的开源免费数据库；`Community+Enterprise`)
> - `Oracle`数据库（收费）
> - `SQL Serve`r数据库（收费）
> - `Mongodb`数据库(`Community+Enterprise`)
> 
其中，`MySQL`、`Oracle`、`SQL Server`属于传统型数据库（又叫做：关系型数据库或`SQL`数据库），这三者的设计理念相同，用法比较类似。
> 而`Mongodb`属于新型数据库（又叫做：非关系型数据库或`NoSQL`数据库），它在一定程度上弥补了传统型数据库的缺陷。

### 创痛型数据库的数据组织结构
> 数据的组织结构：指的就是数据以什么样的结构进行存储。

<img src="https://cdn.nlark.com/yuque/0/2022/png/28469598/1667906117797-8ce21ec5-ba9c-4b96-95c6-f8f7d694c141.png#averageHue=%2383735f&clientId=u963b2522-1215-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=304&id=LeDQT&margin=%5Bobject%20Object%5D&name=image.png&originHeight=418&originWidth=512&originalType=binary&ratio=1&rotation=0&showTitle=false&size=337680&status=done&style=none&taskId=u22c08738-7b0f-48be-ab52-2afbd8643c0&title=&width=372.3636363636364" referrerpolicy='no-referrer'/>
> 传统型数据库的数据组织结构，与`Excel`中数据的组织结构比较类似。
> 因此，我们可以对比着`Excel`来了解和学习传统型数据库的数据组织结构。

> 数据的组织结构分为数据库(`database`)、数据表(`table`)、数据行(`row`)、字段(`field`)这4大部分组成。

#### 实际开发库、表、行、字段的关系
> * ① 在实际项目开发中，一般情况下，每个项目都对应独立的数据库。
> * ② 不同的数据，要存储到数据库的不同表中，例如：用户数据存储到`users`表中，图书数据存储到`books`表中。
> * ③ 每个表中具体存储哪些信息，由字段来决定，例如：我们可以为`users`，表设计`id`、`username`、`password`这3个字段。
> * ④ 表中的行，代表每一条具体的数据

## 安装并配置`MySQL`
### 了解需要安装哪些,MySQL相关的软件
> 对于开发人员来说，只需要安装`MySQL Server`和`MySQL Workbench`这两个软件，就能满足开发的需要了.
> * `MySQL Server`: 专门用来提供数据存储和服务的软件。
> * `MySQL Workbench`: 可视化的`MySQL`管理工具，通过它，可以方便的操作存储在`MySQL Server`中的数据。

### `MySQL` 在 Mac 环境下的安装
> 在Mac环境下安装MySQL的过程比Windows环境下的步骤简单很多：
> * ① 先运行`mysq-8.0.19-macos10.15-x8664.dmg`这个安装包，将`MySQL Server`安装到Mac系统
> * ② 再运行`mysql-workbench-community-8.0.19-macos-x8664.dmg`这个安装包，将可视化的`MySQLWorkbench`工具安装到Mac系统

### `MySQL` 在 `Windows` 环境下的安装
在官网上自己搜索下载
## `MySQL` 的基本使用
### 使用`MySQL Workbench`管理数据库
#### 1、创建数据库
<img src="https://cdn.nlark.com/yuque/0/2022/png/28469598/1667993967843-1603b9be-193b-4dd7-93e9-6927f9d12d98.png#averageHue=%23f7fbf8&clientId=u2ecfedc6-8d84-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=351&id=ucf1b8fea&margin=%5Bobject%20Object%5D&name=image.png&originHeight=483&originWidth=852&originalType=binary&ratio=1&rotation=0&showTitle=false&size=194642&status=done&style=none&taskId=uf28c1818-f638-4b51-bb32-89f152f3a0a&title=&width=619.6363636363636" referrerpolicy='no-referrer'/>

#### 2、创建数据表
<img src="https://cdn.nlark.com/yuque/0/2022/png/28469598/1667995218051-80899a61-a754-4c18-ad75-2460d83e294b.png#averageHue=%23f3f6f3&clientId=u2ecfedc6-8d84-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=309&id=u7431a64b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=425&originWidth=1053&originalType=binary&ratio=1&rotation=0&showTitle=false&size=280151&status=done&style=none&taskId=u7d8f3ec0-27fb-4d08-99ed-42ed8da6e77&title=&width=765.8181818181819" referrerpolicy='no-referrer'/>

#### 3、向表中写入数据
<img src="https://cdn.nlark.com/yuque/0/2022/png/28469598/1667995532141-a34a195e-607c-46b8-b490-a65b53d90271.png#averageHue=%23f5f8f6&clientId=u2ecfedc6-8d84-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=312&id=ubde6d57d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=429&originWidth=743&originalType=binary&ratio=1&rotation=0&showTitle=false&size=203227&status=done&style=none&taskId=uc3d686c8-6aca-405f-b3de-100518ef8f0&title=&width=540.3636363636364" referrerpolicy='no-referrer'/>

### 使用 SQL 管理数据库
#### 1、什么是SQL
> `SQL`(英文全称：Structured Query Language)是结构化查询语言，专门用来访问和处理数据库的编程语言。能够让我们以编程的形式，操作数据库里面的数据。
> 三个关键点：
> * ① `SQL`是一门数据库编程语言
> * ② 使用`SQL`语言编写出来的代码，叫做`SQL`语句
> * ③ `SQL`语言只能在关系型数据库中使用（例如`MySQL`、`Oracle`、`SQL Server`)。非关系型数据库（例如`Mongodb`)不支持`SQL`语言

#### 2、`SQL`能做什么
> 1. 从数据库中查询数据
> 2. 向数据库中插入新的数据
> 3. 更新数据库中的数据
> 4. 从数据库删除数据
> 5. 可以创建新数据库
> 6. 可在数据库中创建新表
> 7. 可在数据库中创建存储过程、视图
> 8. etc.…

**需要学习的**
> 重点掌握如何使用SQL从数据表中：
> 查询数据(`select`)、插入数据(`insert into`)、更新数据(`update`)、删除数据(`delete`)
> 颜外需要掌握的4种SQL语法：
> `where`条件、`and`和`or`运算符、`order by`排序、`count(*)`函数

### `SQL` 的 `SELECT` 语句
> SELECT语句用于从表中查询数据。执行的结果被存储在一个结果表中（称为结果集）。语法格式
> 如下：

```sql

--从FROM指定的【表中】，查询出【所有的】数据.*表示【所有列】
SELECT * FROM 表名称

--从FROM指定的【表中】，查询出指定列名称（字段）的数据
SELECT 列名称 FROM 表名称
--多个列之间用逗号隔开
SELECT id, username FROM users
```
> 注意：`SQL`语句中的关键字对大小写不敏感。`SELECT`等效于`select`,`FROM`等效于`from`。

### `SQL` 的 `INSERT INFO`
> `INSERT INTO`语句用于向数据表中插入新的数据行，语法格式如下：

```sql
-- 语法解读：向指症的表中，插入如下几列数据，列的值通过va1ues一指定
-- 注意：列和值要一对应，多个列和多个值之间，使用英文的逗号分隔
INSERT INTO 表名 (列1, 列2, ···) VALUES (值1, 值2, ...)
```
### `SQL` 的 `UPDATE` 语句
> Update语句用于修改表中的数据。语法格式如下：

```sql
--1,用UPDATE指定要更新鄂个表中的数据
--2.用SET指定列对应的新值
--3.用WHERE指定更新的条件
UPDATE 表称 SET 列名称 = 新值 WHERE 列名称=某值
-- 更新多列
UPDATE 表称 SET 列名称 = 新值, 列名称1 = 新值 WHERE 列名称=某值
```
### `SQL` 的 `DETAIL` 语句
```sql
-- 注意：对初学者来说，经常忘记提供WHERE条件，
-- 从而导致误到整张表的数据！一定要慎重！
DELETE FROM users WHERE id=4
```
### `SQL` 中的 `WHERE` 子句
> `WHERE`子句用于限定选择的标准。在`SELECT`、`UPDATE`、`DELETE`语句中，皆可使用`WHERE`子句来限定选择的标准。

```sql
-- 查询语句中的WHERE条件
SELECT 列名称 FROM 表名称 WHERE 列运算符值
-- 更新语句中的WHERE条件
UPDATE 表名称 SET 列=新值 WHERE 列运算符值
-- 别除语句中的HERE条件
DELETE FROM 表名称 WHERE 列运算符值
```
**可以在 where 子句中使用的运算符**

| 操作符    | 描述         |
| --------- | ------------ |
| `=`       | 等于         |
| `<>`      | 不等于       |
| `>`       | 大于         |
| `<`       | 小于         |
| `>=`      | 大于等于     |
| `<=`      | 小于等于     |
| `BETWEEN` | 在某个范围内 |
| `LIKE`    | 搜索某种模式 |

> 注意：在某些版本的`SQL`中，操作符`<>`可以写为`!=`

### `SQL` 中的 `AND` 和 `OR` 运算符
> `AND`和`OR`可在`WHERE`子语句中把两个或多个条件结合起来。
> `AND`表示必须同时满足多个条件，相当于`JavaScript`中的`&&`运算符，例如`if(a!==10&&a!==20)`
> `OR`表示只要满足任意一个条件即可，相当于`JavaScript`中的‖运算符，例如`if(a!==10‖a!==20)`

```sql
-- 获取status=0且id=2的数据
select * from users where status=0 and id=2
-- 
select * from users where status=0 or id=2
```
### `SQL` 中的 `ORDER BY` 子句
> `ORDER BY`语句用于根据指定的列对结果集进行排序。
> 
> `ORDER BY`语句默队按照升序对记录进行排序。
> 
> 如果您希望按照降序对记录进行排序，可以使用`DESC`关键字。

#### `ORDER BY` - 升序排序
```sql
-- 对users表中的数据，按照status字段进行升序排序，示例如下：
-- 因为ORDER BY默认进行升序排序：
select * from users order by status
-- 其中，SC关键字代表升序排序
select * from users order by status asc
```
#### `ORDER BY` - 降序排列
```sql
-- 对users表中的数据，按照id字段进行降序排序，示例如下：
select * from users order by id desc
```
#### `ORDER BY` - 多重排序
```sql
-- 对users表中的数据，先按照status字段进行降序排序，
-- 再按照username的字母顺序，进行升序排序，示例如下：
select * from users order by status desc, username asc
```
### `SQL` 的 `COUNT(*)` 函数
> `COUNT(*)`函数用于返回查询结果的总数据条数，语法格式如下：

```sql
select count(*) from 表名称
```
#### `count(*)` 示例
```sql
-- 查询users表中status为0的总数据条数：
select count(*) from users where status=0
```
#### 使用 `AS` 设置别名
```sql
select count(*) as 新列表 from users where status=0
-- 示例
select count(*) as total from users where status=0
select username as un, password as pw from users
```
## 在项目中使用 `MySQL`
### 在项目中使用`mysql`的步骤
> 1. 安装操作`MySQL`数据库的第三方模块(`mysql`)
> 2. 通过`mysql`模块连接到`MySQL`数据库
> 3. 通过`mysql`模块执行`SQL`语句

### 安装与配置`mysql`模块
#### 1、安装 `mysql` 模块
> `mysql`模块是托管于`npm`上的第三方模块。它提供了在`Node.js`项目中连接和操作`MySQL`数据库的能力。想要在项目中使用它，需要先运行如下命令，将ysql安装为项目的依赖包：

```sql
npm i mysql
```
#### 2、配置 `mysql` 模块
> 在使用`mysql`模块操作`MySQL`数据库之前，必须先对`mysql`模块进行必要的配置，主要的配置步骤如下：

```javascript
// 1.导入mysq1模块
const mysql require('mysql')
// 2.建立与山y5QL数据库的连接
const db =  mysql.createPool({
  host: '127.0.0.1',  //数据库的IP地址
  user: 'root',  //登录数据库的账号
  password: 'admin123', //登录数据库的密码
  database: 'my_db_01' //指定要操作哪个数据库
})
```
#### 3、测试 mysql 模块是否正常工作
> 调用`db.query()`函数，指定要执行的`SQL`语句，通过回调函数拿到执行的结果：

```javascript
// 检测mysq1模块的香正常工作
db.query('SELECT 1',(err, results)=>
	if (err) return console.log(err.message)
	//只要能打印出 [ RowDataPacket {'1':1} ] 的结果，就证明数据库连接正常
	console.log(results)
})
```
### 使用`mysql`操作`MySql`数据库
#### 1、查询数据
```javascript
// 查询users表中的所有数据
const sqlStr = 'select * from users'
db.query(sqlStr, (err, result) => {
  if (err) return console.log('搜索失败 => ', err.message)
  // 注意：如果执行的是select查询语句，则执行的结果是数组
  console.log('搜索成功 => ', result)
})
```
#### 2、插入数据
```javascript
// 向users表中新增数据，其中username为 哈哈哈,password为hhhhhh。示例代码如下：
const user = { username: '哈哈哈', password: 'hhhhhh' }
const sqlStr = 'insert into users (username, password) values (?, ?)'
db.query(sqlStr, [user.username, user.password], (err, res) => {
  if (err) return console.log('搜索失败 => ', err.message)
  // 注意：如果执行的是insert into插入语句，则results是一个对象
  // 可以通过affectedRows属性，来判断是否插入数据成功
  if (res.affectedRows === 1) console.log('插入成功')
})
```
**插入数据的便捷方式**
> 向表中新增数据时，如果数据对象的每个属性和数据表的字段一一对应，则可以通过如下方式快速插入数据：

```javascript
// 插入数据的便捷方式，示例代码如下：
const user = { username: '嘿嘿嘿', password: 'h1h1h1' }
const sqlStr = 'insert into users set ?'
db.query(sqlStr, user, (err, res) => {
  if (err) return console.log('搜索失败 => ', err.message)
  // 注意：如果执行的是insert into插入语句，则results是一个对象
  // 可以通过affectedRows属性，来判断是否插入数据成功
  if (res.affectedRows === 1) console.log('插入成功')
})
```
#### 3、更新数据
```javascript
// 更新数据
const user = { id: 1, username: '张三', password: 'z1z1z1' }
const sqlStr = 'update users set username=?, password=? where id=?'
db.query(sqlStr, [user.username, user.password, user.id], (err, res) => {
  if (err) return console.log('更新失败 => ', err.message)
  // 注意：执行了update语句之后，执行的结果，也是一个对象，可以通过affectedRows判断是否更新成功
  if (res.affectedRows === 1) console.log('更新成功')
})
```
**更新数据的便捷方式**
```javascript
// 更新数据便捷方式
const user = { id: 2, username: '李四', password: 'l1l1l1' }
const sqlStr = 'update users set ? where id=?'
db.query(sqlStr, [user, user.id], (err, res) => {
  if (err) return console.log('更新失败 => ', err.message)
  if (res.affectedRows === 1) console.log('更新成功')
})
```
#### 4、删除数据
> 在删除数据时，推荐根据d这样的唯一标识，来删除对应的数据。示例如下：

```javascript
// 删除数据
const sqlStr = 'delete from users where id=?'
// 注意：如果SQL语句中有多个占位符，则必须使用数组为每个占位符指定具体的值
//       如果SQL语句中只有一个占位符，则可以省略数组
db.query(sqlStr, 3, (err, res) => {
  if (err) return console.log('删除失败 => ', err.message)
  if (res.affectedRows === 1) console.log('删除成功')
})
```
#### 5、标记删除
> 使用`DELETE`语句，会把真正的把数据从表中别除掉。为了保险起见，推荐使用标记删除的形式，来模拟删除的动作。
> 所谓的标记删除，就是在表中设置类似于`status`这样的状态字段，来标记当前这条数据是否被删除。
> 当用户执行了删除的动作时，我们并没有执行`DELETE`语句把数据删除掉，而是执行了`UPDATE`语句，将这条数据对应的`status`字段标记为删除即可。

```javascript
//须记除：使用UPDATE语句普代DELETE语句：只更新数的状态，并没有真正除
const sqlStr = 'update users set status=1 where id=?'
db.query(sqlStr, [1, 2], (err,results)=>{
	if (err) return console.log(err.message)
	if(results.affectedRows==1)(console.log('删除数据城功！')}//成功
})
```
## 前后端的身份认证
### Web 开发模式
> 目前主流的Web开发模式有两种，分别是：
> * ① 基于服务端渲染的传统`Web`开发模式
> * ② 基于前后端分离的新型`Web`开发模式

#### 1、服务器端渲染的Web开发模式
> 服务端渲染的概念：服务器发送给客户端的HTML页面，是在服务器通过字符串的拼接，动态生成的。因此，客户端不需要使用Ajx这样的技术额外请求页面的数据。

**优点：**
> * ①前端耗时少。因为服务器端负责动态生成`HTML`内容，浏览器只需要直接渲染页面即可。尤其是移动端更省电。
> * ②有利于`SEO`。因为服务器端响应的是完整的`HTML`页面内容，所以爬虫更容易爬取获得信息，更有利`SEO`。

**缺点：**
> * ① 占用服务器端资源。即服务器端完成`HTML`页面内容的拼接，如果请求较多，会对服务器造成一定的访问压力。
> * ② 不利于前后端分离，开发效率低。使用服务器端渲染，则无法进行分工合作，尤其对于前端复杂度高的项目，不利于项目高效开发。

#### 2、前后端分离的web开发模式
> 前后端分离的概念：前后端分离的开发模式，依赖于`Ajax`技术的广泛应用。简而言之，前后端分离的`Web`开发模式，就是后端只负责提供`API`接口，前端使用`Ajax`调用接口的开发模式。

**优点：**
> * ① 开发体验好。前端专注于`UI`页面的开发，后端专注于`api`的开发，且前端有更多的选择性。
> * ② 用户体验好。`Ajax`技术的广泛应用，极大的提高了用户的体验，可以轻松实现页面的局部刷新。
> * ③ 减轻了服务器端的渲染压力。因为页面最终是在每个用户的浏览器中生成的。

**缺点：**
> * ①不利于`SEO`。因为完整的`HTML`页面需要在客户端动态拼接完成，所以爬虫对无法爬取页面的有效信息。（解决方案：利用`Vue`、`React`等前端框架的`SSR`(server side render))技术能够很好的解决`SEO`问题！)

#### 3、如何选择web开发模式
> * 比如企业级网站，主要功能是展示而没有复杂的交互，并且需要良好的`SEO`,则这时我们就需要使用服务器端渲染；
> * 而类似后台管理项目，交互性比较强，不需要考虑`SEO`,那么就可以使用前后端分离的开发模式。
> 另外，具体使用何种开发模式并不是绝对的，为了同时兼顾了首页的渲染速度和前后端分离的开发效率，一些网站采用了首屏服务器端渲染+其他页面前后端分离的开发模式。

### 身份认证
#### 1、什么是身份认证
> 身份认证(Authentication)又称“身份验证”、“鉴权”，是指通过一定的手段，完成对用户身份的确认。
> 
> - 日常生活中的身份认证随处可见，例如：高铁的验票乘车，手机的密码或指纹解锁，支付宝或微信的支付密码等。
> 
> - 在Wb开发中，也涉及到用户身份的认证，例如：各大网站的手机验证码登录、邮箱密码登录、二维码登录等。

#### 2、不同开发模式下的身份认证
> 对于服务端谊染和前后端分离这两种开发模式来说，分别有看不同的身份认证方案：
> * ① 服务端渲染推荐使用`Session`认证机制
> * ② 前后端分离推荐使用`JWT`认证机制

### `Session` 认证机制
#### 1、HTTP 协议的无状态性
> 了解`HTTP`协议的无状态性是进一步学习`Session`认证机制的必要前提。
> 
> `HTTP`协议的无状态性，指的是客户端的每次`HTTP`请求都是独立的，连续多个请求之间没有直接的关系，服务器不会主动保留每次`HTTP`请求的状态。
> 
> 如何突破`HTTP`无状态的限制
> 
> 在Web开发中的专业术语叫做`Cookie`。

#### 2、什么是Cookie
> `Cookie`是存储在用户浏览器中的一段不超过`4KB`的字符串。它由一个名称(`Name`)、一个值(`Value`)和其它几个用于控制`Cookie`有效期、安全性、使用范国的可选属性组成。
> 
> 不同域名下的`Cookie`各自独立，每当客户端发起请求时，会自动把当前域名下所有未过期的`Cookie`一同发送到服务器。

Cookie的计大特性：
> * ① 自动发送
> * ② 域名独立
> * ③ 过期限制
> * ④ 4k限制

#### 3、Cookie在身份认证中的作用
> 客户端第一次请求服务器的时候，服务器通过响应头的形式，向客户端发送一个身份认证的`Cookie`,客户端会自动将`Cookie`保存在浏览器中。
> 
> 随后，当客户端浏览器每次请求服务器的时候，浏览器会自动将身份认证相关的`Cookie`,通过请求头的形式发送给服务器，服务器即可验明客户端的身份。

<img src="https://cdn.nlark.com/yuque/0/2022/png/28469598/1668330715994-a2fc9767-705b-457d-9c41-4147dd563ab3.png#averageHue=%23d1dbcc&clientId=u2ecfedc6-8d84-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=200&id=uafeb7980&margin=%5Bobject%20Object%5D&name=image.png&originHeight=275&originWidth=1104&originalType=binary&ratio=1&rotation=0&showTitle=false&size=140676&status=done&style=none&taskId=uc63f0f84-789d-4bc5-8cf3-1f28ee63431&title=&width=802.9090909090909" referrerpolicy='no-referrer'/>

#### 4、Cookie 不具有安全性
> 由于`Cookie`是存储在浏览器中的，而且浏览器也提供了读写`Cookie`的`API`叫，因此`Cookie`很容易被伪造，不具有安全性。因此不建议服务器将重要的隐私数据，通过`Cookie`的形式发送给浏览器。
> 注意：干万不要使用`Cookie`存储重要且隐私的数据！比如用户的身份信息、密码等。

#### 5、提高身份认证的安全性
> 为了防止客户伪造会员卡，收银员在拿到客户出示的会员卡之后，可以在收银机上进行刷卡认证。只有收银机确认存在的会员卡，才能被正常使用。
> 这种“会员卡+刷卡认证”的设计理念，就是Session认证机制的精髓。

#### 6、Session的工作原理
<img src="https://cdn.nlark.com/yuque/0/2022/png/28469598/1668331691374-6d8e3e68-6a0c-448b-9c59-5af4ecacffd9.png#averageHue=%23f6f9f6&clientId=u2ecfedc6-8d84-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=337&id=u5456e5da&margin=%5Bobject%20Object%5D&name=image.png&originHeight=464&originWidth=938&originalType=binary&ratio=1&rotation=0&showTitle=false&size=186319&status=done&style=none&taskId=u6669142b-8398-4d29-a44e-f4ef3f9b492&title=&width=682.1818181818181" referrerpolicy='no-referrer'/>

### 在 Express 中使用 Session 认证

#### 1、安装 express-session 中间件
```shell
npm install express-session
```
#### 2、配置 express-session 中间件
> `express-session`中间件安装成功后，需要通过`app.use()`来注册`session`中间件  ，示例代码如下：

```javascript
// 导入session中间件
const session require('express-session')
//2.配置Session中问件
app.use(session({
  secret: 'keyboard cat',//secret属性的值可以为任意字符串
  resave: false, // 固定写法
  saveUninitialized: true //固定写法
})
```
#### 3、向 session 中存数据
```javascript
app.post('/api/login',(req, res)>{
	//断用户提交的录信息员香正确
	if (req.body.username != 'admin' || req.body.password != '000000'){
		return res.send({ status: 400, message: '登录失败' })
	}
  // 注意：只有成功配置了express-session这个中间件之后，才能够通过req点出来session这个属性

	req.se5sion.userInfo = req.body// 将用户的信息，存储倒Session中
	req.session.isLogin = true// 将用户的登录状态，存到Session中
	res.send({ status: 200, message: '登录成功' })
})
```
#### 4、从 session 中的数据
> 可以直接从`req.session`对象上获取之前存储的数据，示例代码如下：

```javascript
//获取用户姓名的接口
app.get('/api/username',(req,res)=>{
	//判断用户是否登录
	if (!req.session.islogin){
		return res.send({status:400, msg:'fail'})
  }
	res.send({status:200, msg:'success', username: req.session.user.username }
)
```
#### 5、清空 session
> 调用`req.session.destroy()`函数，即可清空服务器保存的`session`信息。

```javascript
//退出登录的接口
app.post('/api/logout', (req, res) => {
	// 清空当前客户端对应的session信息
	req.session.destroy()
	res.send({
		status: 200,
		msg: '退出登录成功'
	}
})
```
### JWT 认证机制
#### 1、了解 Session 认证的局限性
> `Session`认证机制需要配合`Cookie`才能实现。由于`Cookie`默认不支持跨域访问，所以，当涉及到前端跨域请求后端接口的时候，需要做很多额外的配置，才能实现跨域`Session`认证
> - 当前端请求后端接口不存在跨域问题的时候，推荐使用`Session`身份认证机制。
> - 当前端需要跨域请求后端接口的时候，不推荐使用`Session`身份认证机制，推荐使用`JWT`认证机制。

#### 2、 什么是 `JWT`
> `JWT`(英文全称：JSON Web Token)是目前最流行的跨域认证解决方案。

#### 3、JWT的中作原理
<img src="https://cdn.nlark.com/yuque/0/2022/png/28469598/1668334178494-86dd3636-e56d-4ed6-ad91-a7cd816d4e39.png#averageHue=%23f6f4f4&clientId=u2ecfedc6-8d84-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=303&id=u2ebbd638&margin=%5Bobject%20Object%5D&name=image.png&originHeight=416&originWidth=800&originalType=binary&ratio=1&rotation=0&showTitle=false&size=132902&status=done&style=none&taskId=uf45e0146-3cda-4810-a9d2-ebb34c7d468&title=&width=581.8181818181819" referrerpolicy='no-referrer'/>
> 总结：用户的信息通过`Token`字符串的形式，保存在客户端浏览器中。服务器通过还原`Token`字符串的形式来认证用户的身份。

#### 4、JWT 的组成部分
> JWT通常由三部分组成，分别是`Header`(头部)、`Payload`(有效荷载)、`Signature`(签名)。
> 三者之间使用英文的“`.`”分隔，格式如下：

```javascript
Header.Payload.Signature
// 示例
eyJhbGcioiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidxNIcm5hbwuioiJhZG1pbiIsInBhc3N3b3JkIjoiliwibmlja25
hbwui0iLms6xlt7T1t7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY241LCJ1c2vyX3BpYyI6IiIsImlhdCI6MTU30DAZNjY4Miw
izXhwIjoxNTc4MDcyNjgyfQ.Wq7GqCxJPK-EA8LNrtMG0411KdZ3359KBL3XeuBxuI
```
> - `Payload`部分才是真正的用户信息，它是用户信息经过加密之后生成的字符串。
> - `Header`和`Signature`是安全性相关的部分，只是为了保证`Token`的安全性。

#### 5、 JWT 的使用方式
> 客户端收到服务器返回的`JWT`之后，通常会将它储存在`localStorage`或`sessionStorage`中。
> 此后，客户端每次与服务器通信，都要带上这个`JWT`的字符串，从而进行身份认证。推荐的做法是把`JWT`放在`HTTP`请求头的`Authorization`字段中，格式如下：

```javascript
Authorization: Beares <token>
```
### 在Express 中使用 JWT
#### 1、安装 JWT 相关的包
> 运行如下命令，安装如下两个WT相关的包：

```shell
npm install jsonwebtoken express-jwt
```
> - `jsonwebtoken`用于生成`JWT`字符串
> - `express-jwt`用于将`JWT`字符串解析还原成`JSON`对象

#### 2、导入JWT相关的包
```javascript
const jwt = requery('jsonwebtoken')
const expressJWT = requery('express-jwt')
```
#### 3、定义 secret 密钥
> 为了保证WT字符串的安全性，防止WT字符串在网络传输过程中被别人破解，我们需要专门定义一个用于加密和解密的`secret`密钥：
> * ① 当生成`JWT`字符串的时候，需要使用`secret`密钥对用户的信息进行加密，最终得到助加密好的`JWT`字符串
> * ② 当把`JWT`字符串解析还原成`JSON`对象的时候，需要使用`secret`密钥进行解密

```javascript
const secretKey = '自定义的字符串'
```
#### 4、在登录成功后生成JWT字符串
> 调用`jsonwebtoken`包提供的`sign()`方法，将用户的信息加密成`JWT`字符串，响应给客户端：
> sign()有三个参数
> 参数1：用户的信息
> 参数2：机密的密钥
> 参数3：配置对象，可以配置当前 token 的有效期

```javascript
// 登录接口
app.post('/api/login',function(req.res){
// 用户登录成功之后，生成JWT字符串，通过 tokn 属性响应给客户端
	res.send({
		status:200.
		message:'登录成功!',
 		//调用jwt.sign() 生成 JWT 字符审，三个参数分别是：用户信息对象、加密密钥、配置对象
		token: jwt.sign({ username: userinfo.username }, secretKey, expiresIn: '30s' })
	})
})
```
#### 5、将`JWT`字符串还原为`JSON`对象
> 客户端海次在访问那些有权限接口的时候，都需要主动通过请求头中的`Authorization`字段，将`Token`字符串发送到服务器进行身份认证。
> 此时，服务器可以通过`express-jwt`这个中间件，自动将客户端发送过来的`Token`解析还原成`JSON`对象：

```javascript
// 使用app.use()来注册中间件
// expressJWT({ secret:secretKey })就是用来解析Token的中间件
// .unless({ path:[/^\/api\//] })用来指定哪些接口不需要访问权限
// 注意：只要配置成功了express-jwt这个中间件，就可以把解析出来的用户信息，挂载到req.user属性上
app.use(expressJWT({ secret: secretKey }).unless({ path: [/^\/api\//] })
```
#### 6、使用 req.user 获取用户信息
> 当`express-jwt`这个中间件配置成功之后，即可在那些有权限的接口中，使用`req.user`对像，来访问从`JWT`字符串中解析出来的用户信息了，示例代码如下：

```javascript
// 这是一个有权限的API接口
app.get('/admin/getinfo', function(req, res){
  // 当配置成功expressJWT后会有req.user这个对象
	console.log(req.user)
	res.send({
		status: 200,
		message: '获取用户信息成功！',
		data: req.user
	})
})
```
#### 7、捕获解析JWT失败后产生的错误
> 当使用`express-jwt`解析`Token`字符串时，如果客户端发送过来的`Token`字符串过期或不合法，会产生一个解析失败的错误，影响项目的正常运行。我们可以通过`Express`的错误中间件，捕获这个错误并进行相关的处理，示例代码如下：

```javascript
app.use((err, req, res, next)=>{
	//token解析失败导致的错误
	if(err.name ==='UnauthorizedError'){
		return res.send({ status:401, message: '无效的token' })
	}
	//其它原因导致的错误
	res.send({ status: 500, message: '未知错误' })
)
```