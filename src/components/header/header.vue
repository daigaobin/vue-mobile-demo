<template>
  <mt-header fixed :title="title" class="m-header">
    <!-- <router-link to="/" slot="left">
      <mt-button> <i class="fa fa-bars" slot="icon" /> </mt-button>
    </router-link>
    <router-link to="/" slot="right">
      <mt-button> <i class="fa fa-search" slot="icon" /> </mt-button>
    </router-link> -->
  </mt-header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default() {
        return '我的'
      }
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="scss">
@import '~@/styles/variables.scss';
.m-header {
  background: $themeGreen;
  z-index: 999;
  color: $bgWhite;
  .mint-header-title {
    font-weight: bold;
  }
}
</style>
