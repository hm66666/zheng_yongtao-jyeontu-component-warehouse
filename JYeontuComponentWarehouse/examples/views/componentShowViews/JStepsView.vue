<template>
    <split-horizontal>
        <template v-slot:header-p>
            <div class="j-title">
                步骤条（JSteps）
                <div class="j-detail">
                    用于引导用户按照流程完成任务的导航条，显示当前所在步骤
                </div>
            </div>
        </template>
        <template v-slot:left-p>
            <div class="content">
                <j-steps :dataList="dataList" :lineStyle="lineStyle"> </j-steps>
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
    name: "JStepsView",
    components: {},
    mixins: [mixinForView],
    data() {
        return {
            iconWidth: 50,
            lineStyle: {
                color: "skyblue",
                height: "100px",
            },
            code: "",
            dataList: [
                {
                    title: "版本0.1.5（待发布）",
                    descript:
                        "优化：代码高亮组件、表格组件增加展开行；增加：步骤图组件",
                    time: "未定",
                    icon: "图标",
                },
                {
                    title: "版本0.1.4（已发布）",
                    descript: "优化：代码高亮组件",
                    time: "2021-12-01",
                    icon: "图标",
                },
                {
                    title: "版本0.1.3（已发布）",
                    descript: "增加：悬浮按钮组件、弹窗组件",
                    time: "2021-11-28",
                    icon: "图标",
                },
                {
                    title: "版本0.1.2（已发布）",
                    descript: "增加：数字滚动变化效果组件；工具函数",
                    time: "2021-11-26",
                    icon: "图标",
                },
                {
                    title: "版本0.1.1（已发布）",
                    descript:
                        "项目搭建，导入：日历组件、电子屏数字组件、流程图组件、表格组件、代码高亮组件、canvas画板组件",
                    time: "2021-11-24",
                    icon: "图标",
                },
                {
                    title: "版本0.1.0（已发布）",
                    descript: "初始化npm库",
                    time: "2021-11-22",
                    icon: "图标",
                },
            ],
            tableData: [
                {
                    parameter: "direction",
                    field: "方向",
                    type: "String",
                    describe: "默认为纵向",
                },
                {
                    parameter: "iconWidth",
                    field: "icon宽",
                    type: "Number",
                    describe: "icon宽度，默认值为50",
                },
                {
                    parameter: "sortBy",
                    field: "排序字段",
                    type: "String",
                    describe: "指定进行排序的字段",
                },
                {
                    parameter: "lineStyle",
                    field: "连接线样式",
                    type: "Object",
                    describe: "icon之间连接线样式",
                },
                {
                    parameter: "titleStyle",
                    field: "title字段样式",
                    type: "Object",
                    describe: "title字段样式",
                },
                {
                    parameter: "descriptStyle",
                    field: "descript字段样式",
                    type: "Object",
                    describe: "descript字段样式",
                },
                {
                    parameter: "timeStyle",
                    field: "time字段样式",
                    type: "Object",
                    describe: "time字段样式",
                },
                {
                    parameter: "dataList",
                    field: "详细数据",
                    type: "Array",
                    describe: "具体数据结构如下代码示例",
                },
            ],
        };
    },
    created() {
        this.code = `
<template>
    <div>
        <j-steps :dataList="dataList" :lineStyle="lineStyle">
        </j-steps>
    </div>
</template>

export default {
    data(){
        return {
            iconWidth:50,
            lineStyle:{
                color:'skyblue',
                height:'100px'
            },
            dataList:[{
                title:'版本0.1.5（待发布）',
                descript:'优化：代码高亮组件；增加：步骤图组件',
                time:'未定',
                icon:'图标',
            },{
                title:'版本0.1.4（已发布）',
                descript:'优化：代码高亮组件',
                time:'2021-12-01',
                icon:'图标',
            },{
                title:'版本0.1.3（已发布）',
                descript:'增加：悬浮按钮组件、弹窗组件',
                time:'2021-11-28',
                icon:'图标',
            },{
                title:'版本0.1.2（已发布）',
                descript:'增加：数字滚动变化效果组件；工具函数',
                time:'2021-11-26',
                icon:'图标',
            },{
                title:'版本0.1.1（已发布）',
                descript:'项目搭建，导入：日历组件、电子屏数字组件、流程图组件、表格组件、代码高亮组件、canvas画板组件',
                time:'2021-11-24',
                icon:'图标',
            },{
                title:'版本0.1.0（已发布）',
                descript:'初始化npm库',
                time:'2021-11-22',
                icon:'图标',
            }],
        }
    },
}
`;
    },
    mounted() {},
    methods: {},
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
    width: 100%;
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
