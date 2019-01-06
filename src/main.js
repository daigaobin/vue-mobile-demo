import Vue from "vue";
import App from "./App.vue";
import router from "@/router/index";
import store from "@/store/index";
import "@/util/rem";
import "./registerServiceWorker";
import "normalize.css";
import "@/styles/index.scss";
import "@/font/font-awesome/css/font-awesome.min.css";
import "animate.css";
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(MintUI);

import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(Element, {
  size: "medium" // set element-ui default size
});

Vue.config.productionTip = false;

var env = process.env.NODE_ENV;
env !== "production" && require("@/mock");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
