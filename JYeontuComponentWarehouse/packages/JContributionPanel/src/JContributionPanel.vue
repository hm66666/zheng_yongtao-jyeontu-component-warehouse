<template>
    <div class="contribution-panel" :id="'contribution-panel-' + uid">
        <table class="contribution-table" :id="'contribution-table-' + uid">
            <tr
                v-for="(rowItem, rowInd) in rowTil"
                :key="'row-' + rowInd"
                class="contribution-table-tr"
            >
                <template v-for="colInd in column + 1">
                    <td
                        v-if="rowInd != 0 || !hideTd.includes(colInd)"
                        :key="'row-' + rowInd + '-col-' + colInd"
                        :class="{
                            block: getDateByInd(rowInd - 1, colInd - 2),
                            'text-content': colInd == 1,
                            'contribution-table-td': true,
                        }"
                        :style="getBackground(rowInd - 1, colInd - 2)"
                        :title="getTitle(rowInd - 1, colInd - 2)"
                        :colspan="getColSpan(rowInd, colInd)"
                    >
                        <span v-if="colInd === 1" style="font-size: xx-small">{{
                            rowItem
                        }}</span>
                        <span
                            v-else-if="rowInd === 0"
                            style="word-break: keep-all; font-size: xx-small"
                            >{{ getMonthText(rowInd, colInd) }}</span
                        >
                        <span v-else></span>
                    </td>
                </template>
            </tr>
        </table>
        <div class="color-tip-panel">
            <span>少</span>
            <span
                v-for="(colorItem, colorInd) in colorRuleSort"
                :key="'color' + colorInd"
                :style="'background:' + colorItem.color"
                class="color-block"
            ></span>
            <span>多</span>
        </div>
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
        contributions: {
            type: Array,
            default: () => {
                return [];
            },
        },
    },
    data() {
        return {
            uid: "",
            dateList: [],
            rowTil: ["", "周一", "", "", "周四", "", "", "周日"],
            showMonths: {},
            hideTd: [],
            monthTextMap: {},
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
        colorRuleSort() {
            return this.colorRule.sort((a, b) => {
                return a.min - b.min;
            });
        },
    },
    created() {
        this.setId();
        this.getDateList();
        this.initMonthTd();
    },
    mounted() {},
    methods: {
        setId() {
            this.uid = getUId();
        },
        getBackground(rowInd, colInd) {
            const color = this.getColor(rowInd, colInd);
            if (!color) return "";
            return "background:" + color;
        },
        getColor(rowInd, colInd) {
            const date = this.getDateByInd(rowInd, colInd);
            if (!date) return "";
            const count = this.getCount(date);
            const rule =
                this.colorRule.find((item) => {
                    const min = item.min;
                    let max = item.max;
                    if (max === undefined) max = Infinity;
                    return min <= count && max >= count;
                }) || {};
            return rule.color || "";
        },
        getTitle(rowInd, colInd) {
            const date = this.getDateByInd(rowInd, colInd);
            if (!date) return "";
            return this.getCount(date) + "个贡献：" + date;
        },
        getCount(date) {
            const countItem = this.contributions.find(
                (item) => item.date === date
            );
            if (!countItem) return 0;
            return countItem.count || 0;
        },
        initMonthTd() {
            const rowInd = 0;
            for (let colInd = 1; colInd <= this.column; colInd++) {
                const date = this.getDateByInd(rowInd, colInd - 2);
                if (date === "") continue;
                const month = Number(date.split("-")[1]);
                const day = Number(date.split("-")[2]);
                if (day > 10) continue;
                let len = 1;
                let col = colInd;
                while (col++) {
                    const d = this.getDateByInd(rowInd, col - 2);
                    if (d === "") break;
                    const m = Number(d.split("-")[1]);
                    if (m != month) break;
                    this.hideTd.push(col);
                    len++;
                }
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
                this.monthTextMap[colInd] = {
                    colSpan: len,
                    text: monthMap[month - 1],
                };
                colInd = col - 1;
            }
        },
        getMonthText(rowInd, colInd) {
            if (rowInd != 0) return "";
            if (!this.monthTextMap[colInd]) return "";
            return this.monthTextMap[colInd].text;
        },
        getColSpan(rowInd, colInd) {
            if (rowInd != 0) return 1;
            if (!this.monthTextMap[colInd]) return 1;
            return this.monthTextMap[colInd].colSpan;
        },
        getDateByInd(row, col) {
            if (row < 0 || col < 0) return "";
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
                width: 15px;
                height: 15px;
                min-width: 15px;
                min-height: 15px;
                border: solid 1px #eeeeee;
                &:hover {
                    border: solid 1px rgb(78, 78, 78);
                }
            }
            .text-content {
                min-width: 2.5em;
            }
            .contribution-table-td {
                text-align: center;
            }
        }
    }
    .color-tip-panel {
        text-align: right;
        margin-top: 1rem;
        span {
            margin-left: 3px;
        }
        .color-block {
            width: 10px;
            height: 10px;
            display: inline-block;
        }
    }
}
</style>
