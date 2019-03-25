<template>
    <div class="photoinfo-container">
        <h3>{{photoinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{ photoinfo.add_time | dateFormat }}</span>
            <span>点击：{{ photoinfo.click }}次</span>
        </p>

        <hr>
        <!--缩略图区域-->
        <div class="thumbs">
            <vue-preview :slides="list"></vue-preview>
        </div>
        <!--图片内容区域-->
        <div class="content" v-html="photoinfo.content"></div>
        <!--评论子组件-->
        <cmt-box :id="id"></cmt-box>


    </div>
</template>


<script>
// <!--导入评论子组件-->
    import comment from "../subcomponents/comment.vue"

    export default {
        data() {
            return {
                id: this.$route.params.id,
                photoinfo: {},
                list: []
            }
        },
        created() {
            this.getPhotoInfo();
            this.getThumbs();
        },
        methods: {
            getPhotoInfo() {
                //获取图片详情
                this.$http.get("https://www.easy-mock.com/mock/5c8d279a36743d2c6db8e906/Follish-vue/getimagesInfo/" + this.id).then(result=> {
                    if(result.body.status === 0) {
                        this.photoinfo = result.body.message[0];
                    }
                });
            },
            getThumbs() {
                this.$http.get("https://www.easy-mock.com/mock/5c8d279a36743d2c6db8e906/Follish-vue/thumbsimages")
                    .then(result=>{
                        if(result.body.status === 0) {
                            this.list = result.body.message;
                            console.log(result.body.message)
                        }
                    })
            }

        },
        components: {
            "cmt-box":comment
        }
    }
</script>


<style lang="scss">
.photoinfo-container {
    padding: 3px;
    h3 {
        color: #85A8FF;
        font-size: 15px;
        text-align: center;
        margin: 15px 0;
    }
    .subtitle {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }
    .content {
        font-size: 13px;
        line-height: 30px;
    }
    .thumbs {
        height: 280px;
        float: left;
        img {
            width: 75px;
            height: 130px;
            margin: 0px 10px;
        }
        figure {
            margin: 0em 10px;
            float: left;
        }

    }

}

</style>