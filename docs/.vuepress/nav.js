const nav = [
  { text: '首页', link: '/' },
  { text: '前端', link: '/web/' },
  { text: '算法', link: '/algorithm/' },
  { text: '关于', link: '/about/' },
  // { text: '国内站点', type: 'mirror', link: 'http://127.0.0.1:8081' },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' }
    ]
  }
]
module.exports = nav
