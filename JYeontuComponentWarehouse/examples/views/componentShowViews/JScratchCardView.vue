<template>
    <split-horizontal>
        <template v-slot:header-p>
            <div class="j-title">
                刮刮卡效果（JScratchCard）
                <div class="j-detail">
                    dom原生简单实现刮刮卡效果
                </div>
            </div>
        </template>
        <template v-slot:left-p>
            <div class="content">
                <j-scratch-card
                    :block="block"
                    :width="'300px'"
                    :height="'300px'"
                    :mode="'dom'"
                    :color="'gray'"
                >
                    <template v-slot:j-scratch-card-bg-slot>
                        <div class="j-scratch-card-bg-slot">
                            <div class="slot-text-title">特等奖</div>
                            <div class="slot-text-content">
                                恭喜您获得
                                <span class="bold">1年带薪调休假期</span>
                            </div>
                            <div class="slot-text-dec">
                                本奖项的中奖几率为0.001%，恭喜您成为本次活动的天选之子，获得本次活动的特等奖，可凭此卡到财务办理相关手续进行调休安排，在此预祝您假期愉快。
                            </div>
                        </div>
                    </template>
                </j-scratch-card>
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
    name: "JScratchCardView",
    components: {
        splitHorizontal
    },
    data() {
        return {
            code: "",
            block: {
                width: "20px",
                height: "20px"
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
        <j-scratch-card
            :block="block"
            :width="'300px'"
            :height="'300px'"
            :mode="'dom'"
            :color="'gray'"
        >
            <template v-slot:j-scratch-card-bg-slot>
                <div class="j-scratch-card-bg-slot">
                    <div class="slot-text-title">特等奖</div>
                    <div class="slot-text-content">
                        恭喜您获得
                        <span class="bold">1年带薪调休假期</span>
                    </div>
                    <div class="slot-text-dec">
                        本奖项的中奖几率为0.001%，恭喜您成为本次活动的天选之子，获得本次活动的特等奖，可凭此卡到财务办理相关手续进行调休安排，在此预祝您假期愉快。
                    </div>
                </div>
            </template>
        </j-scratch-card>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                block: {
                    width: "20px",
                    height: "20px",
                    color: "skyblue"
                },
            }
        }
    }
<\/script>
<style scoped lang="scss">
.j-scratch-card-bg-slot {
    width: 298px;
    height: 298px;
    border: 1px solid skyblue;
    background-image: linear-gradient(
        to right,
        rgba(160, 34, 34, 0),
        rgb(21, 163, 245)
    );
    .slot-text-title {
        font-size: x-large;
        text-align: center;
        font-weight: bolder;
        padding: 1em;
    }
    .slot-text-content {
        text-align: center;
        padding-top: 1em;
        font-size: medium;
        .bold {
            font-size: large;
            color: orange;
            font-weight: bolder;
        }
    }
    .slot-text-dec {
        text-align: left;
        font-size: small;
        text-indent: 2em;
        line-height: 1.5em;
        padding: 1em 0.5em;
    }
}
</style>
            `;
        },
        initTableData() {
            this.tableData = [
                {
                    parameter: "width",
                    field: "刮刮卡宽度",
                    type: "String",
                    describe: "默认为300px"
                },
                {
                    parameter: "height",
                    field: "刮刮卡高度",
                    type: "String",
                    describe: "默认为200px"
                },
                {
                    parameter: "mode",
                    field: "刮刮卡模式",
                    type: "String",
                    describe: "默认为canvas,其他则为dom"
                },
                {
                    parameter: "color",
                    field: "刮刮卡涂层颜色",
                    type: "String",
                    describe: "默认为gray"
                },
                {
                    parameter: "block",
                    field: "遮罩小块配置",
                    type: "Object",
                    describe: "设置遮罩小块的属性参数",
                    children: {
                        type: "text",
                        text: '{width: "20px",height: "20px"}'
                    }
                }
            ];
        }
    }
};
</script>
<style scoped lang="scss">
.j-scratch-card-bg-slot {
    width: 298px;
    height: 298px;
    border: 1px solid skyblue;
    background-image: linear-gradient(
        to right,
        rgba(160, 34, 34, 0),
        rgb(21, 163, 245)
    );
    .slot-text-title {
        font-size: x-large;
        text-align: center;
        font-weight: bolder;
        padding: 1em;
    }
    .slot-text-content {
        text-align: center;
        padding-top: 1em;
        font-size: medium;
        .bold {
            font-size: large;
            color: orange;
            font-weight: bolder;
        }
    }
    .slot-text-dec {
        text-align: left;
        font-size: small;
        text-indent: 2em;
        line-height: 1.5em;
        padding: 1em 0.5em;
    }
}
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
