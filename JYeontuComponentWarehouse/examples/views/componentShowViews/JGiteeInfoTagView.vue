<template>
    <split-horizontal>
        <template v-slot:header-p>
            <div class="j-title">
                Gitee仓库信息组件（JGiteeInfoTag）
                <div class="j-detail">
                    Gitee仓库信息组件
                </div>
            </div>
        </template>
        <template v-slot:left-p>
            <div class="content">
                <j-gitee-info-tag
                    v-for="(item, index) in repoList"
                    :key="'repo-' + index"
                    :repo="item.repo"
                    :owner="item.owner"
                ></j-gitee-info-tag>
            </div>
        </template>
        <template v-slot:right-p>
            <div>
                <j-table :title="tableTitle" :tableData="tableData"> </j-table>
            </div>
        </template>
        <template v-slot:footer-p>
            <pre v-highlight>
                <code class="vue" v-text="code">
                </code>
            </pre>
        </template>
    </split-horizontal>
</template>
<script>
import splitHorizontal from "@/components/pages/splitHorizontal.vue";
export default {
    name: "JToolTipView",
    components: {
        splitHorizontal
    },
    data() {
        return {
            code: "",
            tableTitle: [
                {
                    title: "参数", //展示列名
                    key: "parameter", //字段名
                    type: "", // 列类型
                    readOnly: true, //是否只读
                    width: "20vw", //列宽度
                    columnStyle: "", // 列样式
                    fixed: false, //是否固定
                    sort: false // 是否支持排序
                },
                {
                    title: "字段名", //展示列名
                    key: "field", //字段名
                    type: "", // 列类型
                    readOnly: true, //是否只读
                    width: "30vw", //列宽度
                    columnStyle: "", // 列样式
                    fixed: false, //是否固定
                    sort: false // 是否支持排序
                },
                {
                    title: "数据类型", //展示列名
                    key: "type", //字段名
                    type: "", // 列类型
                    readOnly: true, //是否只读
                    width: "15vw", //列宽度
                    columnStyle: "", // 列样式
                    fixed: false, //是否固定
                    sort: false // 是否支持排序
                },
                {
                    title: "描述", //展示列名
                    key: "describe", //字段名
                    type: "", // 列类型
                    readOnly: true, //是否只读
                    width: "35vw", //列宽度
                    columnStyle: "", // 列样式
                    fixed: false, //是否固定
                    sort: false // 是否支持排序
                }
            ],
            tableData: [],
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
                }
            ]
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
                    describe: "仓库作者"
                },
                {
                    parameter: "repo",
                    field: "仓库名",
                    type: "String",
                    describe: "仓库名"
                }
            ];
        }
    }
};
</script>
<style scoped lang="scss">
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
