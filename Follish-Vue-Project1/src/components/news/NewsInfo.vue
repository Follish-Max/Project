<template>
    <div class="newsinfo-container">
        <h3 class="title">{{ newsinfo.title }}</h3>
        <p class="subtitle">
            <span>发表时间:{{ newsinfo.add_time | dateFormat }}</span>
            <span>点击:{{ newsinfo.click }}次</span>
        </p>

        <hr>
        <!--内容区域-->
        <div class="content" v-html="newsinfo.content">
        </div>
        <!--评论区域-->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>


<script>
import  { Toast } from "mint-ui"
import comment from '../subcomponents/comment.vue'
export default {
    data() {
        return {
            id: this.$route.params.id,
            newsinfo: {}
        }
    },
    created() {
      this.getNewsInfo()
    },
    methods: {
        getNewsInfo() {
            this.$http.get('https://www.easy-mock.com/mock/5c8d279a36743d2c6db8e906/Follish-vue/newsinfo/'+ this.id)
                .then(result=>{
                    if(result.body.status === 0) {
                        this.newsinfo = result.body.message[0];
                        // console.log(result.body.message[0])
                    } else {
                        Toast("获取新闻详情失败！");
                    }
                })
        }
    },
    components: {
        'comment-box': comment
    }
}
</script>


<style scoped lang="scss">//如果想要图片完整显示设置 width：100%无效，需要将scoped删除才行
.newsinfo-container {
    padding: 0 4px;
    .title {
        font-size: 16px;
        text-align: center;
        margin: 12px 0;
        color: #27b22c;
    }
    .subtitle {
        font-size: 13px;
        color: #70686ef2;
        display: flex;
        justify-content: space-between;
    }
    .content {}
}
</style>