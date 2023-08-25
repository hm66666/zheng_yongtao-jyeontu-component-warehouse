<template>
    <split-horizontal>
        <template v-slot:header-p>
            <div class="j-title">
                贡献度面板（JContributionPanel）
                <div class="j-detail">贡献度面板</div>
            </div>
        </template>
        <template v-slot:mid-p>
            <div class="content">
                <j-contribution-panel :contributions="contributions">
                </j-contribution-panel>
            </div>
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
    name: "JContributionPanelView",
    components: {
        splitHorizontal,
    },
    data() {
        return {
            code: "",
            tableTitle: [
                {
                    title: "参数", //展示列名
                    key: "parameter", //字段名
                    type: "", // 列类型
                    readOnly: true, //是否只读
                    width: "20vw", //列宽度
                    columnStyle: "", // 列样式
                    fixed: false, //是否固定
                    sort: false, // 是否支持排序
                },
                {
                    title: "字段名", //展示列名
                    key: "field", //字段名
                    type: "", // 列类型
                    readOnly: true, //是否只读
                    width: "30vw", //列宽度
                    columnStyle: "", // 列样式
                    fixed: false, //是否固定
                    sort: false, // 是否支持排序
                },
                {
                    title: "数据类型", //展示列名
                    key: "type", //字段名
                    type: "", // 列类型
                    readOnly: true, //是否只读
                    width: "15vw", //列宽度
                    columnStyle: "", // 列样式
                    fixed: false, //是否固定
                    sort: false, // 是否支持排序
                },
                {
                    title: "描述", //展示列名
                    key: "describe", //字段名
                    type: "", // 列类型
                    readOnly: true, //是否只读
                    width: "35vw", //列宽度
                    columnStyle: "", // 列样式
                    fixed: false, //是否固定
                    sort: false, // 是否支持排序
                },
            ],
            tableData: [],
            contributions: [],
            startDate: "",
        };
    },
    created() {
        this.initTableData();
        this.initCodeContent();
        this.initContributions();
    },
    mounted() {},
    methods: {
        imgClick(item) {
            console.log("imgClick: ", item);
        },
        initCodeContent() {
            this.code = `
            <template>
                <j-contribution-panel>
                </j-contribution-panel>
            </template>
            `;
        },
        initTableData() {
            this.tableData = [
                {
                    parameter: "imgList",
                    field: "图片列表",
                    type: "Array",
                    describe: "需要展示的图片列表数组，本地图片需要require引入",
                },
                {
                    parameter: "column",
                    field: "展示图片列数",
                    type: "Number",
                    describe: "设置展示图片列数",
                },
                {
                    parameter: "imgMargin",
                    field: "图片边距",
                    type: "Number",
                    describe: "图片边距",
                },
                {
                    parameter: "imgClick",
                    field: "图片点击回调事件",
                    type: "function",
                    describe: "图片点击回调事件",
                },
            ];
        },
        initContributions() {
            const currentDate = new Date();
            // 获取一年前的日期
            const oneYearAgoDate = new Date();
            oneYearAgoDate.setFullYear(currentDate.getFullYear() - 1);
            // 处理闰年情况
            if (
                currentDate.getMonth() === 1 &&
                currentDate.getDate() === 29 &&
                !this.isLeapYear(oneYearAgoDate.getFullYear())
            ) {
                // 如果当前是闰年的2月29日，而一年前的那一年不是闰年，则将一年前的日期设置为2月28日
                oneYearAgoDate.setDate(28);
            }
            // 格式化一年前的日期
            const formattedDate = oneYearAgoDate.toISOString().slice(0, 10);
            this.startDate = formattedDate;
            const dataList = this.getDateList();
            dataList.forEach((data) => {
                this.contributions.push({
                    date: data.date,
                    count: Math.floor(Math.random() * 100),
                });
            });
        },
        formattedDate(date) {
            return new Date(date).toISOString().slice(0, 10);
        },
        getTomorrowDate(date) {
            const currentDate = new Date(date);
            // 获取当前日期的天数
            const currentDay = currentDate.getDate();
            // 设置 Date 对象的日期为当前日期的下一天
            currentDate.setDate(currentDay + 1);
            // 获取明天的日期并格式化
            return currentDate.toISOString().slice(0, 10);
        },
        getDateList() {
            const dateList = [];
            let startDate = this.startDate;
            const today = this.formattedDate(new Date());
            while (startDate != today && dateList.length < 365) {
                dateList.push({
                    date: startDate,
                });
                startDate = this.getTomorrowDate(startDate);
            }
            dateList.push({
                date: today,
            });
            return dateList;
        },
    },
};
</script>
<style lang="less" scoped>
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
    height: 40vh;
    overflow-y: scroll;
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
