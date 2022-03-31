<template>
    <split-horizontal>
        <template v-slot:header-p>
            <div class="j-title">
                对话弹窗（JDialog）
                <div class="j-detail">
                    页面弹出窗口
                </div>
            </div>
        </template>
        <template v-slot:left-p>
            <div class="content">
                <j-dialog
                    :title="title"
                    ref="JDialog"
                    :closable="true"
                    @confirm="confirm"
                    :btnList="btnList"
                >
                    <template v-slot:j-dialog-main-content>
                        <div class="content-body">
                            <p>人生就像海洋</p>
                            <p>只有意志坚强的人才能到达彼岸</p>
                        </div>
                    </template>
                </j-dialog>
                <button @click="showDialog()">
                    点我
                </button>
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
    name: "JDialogView",
    components: {
        splitHorizontal
    },
    data() {
        return {
            title: "我是标题",
            btnList: [
                {
                    text: "取消",
                    style: {
                        backgroundColor: "orangered",
                        width: "100px",
                        borderRadius: "5px"
                    },
                    click: "close"
                },
                {
                    text: "确认",
                    style: {
                        backgroundColor: "seagreen",
                        width: "100px",
                        borderRadius: "5px"
                    },
                    click: "confirm"
                }
            ],
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
                    parameter: "title",
                    field: "标题",
                    type: "String",
                    describe: "左上角显示标题"
                },
                {
                    parameter: "closable",
                    field: "点击遮罩关闭弹窗",
                    type: "Boolean",
                    describe: "默认为false"
                },
                {
                    parameter: "btnList",
                    field: "底部按钮列表",
                    type: "Array",
                    describe: "具体配置如下",
                    children: {
                        title: this.tableTitle,
                        data: [
                            {
                                parameter: "text",
                                field: "按钮文字",
                                type: "String",
                                describe: "按钮文字"
                            },
                            {
                                parameter: "style",
                                field: "按钮样式",
                                type: "String",
                                describe: "按钮样式"
                            },
                            {
                                parameter: "click",
                                field: "按钮点击事件",
                                type: "String",
                                describe: "按钮点击事件"
                            }
                        ]
                    }
                }
            ]
        };
    },
    created() {
        this.code = `
<template>
    <div>
        <j-dialog :title="title" 
                closable="true" 
                :btnList="btnList">
            <template v-slot:j-dialog-main-content>
                <div>人生就像海洋</div>
                <div>只有意志坚强的人才能到达彼岸</div>
            </template>
        </j-dialog>
        <button @click="showDialog()">
            点我
        </button>
    </div>
</template>
<script>
    export default {
        data(){
            return {
            title:"我是标题",
            btnList:[
                {
                    text:'取消',
                    style:{
                        backgroundColor:'orangered'
                    },
                    click:'close'
                },
                {
                    text:'确认',
                    style:{
                        backgroundColor:'seagreen'
                    },
                    click:'confirm'
                }
            ]
            }
        },
        mounted() {
            
        },
        methods:{
            showDialog() {
                this.$refs["JDialog"].showDialog();
            },
            confirm(){
                console.log('confirm');
                this.$refs.JDialog.closeDialog();
            }
        }
    }
</script>
    `;
    },
    mounted() {},
    methods: {
        showDialog() {
            this.$refs["JDialog"].showDialog();
        },
        confirm() {
            // console.log("confirm");
            this.$refs.JDialog.closeDialog();
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
    .content-body {
        text-align: center;
    }
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
