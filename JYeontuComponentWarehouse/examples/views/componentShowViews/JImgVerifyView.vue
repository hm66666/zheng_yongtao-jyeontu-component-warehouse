<template>
    <split-horizontal>
        <template v-slot:header-p>
            <div class="j-title">
                图片滑块验证（JImgVerify）
                <div class="j-detail">图片滑块验证，支持版本^0.7.3</div>
                <div class="j-detail">
                    抠图工具：<a
                        href="http://jyeontu.xyz/JDemo/#/imgCut"
                        target="_blank"
                        >http://jyeontu.xyz/JDemo/#/imgCut</a
                    >
                </div>
            </div>
        </template>
        <template v-slot:left-p>
            <div class="content">
                <div style="width: 500px; height: 498px">
                    <j-img-verify
                        :title="tableTitle"
                        :tableData="tableData"
                        :cutPathList="cutPathList"
                        :passDiff="passDiff"
                        :isRandomPath="isRandomPath"
                        :failedText="failedText"
                        :strokeStyle="strokeStyle"
                        :imgSrc="imgSrc"
                        @start="start"
                        @end="end"
                    >
                    </j-img-verify>
                </div>
                <div class="second-show">
                    {{ second ? "已用时：" + second : "" }}
                </div>
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
    name: "JImgVerifyView",
    components: {},
    mixins: [mixinForView],
    data() {
        return {
            code: "",
            tableData: [],
            cutPathList: [
                { x: 251, y: 286 },
                { x: 232, y: 266 },
                { x: 224, y: 241 },
                { x: 223, y: 215 },
                { x: 246, y: 202 },
                { x: 264, y: 210 },
                { x: 276, y: 218 },
                { x: 284, y: 228 },
                { x: 298, y: 221 },
                { x: 313, y: 208 },
                { x: 326, y: 204 },
                { x: 337, y: 206 },
                { x: 344, y: 217 },
                { x: 346, y: 239 },
                { x: 340, y: 253 },
                { x: 328, y: 270 },
                { x: 320, y: 278 },
                { x: 307, y: 286 },
                { x: 299, y: 293 },
                { x: 292, y: 298 },
                { x: 286, y: 300 },
                { x: 276, y: 300 },
                { x: 267, y: 297 },
                { x: 259, y: 291 },
                { x: 250, y: 285 },
            ],
            imgSrc: require("../../assets/img/1701306017767.jpg"),
            passDiff: 3,
            isRandomPath: true,
            failedText: "验证失败，请重新尝试",
            fillStyle: "#7AABD9",
            strokeStyle: "red",
            second: "",
            secondTrim: null,
            startTime: "",
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
        <div style="width: 499px; height: 246px">
            <j-img-verify
                :title="tableTitle"
                :tableData="tableData"
                :cutPathList="cutPathList"
                :passDiff="passDiff"
                :isRandomPath="isRandomPath"
                :failedText="failedText"
                :fillStyle="fillStyle"
                :strokeStyle="strokeStyle"
                @start="start"
                @end="end"
            >
            </j-img-verify>
        </div>
        <div class="second-show">
            {{ second ? "已用时：" + second : "" }}
        </div>
    </div>
</template>
< sccript >
    export default {
        data() {
            return {
                cutPathList: [
                { x: 378, y: 68 },
                { x: 398, y: 67 },
                { x: 398, y: 81 },
                { x: 415, y: 80 },
                { x: 415, y: 96 },
                { x: 398, y: 96 },
                { x: 398, y: 108 },
                { x: 380, y: 108 },
                { x: 379, y: 94 },
                { x: 359.99999999999994, y: 94 },
                { x: 359, y: 83 },
                { x: 378, y: 82 },
                { x: 376, y: 69 },
            ],
                imgSrc: require("../../assets/img/1701306017767.jpg"),
                passDiff: 3,
                isRandomPath: true,
                failedText: "验证失败，请重新尝试",
                fillStyle: "#7AABD9",
                strokeStyle: "red",
                second: "",
                startTime: "",
            }
        },
        methods: {
            start() {
                this.startTime = new Date().getTime();
            },
            end() {
                const second = (new Date().getTime() - this.startTime) / 1000;
                this.second = parseFloat(second).toFixed(1) + "s";
            },
        }
    }
< /sccript >
            `;
        },
        initTableData() {
            this.tableData = [
                {
                    parameter: "cutPathList",
                    field: "滑块抠图路径",
                    type: "Array",
                    describe: "滑块抠图路径，具体可以展开查看",
                    children: {
                        type: "text",
                        text: '如：[{"x":369,"y":150},{"x":393,"y":145},{"x":392,"y":119},{"x":422,"y":118},{"x":421,"y":135},{"x":447,"y":140},{"x":446,"y":154},{"x":423,"y":155},{"x":420,"y":172},{"x":402,"y":173},{"x":398,"y":158},{"x":376,"y":165},{"x":369,"y":149}]，可以通过工具获取：http://jyeontu.xyz/JDemo/#/imgCut',
                    },
                },
                {
                    parameter: "imgSrc",
                    field: "背景图片",
                    type: "String",
                    describe: "背景图片,本地图片或在线链接，具体可以展开查看：",
                    children: {
                        type: "text",
                        text: '本地图片：require("../../assets/img/1701306017767.jpg")、在线链接：https://c-ssl.duitang.com/uploads/blog/202111/18/20211118211415_aaab9.jpeg',
                    },
                },
                {
                    parameter: "isRandomPath",
                    field: "滑块缺口位置是否随机",
                    type: "Boolean",
                    describe: "刷新的时候是否随机重置滑块缺口位置",
                },
                {
                    parameter: "failedText",
                    field: "校验不通过时的提示",
                    type: "String",
                    describe: "默认为：验证不通过",
                },
                {
                    parameter: "fillStyle",
                    field: "滑块缺口颜色填充",
                    type: "String",
                    describe: "如：#7AABD9，默认为透明",
                },
                {
                    parameter: "strokeStyle",
                    field: "移动滑块描边颜色",
                    type: "String",
                    describe: "如：#7AABD9，默认为red",
                },
                {
                    parameter: "start",
                    field: "滑块开始移动触发回调",
                    type: "Function",
                    describe: "",
                },
                {
                    parameter: "end",
                    field: "滑块结束移动触发回调，返回校验结果",
                    type: "Function",
                    describe: "",
                },
            ];
        },
        start() {
            this.second = "";
            this.startTime = new Date().getTime();
        },
        end() {
            const second = (new Date().getTime() - this.startTime) / 1000;
            this.second = parseFloat(second).toFixed(1) + "s";
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
    .second-show {
        text-align: center;
        color: black;
        margin-top: 30px;
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
