# npm 与包
## 简介与下载
> `node.js`中的第三方模块又叫做包
> 下载包 
>     `npm install 包名`  简写：`npm i 包名`
> 下载指定版本的包名，用`@`符号
>     `npm install moment@2.22.2`
> 卸载包
>     `npm uninstall 包名`

## 包的语义化版本规范
> 包的版本号是以“点分十进制”形式进行定义的，总共有三位数字，例如2.24.0
> 其中每一位数字所代表的的含义如下：
> 第1位数字：大版本
> 第2位数字：功能版本
> 第3位数字：Bug修复版本
> 版本号提升的规则：只要前面的版本号增长了，则后面的版本号归零

### 快速创建 package.json
> 注意：
>      ①上述命令只能在英文的目录下成功运行！所以，项目文件夹的名称一定要使用英文命名，不要使用中文，不能出现空格。
>      ②运行`npm install`命令安装包的时候，`npm`包管理工具会自动把包的名称和版本号，记录到`package.json`中。

```git
// 作用：在执行命令所处的目录中，快速新键package.json文件
npm init -y
```
### devDependencies 节点
>          如果某些包只在项目开发阶段会用到，在项目上线之后不会用到，则建议把这些包记录到`devDependencies`节点中。与之对应的，如果某些包在开发和项目上线之后都需要用到，则建议把这些包记录到`dependencies`节点中。
>         可以使用如下的命令，将包记录到`devDependencies`节点中：

```git
// 安装指定的包，并i记录到devDependencies节点中
npm i 包名 -D
// 注意：上述命令是简写形试，等价于下面完的写法
npm i 包名 --save-dev
```
### 规范的包结构
> 一个规范的包，它的组成结构，必须符合以下3点要求：
>     ① 包必须以单独的目录而存在
>     ② 包的顶级目录下要必须包含`package.jso`n这个包管理配置文件
>     ③ `package.json`中必须包含`name`,`version`,`main`这三个属性，分别代表包的名字、版本号、包的入口.

## 切换npm的下包镜像源
```git
// 查看当前的下包镜像源
npm config get registry
// 将下包的镜像源切换为淘宝镜像源
npm config set registry=https://registry.npm.taobao.org/
// 检查镜像源是否下载成功
npm config get registry
```
### nrm
> 为了更方便的切换下包的镜像源，我们可以安装`nrm`这个小工具，利用`nrm`提供的终端命令，可以快速查看和切换下包的镜像源。

```git
// 通过npm包管理器，将nrm安装为全局可用的工具
npm i nrm -g
// 查看所有可用的镜修源
nrm ls
// 将下包的镜修源切换为taobao镜像
nrm use taobao
```
## moment 操作时间
```git
npm i moment

// 时间格式化
moment().format('YYYY-MM-DD HH-mm-ss')
```
## i5ting_toc
> `i5ting_toc`是一个可以把`md`文档转为`html`页面的小工具，使用步骤如下：

```git
#将15 ting toc安装为全局包
npm install -g isting_toc
#调用i5 ting_toc, 轻松实现 md 转 html 的功能
i5 ting_toc -f 要转换的md文件路径 -o
```
## 开发属于自己的包
### 初始化包的基本结构
> 新建`itheima-tools`文件夹，作为包的根目录
> 在`itheima-tools`文件夹中，新建如下三个文件：
> - `package.json`(包管理配置文件)
> - `index.js`(包的入口文件)
> - `README.md`(包的说明文档)

发布包的步骤：<br />1）初始化`package.json`<br />2）创建`index.js`，编写相关代码<br />3）控制台登录`npm`，命令：`npm login`，注意`npm`的镜像源一定是`npm`官网的<br />4）切换到包的根目录，发布包，命令：`npm publish`
### 初始化package.json
```git
{
  "name": "cwg-utils",   // 名字
  "version": "1.0.0",  // 版本
  "main": "index.js",  //  包的入口文件
  "description": "cwg创建包",  // 描述
  "keywords": ["cwg", "utils"], // 检索的关键词
  "license": "ISC"  // 遵循的开源协议
}
```
### 登录npm(控制台登录)
```git
npm login
// 输入
// username: caiwenguo
// passwird: 173********i 
// email: 501615956@qq.com
// emailCode: ******  // 邮箱验证吗
```
### 发布包
```git
// 切换到包的跟目录
npm publish
```
### 删除包
```git
npm unpublish 包名 --force
```
> ① npm unpublish命令只能删除72小时以内发布的包
> ② npm unpublish删除的包，在24小时内不允许重复发布
> ③ 发布包的时候要慎重，尽量不要往pm上发布没有意义的包！

## 模块的加载机制
### 优先从缓存中加载
> 模块在第一次加载后会被缓存。这也意味着多次调用`require()`不会导致模块的代码被执行多次。
> 注意：不论是内置模块、用户自定义模块、还是第三方模块，它们都会优先从缓存中加载，从而提高模块的加载效率。

### 内置模块的加载机制
> 内置模块是由`Node.js`官方提供的模块，内置模块的加载优先级最高。
> 例如，`require('fs')`始终返回内置的`fs`模块，即使在`node modules`目录下有名字相同的包也叫做fs。

### 自定义模块的加载机制
> 使用`require()`加载自定义模块时，必须指定以/或/开头的路径标识符。在加载自定义模块时，如果没有指定`/`或`./`这样的路径标识符，则`node`会把它当作内置模块或第三方模块进行加载。
> 同时，在使用`require()`导入自定义模块时，如果省略了文件的扩展名，则`Node.js`会按顺序分别尝试加载以下的文件：
> ① 按照确切的文件名进行加载
> ② 补全`.js`扩展名进行加载
> ③ 补全`.json`扩展名进行加载
> ④ 补全`.node`扩展名进行加载
> ⑤ 加载失败，终端报错

### 第三方模块的加载机制
> 如果传递给`require()`的模块标识符不是一个内置模块，也没有以`./`或`/`开头，则`Node.js`会从当前模块的父目录开始，尝试从`/node_modules`文件夹中加载第三方模块。
> 如果没有找到对应的第三方模块，则移动到再上一层父目录中，进行加载，直到文件系统的根目录。
> 例如，假设在`C:\Users\itheima\project\foo.js`文件里调用了`require('tools')`,则`Node.js`会按以下顺序查找：
> ① `C:\Users\itheima\project\node modules\tools`
> ② `C:\Users\itheima\node_modules\tools`
> ③ `C:\Users\node_modules\tools`
> ④ `C:\node_modules\tools`
> ⑤ 加载失败，终端报错

### 目录作为模块加载机制
> 当把目录作为模块标识符，传递给`require()`进行加载的时候，有三种加载方式
> ①在被加载的目录下查找一个叫做`package.json`的文件，并得找`main`属性，作为`require()`加载的入口
> ②如果目录里没有`package.json`文件，或诸`main`入口不存在或无法解析，则`Node.js`将会试图加载目录下的`index.js`文件。
> ③如果以上两步都失败了，则Node.js会在终端打印错误消息，报告模块的缺失：`Error:.Cannot find module '***'`