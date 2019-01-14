<template>
  <div class="layout">
    <Header />
    <Tab />
    <keep-alive> <router-view /> </keep-alive>
  </div>
</template>

<script src="./script.js"></script>

<style scoped lang="scss">
@import "./style.scss";
</style>
