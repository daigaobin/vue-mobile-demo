import { MessageBox } from "mint-ui";
export default {
  name: "Product",
  data() {
    return {
      allLoaded: false,
      productList: [
        {
          title: "安神补脑液",
          desc: "30ml*10瓶 吉林药业",
          statusText: "启用",
          status: true
        },
        {
          title: "安神补脑液",
          desc: "30ml*10瓶 吉林药业",
          statusText: "启用",
          status: true
        },
        {
          title: "安神补脑液",
          desc: "30ml*10瓶 吉林药业",
          statusText: "启用",
          status: true
        },
        {
          title: "安神补脑液",
          desc: "30ml*10瓶 吉林药业",
          statusText: "启用",
          status: true
        },
        {
          title: "安神补脑液",
          desc: "30ml*10瓶 吉林药业",
          statusText: "启用",
          status: true
        }
      ]
    };
  },
  methods: {
    getProductList() {},
    deleteProduct() {
      MessageBox.confirm("确定要删除此产品?").then(action => {
        debugger;
      });
    }
  },
  components: {}
};
