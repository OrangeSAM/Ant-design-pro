import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 加载样式文件
// import 'ant-design-vue/dist/antd.less'
// 全部组件都注册, 这会导致加载网页时的JS文件异常庞大.
// import Antd from "ant-design-vue";
// Vue.use(Antd);

// 按需引入
import { Button, Layout, Icon, Drawer, Radio } from "ant-design-vue";
// 为啥use的时候又只能挨个use呢
Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
