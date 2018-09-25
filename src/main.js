// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


Vue.config.productionTip = false

// 引入懒加载组件
import VueLazyload from 'vue-lazyload';
// 配置
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // 图片请求失败，调用替换图片
  error: require("../static/images/mo-head.jpg"),
  // 正在请求图片时用loading中的暂时替代图片
  loading: require("../static/images/loading2.gif"),
  attempt: 1
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
