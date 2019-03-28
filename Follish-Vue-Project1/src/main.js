//入口文件
import Vue from 'vue'

//导入路由的包
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)

//注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)
var car = JSON.parse(localStorage.getItem('car') || '[]')
var store = new Vuex.Store({
    state: { //调用 this.$store.state.***
        car: car,
    },
    mutations: {// 调用 this.$store.commit('方法','按需传递唯一的参数')
        addToCar(state, goodsinfo) {
            //1.如果购物车有对应的商品，就只count++
            //2.如果没有，直接把 商品数据push到car中
            var flag = false

            state.car.some(item => {
                if (item.id == goodsinfo.id) {
                    item.count += parseInt(goodsinfo.count)
                    flag = true
                    return true
                }
            })


            if (!flag) {
                state.car.push(goodsinfo)
            }
            //存储到本地 localStorage 中
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        updateGoodsInfo(state, goodsinfo) {
            //修改购物车中商品的数值
            state.car.some(item => {
                if (item.id == goodsinfo.id) {
                    item.count = parseInt(goodsinfo.count)
                    return true;
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        removeFormCar(state, id) {
            state.car.some((item, i) => {
                if (item.id == id) {
                    state.car.splice(i, 1)
                    return true;
                }
            })
            //存储到本地 localStorage 中
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        updateGoodsSelected(state, info) {
            state.car.some(item => {
                if (item.id == info.id) {
                    item.selected = info.selected
                }
            })
            //存储购物车选中状态到本地 localStorage 中
            localStorage.setItem('car', JSON.stringify(state.car))
        }

    },
    getters: {//调用 this.$store.getters.***
        getAllCount(state) {
            var c = 0;
            state.car.forEach(item => {
                c += item.count
            })
            return c
        },
        getGoodsCount(state) {
            var o = {}
            state.car.forEach(item => {
                o[item.id] = item.count
            })
            return o;
        },
        getGoodsSelected(state) {
            var o = {}
            state.car.forEach(item => {
                o[item.id] = item.selected
            })
            return o
        },
        getGoodsCountAndAmount(state) {
            var o = {
                count: 0,
                amount: 0
            }
            state.car.forEach(item => {
                if(item.selected) {
                    o.count += item.count
                    o.amount += item.price * item.count
                }
            })
            return o
        }
    }
})

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
    router, //挂载路由对象
    store //改在store状态管理对象
})
