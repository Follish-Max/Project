<template>
    <div class="goodsinfo-container">
        <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        >
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>
        <!--商品轮播区域-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :carouselList="lunbotu" :isfull="false"></swiper>
                </div>
            </div>
        </div>

        <!--商品购买区域-->
        <div class="mui-card">
            <div class="mui-card-header">{{ goodsinfo.title }}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价：<del>￥{{ goodsinfo.market_price }}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{ goodsinfo.sell_price }}</span>
                    </p>
                    <p>购买数量：<numbox @getcount="getSelectedCount" :max="goodsinfo.stock_quantity"></numbox></p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                    </p>
                </div>
            </div>
        </div>

        <!--商品参数区域-->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{ goodsinfo.goods_no }}</p>
                    <p>库存情况：{{ goodsinfo.stock_quantity }}件</p>
                    <p>上架事件：{{ goodsinfo.add_time | dateFormat }}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" plain size="large" @click="goDesc(id)">图文介绍</mt-button>
                <mt-button type="danger" plain size="large" @click="goComment(id)">商品评论</mt-button>
            </div>
        </div>


    </div>
</template>

<script>
    //导入轮播图组件
    import swiper from '../subcomponents/swiper.vue'
    //导入数字选择框组件
    import numbox from '../subcomponents/goodsinfo_numbox.vue'
export default {
    data() {
        return {
            id: this.$route.params.id,
            lunbotu: [],
            goodsinfo: {},
            ballFlag: false,
            selectedCount: 1
        }
    },
    created() {
      this.getLunbotu();
      this.getGoodsInfo();
    },
    methods: {
        getLunbotu() {
            this.$http.get("http://www.liulongbin.top:3005/api/getthumimages/"+this.id)
                .then(result=>{
                    if(result.body.status === 0) {
                        result.body.message.forEach(item => {
                            item.item_img_url = item.src;
                        })
                        this.lunbotu = result.body.message;
                    }
                })
        },
        getGoodsInfo() {
            this.$http.get('http://www.liulongbin.top:3005/api/goods/getinfo/'+this.id)
                .then(result=>{
                    if(result.body.status === 0){
                        this.goodsinfo = result.body.message[0];
                    }
                })
        },
        goDesc(id) {
            //点击使用编程式导航跳转到 图文介绍 页面
            this.$router.push({ name: "goodsdesc",params: { id }});
        },
        goComment(id) {
            //点击跳转到 评论页面
            this.$router.push({ name: "goodscomment",params: { id }});
        },
        addToShopCar() {
            this.ballFlag = !this.ballFlag;
            //拼接商品信息，并保存到store中去
            var goodsinfo = {
                id: this.id,
                count: this.selectedCount,
                price: this.goodsinfo.sell_price,
                selected: true
            };
            this.$store.commit("addToCar",goodsinfo);

        },
        beforeEnter(el) {
            el.style.transform = "translate(0,0)";
        },
        enter(el,done) {
            //分别得到徽章和小球的横纵坐标，两者相减，得到的就是横纵坐标要位移 的距离
            //domObject.getBoundingClientRect()
            el.offsetWidth;
            const ballPosition = this.$refs.ball.getBoundingClientRect();
            const badgePosition = document.getElementById("badge").getBoundingClientRect();
            const xDist = badgePosition.left - ballPosition.left;
            const yDist = badgePosition.top - ballPosition.top;
            el.style.transform = `translate(${xDist}px,${yDist}px)`;
            el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";
            done();
        },
        afterEnter(el) {

            this.ballFlag = !this.ballFlag;
        },
        getSelectedCount(count) {
            // 当子组件把 选中的数量传递给父组件的时候，把选中的值保存到 data 上
            this.selectedCount = count;
            // console.log("父组件拿到的数量值为： " + this.selectedCount);
        }

    },
    components: {
        swiper,
        numbox
    }
}
</script>


<style lang="scss" scoped>
.goodsinfo-container {
    background-color: #eeeeee;
    overflow: hidden;
    .now_price {
        color: red;
        font-size: 16px;
        font-weight: bold;
    }
    .mui-card-footer {
        display: block;
        button {
            margin: 15px 0;
        }
    }
    .ball {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        position: absolute;
        z-index: 999;
        top: 390px;
        left: 146px;
        background-color: red;
    }
}

</style>