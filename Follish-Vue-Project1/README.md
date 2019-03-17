# this is my first project

## 首页组件
1.完成Header区域，使用Mint-ui中的Header组件

2.制作底部Tabbar区域，使用MUI中的Tabbar.html

 + 购物车小图标需要引入MUI的扩展图标css和扩展字体库ttf文件到项目中
 + 购物车小图标添加如下样式'mui-icon mui-icon-extra mui-icon-extra-cart'
 
3.中间区域放置一个 router-view 来展示路由匹配到的组件
 
## 改造Tabbar为router-link

1.将默认的<a></a>标签修改为 <router-link></router-link>标签

2.修改 href 属性为 to 属性，修改链接地址

## 设置路由的高亮

 + 在路由对象添加参数：linkActiveClass: 'mui-active'//覆盖默认（router-link-active）的路由高亮的类

## 点击 tabbar 中的路由链接，展示对应的路由组件

 + 创建components文件夹，用来存放组件库，添加tabbar组件文件
 + 在tabbar中添加HomeContainer.vue、MemberContainer.vue、SearchContain.vue和
 ShopcarContainer.vue组件
 + 在router.js中导入路由组件和匹配路由规则
 
## 制作轮播图布局
 + 按需导入Mint-ui中的Swipe, SwipeItem组件
 + 根据类名，修改容器高度，添加样式
 
## 加载首页轮播图数据

 1. 获取数据，使用 vue-resouce 的 this.$http.get 获取数据
 
 2. 自己创建接口
    + 登陆[Easy Mock](https://www.easy-mock.com/)
    + 创建接口添加接口数据 [**接口地址**](https://www.easy-mock.com/mock/5c8d279a36743d2c6db8e906/Follish-vue/list)
    + 复制接口地址在项目中使用
 
 3. 获取到的数据保存到data身上
 
 4.使用 **v-for** 循环渲染每个 **item** 项
 
## 改造九宫格
 1. 修改 **body** background-color 为 #fff
 2. 修改九宫格ul的颜色和border
 3. 修改字体大小
 
## 改造 **新闻资讯** 路由连接
 + 在components 文件下创建news文件，添加NewsList.vue组件
 + 配置路由
 
## 头条资讯页面制作
 + 绘制界面，使用 MUI 中的 media-list.html
 + 使用 vue-resource 获取数据
 + 渲染真是数据
 
## 实现 **头条资讯列表** 点击跳转新闻详情

 1. 把列表中的每一项改造为 **router-link**,同时，在跳转的时候提供唯一表示符Id
 2. 创建新闻详情的组件页面**NewsInfo.vue**
 3. 匹配组件和路由地址
 
## 实现 新闻详情 的页面布局和数据渲染
 + 创建接口
 + 调用接口的模拟数据并渲染到页面中

## 单独封装一个**comment.vue**评论子组件
 1. 先创建一个单独的 comment.vue 组件模板
 2. 在需要使用 comment 组件的页面中，先手动导入 comment 组件
    + `import comment from './comment.vue'`
 3. 在父组件中，使用`compoinets`属性，导入comment组件，注册为自己的子组件
 4. 将注册子组件时候的注册名称，以标签形式在页面中引入
 
## 获取所有的评论数据显示到页面中
