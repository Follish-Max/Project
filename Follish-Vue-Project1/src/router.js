//导入vue-router包
import VueRouter from 'vue-router'

//导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'

//导入新闻列表路由组件
import NewsList from './components/news/NewsList.vue'
//导入新闻详情列表路由组件
import NewsInfo from './components/news/NewsInfo.vue'

//创建路由对象
var router = new VueRouter({
    routes: [//配置路由规则
        { path: '/',redirect: '/home' },
        { path: '/home',component: HomeContainer },
        { path: '/member',component: MemberContainer },
        { path: '/shopcar',component: ShopcarContainer },
        { path: '/search',component: SearchContainer },
        { path: '/home/newslist',component:NewsList },
        { path: '/home/newsinfo/:id',component: NewsInfo }
    ],
    linkActiveClass: 'mui-active'//覆盖默认（router-link-active）的路由高亮的类
})

export default router