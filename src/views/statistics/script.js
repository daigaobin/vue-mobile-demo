import { MessageBox } from "mint-ui";
import expandSrcUrl from "@/assets/down.png";
import shrinkSrcUrl from "@/assets/up.png";
import SlidingChild from "@/components/slide/SlidingChild";

export default {
  name: "Statistics",
  data() {
    return {
      allLoaded: false,
      statisticsList: [
        {
          date: "2018-08",
          children: [
            {
              name: "安神补脑液",
              number: "30ml*10瓶",
              company: "吉林药业"
            },
            {
              name: "安神补脑液",
              number: "30ml*10瓶",
              company: "吉林药业"
            }
          ],
          expand: false
        }
      ]
    };
  },
  computed: {},
  methods: {
    getProductList() {},
    getImgUrl(pr) {
      return pr.expand ? shrinkSrcUrl : expandSrcUrl;
    },
    toggle(pr) {
      this.$set(pr, "expand", !pr.expand);
    },
    deleteProduct() {
      MessageBox.confirm("确定要删除此产品?").then(action => {
        debugger;
      });
    },

    goDetails(c) {
      this.$router.push({ name: "PrescriptionDetails" });
    }
  },
  components: { SlidingChild }
};
