import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import vueJsonp from 'vue-jsonp'
import ElementUi from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

import './assets/icon/css/iconfont.css'

import {post,get,patch,put} from "./assets/axiostool.js"
//定义全局变量
Vue.prototype.$post = post;
Vue.prototype.$fetch = get;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

Vue.use(vueJsonp);
Vue.use(ElementUi)
