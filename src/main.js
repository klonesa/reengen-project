import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import i18n from "./plugins/i18n";
import router from "./router";
import store from "./store";
import Vuelidate from "vuelidate";

Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
