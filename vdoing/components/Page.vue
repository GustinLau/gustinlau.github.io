<template>
  <div>
    <main class="page">
      <div :class="`theme-vdoing-wrapper ${bgStyle}`">
        <ArticleInfo v-if="isArticle()"/>
        <component
          class="theme-vdoing-content"
          v-if="pageComponent"
          :is="pageComponent"
        />

        <div class="content-wrapper">
          <RightMenu v-if="showRightMenu"/>

          <h1 v-if="showTitle">
            <img
              :src="currentBadge"
              v-if="$themeConfig.titleBadge !== false"
            />
            <span>
              {{ $page.title }}
              <span v-if="linkedTitle" class="link" @click="openExternalLink">
                 <OutboundLink/>
                <span class="sr-only">(opens new window)</span>
              </span>
            </span>
            <span class="title-tag" v-if="$frontmatter.titleTag">
              {{ $frontmatter.titleTag }}
            </span>
          </h1>
          <Content class="theme-vdoing-content"/>
        </div>
        <PageEdit/>
        <CopyRight v-if="!hideCopyright"/>
        <PageNav v-if="!hidePageNav" v-bind="{ sidebarItems }"/>
      </div>

      <UpdateArticle
        :length="3"
        :moreArticle="updateBarConfig && updateBarConfig.moreArticle"
        v-if="isShowUpdateBar"
      />
    </main>
  </div>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import ArticleInfo from './ArticleInfo.vue'
import Catalogue from './Catalogue.vue'
import UpdateArticle from './UpdateArticle.vue'
import RightMenu from './RightMenu.vue'
import CopyRight from "./CopyRight";
import TitleBadgeMixin from '../mixins/titleBadge'

export default {
  mixins: [TitleBadgeMixin],
  data() {
    return {
      updateBarConfig: null
    }
  },
  props: ['sidebarItems'],
  components: {CopyRight, PageEdit, PageNav, ArticleInfo, Catalogue, UpdateArticle, RightMenu},
  created() {
    this.updateBarConfig = this.$themeConfig.updateBar
  },
  computed: {
    bgStyle() {
      const {contentBgStyle} = this.$themeConfig
      return contentBgStyle ? 'bg-style-' + contentBgStyle : ''
    },
    isShowUpdateBar() {
      return !!(this.updateBarConfig && (this.updateBarConfig.showToArticle === false ? false : true))
    },
    showTitle() {
      return !this.$frontmatter.pageComponent
    },
    hideCopyright(){
      return this.$frontmatter.copyright === false
    },
    linkedTitle() {
      return !!this.$frontmatter.link
    },
    showRightMenu() {
      const {$frontmatter, $themeConfig, $page} = this
      const {sidebar, toc} = $frontmatter
      return (
        $themeConfig.rightMenuBar !== false &&
        $page.headers &&
        ($frontmatter && sidebar && sidebar !== false) !== false &&
        ($frontmatter && toc && toc !== false) !== false
      )
    },
    pageComponent() {
      return this.$frontmatter.pageComponent ? this.$frontmatter.pageComponent.name : false
    },
    hidePageNav(){
      return this.$frontmatter.hidePageNav === true
    }
  },
  methods: {
    isArticle() {
      return this.$frontmatter.article !== false
    },
    openExternalLink() {
      window.open(this.$frontmatter.link, 'blank')
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block
  @media (max-width $MQMobile)
    padding-top $navbarHeight
  @media (min-width $MQMobile)
    padding-top: ($navbarHeight + 1.5rem)

  > *
    @extend $vdoing-wrapper

.theme-vdoing-wrapper
  .content-wrapper
    position relative
  .digest
    display none
  .footnotes
    .footnote-item
      margin-top 0
      padding-top 0
      p
        margin-top .2rem
  h1
    .link
      cursor pointer
      line-height 16px
      font-size 16px
      vertical-align top

    .title-tag
      height 1.5rem
      line-height 1.5rem
      border 1px solid $activeColor
      color $activeColor
      font-size 1rem
      padding 0 0.4rem
      border-radius 0.2rem
      margin-left 0.5rem
      transform translate(0, -0.25rem)
      display inline-block

    img
      margin-bottom -0.2rem
      margin-right 0.2rem
      width 1.875rem
      height 1.875rem

.theme-vdoing-wrapper
  --linesColor rgba(50, 0, 0, 0.05)

  &.bg-style-1 // 方格
    background-image linear-gradient(90deg, var(--linesColor) 3%, transparent 3%), linear-gradient(0deg, var(--linesColor) 3%, transparent 3%)
    background-position center center
    background-size 20px 20px

  &.bg-style-2 // 横线
    background-image repeating-linear-gradient(0, var(--linesColor) 0, var(--linesColor) 1px, transparent 0, transparent 50%)
    background-size 30px 30px

  &.bg-style-3 // 竖线
    background-image repeating-linear-gradient(90deg, var(--linesColor) 0, var(--linesColor) 1px, transparent 0, transparent 50%)
    background-size 30px 30px

  &.bg-style-4 // 左斜线
    background-image repeating-linear-gradient(-45deg, var(--linesColor) 0, var(--linesColor) 1px, transparent 0, transparent 50%)
    background-size 20px 20px

  &.bg-style-5 // 右斜线
    background-image repeating-linear-gradient(45deg, var(--linesColor) 0, var(--linesColor) 1px, transparent 0, transparent 50%)
    background-size 20px 20px

  &.bg-style-6 // 点状
    background-image radial-gradient(var(--linesColor) 1px, transparent 1px)
    background-size 10px 10px

// 背景纹适应深色模式
.theme-mode-dark
  .theme-vdoing-wrapper
    --linesColor rgba(125, 125, 125, 0.05)

/**
 * 右侧菜单的自适应
 */
@media (min-width 720px) and (max-width 1279px)
  .have-rightmenu
    .page
      padding-right 0.8rem !important

@media (max-width 1279px)
  .have-rightmenu
    .right-menu-wrapper
      display none

@media (min-width 1280px)
  .have-rightmenu
    .sidebar .sidebar-sub-headers
      display none

// 左侧边栏只有一项且没有右侧边栏时
.theme-container.only-sidebarItem:not(.have-rightmenu)
  .sidebar, .sidebar-button
    display none
  @media (min-width ($MQMobile + 1px))
    .page
      padding-left 0.8rem !important
  @media (max-width $MQMobile)
    .page
      padding-left 0rem !important

    .sidebar, .sidebar-button
      display block

// 左侧边栏只有一项且有右侧边栏时
.theme-container.only-sidebarItem.have-rightmenu
  @media (min-width 720px) and (max-width 1279px)
    .sidebar, .sidebar-button
      display block
  @media (min-width 1280px)
    .sidebar, .sidebar-button
      display none
</style>
