<template>
    <div>
        <swiper :carouselList="carouselList" :isfull="true"></swiper>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                <img src="../../images/menu1.png" alt="">
                <div class="mui-media-body">头条资讯</div>
                </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
                <img src="../../images/menu2.png" alt=""><span class="mui-badge">5</span>
                <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
                <img src="../../images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu4.png" alt="">
                <div class="mui-media-body">留言</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div></a></li>
        </ul>
    </div>
</template>


<script>
import swiper from '../subcomponents/swiper.vue'
import  { Toast } from "mint-ui"
export default {
    data() {
        return {
            carouselList: [] //保存轮播图数组
        }
    },
    created() {
        this.getCarousel();
    },
    methods: {
        getCarousel() {
            this.$http.get('https://www.easy-mock.com/mock/5c8d279a36743d2c6db8e906/Follish-vue/list').then(result=>{
            // this.$http.get(' http://api.avatardata.cn/Weather/Query?key=30432faba55d4149a542e2fd77dda52b&cityname=武汉').then(result=>{
                if (result.body.status === 0) {
                    this.carouselList = result.body.message
                    // console.log(result.body.message)
                    // console.log(result.body.message)
                    // Toast("加载成功...")
                } else {
                    Toast("加载失败...")
                }
                // this.carouselList = result.body
                // console.log(result.body.message);
                // console.log(result.body.item_img_url)
                 //console.log(result.body.massage)
                //console.log(result.body.massage)

                // console.log(this.carouselList[1].item_img_url)
                // console.log(this.carouselList)
                // console.log(result.body.status)
            })

        }
    },
    components: {
        swiper
    }
}
</script>


<style lang="scss" scoped>

.mui-grid-view.mui-grid-9 {
    background-color: #fff;
    img {
        width: 60px;
        height: 60px;
    }
    .mui-media-body {
        font-size: 13px;
    }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: 0;
}

</style>