<!-- 我的产品页面 -->
<template>
  <div class="product">
    <div class="product-add-bar" @click="goAddProductPage">
      +&nbsp;添加新产品
    </div>
    <mt-loadmore :bottom-method="getProductList" :bottom-all-loaded="allLoaded">
      <ul class="product-list">
        <li v-for="(p, $index) in productList" :key="$index">
          <div class="clearfix product-item">
            <span class="left ">
              {{ p.title }}
            </span>
            <span class="right">
              <mt-switch v-model="p.status" />
            </span>
          </div>
          <div class="product-item">
            <span class="product-desc product-text">
              {{ p.desc }}
            </span>
          </div>
          <div class="product-item product-status">
            <span class="left product-text">
              状态：{{ p.statusText }}
            </span>
            <span class="right product-text" @click="deleteProduct">
              <i class="el-icon-delete">
                &nbsp;删除
              </i>
            </span>
          </div>
        </li>
      </ul>
    </mt-loadmore>
    <SlidingChild :len="3" :title="title" />
  </div>
</template>
<script src="./script.js"></script>

<style scoped lang="scss">
@import "./style.scss";
</style>
