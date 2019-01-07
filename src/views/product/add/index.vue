<!-- 添加产品页面 -->
<template>
  <div class="add-product">
    <div class="search-container">
      <div class="mint-searchbar">
        <div class="searchbar-inner">
          <i class="mintui mintui-search search-icon" />
          <input type="search" placeholder="请输入产品名称" class="search-input">
        </div>
        <a class="search-cancel">
          取消
        </a>
      </div>
      <mt-loadmore :bottom-all-loaded="false">
        <ul class="search-list">
          <li v-for="r in productResultList" :key="r.title">
            {{ r.title }}
          </li>
        </ul>
      </mt-loadmore>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style scoped lang="scss">
@import "./style.scss";
</style>
