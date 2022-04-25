<template>
  <div class='footer'>
    <div class='icons' v-if='social && social.icons'>
      <a
        :href='item.link'
        :title='item.title'
        :class="['iconfont', item.iconClass]"
        v-for='(item, index) in social.icons'
        :key='index'
        target='_blank'
      ></a>
    </div>
    <div v-if='footer'>
      Copyright © {{ copyRightYear }}
      <span v-html='footer.copyrightInfo'></span>
    </div>
    <!-- Vdoing主题遵循MIT协议，完全开源且免费。如果您对主题的修改并不大，希望您保留主题的链接。-->
    <div>
      Powered by
      <a
        href='https://github.com/vuejs/vuepress'
        target='_blank'
        title='博客系统'
      >
        VuePress
      </a>
      &
      Theme by
      <a
        href='https://github.com/xugaoyi/vuepress-theme-vdoing'
        target='_blank'
        title='本站主题'
      >
        Vdoing
      </a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    social() {
      return this.$themeConfig.social
    },
    footer() {
      return this.$themeConfig.footer
    },
    copyRightYear() {
      const year = new Date().getFullYear()
      return `${this.footer.createYear}${year > +this.footer.createYear ? '-' + year : ''}`
    }
  }
}
</script>

<style lang='stylus'>
// $mobileSidebarWidth = $sidebarWidth * 0.82
.footer
  font-family serif, revert
  padding 5rem 1.5rem 1.5rem
  text-align center
  color var(--textColor)
  box-sizing border-box
  font-size 0.9rem
  transition all 0.2s ease

  > span
    line-height 1.5rem

  .icons
    margin-bottom 4px

    .iconfont
      padding 0 10px
      font-size 30px

  a
    color inherit

    &:hover
      color $accentColor

@media (min-width ($MQMobile + 1px))
  .sidebar-open .footer
    width auto
    padding-left: ($sidebarWidth + 1.5rem)

@media (min-width 1520px)
  .have-rightmenu .footer
    padding-right: ($rightMenuWidth + 1.5rem)

.no-sidebar .footer
  width auto
  padding-left 1.5rem
</style>
