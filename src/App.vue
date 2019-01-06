<template>
  <div id="app">
    <!-- <Header></Header>
    <Tab></Tab>
    <keep-alive> <router-view /> </keep-alive> -->
    <router-view />
  </div>
</template>

<script>
import Header from "./components/header/header.vue";
import Tab from "./components/tab/tab.vue";

export default {
  name: "app",
  data() {
    return {};
  },
  methods: {},
  components: {
    Header,
    Tab
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
