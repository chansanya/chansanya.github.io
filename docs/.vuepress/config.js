const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');
const head = require('./config/head.js');

module.exports = {
  theme: 'vdoing',
  title: "YAN",
  description: '每天多学一点点',
  // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）
  // base: '/blog/',
  // 主题配置
  themeConfig,
  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head,
  // 插件配置
  plugins,
  markdown: {
    // MD代码行数显示
    // lineNumbers: true,
    // 提取标题到侧边栏的级别，默认['h2', 'h3']
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'],
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.js',
    '.vuepress/config/htmlModules.js',
  ]
}
