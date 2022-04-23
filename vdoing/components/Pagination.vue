<template>
  <div class="pagination">
    <span
      class="card-box prev iconfont icon-jiantou-zuo"
      :class="{disabled: currentPage === 1}"
      @click="goPrex()"
    >
    </span>
    <div class="pagination-list">
      <span class="card-box" :class="{active: currentPage === 1}" @click="goIndex(1)">1</span>
      <span v-if="totalPages > 5 && currentPage > 3" class="ellipsis ell-two" @click="goIndex(showPages[0]-1)"></span>
      <span
        class="card-box"
        v-for="item in showPages"
        :key="item"
        :class="{active: currentPage === item}"
        @click="goIndex(item)"
      >
        {{ item }}
      </span>
      <span v-if="totalPages > 5 && currentPage < totalPages - 2" class="ellipsis ell-four"
            @click="goIndex(showPages[showPages.length - 1]+1)"></span>
      <span v-if="totalPages>1" class="card-box" :class="{active: currentPage === totalPages}"
            @click="goIndex(totalPages)">{{ totalPages }}</span>
    </div>
    <span
      class="card-box next iconfont icon-jiantou-you"
      :class="{disabled: currentPage === totalPages}"
      @click="goNext()"
    >
    </span>
  </div>
</template>

<script>
export default {
  props: {
    total: { // 总长度
      type: Number,
      default: 10
    },
    perPage: { // 每页长
      type: Number,
      default: 10
    },
    currentPage: { // 当前页
      type: Number,
      default: 1
    }
  },
  computed: {
    totalPages() { // 总页数
      return Math.ceil(this.total / this.perPage)
    },
    showPages() {
      const arr = []
      if (this.totalPages <= 5) {
        for (let i = 2; i < this.totalPages; i++) {
          arr.push(i)
        }
        return arr
      }
      let start = this.currentPage - 1
      for (let i = Math.max(2, start); i <= Math.min(this.currentPage + 1, this.totalPages - 1); i++) {
        arr.push(i)
      }
      if (this.currentPage < 3) {
        if (this.currentPage === 1 && this.totalPages > 3) {
          arr.push(3)
        }
        if (this.totalPages > 4) {
          arr.push(4)
        }
      }
      if (this.currentPage > this.totalPages - 2) {
        if (arr[0] > this.totalPages - 2) {
          arr.unshift(this.totalPages - 2)
        }
        if (arr[0] > this.totalPages - 3) {
          arr.unshift(this.totalPages - 3)
        }
      }
      return arr
    },
  },
  methods: {
    threeNum() { // 三号位页码计算
      let num = 3
      const currentPage = this.currentPage
      const pages = this.totalPages
      if (currentPage < 3) {
        num = 3
      } else if (currentPage > (pages - 3)) {
        num = pages - 2
      } else {
        num = currentPage
      }
      return num
    },
    goPrex() {
      let currentPage = this.currentPage
      if (currentPage > 1) {
        this.handleEmit(--currentPage)
      }
    },
    goNext() {
      let currentPage = this.currentPage
      if (currentPage < this.totalPages) {
        this.handleEmit(++currentPage)
      }
    },
    goIndex(i) {
      if (i !== this.currentPage) {
        this.handleEmit(i)
      }
    },
    handleEmit(i) {
      this.$emit('getCurrentPage', i)
    }
  }
}
</script>

<style lang='stylus'>
.pagination
  position relative
  height 60px
  text-align center

  span
    line-height 1rem
    opacity 0.9
    cursor pointer

    &:hover
      color $accentColor

    &.ellipsis
      opacity 0.5

      &::before
        content '...'
        font-size 1.2rem
      @media (any-hover hover)
        &.ell-two
          &:hover
            &::before
              content '«'

        &.ell-four
          &:hover
            &::before
              content '»'

  > span
    position absolute
    top 0
    padding 1rem
    font-size 0.95rem

    &.disabled
      color rgba(125, 125, 125, 0.5)

    &.prev
      left 0

      &::before
        float left
        margin-right 0.3rem

    &.next
      right 0

      &::before
        float right
        margin-left 0.3rem


    & > span
      display inline
      line-height 0.95rem

  .pagination-list
    span
      display inline-block
      width 2.5rem
      height 2.5rem
      line-height 2.5rem
      margin 0.3rem

      &.active
        background $accentColor
        color var(--mainBg)

@media (max-width 800px)
  .pagination
    > span
      padding 1rem

      p
        display none

// 719px
@media (max-width $MQMobile)
  .pagination
    > span // 左右按钮
      padding 0.9rem

    .pagination-list
      span
        width 2.3rem
        height 2.3rem
        line-height 2.3rem
        margin 0.25rem

@media (max-width 390px)
  .pagination
    > span // 左右按钮
      padding 0.8rem

    .pagination-list
      span
        width 2rem
        height 2rem
        line-height 2rem
        margin 0.1rem
        margin-top 0.3rem
</style>
