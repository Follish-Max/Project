<template>
    <div>
        <!--轮播图-->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in carouselList" :key="item.id">
                <img :src="item.item_img_url" alt="" :class="{'full': isfull}">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        props: ["carouselList","isfull"]
    }
</script>


<style lang="scss" scoped>
    .mint-swipe {
        text-align: center;
        height: 200px;
        .mint-swipe-item {
            /*&:nth-child(1) {*/
                /*background-color: red;*/
            /*}*/
            /*&:nth-child(2) {*/
                /*background-color: green;*/
            /*}*/
            /*&:nth-child(3) {*/
                /*background-color: blue;*/
            /*}*/
            img {
                height: 100%;
            }
        }
    }
    .full {
        width: 100%;
    }
</style>