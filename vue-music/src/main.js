import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'

import 'common/stylus/index.styl'
import fastclick from 'fastclick'
Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})

fastclick.attach(document.body)
/* eslint-disable no-new */
// 绕过eslint规则检测
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
