<template>
  <header class="m-header">
    {{ title }}
  </header>
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  color: $bgWhite;
  font-size: 0.54rem;
  text-align: center;
  padding-top: 0.42rem;
}
</style>
