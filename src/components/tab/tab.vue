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
  top: 0.96rem;
  left: 0;
  right: 0;
  z-index: 1;
  padding-top: 0.91rem;
  .m-tab-item {
    height: 3.45rem;
    width: 3.15rem;
    margin-left: 0.39rem;
    background-color: #c4f6e5;
    border-radius: 10px 10px 0 0;
    &:last-child {
      margin-right: 0.39rem;
    }
  }

  .mint-tab-item-icon ,.m-tab-img {
    height: 1.5rem;
    width: 1.5rem;
    margin: 0 auto;
    margin-top: 0.3rem;
  }

  p{
    margin: 0;
  }

  .sub-title,.sub-number {
    margin-top: 0.24rem;
    font-size: 0.39rem;
  }

  .sub-number {
    font-size: 0.48rem;
    font-weight: bold;
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
