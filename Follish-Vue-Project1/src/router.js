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
//导入图片分享列表路由组件
import PhotoList from './components/photos/PhotoList.vue'
//导入图片详情
import PhotoInfo from './components/photos/PhotoInfo.vue'
//导入商品列表
import GoodsList from './components/goods/GoodsList.vue'
//导入商品详情页
import GoodsInfo from './components/goods/GoodsInfo.vue'
//导入商品图文介绍页面
import GoodsDesc from './components/goods/GoodsDesc.vue'
//导入商品评论页面
import GoodsComment from './components/goods/GoodsComment.vue'


//创建路由对象
var router = new VueRouter({
    routes: [//配置路由规则
        { path: '/',redirect: '/home' },
        { path: '/home',component: HomeContainer },
        { path: '/member',component: MemberContainer },
        { path: '/shopcar',component: ShopcarContainer },
        { path: '/search',component: SearchContainer },
        { path: '/home/newslist',component:NewsList },
        { path: '/home/newsinfo/:id',component: NewsInfo },
        { path: '/home/photolist',component: PhotoList },
        { path: '/home/photoinfo/:id',component: PhotoInfo },
        { path: '/home/goodslist',component:GoodsList },
        { path: '/home/goodsinfo/:id',component:GoodsInfo },
        { path: '/home/goodsdesc/:id',component:GoodsDesc,name:"goodsdesc"},
        { path: '/home/goodscomment/:id',component:GoodsComment,name:"goodscomment" }
    ],
    linkActiveClass: 'mui-active'//覆盖默认（router-link-active）的路由高亮的类
})

export default router