module.exports = [
  { text: '首页', link: '/' },
  {
    text: '技术',
    link: '/technology/',
    items: [
      { text: 'JAVA',link:"/java/"},
      { text: 'Linux',link:"/linux/"},
    ],
  },
  {
    text: '学习',
    link: '/study/',
    items: [
      { text: 'Python',link:"/python/"},
      { text: 'Vue',link:"/vue/"},
    ],
  },
  {
    text: '收藏',
    link: '/pages/b4e632/',
    items: [
      { text: '文章', link: '/pages/2c9c8d/' },
      { text: '视频', link: '/pages/e3d44a/' },
      { text: '音乐', link: '/pages/7fbfa7/' },
    ],
  },
  {
    text: '喜欢的',
    link: '/love/',
    items: [
      { text: '游戏', 
         link: '/pages/cd90ce/' ,
         items:[
          { text: '只狼', link: '/pages/cd90ce/' },
          { text: '老头环', link: '/pages/c64d41/' }
         ]
      },      
      { 
        text: '与她相关', 
        link: '/pages/7d6a40/' ,
        items:[
          { text: '相遇', link: '/pages/7d6a40/' },
          { text: '相识', link: '/pages/7d6a40/' },
          { text: '未完待续', link: '/pages/7d6a40/' },
        ]
     }
    ],
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
];
