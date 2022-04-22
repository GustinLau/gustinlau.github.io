const nav = [
  { text: '首页', link: '/' },
  {
    text: 'LeetCode',
    link: '/leetcode/'
  },
  { text: '关于', link: '/about/' },
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
