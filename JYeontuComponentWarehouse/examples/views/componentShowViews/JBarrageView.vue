<template>
    <split-horizontal>
        <template v-slot:header-p>
            <div class="j-title">
                弹幕组件（JBarrage）
                <div class="j-detail">弹幕组件</div>
            </div>
        </template>
        <template v-slot:left-p>
            <div class="content">
                <j-barrage
                    :barrageDate="barrageDate"
                    :repetition="repetition"
                    :full="full"
                    :time="time"
                    :showBtn="showBtn"
                ></j-barrage>
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
    name: "JBarrageView",
    components: {},
    mixins: [mixinForView],
    data() {
        return {
            code: "",
            showBtn: true,
            full: true,
            repetition: true,
            time: 10,
            barrageDate: [
                {
                    text: "111",
                    color: "red",
                    position: "top", //top,center,bottom
                },
                {
                    text: "111",
                    color: "red",
                    position: "top", //top,center,bottom
                },
                {
                    text: "111",
                    color: "red",
                    position: "top", //top,center,bottom
                },
                {
                    text: "111",
                    color: "red",
                    position: "top", //top,center,bottom
                },
                {
                    text: "111",
                    color: "red",
                    position: "top", //top,center,bottom
                },
                {
                    text: "111",
                    color: "blue",
                    position: "center", //top,center,bottom
                },
                {
                    text: "111",
                    color: "blue",
                    position: "center", //top,center,bottom
                },
                {
                    text: "111",
                    color: "yellow",
                    position: "bottom", //top,center,bottom
                },
                {
                    text: "111",
                    color: "yellow",
                    position: "bottom", //top,center,bottom
                },
                {
                    text: "111",
                    color: "yellow",
                    position: "bottom", //top,center,bottom
                },
                {
                    text: "111",
                    color: "yellow",
                    position: "bottom", //top,center,bottom
                },
                {
                    text: "111",
                    color: "yellow",
                    position: "bottom", //top,center,bottom
                },
                {
                    text: "111",
                    color: "yellow",
                    position: "bottom", //top,center,bottom
                },
                {
                    text: "111",
                    color: "yellow",
                    position: "bottom", //top,center,bottom
                },
            ],
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
        <j-barrage
            :barrageDate="barrageDate"
            :repetition="repetition"
            :full="full"
            :time="time"
            :showBtn="showBtn"
        ></j-barrage>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                showBtn: true,
                full: true,
                repetition: true,
                time: 10,
                barrageDate: [
                    {
                        text: "111",
                        color: "red",
                        position: "top" //top,center,bottom
                    },
                    {
                        text: "111",
                        color: "red",
                        position: "top" //top,center,bottom
                    },
                    {
                        text: "111",
                        color: "red",
                        position: "top" //top,center,bottom
                    },
                    {
                        text: "111",
                        color: "red",
                        position: "top" //top,center,bottom
                    },
                    {
                        text: "111",
                        color: "red",
                        position: "top" //top,center,bottom
                    },
                    {
                        text: "111",
                        color: "blue",
                        position: "center" //top,center,bottom
                    },
                    {
                        text: "111",
                        color: "blue",
                        position: "center" //top,center,bottom
                    },
                    {
                        text: "111",
                        color: "yellow",
                        position: "bottom" //top,center,bottom
                    },
                    {
                        text: "111",
                        color: "yellow",
                        position: "bottom" //top,center,bottom
                    },
                    {
                        text: "111",
                        color: "yellow",
                        position: "bottom" //top,center,bottom
                    },
                    {
                        text: "111",
                        color: "yellow",
                        position: "bottom" //top,center,bottom
                    },
                    {
                        text: "111",
                        color: "yellow",
                        position: "bottom" //top,center,bottom
                    },
                    {
                        text: "111",
                        color: "yellow",
                        position: "bottom" //top,center,bottom
                    },
                    {
                        text: "111",
                        color: "yellow",
                        position: "bottom" //top,center,bottom
                    }
                ],
            }
        }
    }
<\/script>
            `;
        },
        initTableData() {
            this.tableData = [
                {
                    parameter: "barrageDate",
                    field: "弹幕列表",
                    type: "Array",
                    describe: "弹幕列表",
                    children: {
                        type: this.tableTitle,
                        data: [
                            {
                                parameter: "text",
                                field: "弹幕内容",
                                type: "String",
                                describe: "弹幕内容",
                            },
                            {
                                parameter: "color",
                                field: "弹幕文字颜色",
                                type: "String",
                                describe: "弹幕文字颜色",
                            },
                            {
                                parameter: "position",
                                field: "弹幕位置",
                                type: "String",
                                describe:
                                    "弹幕位置，可以为'top','center','bottom','random'",
                            },
                        ],
                    },
                },
                {
                    parameter: "full",
                    field: "是否全屏弹幕",
                    type: "Boolean",
                    describe: "是否全屏弹幕，默认为true",
                },
                {
                    parameter: "time",
                    field: "弹幕滑过屏幕时间",
                    type: "Number",
                    describe: "弹幕滑过屏幕时间，默认为10（单位为秒）",
                },
                {
                    parameter: "repetition",
                    field: "是否重复弹幕",
                    type: "Boolean",
                    describe:
                        "是否重复弹幕，即一轮弹幕展示完后会重新循环播放，默认为true",
                },
                {
                    parameter: "startFrom",
                    field: "弹幕出现位置",
                    type: "String",
                    describe: "弹幕出现位置，可以为'left'或'right'默认为left",
                },
                {
                    parameter: "showBtn",
                    field: "是否展示弹幕发送框",
                    type: "Boolean",
                    describe: "是否展示弹幕发送框，默认为true",
                },
            ];
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
