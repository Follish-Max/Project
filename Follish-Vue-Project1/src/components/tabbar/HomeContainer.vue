<template>
    <div>
        <!--轮播图-->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in carouselList" :key="item.id">
                <img :src="item.item_img_url" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu1.png" alt="">
                <div class="mui-media-body">头条资讯</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu2.png" alt=""><span class="mui-badge">5</span>
                <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></a></li>
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
                if (result.body.status === 0) {
                    this.carouselList = result.body.message
                    // Toast("加载成功...")
                } else {
                    Toast("加载失败...")
                }
                // console.log(result.body.message);
                // console.log(result.body.item_img_url)
                 //console.log(result.body.massage)
                //console.log(result.body.massage)

                // console.log(this.carouselList[1].item_img_url)
                // console.log(this.carouselList[1].id)
                // console.log(result.body.status)
            })
        }
    }
}
</script>


<style lang="scss" scoped>
.mint-swipe {
    height: 200px;
    .mint-swipe-item {
        &:nth-child(1) {
            background-color: red;
        }
        &:nth-child(2) {
            background-color: green;
        }
        &:nth-child(3) {
            background-color: blue;
        }
        img {
            width: 100%;
            height: 100%;
        }
    }
}
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