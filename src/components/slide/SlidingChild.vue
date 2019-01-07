<template>
  <transition name="sliding-window">
    <div v-if="show" class="sliding-window">
      <div class="back">
        <i class="el-icon-back" @click="close" />&nbsp;{{ title }}
      </div>

      <router-view @close="closeSuccess" />
    </div>
  </transition>
</template>

<script>
export default {
  name: 'SlidingChild',
  props: {
    len: {
      type: Number,
      default() {
        return 2
      }
    },
    title: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      show: false,
      showMenu: true
    }
  },
  created() {
    setTimeout(() => {
      this.show = this.$route.matched.length >= this.len
    }, 100)
    // 通过len来指定层层递进的子window关系，子window的len应该比父级大
    this.$router.beforeEach((to, from, next) => {
      this.show = to.matched.length >= this.len
      next()
    })
  },

  methods: {
    close(ret) {
      if (ret instanceof MouseEvent) {
        ret = { status: 'cancel' }
      }
      this.show = false
      this.showMenu = true
      this.$router.go(-1)
      this.$emit('SlidingWindowClosed', ret)
    },
    closeSuccess() {
      const msg = {
        status: 'success'
      }
      this.show = false
      this.showMenu = true
      this.$router.go(-1)
      this.$emit('SlidingWindowClosed', msg)
    },
    setTitle(title) {
      this.title = title
    },
    showExpand() {
      this.$emit('showExpand', true)
    },
    setShowMenu(showMenu) {
      this.showMenu = showMenu
    }
  }
}
</script>

<style scoped lang="scss">
@import '~@/styles/variables.scss';
.sliding-window {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  /*right: -800px;*/
  background: $bgWhite;
  overflow-y: auto;
  .back {
    padding: 10px;
    background-color: $themeGreen;
    color: $bgWhite;
    border-bottom: 1px solid #eaeaed;
    font-size: 0.7rem;
  }
}

.sliding-window-enter-active {
  animation: lightSpeedIn 0.5s;
}

.sliding-window-leave-active {
  animation: lightSpeedOut 0.5s;
}

.sliding-window .close {
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
}
</style>
