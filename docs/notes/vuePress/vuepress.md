---
sidebar: 'auto'
---
# VuePress 从 0 开始搭建个人网站

> CWG 从无到有的全过程
>
> [VuePress 官网传送门](https://vuepress.vuejs.org/zh/)

## 介绍

VuePress 由两部分组成：第一部分是一个极简静态网站生成器 (opens new window)，它包含由 Vue 驱动的主题系统和插件 API，另一个部分是为书写技术文档而优化的默认主题，它的诞生初衷是为了支持 Vue 及其子项目的文档需求。

每一个由 VuePress 生成的页面都带有预渲染好的 HTML，也因此具有非常好的加载性能和搜索引擎优化（SEO）。同时，一旦页面被加载，Vue 将接管这些静态内容，并将其转换成一个完整的单页应用（SPA），其他的页面则会只在用户浏览到的时候才按需加载。

## 快速上手
> **前提条件**
>
> VuePress 需要 [Node.js](https://nodejs.org/en/) >= 8.6

本文会帮助你从头搭建一个简单的 VuePress 文档。如果你想在一个现有项目中使用 VuePress 管理文档，从步骤 3 开始。

1. 创建并进入一个新目录
  ```shell
  mkdir vuepress-starter && cd vuepress-starter
  ```
2. 使用你喜欢的包管理器进行初始化
  ```shell
  yarn init # npm init
  ```
3. 将 VuePress 安装为本地依赖
  > VuePress官网已经不再推荐全局安装 VuePress
  ```shell
  yarn add -D vuepress# npm install -D vuepress
  ```
  > 注意
  >
  >如果你的现有项目依赖了 webpack 3.x，我们推荐使用 Yarn (opens new window)而不
  >是 npm 来安装 VuePress。因为在这种情形下，npm 会生成错误的依赖树。
4. 创建第一篇文档
  ```shell
  mkdir docs && echo '# Hello VuePress' > docs/README.md
  ```
5. 在 docs 目录下新建 README.md 文档，并写入一些内容
   
6. 在 package.json 中添加一些 scripts
  ```json
  {
    "scripts": {
      "dev": "vuepress dev docs",
      "build": "vuepress build docs"
    }
  }
  ```
7. 启动本地服务器
  ```shell
  yarn docs:dev # npm run docs:dev
  ```
  VuePress 会在 [http://localhost:8080](http://localhost:8080)启动一个热重载的开发服务器。

## 目录结构

    .
    ├── docs
    │   ├── .vuepress
    │   │   ├── public
    |   |   |   └── img
    │   │   ├── styles
    │   │   │   └── index.styl
    │   │   ├── nav.js
    │   │   ├── sidebar.js
    │   │   └── config.js
    |   |
    │   ├── notes
    │   │   ├── vue
    |   │   │   ├── images
    |   │   │   ├── sidebar.js
    |   │   │   ├── vuex.md
    |   │   │   ├── vue3.md
    |   │   │   └── ...
    |   |   |
    |   |   ├── react
    |   │   │   ├── images
    |   │   │   ├── sidebar.js
    |   │   │   ├── react-cli.md
    |   │   │   └── ...
    |   │   │
    |   │   ├── ...
    |   |   |
    │   │   └── README.md
    |   |
    │   └── README.md
    │
    ├── .gitignore
    |
    └── package.json


> -------------------------------------------
## `config.js` 文件配置

每个配置的作用都写在注释当中。

官方文档：[配置](https://vuepress.vuejs.org/zh/config/)、[插件](https://vuepress.vuejs.org/zh/plugin/)、[默认主题配置](https://vuepress.vuejs.org/zh/theme/default-theme-config.html)

```js
module.exports = {
  // 插件：置顶按钮、图片缩放
  plugins: ['@vuepress/back-to-top', '@vuepress/medium-zoom'],
  // 自定义网站 favicon
  head: [['link', { rel: 'icon', href: '/img/logo.png' }]],
  // 根路径，和仓库名一致
  base: '/bruceblog/',
  // 左上角标题
  title: 'BruceBlog',
  // markdown 相关配置
  markdown: {
    // 代码块行号
    lineNumbers: true,
  },
  // 默认主题相关配置
  themeConfig: {
    // 配置左上角的 logo
    logo: '/img/logo.png',
    // 导航栏
    nav: require('./nav.js'),
    // 侧边栏
    sidebar: require('./sidebar.js'),
    // sidebar: 'auto',
    // 标题深度，2 表示提取 h2 和 h3 标题
    sidebarDepth: 2,
    // 启用页面滚动效果
    smoothScroll: true,
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: true,
    // 导航栏显示 gitee 仓库
    repo: 'https://gitee.com/brucecai55520/bruceblog',
    repoLabel: 'Gitee',
  },
}
```

## 首页

`docs/README.md`文档：

```yaml
---
home: true
heroImage: /img/home_logo.png
heroText:   CWG
tagline: 一名前端er的学习笔记
actionText: Get Started →
actionLink: /notes/vuePress/vuepress
features:
  - title: 前端知识
    details: HTML、CSS、JavaScript、Vue、React...
  - title: 计算机基础
    details: 计算机网络、数据结构、操作系统...
  - title: 杂七杂八
    details: 前端面试常见的面试题、资源推荐...
    footer:  MIT Licensed | Copyright © 2022-present CWG
---
```

[官方文档](https://vuepress.vuejs.org/zh/theme/default-theme-config.html)

## 导航栏

这里没有直接把配置写在 `config.js` 文件中，而是提取成一个模块，便于后续维护，也避免 `config.js` 文件过于臃肿。

注意事项：

- 所有路径以 `/` 开头，`/` 代表 docs 目录
- 若没有指明具体文件，只有文件夹，则默认会寻找该文件夹下的 READMED.md 文档，如 `'/notes/'` → `'/notes/README.md'`

```js
// .vuepress/nav.js
module.exports = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: '前端学习',
    items: [
      {
        text: '基础',
        items: [
          {text: 'html', link: '/notes/frontend/html/html'},
          {text: 'css', link: '/notes/frontend/css/css'},
          {text: 'js', link: '/notes/frontend/js/js'},
        ]
      },
      {
        text: '框架',
        items: [
          { text: 'Vue', link: '/notes/frontend/vue/vue' },
          { text: 'React', link: '/notes/frontend/react/react' },
        ]
      }
    ],
  },
]
```

[官方文档](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E5%AF%BC%E8%88%AA%E6%A0%8F)

## 侧边栏

BruceBlog 为不同页面显示不同的侧边栏，并且每个页面的侧边栏封装为一个模块便于后续维护。

以 Vue 页面的侧边栏为例：

```js
// .vuepress/sidebar.js
module.exports = {
  '/notes/vue': require('../notes/vue/sidebar'),
  '/notes/react': require('../notes/react/sidebar'),
}
```

```js
// notes/vue/sidebar.js
module.exports = [
  {
    title: 'Vue核心基础',
    path: '/notes/vue/vue核心基础',
  },
  {
    title: 'Vuex',
    path: '/notes/vue/vuex',
  },
  {
    title: 'Vue Router',
    path: '/notes/vue/vue-router',
  },
  {
    title: 'Vue3',
    path: '/notes/vue/vue3',
  },
]
```

[官方文档](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F)

## 修改默认样式

在 `.vuepress/styles/index.styl` 文件可以方便地添加自定义样式

```css
blockquote {
  border-left: 0.2rem solid #3eaf7c;
  font-weight: 700;
}
```

[官方文档](https://vuepress.vuejs.org/zh/config/#styling)

## 部署

本人选择部署到 Gitee Pages，官方只有部署到 GitHub Pages 的[教程](https://vuepress.vuejs.org/zh/guide/deploy.html)，不过也是大同小异。

1. 在 `docs/.vuepress/config.js` 中设置正确的 `base`。

若发布到 `https://<USERNAME>.gitee.io/` ，可省略此步，因为 `base` 默认为 `"/"` 。

若发布到 `https://<USERNAME>.gitee.io/<REPO>/` ，`<REPO>` 为仓库名，则将 `base` 设置为 `"/<REPO>/"` 。

```js
module.exports = {
  // 仓库名为 cwg
  base: '/cwg/',
}
```

2. 在 `cwg` 目录创建文件`deploy.sh`

```shell
// deploy.sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.gitee.io
# git push -f git@gitee.com:<USERNAME>/<USERNAME>.gitee.io.git master

# 如果发布到 https://<USERNAME>.gitee.io/<REPO>
# git push -f git@gitee.com:<USERNAME>/<REPO>.git master:pages

cd -
```

> **提示**
>
> 你可以在你的持续集成的设置中，设置在每次 push 代码时自动运行上述脚本。
3. 在 package.json 中添加一些 scripts
  ```json
  {
    "scripts": {
      "deploy": "bash deploy.sh"
    }
  }
  ```

4. 运行
  > **注意**
  >
  > 如果`PowerShell`运行不了要使用`Git Bash`运行
  ```shell
  yarn deploy
  ```
  > 运行该命令会在该仓库下创建一个新的分支pages，> pages分支中就是可以部署的静态文件。
  > 
  > 我们需要开启git page服务，开启完成后选择pages分支部署。（注意该仓库需要设置为公开的）。