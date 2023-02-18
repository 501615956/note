---
sidebar: 'auto'
---

## 语义化的理解
* 用正确的标签做正确的事情！
* `HTML` 语义化就是让页面的内容结构化，便于对浏览器、搜索引擎解析；
* 在没有样式 `CSS` 情况下也以一种文档格式显示，并且是容易阅读的。
* 搜索引擎的爬虫依赖于标记来确定上下文和各个关键字的权重，利于 `SEO`。
* 使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解

## 前端需要注意哪些 `SEO`?
* 合理的使用TDK（title、description、keywords）
* 语义化的HTML代码，符合W3C规范：语义化代码让搜索引擎容易理解网页
* 重要内容不要用js输出：爬虫不会执行js获取内容
* 非装饰性图片必须加alt
* 提高网站速度：网站速度是搜索引擎排序的一个重要指标

## 什么是 `SEO` 中的 `TDK`
在SEO中，TDK其实就是title、description、keywords这三个标签，title表示标题标签，description是描述标签，keywords是关键词标签

## 从浏览器地址栏输入url到显示页面的步骤
### 基础版本
* 浏览器根据请求的URL交给DNS域名解析，找到真实IP，向服务器发起请求；
* 服务器交给后台处理完成后返回数据，浏览器接收文件（HTML、JS、CSS、图象等）；
* 浏览器对加载到的资源（HTML、JS、CSS等）进行语法解析，建立相应的内部数据结构（如HTML的DOM）；
* 载入解析到的资源文件，渲染页面，完成。


## 你知道哪些http状态码？
* `1xx`：1开头的是信息状态码
  * `100 Continue` 继续，一般在发送post请求时，已发送了http header之后服务端将返回此信息，表示确认，之后发送具体参数信息
* `2xx`：2开头的是请求成功
  * `200 OK` 正常返回信息
  * `201 Created` 请求成功并且服务器创建了新的资源
* `3xx`：3开头的是重定向
  * `301 Moved Permanently` 请求的网页已永久移动到新位置。
  * `302 Found` 临时性重定向。
* `4xx`：4开头的是客户端错误
  * `400 Bad Request` 服务器无法理解请求的格式，客户端不应当尝试再次使用相同的内容发起请求
  * `403 Forbidden` 禁止访问。
* `5xx`：5开头的是服务器错误
  * `500 Internal Server Error` 最常见的服务器端错误。

## `cookies`，`sessionStorage` 和 `localStorage` 的区别？
1. 都可以用来存储数据。
2. cookie一条数据大小不能超过4KB ，最多不能存储超过20条，如果没有设置过期时间，那么在浏览器关闭后消失。
3. sessionStorage是会话存储，一条大小不能超过5M，数量没有限制，关掉页面数据消失。
4. localStorage本地存储，一条大小不超过5M，数量没有限制，除非主动删除，否则数据不会消失。

## W3C标准有哪些
标准分为三个层面，结构(html)、行为(js)、表现(css)
标准有:
* 文档类型需要声明（DOCTYPE）
* 编码格式需要声明 <meta charset=”utf-8”>
* javascript代码需要定义
```html
<script language=”javascript” type = ”text/javascript”></script>
```
* css代码需要定义
```css
<style type=”text/css”></style>
```
* 标签名字和标签内部属性名字小写等
