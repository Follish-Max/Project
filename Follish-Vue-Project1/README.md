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
 `注意`：设计接口的时候 在预览中添加 **Query Parameters** 参数 **pageindex=1**
 
## 发表评论
 1. 把文本框做双向数据绑定
 2. 为发表按钮绑定事件
 3. 校验内容是否为空，如果为空，用Toast提示
 4. 通过vue-resource 发送一个请求，把评论内容提交给服务器
 5. 发表评论后重新刷新列表
 
## 改造图片分享路由
 1. 修稿 HomeContainer.vue中的<a></a>为 <router-link></router-link>
 2. 在components下创建一个photo文件夹，新建photolist.vue
 3. 在router.js中绑定路由
 
## 图片列表 组件的页面样式
 1. 顶部的滑动条
  + 借助MUI中的 tab-top-webview-main.html
  + 需要把 slider 区域的 mui-fullscreen 类去掉
  + 由于滑动条是JS组件，需要被初始化一下
    + 导入mui.js
    + 调用官方提供的方式初始化
    ```
    mui('.mui-scroll-wrapper').scroll({
    	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    ```
   + 初始化 滑动条 的时候，导入的 mui.js ，但是，控制台报错： `Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode`
     + 经过合理的推测，觉得，可能是 mui.js 中用到了 'caller', 'callee', and 'arguments' 东西，但是， webpack 打包好的 bundle.js 中，默认是启用严格模式的，所以，这两者冲突了；
      + 解决方案： 1. 把 mui.js 中的 非严格 模式的代码改掉；但是不现实； 2. 把 webpack 打包时候的严格模式禁用掉；
      + 最终，我们选择了 plan B  移除严格模式： 使用这个插件 babel-plugin-transform-remove-strict-mode
   + 刚进入 图片分享页面的时候， 滑动条无法正常工作， 经过我们认真的分析，发现， 如果要初始化 滑动条，必须要等 DOM 元素加载完毕，所以，我们把 初始化 滑动条 的代码，搬到了 mounted 生命周期函数中；
   + 当 滑动条 调试OK后，发现， tabbar 无法正常工作了，这时候，我们需要把 每个 tabbar 按钮的 样式中  `mui-tab-item` 重新改一下名字；
 2. 制作图片列表
    + 图片列表使用懒加载技术，Mint-UI中提供的组件 `lazy-load`
    + 根据`lazy-load`的使用文档操作
    + 渲染图片列表
    
## 点击图片跳转详情页面
   - 在改造 li 为 router-link 的时候，需要使用 tag 属性指定为要渲染为何种元素

## 实现图片详情中的 缩略图功能
 + 使用插件 [vue-preview](https://github.com/LS1231/vue-preview)
 + `注意`：修改样式的时候要把scoped删除
 
## 绘制 商品列表页面并美化
 + 使用的接口数据为：`http://www.liulongbin.top:3005/api/getgoods?pageindex=`

## 抽离轮播图组件

## 购物车
