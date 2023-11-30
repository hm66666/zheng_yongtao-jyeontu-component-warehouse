<template>
    <split-horizontal>
        <template v-slot:header-p>
            <div class="j-title">
                图片滑块验证（JGiteeInfoTag）
                <div class="j-detail">图片滑块验证，支持版本^0.6.9</div>
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
    mixins: [mixinForView],
    data() {
        return {
            code: "",
            tableData: [],
            cutPathList: [
                { x: 369, y: 150 },
                { x: 393, y: 145 },
                { x: 392, y: 119 },
                { x: 422, y: 118 },
                { x: 421, y: 135 },
                { x: 447, y: 140 },
                { x: 446, y: 154 },
                { x: 423, y: 155 },
                { x: 420, y: 172 },
                { x: 402, y: 173 },
                { x: 398, y: 158 },
                { x: 376, y: 165 },
                { x: 369, y: 149 },
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
<script>
    export default {
        data() {
            return {
                cutPathList: [
                    { x: 369, y: 150 },
                    { x: 393, y: 145 },
                    { x: 392, y: 119 },
                    { x: 422, y: 118 },
                    { x: 421, y: 135 },
                    { x: 447, y: 140 },
                    { x: 446, y: 154 },
                    { x: 423, y: 155 },
                    { x: 420, y: 172 },
                    { x: 402, y: 173 },
                    { x: 398, y: 158 },
                    { x: 376, y: 165 },
                    { x: 369, y: 149 },
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
            }
        },
        methods: {
            start() {
                this.second = "0s";
                this.startTime = new Date().getTime();
                this.secondTrim = setInterval(() => {
                    const second = this.second || 0;
                    this.second = (parseFloat(second) + 1).toFixed(1) + "s";
                }, 1000);
            },
            end() {
                clearInterval(this.secondTrim);
                const second = (new Date().getTime() - this.startTime) / 1000;
                this.second = parseFloat(second).toFixed(1) + "s";
            },
        }
    }
<\/script>
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
            this.second = "0s";
            this.startTime = new Date().getTime();
            this.secondTrim = setInterval(() => {
                const second = this.second || 0;
                this.second = (parseFloat(second) + 1).toFixed(1) + "s";
            }, 1000);
        },
        end() {
            clearInterval(this.secondTrim);
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
