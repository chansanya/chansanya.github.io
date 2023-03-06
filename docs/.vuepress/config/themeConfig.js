const nav = require("./nav.js");
const htmlModules = require("./htmlModules.js");

module.exports = {
  // 导航配置
  nav,
  sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
  logo: '/img/logo.png', // 导航栏logo
  repo: 'chansanya', // 导航栏右侧生成Github链接
  searchMaxSuggestions: 10, // 搜索结果显示最大数
  lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
  docsDir: 'docs', // 编辑的文件夹

  editLinks: false, // 启用编辑
  editLinkText: '编辑',

  //*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//

  // 是否打开分类功能，默认 true
  category: false,
  // 是否打开标签功能，默认 true
  tag: true,
  // 是否打开归档功能，默认 true
  archive: true,
  // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'
  categoryText: '随笔',

  //页面风格，可选值：'card'卡片 | 'line' 线（未设置bodyBgImg时才生效），
  // 默认'card'。 说明：card时背景显示灰色衬托出卡片样式，line时背景显示纯色，并且部分模块带线条边框
  // pageStyle: 'card',

  // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时每隔15秒换一张。
  bodyBgImg: [
    'https://cdn.jsdelivr.net/gh/chansanya/file_store/images/blog/background/bg1.jpg',
    // 'https://cdn.jsdelivr.net/gh/chansanya/file_store/images/blog/background/bg2.png',
    // 'https://cdn.jsdelivr.net/gh/chansanya/file_store/images/blog/background/bg6.jpg',
  ],
  // body背景图透明度，选值 0 ~ 1.0, 默认0.5
  bodyBgImgOpacity: 0.9,
  // 文章标题前的图标是否显示，默认 true
  titleBadge: true,
  // 文章标题前图标的地址，默认主题内置图标
  // titleBadgeIcons: [
  //   '图标地址1',
  //   '图标地址2'
  // ],
  // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状
  // contentBgStyle: 1,
 // 最近更新栏
  updateBar: {
    // 显示到文章页底部，默认true
    showToArticle: true,
    // “更多文章”跳转的页面，默认'/archives'
    moreArticle: '/archives'
  },

  // 是否显示右侧文章大纲栏，默认 true (屏宽小于1300px下无论如何都不显示)
  rightMenuBar: true,
  // 初始状态是否打开左侧边栏，默认 true
  sidebarOpen: true,
  // 是否显示快捷翻页按钮，默认 true
  pageButton: true,

  // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>
  // 温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
  sidebar: 'structuring',
  // sidebar: { mode: 'structuring', collapsable: false },

  // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
  author: {
    // 必需
    name: '产彡',
    // 可选的
    link: 'https://github.com/chansanya',
  },

  // // 博主信息 (显示在首页侧边栏)
  // blogger: {
  //   avatar: 'https://avatars.githubusercontent.com/u/47585031?v=4',
  //   name: '产彡',
  //   slogan: '日积月累',
  // },
  //
  // // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
  // social: {
  //   // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
  //   icons: [
  //     {
  //       iconClass: 'icon-youjian',
  //       title: '发邮件',
  //       link: 'mailto:984038622@qq.com',
  //     },
  //     {
  //       iconClass: 'icon-github',
  //       title: 'GitHub',
  //       link: 'https://github.com/chansanya',
  //     },
  //     {
  //       iconClass: 'icon-erji',
  //       title: '听音乐',
  //       link: 'https://music.163.com/#/playlist?id=755597173',
  //     },
  //   ],
  // },

  // 页脚信息
  footer: {
    createYear: 2023, // 博客创建年份
    copyrightInfo:
      '产彡 | <a href="https://github.com/chansanya/chansanya.github.io/blob/master/LICENSE" target="_blank">MIT License</a> </br>   湘ICP备2021015472号 ', // 博客版权信息、备案信息等，支持a标签或换行标签</br>
  },

  // 扩展自动生成front-matter。（当md文件的front-matter不存在相应的字段时将自动添加。不会覆盖已有的数据。）
  extendFrontmatter: {
    author: {
      name: 'Yan',
      link: 'https://github.com/chansanya'
    }
  },

  // 插入hmtl 心情等
  // htmlModules
}