<template>
  <mt-navbar v-model="selected" class="m-tab">
    <mt-tab-item id="product" class="m-tab-item" @click.native="go('/product')">
      <img slot="icon" :src="productSrcUrl" class="m-tab-img">
      <p class="sub-title">
        我的产品
      </p>
      <p class="sub-number">
        3件
      </p>
    </mt-tab-item>
    <mt-tab-item
      id="prescription"
      class="m-tab-item"
      @click.native="go('/prescription')"
    >
      <img slot="icon" :src="prescriptionSrcUrl" class="m-tab-img">
      <p class="sub-title">
        我的处方
      </p>
      <p class="sub-number">
        今日3份
      </p>
    </mt-tab-item>
    <mt-tab-item
      id="statistics"
      class="m-tab-item"
      @click.native="go('/statistics')"
    >
      <img slot="icon" :src="statisticsSrcUrl" class="m-tab-img">
      <p class="sub-title">
        产品统计
      </p>
      <p class="sub-number">
        本月30件
      </p>
    </mt-tab-item>
  </mt-navbar>
</template>

<script>
import productS from '@/assets/product-s.png'
import productD from '@/assets/product-d.png'
import prescriptionS from '@/assets/prescription-s.png'
import prescriptionD from '@/assets/prescription-d.png'
import statisticsS from '@/assets/statistics-s.png'
import statisticsD from '@/assets/statistics-d.png'

export default {
  name: 'Tab',
  data() {
    return {
      selected: 'product'
    }
  },
  computed: {
    productSrcUrl() {
      return this.selected === 'product' ? productS : productD
    },
    prescriptionSrcUrl() {
      return this.selected === 'prescription' ? prescriptionS : prescriptionD
    },
    statisticsSrcUrl() {
      return this.selected === 'statistics' ? statisticsS : statisticsD
    }
  },
  methods: {
    go(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped lang="scss">
@import '~@/styles/variables.scss';
.m-tab {
  background-color: $themeGreen;
  position: fixed;
  top: 40px;
  left: 0;
  right: 0;
  z-index: 999;
  height: 100px;
  .m-tab-item {
    margin: 0 10px;
    background-color: #c4f6e5;
    border-radius: 10px 10px 0 0;
    /* .mint-tab-item-icon {
      width: 2rem;
      height: 2rem;
    } */
    .sub-title {
      font-size: 12px;
      margin: 10px 0;
    }

    .sub-number {
      font-size: 16px;
      margin: 5px 0;
    }
  }
  .m-tab-img {
    height: 30px;
    width: 30px;
  }
}
.mint-navbar {
  .mint-tab-item {
    color: $themeGreen;
    font-weight: bold;
    &.is-selected {
      color: $themeGreen;
      background-color: $bgWhite;
      border-bottom-color: $bgWhite;
    }
  }
}
</style>
