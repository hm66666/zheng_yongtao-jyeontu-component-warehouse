<template>
    <split-horizontal>
        <template v-slot:header-p>
            <div class="j-title">
                Gitee仓库信息组件（JGiteeInfoTag）
                <div class="j-detail">Gitee仓库信息组件</div>
            </div>
        </template>
        <template v-slot:left-p>
            <div class="content">
                <cut-img></cut-img>
                <j-img-verify :title="tableTitle" :tableData="tableData">
                </j-img-verify>
            </div>
        </template>
        <template v-slot:right-p>
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
    name: "JImgVerifyView",
    mixins: [mixinForView],
    data() {
        return {
            code: "",
            tableData: [],
            repoList: [
                {
                    owner: "zheng_yongtao",
                    repo: "jyeontu-component-warehouse",
                },
                {
                    owner: "zheng_yongtao",
                    repo: "me-and-my-doodle",
                },
                {
                    owner: "peng_zhihui",
                    repo: "HelloWord-Keyboard",
                },
            ],
        };
    },
    created() {
        this.initTableData();
        this.initCodeContent();
    },
    mounted() {},
    methods: {
        initCodeContent() {
            this.code = `
<template>
    <div class="content">
        <j-gitee-info-tag
            v-for="(item, index) in repoList"
            :key="'repo-' + index"
            :repo="item.repo"
            :owner="item.owner"
        ></j-gitee-info-tag>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                repoList: [
                {
                    owner: "zheng_yongtao",
                    repo: "jyeontu-component-warehouse"
                },
                {
                    owner: "zheng_yongtao",
                    repo: "me-and-my-doodle"
                },
                {
                    owner: "peng_zhihui",
                    repo: "HelloWord-Keyboard"
                }]
            }
        }
    }
<\/script>
            `;
        },
        initTableData() {
            this.tableData = [
                {
                    parameter: "owner",
                    field: "仓库作者",
                    type: "String",
                    describe: "仓库作者",
                },
                {
                    parameter: "repo",
                    field: "仓库名",
                    type: "String",
                    describe: "仓库名",
                },
            ];
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
