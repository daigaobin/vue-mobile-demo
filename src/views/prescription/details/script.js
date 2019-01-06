import { MessageBox } from "mint-ui";
import expandSrcUrl from "@/assets/down.png";
import shrinkSrcUrl from "@/assets/up.png";
export default {
  name: "Prescription",
  data() {
    return {
      allLoaded: false,
      value: "",
      result: [
        {
          title: "A",
          value: "1"
        }
      ],
      prescriptionList: [
        {
          date: "2018-08-08",
          children: [
            {
              avatar: "",
              name: "张三",
              date: "2018-08-08 12:30:30",
              desc: "感冒"
            },
            {
              avatar: "",
              name: "张三",
              date: "2018-08-08 12:30:30",
              desc: "感冒"
            }
          ],
          expand: false
        },
        {
          date: "2018-08-08",
          children: [
            {
              avatar: "",
              name: "张三",
              date: "2018-08-08 12:30:30",
              desc: "感冒"
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
  components: {}
};
