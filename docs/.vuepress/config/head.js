module.exports =[
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    [
        'meta',
        {
            name: 'keywords',
            content: 'Java,Linux',
        },
    ],
    // 移动浏览器主题颜色
    ['meta', { name: 'theme-color', content: '#11a8cd' }],
    // 网站关联Google AdSense 与 html格式广告支持（你可以去掉）
    // [
    //     'script',
    //     {
    //         'data-ad-client': 'ca-pub-7828333725993554',
    //         async: 'async',
    //         src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    //     },
    // ],
    [
        'script',
        {
            async: 'async',
            src: 'https://fastly.jsdelivr.net/gh/chansanya/live2d-widget@latest/autoload.js',
        },
    ],

]
