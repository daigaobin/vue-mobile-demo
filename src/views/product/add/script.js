import { MessageBox } from 'mint-ui'
export default {
  name: 'AddProduct',
  data() {
    return {
      productResultList: [
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
  components: {}
}
