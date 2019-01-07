import { MessageBox } from 'mint-ui'
import SlidingChild from '@/components/slide/SlidingChild'

export default {
  name: 'Product',
  data() {
    return {
      allLoaded: false,
      title: '添加产品',
      productList: [
        {
          title: '安神补脑液',
          desc: '30ml*10瓶 吉林药业',
          statusText: '启用',
          status: true
        },
        {
          title: '安神补脑液',
          desc: '30ml*10瓶 吉林药业',
          statusText: '启用',
          status: true
        },
        {
          title: '安神补脑液',
          desc: '30ml*10瓶 吉林药业',
          statusText: '启用',
          status: true
        },
        {
          title: '安神补脑液',
          desc: '30ml*10瓶 吉林药业',
          statusText: '启用',
          status: true
        },
        {
          title: '安神补脑液',
          desc: '30ml*10瓶 吉林药业',
          statusText: '启用',
          status: true
        }
      ]
    }
  },
  methods: {
    getProductList() {},
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
