<!-- 添加产品页面 -->
<template>
  <div class="add-product">
    <div class="search-input" :class="{'active': showCancel}">
      <el-input
        v-model="nameStr"
        placeholder="请输入产品名称"
        prefix-icon="el-icon-search"
        clearable
        :maxlength="30"
        @input="handleChangeInput"
        @focus="handleFocusInput"
        @blur="handleBlurInput"
      />
      <span v-show="showCancel" class="cancel-btn">
        取消
      </span>
    </div>

    <mt-loadmore :bottom-all-loaded="false" class="search-list">
      <ul>
        <li v-for="r in productResultList" :key="r.productCode" @click="handleSelectedProduct(r)">
          {{ r.commercename }}
        </li>
      </ul>
    </mt-loadmore>
  </div>
</template>

<script src="./script.js"></script>

<style scoped lang="scss">
@import "./style.scss";
</style>
