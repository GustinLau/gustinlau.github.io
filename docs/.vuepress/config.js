const nav = require('./nav')
const { resolve } = require('path')

const config = {
  // 使用本地主题
  theme: resolve(__dirname, '../../vdoing'),
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '星星杂货铺',
      description: '我的个人博客。'
    }
  },
  dest: 'dist',
  // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）
  // base: '/',
  // 主题配置
  themeConfig: {
    // 导航配置
    nav,
    // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    sidebarDepth: 2,
    // 导航栏logo
    logo: '/img/logo.png',
    // 导航栏右侧生成Github链接
    // repo: 'gustinlau',
    // 搜索结果显示最大数
    searchMaxSuggestions: 10,
    // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    lastUpdated: '上次更新',
    // 编辑的文件夹
    docsDir: 'docs',
    // 启用编辑
    editLinks: false,
    // 编辑按钮描述
    editLinkText: '编辑',

    /**
     * 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/
     */

    // 是否打开分类功能，默认true
    // category: false,
    // 是否打开标签功能，默认true
    // tag: false,
    // 是否打开归档功能，默认true
    // archive: false,
    // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'
    // categoryText: '随笔',
    // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时每隔15秒换一张。
    // bodyBgImg: [
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
    // ],
    // body背景图透明度，选值 0.1~ 1.0, 默认0.5
    // bodyBgImgOpacity: 0.5,
    // 文章标题前的图标是否显示，默认true
    // titleBadge: false,
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
      showToArticle: false,
      // “更多文章”跳转的页面，默认'/archives'
      moreArticle: '/archives'
    },
    // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
    // rightMenuBar: false,
    // 初始状态是否打开左侧边栏，默认true
    sidebarOpen: false,
    // 是否显示快捷翻页按钮，默认true
    pageButton: false,
    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>
    // 温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebar: 'structuring',
    // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
    author: {
      name: 'Gustin Lau', // 必需
      link: 'https://github.com/gustinlau' // 可选的
    },
    // 博主信息 (显示在首页侧边栏)
    blogger: {
      avatar: '/img/avatar.jpg',
      name: 'Gustin Lau',
      slogan: '知行合一'
    },
    // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
    social: {
      // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
      // iconfontCssFile: '//at.alicdn.com/t/xxx.css',
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:gustinlau@gmail.com'
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/gustinlau'
        }
      ]
    },
    // 页脚信息
    footer: {
      // 博客创建年份
      createYear: 2022,
      // 博客版权信息，支持a标签或换行标签</br>
      copyrightInfo: 'Gustin Lau'
    }
  },
  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head: [
    //favicons，资源放在public文件夹
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'meta',
      {
        name: 'keywords',
        content:
          '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown'
      }
    ],
    // 移动浏览器主题颜色
    ['meta', { name: 'theme-color', content: '#11a8cd' }]
    // 百度统计的站长验证（你可以去掉）
    // ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }],
    // 网站关联Google AdSense 与 html格式广告支持（你可以去掉）
    // [
    //   'script',
    //   {
    //     'data-ad-client': 'ca-pub-7828333725993554',
    //     async: 'async',
    //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    //   },
    // ]
  ],
  // 插件配置
  plugins: [
    // 代码块复制按钮
    [
      'one-click-copy',
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false // whether to display on the mobile side, default: false.
      }
    ],
    // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
    [
      'demo-block',
      {
        settings: {
          // 在线示例(jsfiddle, codepen)中的js依赖
          // jsLib: ['http://xxx'],
          // 在线示例中的css依赖
          // cssLib: ['http://xxx'],
          // 在线示例中的vue依赖
          // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js',
          // 是否显示 jsfiddle 链接
          jsfiddle: false,
          // 是否显示 codepen 链接
          codepen: true,
          // 是否展示为横向样式
          horizontal: false
        }
      }
    ],
    // 放大图片
    [
      'vuepress-plugin-zooming',
      {
        // 排除class是no-zoom的图片
        selector: '.theme-vdoing-content img:not(.no-zoom)',
        options: {
          bgColor: 'rgba(0,0,0,0.6)'
        }
      }
    ],
    // "上次更新"时间格式
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          // https://day.js.org/
          const dayjs = require('dayjs')
          return dayjs(timestamp).format('YYYY/MM/DD HH:mm:ss')
        }
      }
    ],
    [
      'md-enhance',
      {
        // 是否显示行数（覆盖系统配置）
        lineNumbers: false,
        // 启用下角标功能
        sub: true,
        // 启用上角标
        sup: true,
        // 启用代码块分组
        codegroup: true,
        // 启用脚注
        footnote: true,
        // 启用 TeX 支持
        tex: true
      }
    ]
    // 评论
    // [
    //   'vuepress-plugin-comment',
    //   {
    //     choosen: 'gitalk',
    //     options: {
    //       // clientID: '0067b074980ccb97110c',
    //       // clientSecret: '2e6cf0f7a0528d62e4acf36e16f8bef42d9a3fa3',
    //       // GitHub 仓库
    //       repo: 'blog-gitalk-comment',
    //       // GitHub仓库所有者
    //       owner: 'GustinLau',
    //       // 对仓库有写权限的人
    //       admin: ['GustinLau'],
    //       // distractionFreeMode: true,
    //       // 'first'正序 | 'last'倒序
    //       pagerDirection: 'last',
    //       //  页面的唯一标识,长度不能超过50
    //       id: '<%- (frontmatter.id || frontmatter.permalink || frontmatter.to.path).slice(-16) %>',
    //       // GitHub issue 的标题
    //       title: '「评论」<%- frontmatter.title %>',
    //       // GitHub issue 的标签
    //       labels: ['Gitalk', 'Comment'],
    //       // GitHub issue 的内容
    //       body: '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>'
    //     }
    //   }
    // ],
    // 百度统计 （你可以去掉）
    // [
    //   'vuepress-plugin-baidu-tongji',
    //   {
    //     hm: baiduCode || '503f098e7e5b3a5b5d8c5fc2938af002',
    //   },
    // ],
    // 本地插件（供学习）
    // 鼠标点击爱心特效
    // [
    //   require('./plugins/love-me'),
    //   {
    //     // 爱心颜色，默认随机色
    //     color: '#11a8cd',
    //     // 要排除元素的class, 默认空''
    //     excludeClassName: 'theme-vdoing-content'
    //   }
    // ],
    // 百度自动推送
    // 'vuepress-plugin-baidu-autopush',
    // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
    // [
    //   'thirdparty-search',
    //   {
    //     thirdparty: [
    //       // 可选，默认 []
    //       {
    //         title: '在MDN中搜索',
    //         frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
    //         behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
    //       },
    //       {
    //         title: '在Runoob中搜索',
    //         frontUrl: 'https://www.runoob.com/?s=',
    //       },
    //       {
    //         title: '在Vue API中搜索',
    //         frontUrl: 'https://cn.vuejs.org/v2/api/#',
    //       },
    //       {
    //         title: '在Bing中搜索',
    //         frontUrl: 'https://cn.bing.com/search?q=',
    //       },
    //       {
    //         title: '通过百度搜索本站的',
    //         frontUrl: 'https://www.baidu.com/s?wd=site%3Axugaoyi.com%20',
    //       },
    //     ],
    //   },
    // ],
  ],

  markdown: {
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'] // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: ['.vuepress/config.js']
}

module.exports = config
