<template>
    <split-horizontal>
        <template v-slot:header-p>
            <div class="j-title">
                日历组件（JCalendar）
                <div class="j-detail">日历组件</div>
            </div>
        </template>
        <template v-slot:left-p>
            <div class="content">
                <j-calendar
                    :title="title"
                    :bgSrc="bgSrc"
                    @selectDay="selectDay"
                    @changeMonth="changeMonth"
                >
                </j-calendar>
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
    name: "calendar",
    components: {},
    mixins: [mixinForView],
    data() {
        return {
            title: "JYeontu的日历",
            bgSrc: "https://images8.alphacoders.com/992/992329.jpg",
            code: "",
            tableData: [
                {
                    parameter: "title",
                    field: "标题",
                    type: "String",
                    describe: "日历上方显示标题",
                },
                {
                    parameter: "bgSrc",
                    field: "背景图",
                    type: "String/require请求图片",
                    describe: "在线链接/require请求本地图片",
                },
                {
                    parameter: "selectDay",
                    field: "选择日期",
                    type: "function",
                    describe: "点击日期时回调",
                },
                {
                    parameter: "changeMonth",
                    field: "月份修改",
                    type: "function",
                    describe: "月份修改时回调",
                },
            ],
        };
    },
    created() {
        this.code = `
<template>
    <div>
        <j-calendar :title="title" 
            :bgSrc="bgSrc" 
            @selectDay="selectDay" 
            @changeMonth="changeMonth">
        </j-calendar>
    </div>
</template>
<script>
    data(){
        return {
        title:"JYeontu的日历",
        bgSrc:"https://images8.alphacoders.com/992/992329.jpg",
        }
    },
    methods:{
        selectDay(e){
        // console.log(e);
        },
        changeMonth(e){
        // console.log(e);
        }
    }
<\/script>
`;
    },
    methods: {
        selectDay(e) {
            // console.log(e);
        },
        changeMonth(e) {
            // console.log(e);
        },
    },
};
</script>
<style scoped lang="less">
.title {
    font-size: x-large;
    text-align: left;
    margin-bottom: 1rem;
    .j-detail {
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
