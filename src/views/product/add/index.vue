<!-- 添加产品页面 -->
<template>
  <div class="add-product">
    <div class="search-input">
      <el-input
        v-model="input21"
        placeholder="请输入产品名称"
        prefix-icon="el-icon-search"
        clearable
        :maxlength="30"
      />
      <span class="cancel-btn">
        取消
      </span>
    </div>

    <mt-loadmore :bottom-all-loaded="false" class="search-list">
      <ul>
        <li v-for="r in productResultList" :key="r.title">
          {{ r.title }}
        </li>
      </ul>
    </mt-loadmore>
  </div>
</template>

<script src="./script.js"></script>

<style scoped lang="scss">
@import "./style.scss";
</style>
