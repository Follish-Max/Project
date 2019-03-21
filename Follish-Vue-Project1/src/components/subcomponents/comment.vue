<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要评论的内容...(最多吐槽120字)" maxlength="120" v-model="msg"></textarea>

        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="(item, i) in comments" :key="item.add_time">
                <div class="cmt-title">
                    第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | dateFormat }}
                </div>
                <div class="cmt-body">
                    {{ item.content === 'undefined' ? '此用户很懒，嘛都没说': item.content }}
                </div>
            </div>
        </div>

        <!--<mt-button type="danger" size="large" plain>加载更多</mt-button>-->
    </div>
</template>


<script>
import { Toast } from "mint-ui";
export default {
    data() {
        return {
            pageIndex: 1,
            comments: [],
            msg: ""
        }
    },
    created() {
        this.getComments()
    },
    methods: {
        getComments() {
            this.$http.get('https://www.easy-mock.com/mock/5c8d279a36743d2c6db8e906/Follish-vue/getcomments/'
            +this.id+"?pageindex="+this.pageIndex)
                .then(result => {
                    if(result.body.status === 0){
                    this.comments = result.body.message
                    } else {
                        Toast("获取评论失败！")
                    }
                })
        },
        postComment() {
            // 校验是否为空内容
            if (this.msg.trim().length === 0) {
                return Toast("评论内容不能为空！");
            }

            // 发表评论
            // 参数1： 请求的URL地址
            // 参数2： 提交给服务器的数据对象 { content: this.msg }
            // 参数3： 定义提交时候，表单中数据的格式  { emulateJSON:true }
            this.$http
                .post("https://www.easy-mock.com/mock/5c8d279a36743d2c6db8e906/Follish-vue/getcomment", {
                    content: this.msg.trim()
                })
                .then(function(result) {
                    if (result.body.status === 0) {
                        // 1. 拼接出一个评论对象
                        var cmt = {
                            user_name: "匿名用户",
                            add_time: Date.now(),
                            content: this.msg.trim()
                        };
                        this.comments.unshift(cmt);
                        this.msg = "";
                    }
                });
        },
    },


    props: ['id']
}
</script>


<style scoped lang="scss">
.cmt-container {
    h3 {
        font-size: 18px;
    }
    textarea {
        font-size: 14px;
        height: 90px;
        margin: 0;
    }
    .cmt-list {
        margin: 5px 0;
        .cmt-item {
            font-size: 13px;
            .cmt-title {
                line-height: 30px;
                color: #6F7A7A;
            }
            .cmt-body {
                line-height: 35px;
                text-indent: 2em;
            }
        }
    }
}

</style>