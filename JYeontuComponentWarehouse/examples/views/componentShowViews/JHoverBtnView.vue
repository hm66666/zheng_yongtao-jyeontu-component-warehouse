<template>
    <split-horizontal>
        <template v-slot:header-p>
            <div class="j-title">
                悬浮按钮（JHoverBtn）
                <div class="j-detail">可拖拽悬浮按钮组件</div>
            </div>
        </template>
        <template v-slot:left-p>
            <div class="content">
                <j-hover-btn
                    bgColor="pink"
                    :width="80"
                    text="按钮文字"
                    :btn-style="btnStyle"
                    @hoverBtnClick="hoverBtnClick()"
                >
                </j-hover-btn>
                <j-hover-btn
                    bgColor="skyblue"
                    :width="80"
                    text="悬浮按钮2"
                    :btn-style="btnStyle2"
                    @hoverBtnClick="hoverBtnClick()"
                >
                </j-hover-btn>
            </div>
        </template>
        <template v-slot:right-p>
            <div>
                <j-table
                    :title="tableTitle"
                    :tableData="tableData"
                    style="height: 500px"
                >
                </j-table>
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
    name: "JHoverBtnView",
    components: {},
    mixins: [mixinForView],
    data() {
        return {
            code: "",
            btnStyle: {
                fontSize: "small",
                top: "60vh",
                left: "90vw",
            },
            btnStyle2: {
                fontSize: "small",
                top: "40vh",
                left: "90vw",
            },
            tableData: [
                {
                    parameter: "bgColor",
                    field: "按钮背景颜色",
                    type: "String",
                    describe: "默认为deepskyblue",
                },
                {
                    parameter: "autoHide",
                    field: "贴边隐藏",
                    type: "Boolean",
                    describe: "按钮移动到左右两侧会自动缩进两边，默认为true",
                },
                {
                    parameter: "clickDis",
                    field: "判断是否点击事件距离（px）",
                    type: "Number",
                    describe: "移动距离小于该值则为点击事件，默认为10",
                },
                {
                    parameter: "showWidth",
                    field: "贴边隐藏后露出宽度（px）",
                    type: "Number",
                    describe: "数字保留小数点，默认为15",
                },
                {
                    parameter: "width",
                    field: "按钮宽高（px）",
                    type: "Number",
                    describe: "默认为80",
                },
                {
                    parameter: "radius",
                    field: "是否圆角",
                    type: "Boolean",
                    describe: "默认为true",
                },
                {
                    parameter: "btnStyle",
                    field: "自定义样式",
                    type: "Object",
                    describe: "键值对形式，支持驼峰命名和-命名",
                },
                {
                    parameter: "text",
                    field: "按钮显示文字",
                    type: "String",
                    describe: "默认为'悬浮按钮'",
                },
                {
                    parameter: "zIndex",
                    field: "按钮层级",
                    type: "Number",
                    describe: "默认为999",
                },
            ],
        };
    },
    created() {
        this.code = `
<template>
    <div>
        <j-hover-btn bgColor = 'pink' 
            width = '80' 
            text = '按钮文字' 
            :btn-style = "btnStyle" 
            @hoverBtnClick = "hoverBtnClick()">
        </j-hover-btn>
        <j-hover-btn
            bgColor="skyblue"
            :width="80"
            text="悬浮按钮2"
            :btn-style="btnStyle2"
            @hoverBtnClick="hoverBtnClick()"
        >
        </j-hover-btn>
    </div>
</template>

export default {
    data(){
        return {
            btnStyle:{
            "fontSize":'small',
            "top":'60vh',
            "left":'90vw'
            },
            btnStyle2: {
                fontSize: "small",
                top: "40vh",
                left: "90vw",
            },
        }
    },
    methods:{
        hoverBtnClick(){
        alert('触发点击事件');
        }
    }
}
    
`;
    },
    mounted() {},
    methods: {
        hoverBtnClick() {
            alert("触发点击事件");
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
