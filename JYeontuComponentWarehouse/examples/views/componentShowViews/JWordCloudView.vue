<template>
    <split-horizontal>
        <template v-slot:header-p>
            <div class="j-title">
                词云图（JWordCloud）
                <div class="j-detail">
                    通过词频统计绘制词云图
                </div>
            </div>
        </template>
        <template v-slot:left-p>
            <div class="content">
                <j-word-cloud :textList="textList"></j-word-cloud>
            </div>
        </template>
        <template v-slot:right-p>
            <div>
                <j-table :title="tableTitle" :tableData="tableData" style="">
                </j-table>
            </div>
        </template>
        <template v-slot:footer-p>
            <!-- <j-code-height-light :code="code" class="footer">
            </j-code-height-light> -->
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
    name: "JWordCloudView",
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
            tableData: [
                {
                    parameter: "textList",
                    field: "词频列表",
                    type: "Array",
                    describe: "如：[{ text: '单词', freq: 10 }]"
                },
                {
                    parameter: "width",
                    field: "容器宽度",
                    type: "Number",
                    describe: "容器宽度，默认为300"
                },
                {
                    parameter: "baseSize",
                    field: "字体基准值",
                    type: "Number",
                    describe: "字体基准值，默认为2"
                },
                {
                    parameter: "maxSize",
                    field: "字体大小浮动范围最大值",
                    type: "Number",
                    describe: "字体大小浮动范围最大值，默认为5"
                },
                {
                    parameter: "minSize",
                    field: "字体大小浮动范围最小值",
                    type: "Number",
                    describe: "字体大小浮动范围最小值，默认为1"
                }
            ],
            textList: [
                { text: "单词", freq: 10 },
                { text: "单词1", freq: 5 },
                { text: "单词2", freq: 7 },
                { text: "单词3", freq: 2 },
                { text: "单词5", freq: 3 },
                { text: "单词6", freq: 4 },
                { text: "单词7", freq: 5 },
                { text: "单词8", freq: 6 },
                { text: "单词9", freq: 6 },
                { text: "单词10", freq: 8 },
                { text: "单词11", freq: 4 },
                { text: "单词12", freq: 2 },
                { text: "单词13", freq: 4 },
                { text: "单词14", freq: 3 },
                { text: "单词15", freq: 1 },
                { text: "单词16", freq: 5 }
            ]
        };
    },
    created() {
        this.setCode();
    },
    mounted() {},
    methods: {
        setCode() {
            this.code = `
<template>
    <div>
        <j-word-cloud :textList="textList"></j-word-cloud>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                textList: [
                    { text: "单词", freq: 10 },
                    { text: "单词1", freq: 5 },
                    { text: "单词2", freq: 7 },
                    { text: "单词3", freq: 2 },
                    { text: "单词5", freq: 3 },
                    { text: "单词6", freq: 4 },
                    { text: "单词7", freq: 5 },
                    { text: "单词8", freq: 6 },
                    { text: "单词9", freq: 6 },
                    { text: "单词10", freq: 8 },
                    { text: "单词11", freq: 4 },
                    { text: "单词12", freq: 2 },
                    { text: "单词13", freq: 4 },
                    { text: "单词14", freq: 3 },
                    { text: "单词15", freq: 1 },
                    { text: "单词16", freq: 5 }
                ]
            }
        },
        methods: {}
    }
</script>`;
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
