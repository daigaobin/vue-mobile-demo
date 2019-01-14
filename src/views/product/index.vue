<!-- 我的产品页面 -->
<template>
  <div class="product">
    <div class="product-add-bar" @click="goAddProductPage">
      +&nbsp;添加新产品
    </div>
    <mt-loadmore :bottom-method="getProductList" :bottom-all-loaded="allLoaded">
      <ul class="product-list">
        <li v-for="(p, $index) in productList" :key="$index">
          <div class="clearfix">
            <span class="left product-name">
              {{ p.commerceName }}
            </span>
            <span class="right product-name">
              <mt-switch v-model="p.status" />
            </span>
          </div>
          <div class="product-desc">
            <span>
              {{ p.manufacturer }} {{ p.specifications }}
            </span>
          </div>
          <div class="product-status">
            <span class="left">
              状态：{{ p.status }}
            </span>
            <span class="right" @click="deleteProduct">
              <i class="el-icon-delete">
                &nbsp;删除
              </i>
            </span>
          </div>
        </li>
      </ul>
    </mt-loadmore>
    <SlidingChild :len="3" :title="title" @slideLayerClosed="handleSlideLayerClosed" />
  </div>
</template>
<script src="./script.js"></script>

<style scoped lang="scss">
@import "./style.scss";
</style>
