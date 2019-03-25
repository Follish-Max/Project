<template>
    <div class="goods-list">
       <!--<router-link class="goods-item" v-for="item in goodslist" :key="item.id" :to="'/home/goodsinfo/' + item.id" tad="div">-->
           <!--<img :src="item.img_url" alt="">-->
           <!--<h1 class="title">{{ item.title }}</h1>-->
           <!--<div class="info">-->
               <!--<p class="price">-->
                   <!--<span class="now">￥{{ item.sell_price }}</span>-->
                   <!--<span class="old">￥{{ item.market_price }}</span>-->
               <!--</p>-->
               <!--<p class="sell">-->
                   <!--<span>热卖中</span>-->
                   <!--<span>剩{{ item.stock_quantity }}件</span>-->
               <!--</p>-->
           <!--</div>-->
       <!--</router-link>-->


        <a class="goods-item" v-for="item in goodslist" :key="item.id" @click="getDtail(item.id)">
            <img :src="item.img_url" alt="">
            <h1 class="title">{{ item.title }}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{ item.sell_price }}</span>
                    <span class="old">￥{{ item.market_price }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{ item.stock_quantity }}件</span>
                </p>
            </div>
        </a>

        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>


<script>
export default {
    data() {
        return {
            pageindex: 1,
            goodslist: []
        }
    },
    created() {
        this.getGoodsList()
    },
    methods: {
        getGoodsList() {
            this.$http.get("http://www.liulongbin.top:3005/api/getgoods?pageindex=" + this.pageindex)
                .then(result=>{
                    if(result.body.status === 0) {
                        // this.goodslist = result.body.message;
                        this.goodslist=this.goodslist.concat(result.body.message)

                    }
                })
        },
        getMore() {
            this.pageindex++;
            this.getGoodsList();
        },
        getDtail(id) {
            this.$router.push("/home/goodsinfo/"+id)
        }
    }
}
</script>


<style lang="scss" scoped>
.goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 7px;
    .goods-item {
        width: 49%;
        border: 1px solid #cccccc;
        -webkit-box-shadow: 0px 0px 8px  #cccccc;
        -moz-box-shadow: 0px 0px 8px  #cccccc;
        box-shadow: 0px 0px 8px  #cccccc;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 293px;
        margin: 4px 0;
        padding: 2px;
        img {
            width: 100%;
        }
        .title {
            font-size: 14px;
        }
        .info {
            background-color: #eeeeee;
            p {
                margin: 0;
                padding: 5px;
            }
            .price {
                .now {
                    color: red;
                    font-weight: bold;
                    font-size: 16px;
                }
                .old {
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left: 10px;
                }
            }
            .sell {
                display: flex;
                justify-content: space-between;
                font-size: 13px;
            }
        }
    }

}
</style>