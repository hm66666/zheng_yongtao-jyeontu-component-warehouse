<template>
    <split-horizontal>
        <template v-slot:header-p>
            <div class="j-title">
                贡献度面板（JContributionPanel）
                <div class="j-detail">贡献度面板</div>
            </div>
        </template>
        <template v-slot:left-p>
            <div class="content">
                <j-contribution-panel> </j-contribution-panel>
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
    name: "JContributionPanelView",
    components: {
        splitHorizontal,
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
                    sort: false, // 是否支持排序
                },
                {
                    title: "字段名", //展示列名
                    key: "field", //字段名
                    type: "", // 列类型
                    readOnly: true, //是否只读
                    width: "30vw", //列宽度
                    columnStyle: "", // 列样式
                    fixed: false, //是否固定
                    sort: false, // 是否支持排序
                },
                {
                    title: "数据类型", //展示列名
                    key: "type", //字段名
                    type: "", // 列类型
                    readOnly: true, //是否只读
                    width: "15vw", //列宽度
                    columnStyle: "", // 列样式
                    fixed: false, //是否固定
                    sort: false, // 是否支持排序
                },
                {
                    title: "描述", //展示列名
                    key: "describe", //字段名
                    type: "", // 列类型
                    readOnly: true, //是否只读
                    width: "35vw", //列宽度
                    columnStyle: "", // 列样式
                    fixed: false, //是否固定
                    sort: false, // 是否支持排序
                },
            ],
            tableData: [],
        };
    },
    created() {
        this.initTableData();
        this.initCodeContent();
    },
    mounted() {},
    methods: {
        imgClick(item) {
            console.log("imgClick: ", item);
        },
        initCodeContent() {
            this.code = `
            <template>
                <j-contribution-panel>
                </j-contribution-panel>
            </template>
            `;
        },
        initTableData() {
            this.tableData = [
                {
                    parameter: "imgList",
                    field: "图片列表",
                    type: "Array",
                    describe: "需要展示的图片列表数组，本地图片需要require引入",
                },
                {
                    parameter: "column",
                    field: "展示图片列数",
                    type: "Number",
                    describe: "设置展示图片列数",
                },
                {
                    parameter: "imgMargin",
                    field: "图片边距",
                    type: "Number",
                    describe: "图片边距",
                },
                {
                    parameter: "imgClick",
                    field: "图片点击回调事件",
                    type: "function",
                    describe: "图片点击回调事件",
                },
            ];
        },
    },
};
</script>
<style lang="less" scoped>
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
    height: 40vh;
    overflow-y: scroll;
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
