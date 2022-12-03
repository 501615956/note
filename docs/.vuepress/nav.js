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
          {text: 'css', link: '/notes/frontend/css/css命名规范'},
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
  {
    text: '教程',
    items: [
      { text: '云盘挂载', link: '/notes/tutorials/云盘挂载' }
    ],
  },
  {
    text: '教程',
    items: [
      {
        text: '我的推荐',
        items: [
          // { text: 'Vue', link: '/notes/frontend/vue/vue' },
          // { text: 'React', link: '/notes/frontend/react/react' },
        ]
      },
      {
        text: '其他推荐',
        items: [
          { text: '300+编程实用工具', link: '/notes/recommend/300+编程实用工具' },
        ]
      },
    ],
  },
]