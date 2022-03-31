<template>
    <split-horizontal>
        <template v-slot:header-p>
            <div class="j-title">
                悬浮提示（JToolTip）
                <div class="j-detail">
                    动态工具悬浮提示
                </div>
            </div>
        </template>
        <template v-slot:left-p>
            <div class="content">
                <p>
                    hover
                    <j-tool-tip
                        tipText="one"
                        :textStyle="textStyle"
                        :toolTipStyle="toolTipStyle"
                        >here
                    </j-tool-tip>
                    to see one.
                </p>
                <p>
                    hover
                    <j-tool-tip tipText="another">here </j-tool-tip>
                    to see another.
                </p>
            </div>
        </template>
        <template v-slot:right-p>
            <div>
                <j-table :title="tableTitle" :tableData="tableData"> </j-table>
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
    name: "JToolTipView",
    components: {
        splitHorizontal
    },
    data() {
        return {
            code: "",
            textStyle: {
                borderBottom: "1px dotted skyblue",
                fontSize: "large",
                color: "skyblue"
            },
            toolTipStyle: {
                backgroundColor: "grey",
                color: "skyblue",
                width: "100px"
            },
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
            tableData: []
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
        <p>
            hover
            <j-tool-tip
                tipText="one"
                :textStyle="textStyle"
                :toolTipStyle="toolTipStyle"
                >here
            </j-tool-tip>
            to see one.
        </p>
        <p>
            hover
            <j-tool-tip tipText="another">here </j-tool-tip>
            to see another.
        </p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                textStyle: {
                    borderBottom: "1px dotted skyblue",
                    fontSize: "large",
                    color: "skyblue"
                },
                toolTipStyle: {
                    backgroundColor: "grey",
                    color: "skyblue",
                    width: "100px"
                },
            }
        }
    }
</script>
            `;
        },
        initTableData() {
            this.tableData = [
                {
                    parameter: "tipText",
                    field: "提示内容",
                    type: "String",
                    describe: ""
                },
                {
                    parameter: "textStyle",
                    field: "文字样式",
                    type: "Object",
                    describe: "设置文字样式，如下划线样式",
                    children: {
                        type: "text",
                        text: '{"border-bottom": "1px dotted black"}'
                    }
                },
                {
                    parameter: "toolTipStyle",
                    field: "提示框内容样式",
                    type: "Object",
                    describe: "具体配置如下",
                    children: {
                        title: this.tableTitle,
                        data: [
                            {
                                parameter: "backgroundColor",
                                field: "提示框背景颜色",
                                type: "String",
                                describe: "默认为#062b45"
                            },
                            {
                                parameter: "color",
                                field: "提示框字体颜色",
                                type: "String",
                                describe: "默认为#fff"
                            },
                            {
                                parameter: "width",
                                field: "提示框宽度",
                                type: "String",
                                describe: "默认为100px"
                            }
                        ]
                    }
                }
            ];
        }
    }
};
</>
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
