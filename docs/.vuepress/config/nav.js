module.exports = [
  { text: '首页', link: '/' },
  {
    text: '知识库',
    link: '/knowledge/',
    items: [
      { text: 'JAVA',link:"/java/"},
    ],
  },
  {
    text: '学习',
    link: '/study/',
    items: [
      // { text: 'python',link:"/python/"},
      // { text: 'vue',link:"/vue/"},
      { text: 'HTML',link:"/html/"},
    ],
  },
  {
    text: '关于',
    link: '/about/',
  },
  {
    text: '索引',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
];
