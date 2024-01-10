<template>
    <split-horizontal>
        <template v-slot:header-p>
            <div class="j-title">
                转盘抽奖（JTurntableRaffle）
                <div class="j-detail">转盘抽奖工具</div>
            </div>
        </template>
        <template v-slot:left-p>
            <div class="content">
                <JTurntableRaffle
                    width="400px"
                    height="400px"
                    :prizes="prizes"
                    @getPrize="getPrize"
                >
                </JTurntableRaffle>
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
    name: "JTurntableRaffleView",
    components: {},
    mixins: [mixinForView],
    data() {
        return {
            prizes: [
                {
                    name: "奖品1",
                    proportion: 2,
                },
                {
                    name: "奖品2",
                    proportion: 3,
                },
                {
                    name: "奖品3",
                    proportion: 3,
                },
                {
                    name: "奖品4",
                    proportion: 3,
                },
                {
                    name: "奖品5",
                },
                {
                    name: "奖品6",
                },
                {
                    name: "奖品7",
                },
                {
                    name: "奖品8",
                },
            ],
            code: "",
            textStyle: {
                borderBottom: "1px dotted skyblue",
                fontSize: "large",
                color: "skyblue",
            },
            toolTipStyle: {
                backgroundColor: "grey",
                color: "skyblue",
                width: "100px",
            },
            tableData: [],
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
        `;
        },
        initTableData() {
            this.tableData = [
                {
                    parameter: "width",
                    field: "转盘宽度",
                    type: "String",
                    describe: "默认为100%，可设置具体值",
                },
                {
                    parameter: "height",
                    field: "转盘高度",
                    type: "String",
                    describe: "默认为100%，可设置具体值",
                },
                {
                    parameter: "prizes",
                    field: "奖品列表",
                    type: "Object",
                    describe: "具体配置如下",
                    children: {
                        title: this.tableTitle,
                        data: [
                            {
                                parameter: "name",
                                field: "奖品名称",
                                type: "String",
                                describe: "",
                            },
                            {
                                parameter: "proportion",
                                field: "奖品占比",
                                type: "Number",
                                describe:
                                    "默认为1,即奖品比例为：当前奖品的proportion / 所有奖品的proportion之和",
                            },
                            {
                                parameter: "color",
                                field: "奖品区域背景颜色",
                                type: "String",
                                describe:
                                    "可自定义区域背景颜色，不传的时候则随机生成",
                            },
                        ],
                    },
                },
                {
                    parameter: "roundTime",
                    field: "转盘转动时间",
                    type: "Number",
                    describe: "单位为秒，默认为5",
                },
                {
                    parameter: "getPrize",
                    field: "抽奖结果",
                    type: "Fuction",
                    describe: "抽奖结果回调函数，返回抽奖结果",
                },
            ];
        },
        getPrize(prize) {
            this.$JToast(`恭喜抽中${prize.name}`);
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
