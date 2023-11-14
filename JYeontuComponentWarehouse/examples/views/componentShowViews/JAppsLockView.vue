<template>
    <split-horizontal>
        <template v-slot:header-p>
            <div class="j-title">
                图案手势锁（JAppsLock）
                <div class="j-detail">仿手机图案手势锁</div>
            </div>
        </template>
        <template v-slot:left-p>
            <div class="content">
                <j-apps-lock @commit="commit" :size="size"></j-apps-lock>
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
    name: "JToolTipView",
    components: {},
    mixins: [mixinForView],
    data() {
        return {
            size: 4,
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
        <j-apps-lock @commit="commit" size="5"></j-apps-lock>
    </div>
</template>
export default {
    data() {
        return {
        }
    },
    methods:{
        commit(password) {
            this.$JToast(password);
        }
    }
}
        `;
        },
        initTableData() {
            this.tableData = [
                {
                    parameter: "id",
                    field: "组件id",
                    type: "String",
                    describe: "自定义组件的id，不设置则自动生成",
                },
                {
                    parameter: "backgroundColor",
                    field: "背景颜色",
                    type: "String",
                    describe: "图案锁背景颜色，默认为aquamarine",
                },
                {
                    parameter: "size",
                    field: "图案锁尺寸",
                    type: "Number",
                    describe: "默认为3(即3 * 3 个点)",
                },
                {
                    parameter: "commit",
                    field: "获取图案",
                    type: "Function",
                    describe: "手指抬起的回调方法，返回参数图案列表",
                },
                {
                    parameter: "showArrow",
                    field: "展示方向箭头",
                    type: "Boolean",
                    describe: "默认显示",
                },
            ];
        },
        commit(password) {
            this.$JToast(password);
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
    height: 300px;
    width: 300px;
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
