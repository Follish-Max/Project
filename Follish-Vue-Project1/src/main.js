//入口文件
import Vue from 'vue'

//导入路由的包
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)

//导入vue-resource
import VueResource from 'vue-resource'
//安装vue-resource
Vue.use(VueResource)


//导入格式化时间的插件
import moment from 'moment'
//定义全局的过滤器
Vue.filter('dateFormat',function (dataStr,pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})

//安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
Vue.use(preview, {
    mainClass: 'pswp--minimal--dark',
    barsSize: {top: 0, bottom: 0},
    captionEl: false,
    fullscreenEl: false,
    shareEl: false,
    bgOpacity: 0.85,
    tapToClose: true,
    tapToToggleControls: false
})

//全局设置 post 时候的表单数据格式
Vue.http.options.emulateJSON=true

//导入自己的 router.js 路由模块
import router from './router.js'

//导入mui的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
//按需导入Mint-UI的组件
// import { Header,Swipe, SwipeItem, Button, Lazyload } from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.component(Lazyload)

import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

//导入App跟组件
import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router //挂载路由对象
})
