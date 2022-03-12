<!--
 * @Author: zheng yong tao
 * @Date: 2022-03-12 23:11:38
 * @LastEditors: zheng yong tao
 * @LastEditTime: 2022-03-13 01:36:40
 * @Description: 
-->
<template>
    <div class="j-comment">
        <div class="j-comment-title">{{ title }}</div>
        <div
            class="j-comment-item"
            v-for="(item, index) in showComentDatas"
            :key="'comment' + index"
        >
            <div class="j-comment-header">
                <img class="j-comment-header-img" :src="item.avatar" />
                <div class="j-comment-header-nickname">{{ item.nickname }}</div>
                <div class="j-comment-header-time">{{ item.create_time }}</div>
            </div>
            <div class="j-comment-body">{{ item.content }}</div>
            <div class="j-comment-footer">
                <img
                    class="j-comment-icon"
                    src="../img/评论.png"
                    @click="replyClick(item)"
                />
                <span>{{ (item.children && item.children.length) || "" }}</span>
            </div>
            <div
                class="j-comment-childer"
                v-if="item.children && item.children.length > 0"
            >
                <div
                    class="j-comment-item"
                    v-for="(children, childrenIndex) in item.showChildren"
                    :key="'children' + childrenIndex"
                >
                    <div class="j-comment-header">
                        <img
                            class="j-comment-header-img"
                            :src="children.avatar"
                        />
                        <div class="j-comment-header-nickname">
                            {{ children.nickname }}
                        </div>
                        <div
                            class="j-comment-header-reply-nickname"
                            v-if="children.reply"
                        >
                            <span>回复</span>{{ children.reply }}
                        </div>
                        <div class="j-comment-header-time">
                            {{ children.create_time }}
                        </div>
                    </div>
                    <div class="j-comment-body">{{ children.content }}</div>
                    <div class="j-comment-footer">
                        <img
                            class="j-comment-icon"
                            src="../img/评论.png"
                            @click="replyClick(children)"
                        />
                        <span>{{
                            (children.children && children.children.length) ||
                                ""
                        }}</span>
                    </div>
                    <div class="j-comment-childer" v-if="children.pContent">
                        <div
                            class="j-coment-children-content"
                            :title="children.pContent"
                        >
                            {{ children.pContent }}
                        </div>
                    </div>
                </div>
                <div
                    v-if="item.showChildren.length < item.children.length"
                    :key="'more' + index"
                    class="j-comment-childer-more"
                    @click="showMore(item, index)"
                >
                    查看更多回复∨
                </div>
                <div
                    v-else
                    :key="'more' + index"
                    class="j-comment-childer-more"
                    @click="showMore(item, index)"
                >
                    收起回复∧
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "JComment",
    props: {
        title: {
            type: String,
            default: "热门评论"
        },
        showNumber: {
            type: Number,
            default: 1
        },
        commentDatas: {
            type: Array,
            default: () => {
                return [
                    {
                        id: 1,
                        admin_comment: 0,
                        avatar:
                            "https://img2.baidu.com/it/u=134769530,4268043097&fm=253&fmt=auto&app=138&f=JPEG?w=533&h=333",
                        content: "",
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
                        content: "",
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
                        content: "",
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
                        content: "",
                        create_time: "2020-06-2 23:03:55",
                        email: "",
                        nickname: "nickname4",
                        parent_comment_id: 2,
                        content:
                            "我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,我是评论,"
                    }
                ];
            }
        }
    },
    data() {
        return {
            showComentDatas: []
        };
    },
    created() {
        this.initData();
    },
    computed: {},
    methods: {
        showMore(item, index) {
            if (item.showChildren.length < item.children.length) {
                item.showChildren = item.children;
            } else {
                item.showChildren = item.children.slice(0, this.showNumber);
            }
            this.$set(this.showComentDatas, index, item);
        },
        replyClick(item) {
            console.log("item", item);
            this.$emit("replyClick", item);
        },
        initData() {
            this.showComentDatas = this.getTreeData(
                this.commentDatas,
                "id",
                "parent_comment_id"
            );
            for (let i = 0; i < this.showComentDatas.length; i++) {
                if (this.showComentDatas[i].children) {
                    this.showComentDatas[i].children = this.treeToArr(
                        this.showComentDatas[i].children
                    );
                    this.showComentDatas[i].showChildren = this.showComentDatas[
                        i
                    ].children.slice(0, this.showNumber);
                }
            }
        },
        treeToArr(data, pName = null, pContent = "") {
            let cloneData = JSON.parse(JSON.stringify(data));
            let res = [];
            cloneData.map(item => {
                if (item.children) {
                    res.unshift(
                        ...this.treeToArr(
                            item.children,
                            item.nickname,
                            item.content
                        )
                    );
                }
                item["reply"] = pName;
                item["pContent"] = pContent;
                res.unshift(item);
            });
            return res;
        },
        getTreeData(data, id = "id", pid = "pid") {
            let cloneData = JSON.parse(JSON.stringify(data));
            return cloneData.filter(parent => {
                let branchArr = cloneData.filter(
                    child => parent[id] == child[pid]
                );
                for (let i = 0; i < branchArr.length; i++) {
                    branchArr.parent_nickname = parent.nickname;
                }
                branchArr.length > 0 ? (parent["children"] = branchArr) : "";
                return parent[pid] === null;
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.j-comment {
    text-align: left;
    width: 80%;
    padding: 1rem;
    .j-comment-title {
        font-weight: bolder;
        font-size: large;
        margin-bottom: 1rem;
    }
    .j-comment-item {
        .j-comment-header {
            display: flex;
            line-height: 40px;
            .j-comment-header-img {
                width: 40px;
                height: 40px;
                border-radius: 50%;
            }
            .j-comment-header-nickname {
                padding-left: 1em;
            }
            .j-comment-header-reply-nickname {
                span {
                    margin-left: 0.5rem;
                    margin-right: 0.5rem;
                }
            }
            .j-comment-header-time {
                margin-left: auto;
            }
        }
        .j-comment-body {
            padding: 0.5rem;
            padding-left: calc(40px + 1em);
        }
        .j-comment-footer {
            padding: 0.5rem 0rem;
            padding-left: calc(40px + 1em);
            display: flex;
            align-items: center;
            .j-comment-icon {
                width: 20px;
                height: 20px;
                cursor: pointer;
            }
        }
        .j-comment-childer {
            padding: 0.5rem;
            margin-left: calc(40px + 1em);
            padding-left: 1em;
            background-color: #f9fafb;
            .j-coment-children-content {
                background-color: #f2f3f5;
                padding: 0.5rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
    .j-comment-childer-more {
        cursor: pointer;
    }
}
</style>
