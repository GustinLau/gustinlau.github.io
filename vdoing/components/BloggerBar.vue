<template>
  <aside class="blogger-wrapper card-box">
    <div class="avatar">
      <img :src="blogger.avatar" alt="头像" title="我好看吗"/>
    </div>
    <div class="blogger">
      <span class="name">{{ blogger.name }}</span>
      <span class="slogan">{{ blogger.slogan }}</span>
    </div>
    <div class="icons" v-if="social && social.icons && social.icons.length">
      <a
        v-for="(item, index) in social.icons"
        :key="index"
        :href="item.link"
        :title="item.title"
        :class="['iconfont', item.iconClass]"
        target="_blank"
      />
    </div>
  </aside>
</template>

<script>
export default {
  computed: {
    blogger() {
      return this.$themeConfig.blogger
    },
    social() {
      return this.$themeConfig.social
    }
  }
}
</script>

<style lang='stylus'>
.blogger-wrapper
  height auto
  display flex
  flex-direction column
  align-items center
  padding-top 10
  overflow hidden

  .avatar
    position relative
    width 180px
    height 180px
    margin-top 10px
    z-index 1
    border-radius 50%
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.08)
    overflow hidden
    border: 7px solid var(--avatar-border-color)
    img
      width 100%
      height 100%

  .icons
    display flex
    align-items center
    justify-content center
    width calc(100% - 20px)
    height 35px
    line-height 35px
    margin-top 15px
    padding-top 0.5rem
    margin-bottom -0.4rem
    border-top 1px solid var(--borderColor)

    a
      width 45px
      font-size 30px
      color var(--textColor)
      display block
      text-align center

      &:hover
        color $accentColor

  .blogger
    padding 0.3rem 0.95rem 0 0.95rem

    .name
      font-size 1.4rem
      display block
      font-weight bold
      margin 8px 0 0

    .slogan
      display block
      margin-top 10px
      color var(--textColor)

      &:before, &:after
        line-height 0
        font-size 1.8rem
        color var(--textColor)
        font-family sans-serif

      &:before
        content '“'
        margin-right 5px
        vertical-align middle

      &:after
        content '”'
        margin-left 5px
        vertical-align bottom
</style>
