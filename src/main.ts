import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  render: h => h(App)
}).$mount('#app');

// import Vue from 'vue'
// import App from './App.vue'
//
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);
//
// import axios from "axios";
// Vue.prototype.$http = axios;
//
//
// import Model from "./model/Model";
// window.$model = Model.getInstance();
//
//
//
// Vue.config.productionTip = false;
//
// new Vue({
//     render: h => h(App)
// }).$mount('#app')
