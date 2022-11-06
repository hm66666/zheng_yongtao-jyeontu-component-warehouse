<template>
    <div v-if="repoInfo">
        <div class="j-gitee-repo-info">
            <div class="j-gitee-repo-info-name">
                <i class="iconfont icon-xiangqing"></i>
                <a
                    class="popular-project-title"
                    :href="repoInfo.html_url"
                    target="_blank"
                    >{{ repoInfo.name }}</a
                >
            </div>
            <div class="j-gitee-repo-author">
                <span v-if="repoInfo.owner"
                    >owner：{{ repoInfo.owner.name }}</span
                >
            </div>
            <div class="j-gitee-repo-info-desc">
                {{ repoInfo.description }}
            </div>
            <div class="j-gitee-repo-info-tags">
                <a
                    v-for="item in repoInfo.project_labels"
                    :key="'label-' + item.id"
                >
                    <span class="project-label-item">{{ item.name }}</span>
                </a>
            </div>
            <div class="j-gitee-repo-info-nums">
                <div class="j-gitee-repo-info-lang">
                    <i class="iconfont icon-code"></i
                    ><span>{{ repoInfo.language }}</span>
                </div>
                <div class="float-right">
                    <div class="j-gitee-repo-info-forks float-right">
                        <i class="iconfont icon-fork"></i>
                        <span>{{ repoInfo.forks_count }}</span>
                    </div>
                    <div class="j-gitee-repo-info-stars float-right">
                        <i class="iconfont icon-star1"></i>
                        <span>{{ repoInfo.stargazers_count }}</span>
                    </div>
                    <div class="j-gitee-repo-info-watchers float-right">
                        <i class="iconfont icon-watch"></i>
                        <span> {{ repoInfo.watchers_count }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "JGiteeInfoTag",
    props: {
        owner: {
            type: String,
            default: "zheng_yongtao",
        },
        repo: {
            type: String,
            default: "jyeontu-component-warehouse",
        },
    },
    data() {
        return {
            api: {
                getRepo: "https://gitee.com/api/v5/repos/", //获取用户的某个仓库
            },
            repoInfo: {},
        };
    },
    created() {
        this.getRepo();
    },
    mounted() {},
    methods: {
        getRepo() {
            this.$http
                .get(this.api.getRepo + this.owner + "/" + this.repo)
                .then((res) => {
                    this.repoInfo = res.body;
                });
        },
    },
};
</script>

<style lang="less" scoped>
.j-gitee-repo-info {
    margin: 0.5em !important;
    padding: 1em;
    width: calc(50% - 1em) !important;
    border: 1px solid #dce3e8;
    -webkit-box-shadow: none;
    box-shadow: none;
    .j-gitee-repo-info-name {
        font-weight: bold;
        font-size: 1.28571429em;
        margin-top: -0.21425em;
        line-height: 1.28571429em;
        .popular-project-title {
            font-size: 16px;
            word-break: break-all;
            vertical-align: middle;
            margin-left: 6px;
            color: #005980;
            transition: color 0.1s ease;
        }
    }
    .j-gitee-repo-info-desc {
        min-height: 30px;
        color: #40485b;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .j-gitee-repo-author {
        span {
            height: 20px;
            line-height: 16px;
            padding: 2px 8px;
            font-size: 14px;
            font-weight: 400;
            border-radius: 4px;
            background: skyblue;
            color: #6a6a6a;
        }
    }
    .j-gitee-repo-info-tags {
        margin-top: 4px;
        .project-label-item {
            height: 20px;
            line-height: 16px;
            padding: 2px 8px;
            font-size: 12px;
            font-weight: 400;
            border-radius: 4px;
            background: #f2f4f6;
            color: #6a6a6a;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            max-width: 120px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-right: 4px;
        }
    }
    .j-gitee-repo-info-nums {
        padding-top: 16px;
        border: none !important;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        .j-gitee-repo-info-lang {
            float: left;
        }
        .float-right {
            float: right;
        }
    }
}
</style>
