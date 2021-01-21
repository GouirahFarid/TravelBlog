import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BaseReadMore from "@/components/BaseReadMore";
require('@/assets/main.scss');
Vue.component('BaseReadMore', BaseReadMore)


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
