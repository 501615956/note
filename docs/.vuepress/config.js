const moment = require('moment');
moment.locale("zh-cn")

module.exports = {
  // 根路径，和仓库名一致
  base: '/cwg/',
  title: 'Hello CWG',
  description: 'cwg的学习笔记、前端、后端、教程、推荐等内容',
  // 自定义网站 favicon
  head: [
    ['link', { rel: 'icon', href: '/img/logo.png' }],
    ['link', { name: 'author', content: 'cwg、蔡蔡、果果' }],
    ['link', { name: 'keywords', content: 'cwg、cwg笔记、蔡蔡笔记、vuePress介绍、vuePress说明、vuePress、前端、学习、' }]
  ],
  // markdown 相关配置
  markdown: {
    // 代码块行号
    lineNumbers: true,
  },
  plugins: {
    // 格式化时间
    '@vuepress/last-updated': {
      transformer: (timestamp) => moment(timestamp).format('YYYY-MM-DD HH-mm-ss')
    },
    "@vuepress/back-to-top": true,
    "@vuepress/google-analytics": {
      'ga': 'G-BQYE2LQD4D'
    }
  },
  // 默认主题相关配置
  themeConfig: {
    // 配置左上角的 logo
    logo: '/img/left_logo.png',
    // 导航栏
    nav: require('./nav.js'),
    // 侧边栏
    sidebar: require('./sidebar.js'),
    // 是否自动创建sidebar
    // sidebar: 'auto',
    // 标题深度，2 表示提取 h2 和 h3 标题
    sidebarDepth: 2,
    // 启用页面滚动效果
    smoothScroll: true,// 最后更新时间
    lastUpdated: '更新时间',
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: true,
    // 导航栏显示 gitee 仓库
    // repo: 'https://gitee.com/brucecai55520/bruceblog',
    // repoLabel: 'Gitee',
  }
}