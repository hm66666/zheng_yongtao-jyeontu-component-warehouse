<template>
    <split-horizontal>
        <template v-slot:header-p>
            <div class="j-title">
                评论组件（JComment）
                <div class="j-detail">
                    评论组件，最新改动版本0.6.6，尽量安装0.6.6或以上版本
                </div>
            </div>
        </template>
        <template v-slot:mid-p>
            <div class="content">
                <j-comment
                    :key-map="keyMap"
                    :showNumber="2"
                    :comment-datas="commentDatas"
                    :orderBy="'create_time'"
                    :useEmoji="true"
                    @submitComment="submitComment"
                >
                </j-comment>
                <j-comment
                    :key-map="keyMap"
                    :showNumber="2"
                    :comment-datas="commentDatas"
                    :orderBy="'create_time'"
                    :useEmoji="true"
                    @submitComment="submitComment"
                >
                </j-comment>
            </div>
            <div>
                <j-table :title="tableTitle" :tableData="tableData"> </j-table>
            </div>
        </template>
        <template v-slot:footer-p>
            <pre v-highlight>
                <code class="vue">
                    <div v-text="code"></div>
                </code>
            </pre>
        </template>
    </split-horizontal>
</template>
<script>
import { mixinForView } from "@/mixins/index.js";
export default {
    name: "JHoverBtnView",
    components: {},
    mixins: [mixinForView],
    data() {
        return {
            code: "",
            keyMap: {
                pid: "parent_comment_id",
                id: "mid",
                isAdmin: "admin_comment",
            },
            commentDatas: [
                {
                    mid: 1,
                    admin_comment: 0,
                    avatar: "https://img2.baidu.com/it/u=134769530,4268043097&fm=253&fmt=auto&app=138&f=JPEG?w=533&h=333",
                    create_time: "2020-05-31 23:03:55",
                    email: "",
                    nickname: "nickname1",
                    parent_comment_id: null,
                    content: "我是评论1",
                    admin_comment: 0,
                },
                {
                    mid: 2,
                    admin_comment: 0,
                    avatar: "https://img2.baidu.com/it/u=3133697304,2308274678&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313",
                    create_time: "2020-06-1 23:03:55",
                    email: "",
                    nickname: "nickname2",
                    parent_comment_id: 1,
                    content: "我是评论2",
                    admin_comment: 1,
                },
                {
                    mid: 3,
                    admin_comment: 0,
                    avatar: "https://img2.baidu.com/it/u=3772577665,2044310843&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=727",
                    create_time: "2020-05-2 23:03:55",
                    email: "",
                    nickname: "nickname3",
                    parent_comment_id: null,
                    content: "我是评论3",
                    admin_comment: 1,
                },
                {
                    mid: 4,
                    admin_comment: 0,
                    avatar: "https://img0.baidu.com/it/u=3966731730,957573008&fm=253&fmt=auto&app=138&f=JPEG?w=281&h=500",
                    create_time: "2020-06-2 23:03:55",
                    email: "",
                    nickname: "nickname4",
                    parent_comment_id: 2,
                    content:
                        "我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,",
                    admin_comment: 0,
                },
            ],
            tableData: [
                {
                    parameter: "title",
                    field: "标题",
                    type: "String",
                    describe: "默认为热门评论",
                },
                {
                    parameter: "showNumber",
                    field: "展示数量",
                    type: "Number",
                    describe: "默认为2，超出的需展开查看",
                },
                {
                    parameter: "commentDatas",
                    field: "评论数组",
                    type: "Array",
                    describe: "格式如下",
                    children: {
                        type: "text",
                        text: '[{id: 1,admin_comment: 0,avatar:"https://img2.baidu.com/it/u=134769530,4268043097&fm=253&fmt=auto&app=138&f=JPEG?w=533&h=333",create_time: "2020-05-31 23:03:55",email: "",nickname: "nickname1",parent_comment_id: null,content: "我是评论1"}]',
                    },
                },
                {
                    parameter: "keyMap",
                    field: "自定义pid、id和isAdmin关键字",
                    type: "Object",
                    describe: "默认为pid、id和isAdmin",
                    children: {
                        type: "text",
                        text: '{pid: "parent_comment_id",id: "id",isAdmin: "admin_comment"}',
                    },
                },
                {
                    parameter: "withCommentContent",
                    field: "是否有评论框",
                    type: "Boolean",
                    describe: "默认为true",
                },
                {
                    parameter: "useEmoji",
                    field: "是否使用表情",
                    type: "Boolean",
                    describe: "默认为true",
                },
                {
                    parameter: "orderBy",
                    field: "排序字段（时间）",
                    type: "String",
                    describe: "默认为time",
                },
                {
                    parameter: "rank",
                    field: "排序方式",
                    type: "String",
                    describe: "asc升序，desc降序，默认为desc",
                },
                {
                    parameter: "submitComment",
                    field: "发布评论",
                    type: "function",
                    describe: "发布评论回调函数",
                },
            ],
        };
    },
    created() {
        this.code = `
<template>
    <div>
        <j-comment
            :key-map="keyMap"
            :showNumber="2"
            :comment-datas="commentDatas"
            @submitComment="submitComment">
        </j-comment>
    </div>
</template>

export default {
    data() {
        return {
            code: "",
            keyMap: {
                pid: "parent_comment_id",
                id: "id",
                isAdmin: "admin_comment"
            },
            commentDatas: [
                {
                    id: 1,
                    admin_comment: 0,
                    avatar:
                        "https://img2.baidu.com/it/u=134769530,4268043097&fm=253&fmt=auto&app=138&f=JPEG?w=533&h=333",
                    create_time: "2020-05-31 23:03:55",
                    email: "",
                    nickname: "nickname1",
                    parent_comment_id: null,
                    content: "我是评论1"
                },
                {
                    id: 2,
                    admin_comment: 0,
                    avatar:
                        "https://img2.baidu.com/it/u=3133697304,2308274678&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313",
                    create_time: "2020-06-1 23:03:55",
                    email: "",
                    nickname: "nickname2",
                    parent_comment_id: 1,
                    content: "我是评论2"
                },
                {
                    id: 3,
                    admin_comment: 0,
                    avatar:
                        "https://img2.baidu.com/it/u=3772577665,2044310843&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=727",
                    create_time: "2020-05-2 23:03:55",
                    email: "",
                    nickname: "nickname3",
                    parent_comment_id: null,
                    content: "我是评论3"
                },
                {
                    id: 4,
                    admin_comment: 0,
                    avatar:
                        "https://img0.baidu.com/it/u=3966731730,957573008&fm=253&fmt=auto&app=138&f=JPEG?w=281&h=500",
                    create_time: "2020-06-2 23:03:55",
                    email: "",
                    nickname: "nickname4",
                    parent_comment_id: 2,
                    content:
                        "我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,"
                }
            ],
        };
    },
    methods: {
        submitComment(item) {
            console.log("item: ", item);
        }
    }
}
        `;
    },
    mounted() {},
    methods: {
        submitComment(item) {
            this.commentDatas.push({
                mid: this.commentDatas.length + 1,
                admin_comment: 0,
                avatar: "https://img0.baidu.com/it/u=3966731730,957573008&fm=253&fmt=auto&app=138&f=JPEG?w=281&h=500",
                content: item.content,
                create_time: "2022-03-15 23:03:55",
                email: "",
                nickname: "nickname" + (this.commentDatas.length + 1),
                parent_comment_id: item.pid,
            });
        },
    },
};
</script>
<style scoped lang="less">
.title {
    font-size: x-large;
    text-align: left;
    margin-bottom: 1rem;
    .detail {
        font-size: medium;
        color: dimgrey;
        margin-top: 1rem;
    }
}
.content {
    margin: auto auto;
    height: 60vh;
    overflow: scroll;
    // width: 50%;
}
.header {
    min-height: 4rem;
    text-align: center;
}
.footer {
    margin-top: 2rem;
    margin-left: 2%;
    width: 95%;
}
</style>
