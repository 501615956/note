const moment = require('moment')
const {ga} = require('./secret')
moment.locale("zh-cn")

module.exports = {
  // 格式化时间
  '@vuepress/last-updated': {
    transformer: (timestamp) => moment(timestamp).format('YYYY-MM-DD HH-mm-ss')
  },
  // 回到顶部配置
  "@vuepress/back-to-top": true,
  // google-analytics 监控配置
  // "@vuepress/google-analytics": {
  //   'ga': ga
  // }
}