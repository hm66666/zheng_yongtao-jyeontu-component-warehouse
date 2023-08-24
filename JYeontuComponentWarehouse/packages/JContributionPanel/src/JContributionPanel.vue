<template>
    <div class="contribution-panel">
        <table class="contribution-table">
            <tr
                v-for="(rowItem, rowInd) in rowTil"
                :key="'row-' + rowInd"
                class="contribution-table-tr"
            >
                <template v-for="colInd in column + 1">
                    <td
                        :key="'row-' + rowInd + '-col-' + colInd"
                        :class="{
                            block: getDateByInd(rowInd - 1, colInd - 2) != '',
                            'text-content': colInd == 1,
                            'contribution-table-td': true,
                        }"
                        :title="getDateByInd(rowInd - 1, colInd - 2)"
                    >
                        <span v-if="colInd === 1">{{ rowItem }}</span>
                        <span v-else-if="rowInd === 0">{{
                            getMonthText(rowInd, colInd - 2)
                        }}</span>
                        <span v-else></span>
                    </td>
                </template>
            </tr>
        </table>
    </div>
</template>

<script>
import { getUId } from "../../utils/strTool";
export default {
    name: "JContributionPanel",
    props: {
        startDate: {
            type: String,
            default: () => {
                // 获取当前日期
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
                return formattedDate;
            },
        },
        colorRule: {
            type: Array,
            default: () => {
                return [
                    {
                        min: 0,
                        max: 0,
                        color: "#EEEEEE",
                    },
                    {
                        min: 1,
                        max: 8,
                        color: "#D6E685",
                    },
                    {
                        min: 9,
                        max: 15,
                        color: "#8CC665",
                    },
                    {
                        min: 16,
                        max: 20,
                        color: "#44A340",
                    },
                    {
                        min: 21,
                        color: "#1E6823",
                    },
                ];
            },
        },
    },
    data() {
        return {
            width: 400,
            height: 200,
            contributions: [
                { date: "2023-08-01", count: 10 },
                { date: "2023-08-02", count: 5 },
                { date: "2023-08-03", count: 7 },
                // 更多贡献度数据...
            ],
            uid: "",
            dateList: [],
            rowTil: [
                "",
                "周一",
                "周二",
                "周三",
                "周四",
                "周五",
                "周六",
                "周日",
            ],
        };
    },
    computed: {
        column() {
            const weekday = new Date().getDay();
            return Math.ceil((this.dateList.length - weekday) / 7) + 1;
        },
        firstInd() {
            return new Date(this.dateList[0].date).getDay();
        },
    },
    created() {
        this.setId();
        this.getDateList();
    },
    methods: {
        setId() {
            this.uid = getUId();
        },
        getMonthText(row, col) {
            const date = this.getDateByInd(row, col);
            if (date === "") return "";
            const month = Number(date.split("-")[1]);
            const day = Number(date.split("-")[2]);
            if (day > 10) return "";
            const monthMap = [
                "一月",
                "二月",
                "三月",
                "四月",
                "五月",
                "六月",
                "七月",
                "八月",
                "九月",
                "十月",
                "十一月",
                "十二月",
            ];
            return monthMap[month - 1];
        },
        getDateByInd(row, col) {
            if (row < 0) return "";
            // const num = row * this.column + col - this.firstInd;
            const num = col * 7 + row - this.firstInd + 1;
            if (num < 0 || num >= this.dateList.length) return "";
            return this.dateList[num].date;
        },
        isLeapYear(year) {
            return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
        },
        getWeek(date) {
            // 创建一个表示特定日期的 Date 对象
            date = new Date(date);
            // 获取该日期是星期几
            const weekday = date.getDay();
            // 映射数字到具体的星期名称
            const weekdayNames = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ];
            // 获取具体的星期名称
            const weekdayName = weekdayNames[weekday];
            return weekdayName;
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
            this.dateList = dateList;
        },
    },
};
</script>

<style lang="less" scoped>
.contribution-panel {
    margin: 20px;
    .contribution-table {
        .contribution-table-tr {
            .block {
                background: #eeeeee;
                width: 10px;
                height: 10px;
                min-width: 10px;
                min-height: 10px;
            }
            .text-content {
                min-width: 2.5em;
            }
            .contribution-table-td {
            }
        }
    }
}
</style>
