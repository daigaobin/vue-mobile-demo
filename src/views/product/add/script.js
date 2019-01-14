import { MessageBox, Toast } from 'mint-ui'
import { getProductsInformation, addProductsByDoctorId } from '@/api/product'
export default {
  name: 'AddProduct',
  data() {
    return {
      nameStr: '',
      showCancel: false,
      timer: null,
      productResultList: []
    }
  },
  methods: {
    getProductList() {
      getProductsInformation(this.nameStr).then((resp) => {
        if (resp.data && resp.data.code === 200) {
          this.productResultList = resp.data.data
        } else {
          this.productResultList = []
        }
      }).catch(() => {
        this.productResultList = []
      })
    },

    getProductInfoHtml(product) {
      return `<div style="text-align:left;color:#333;">商品名：${product.commercename}<br/>
      通用名：${product.commomname}<br/>
      生产厂商：${product.manufacturer}<br/>
      规格：${product.specifications} * ${product.protype}<br/></div>`
    },

    addProductsByDoctorId(params) {
      addProductsByDoctorId(params).then((resp) => {
        if (resp.data && resp.data.code === 200) {
          Toast({
            message: '添加产品成功',
            position: 'bottom',
            duration: 1000
          })
          this.$emit('close')
        }
      })
    },

    handleSelectedProduct(product) {
      MessageBox({
        title: '确认添加产品',
        message: this.getProductInfoHtml(product),
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: '添加'
      }).then(action => {
        if (action === 'confirm') {
          this.addProductsByDoctorId({
            doctorId: 18888888888,
            status: 2, // 状态 2 启用 3 禁用
            productCode: product.productCode,
            commercename: product.commercename,
            manufacturer: product.manufacturer,
            specifications: product.specifications + '*' + product.protype
          })
        }
      })
    },

    handleChangeInput() {
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = null
      }

      this.timer = setTimeout(() => {
        this.getProductList()
      }, 200)
    },

    handleFocusInput() {
      this.showCancel = true
    },

    handleBlurInput() {
      this.showCancel = false
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
  components: {}
}
