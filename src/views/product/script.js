import { MessageBox } from 'mint-ui'
import SlidingChild from '@/components/slide/SlidingChild'
import { getProductsListByDoctorId } from '@/api/product'
export default {
  name: 'Product',
  data() {
    return {
      allLoaded: false,
      title: '添加产品',
      productList: []
    }
  },

  created() {
    this.getProductList()
  },

  methods: {
    handleSlideLayerClosed(m) {
      m.status === 'success' && this.getProductList()
    },

    getProductList() {
      getProductsListByDoctorId(18888888888).then((resp) => {
        if (resp.data && resp.data.code === 200) {
          this.productList = resp.data.data
        }
      })
    },
    deleteProduct() {
      MessageBox.confirm('确定要删除此产品?').then(action => {
        debugger
      })
    },
    goAddProductPage() {
      this.$router.push({ name: 'AddProduct' })
    }
  },
  components: { SlidingChild }
}
