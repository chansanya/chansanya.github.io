
// Plugin Config
module.exports = [
  // 本地插件（供学习）
  // [require('./plugins/love-me'), { // 鼠标点击爱心特效
  //   color: '#11a8cd', // 爱心颜色，默认随机色
  //   excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
  // }],

  // 'vuepress-plugin-baidu-autopush', // 百度自动推送

  // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
  [
    'thirdparty-search',
    {
      thirdparty: [
        // 可选，默认 []
        {
          title: '在MDN中搜索',
          frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
          behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
        },
        {
          title: '在Runoob中搜索',
          frontUrl: 'https://www.runoob.com/?s=',
        },
        {
          title: '在Vue API中搜索',
          frontUrl: 'https://cn.vuejs.org/v2/api/#',
        },
        {
          title: '在Bing中搜索',
          frontUrl: 'https://cn.bing.com/search?q=',
        },
        {
          title: '通过百度搜索本站的',
          frontUrl: 'https://www.baidu.com/s?wd=site%3Axugaoyi.com%20',
        },
      ],
    },
  ],

  [
    'one-click-copy', // 代码块复制按钮
    {
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
    },
  ],
  [
    'vuepress-plugin-zooming', // 放大图片
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
      },
    },
  ],
  [
    '@vuepress/last-updated', // "上次更新"时间格式
    {
      transformer: (timestamp, lang) => {
        const dayjs = require('dayjs') // https://day.js.org/
        return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
      },
    },
  ],
  // [
  //     //参考: https://moefyit.github.io/moefy-vuepress/packages/meting.html
  //   'meting',
  //   {
  //     //即 Meting 的 api，默认为 @metowolf 提供的 api，你也可以通过自建修改该选项
  //     // metingApi: 'https://api.injahow.cn/meting/',
  //     meting: {
  //       //描述：MetingApi 中的 type 参数，即资源类型（播放列表、单曲、专辑等）
  //       //可选值： "song" | "album" | "artist" | "playlist"
  //       type: 'playlist',
  //       server: 'netease',
  //       //描述：MetingApi 中的 id 参数，即资源 ID
  //       mid: '8233821214',
  //       // server: 'tencent',
  //       // mid: '8054843490',
  //     }, // 不配置该项的话不会出现全局播放器
  //     aplayer: {
  //       //是否开启吸底模式
  //       fixed: false,
  //       //是否开启迷你模式
  //       mini: true,
  //       //是否开启自动播放
  //       autoplay: true,
  //       //主题色
  //       theme: '#186071',
  //       //描述：设置 lrc 歌词解析模式
  //       // 可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）
  //       lrcType: 3,
  //       //是否折叠播放列表
  //       listFolded: true
  //     },
  //     mobile: {
  //       //不显示封面
  //       cover: false,
  //       //不显示歌词
  //       lrc: false
  //     },
  //     defaultCover: 'https://cdn.jsdelivr.net/gh/chansanya/file_store/images/thanks-removebg-preview.png',
  //   }
  // ]
]
