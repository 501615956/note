## `Vue`怎么进行双向数据绑定，双向数据绑定的原理是什么
* 使用`v-model`进行双向绑定
* 原理:采用数据劫持，结合发布者-订阅者模式的方式，通过`Object.defineProperty()`来劫持各个属性的`setter/getter`，在数据变动时发布消息给订阅者，触发相应监听回调。
* 当把一个普通 `js`对象传给 `Vue` 实例来作为它的 `data` 选项时，`Vue` 将遍历它的属性，用 `Object.defineProperty()` 将它们转为 `setter/getter`。
* 用户看不到 `setter/getter`，但是在内部它们让 `Vue` 追踪依赖，在属性被访问和修改

## `v-if`和`v-show`有什么区别?
* `v-if` 当值为`true`，元素添加，值为`false`，元素删除，如果用在组件上,会调用组件的生命周期函数
* `v-show` 当值为`true`，元素显示，值为`false`，为元素添加了一个`display:none`属性
> 当需要频繁显示一个元素时建议使用`v-show`，如果不需要可以使用`v-if`

## `data`为什么必须为函数
* 确保每一个组件独享一个数据对象，而不是共享一个数据对象

## `watch`和`computed`的区别什么
* `watch`监听属性，一旦属性值发生改变立马调用
* `computed`计算属性，一旦构成属性的任意一块内容发生改变立马重新计算，需要一个返回值

## `keep-alive`的作用是什么
* 保持组件存活，即便组件消失也不移除

## 什么是`MVVM`
> `MVVM`是一种设计模式

`M`：`model`数据模型,为页面显示的数据<br/>
`V`：`view`视图,为当前页面<br/>
`VM`：`viewModel`,监听数据变化，用户交互的内容，实质就是一个视图控制器`Controller`<br/>

## `Vue`生命周期钩子函数有哪些

* `beforeCreate` 	组件创建之间
* `Created`	 	组件创建以后
* `beforeMount`  	组件渲染之前
* `Mounted`  		组件渲染以后
* `beforeUpdate`  	组件更新之前
* `Updated`  		组件更新以后
* `beforeDestroy`  	组件摧毁之前
* `Destroyed` 		组件摧毁以后
* `Activated` (艾克提未忒特)		组件激活 （配合keep-alive使用）
* `Deactivated` 	组件未激活（配合keep-alive使用）

## `Vue`组件之间数据传递的方式有几种，怎么进行传递
* 父传子: 子组件通过`props`方式接受
* 子传父：子组件发射一个事件`$emit`,父组件接受事件以后调用相应的函数
* 非父子: 使用一个空的Vue对象在第一个组件的点击事件中，使用`$emit`方式来发射事件，在第二个组件的`mounted`函数里面使用`$on`来接收事件

## 三种路由传值？
* 在路径后面使用： 声明一个变量，调用路径后面跟一个参数  拿到值的话 this.$route.params.变量名，
* 使用path来匹配路由，然后通过query来传递参数 ， 拿到值要 this.$route.qurey.变量名
* 使用name名来匹配路由，要使用params来传递参数，拿到值的话使用this.$route.params.变量名

## `Vue`当中的事件修饰符有哪些？
* `.once`表示点击事件只调用一次 
* `.prevent`表示阻止默认事件提交
* `.stop`阻止事件传递<br/>
······

## 路由当中的`hash`（哈希）模式和`history`（历史）模式有什么区别？
* `Hash`: `url`地址后面会跟一个#，地址切换不会导致页面请求
* `History`: 地址后面没有#，地址切换会导致页面请求 

## `Vue-Router`的钩子函数有哪些
1. **全局守卫**
  * beforeEach 	全局前置守卫
  * beforeResolve	全局解析守卫
  * afterEach   	全局后置守卫
2. **独享守卫**
  * beforeEnter
3. **组件内守卫**
  * beforeRouteEnter		组件前置守卫  (该守卫没有this)          
  * beforeRouteUpdate   	路由改变但是组件被复用时           
  * beforeRouteLeave    	组件后置守卫

## Vue当中的状态管理的作用，以及属性的作用是什么
> `Vuex`状态管理是为了统一管理页面所需要的数据，并能够在整个项目当中任意地方来使用这个数据，有5个属性
* `State`：用来存放初始数据
* `Mutations`：同步方法，用来修改`state`值
* `Actions`：异步方法，需要调用`Mutations`中方法来修改`State`值
* `Getters`：计算属性，类似于组件当中的`computed`属性 
* `Modules`：用来管理其他的`Vuex`对象

## Vue什么是动态组件？
* `<component :is=""></component>` 根据`is`属性的值来决定成为什么组件

## Vue中按键修饰符
`enter`、`tab`、`delete`、`esc`、`space`、`up`、`down`、`left`、`right`

## `Vue`项目当中怎么解决跨域问题？
在vue.config.js文件中设置proxy属性

## `Vue`项目怎么打包`app`
1. 使用命令`npm run build` 生成一个dist文件夹
2. 使用`hbuilder`创建一个`5+app`项目，选择默认模板
3. 用dist文件夹里面的东西来替换`hbuilder`创建的项目里面的内容
4. 选择原生app-云打包
## `vant`、`element`组件库分别有什么区别
* `vant`：主要做移动端商城类项目
* `element`:是主要做pc端网页
* `amaze`：主要做移动端

## `vue`全家桶一般都有什么，作用是什么
* `Vue-router` 路由管理 创建配置路由 
* `Vuex` 状态管理 统一管理 页面所需的数据  供全局使用
* `Vue-cli` 用来搭建vue项目
* `Axios` 用来数据请求
