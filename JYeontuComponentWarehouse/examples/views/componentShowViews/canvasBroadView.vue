<template>
    <split-horizontal>
        <template v-slot:header-p>
            <div class="j-title">
                canvas画板组件（JCanvasBroad）
                <div class="j-detail">canvas画板组件</div>
            </div>
        </template>
        <template v-slot:left-p>
            <div class="broad-title">我的画板</div>
            <div class="broad-contain">
                <j-canvas-broad
                    class="canvas-baroad"
                    :toolsTabList="true"
                    :height="height"
                    :width="width"
                >
                </j-canvas-broad>
            </div>
        </template>
        <template v-slot:right-p>
            <div>
                <j-table :title="tableTitle" :tableData="tableData1"> </j-table>
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
    name: "canvasBroadView",
    components: {},
    mixins: [mixinForView],
    data() {
        return {
            width: -1,
            height: -1,
            tableData1: [
                {
                    parameter: "height",
                    field: "画板高度",
                    type: "Number",
                    describe: "默认为父元素高度*0.7",
                },
                {
                    parameter: "width",
                    field: "画板宽度",
                    type: "Number",
                    describe: "默认为父元素宽度*0.9",
                },
                {
                    parameter: "defaultPenColor",
                    field: "默认画笔颜色",
                    type: "String",
                    describe: "默认为#000000",
                },
                {
                    parameter: "defaultPenSize",
                    field: "默认画笔尺寸",
                    type: "Number",
                    describe: "默认为4px",
                },
                {
                    parameter: "defaultBackGroundColor",
                    field: "默认背景颜色",
                    type: "String",
                    describe: "默认为#ffffff",
                },
                {
                    parameter: "toolsTabList",
                    field: "工具栏tabbar显示",
                    type: "Boolean",
                    describe: "默认为false",
                },
            ],
            chatData: {},
            code: "",
        };
    },
    created() {
        this.code = `
<template>
    <div>
        <j-canvas-broad class="canvas-baroad" 
            :toolsTabList="true" 
            :height="height" 
            :width="width">
        </j-canvas-broad>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                width:-1,
                height:-1,
            }
        }
    }
<\/script>
`;
    },
    methods: {},
};
</script>

<style lang="less" scoped="scoped">
.broad-title {
    line-height: 3rem;
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
