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
          {text: 'css', link: '/notes/frontend/css/cssName'},
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
    text: '后端学习',
    items: [
      { text: 'nodejs', link: '/notes/backend/nodejs/nodeBasic' }
    ]
  },
  {
    text: '其他学习',
    items: [
      { text: 'Git', link: '/notes/other/git/git' }
    ]
  },
  {
    text: '教程',
    items: [
      { text: '云盘挂载', link: '/notes/tutorials/cloudDiskMount' },
      { text: 'nvm安装', link: '/notes/tutorials/nvm' }
    ],
  },
  {
    text: '推荐',
    items: [
      {
        text: '工具推荐',
        items: [
          { text: '应用', link: '/notes/recommend/apply/computer' },
          { text: '插件', link: '/notes/recommend/plugin/vscode' },
        ]
      },
    ],
  },
]