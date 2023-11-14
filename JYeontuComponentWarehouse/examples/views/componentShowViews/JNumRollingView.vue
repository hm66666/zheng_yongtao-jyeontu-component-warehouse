<template>
    <split-horizontal>
        <template v-slot:header-p>
            <div class="j-title">
                数字滚动变化效果（JNumRolling）
                <div class="j-detail">数字滚动变化效果组件</div>
            </div>
        </template>
        <template v-slot:left-p>
            <div class="j-content">
                <j-num-rolling
                    :nums="nums"
                    :fixNum="2"
                    :stepTime="200"
                    :refreshTime="2"
                    :fontSize="4"
                    :numStyle="numStyle"
                >
                </j-num-rolling>
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
    name: "JNumRollingView",
    components: {},
    mixins: [mixinForView],
    data() {
        return {
            nums: "999999",
            numStyle: {
                border: "2px solid skyblue",
                boxShadow: "10px 10px 5px #185D8C",
                marginLeft: "0.5rem",
            },
            code: "",
            tableData: [
                {
                    parameter: "nums",
                    field: "数字",
                    type: "String",
                    describe: "需要滚动的数字",
                },
                {
                    parameter: "fontSize",
                    field: "数字尺寸，行高",
                    type: "Number",
                    describe: "默认为4，fone-size为参数除于3",
                },
                {
                    parameter: "stepTime",
                    field: "滚动速度",
                    type: "Number",
                    describe: "每走一步的时间(ms)，默认值为200",
                },
                {
                    parameter: "fixNum",
                    field: "保留小数点",
                    type: "Number",
                    describe: "数字保留小数点，默认为2",
                },
                {
                    parameter: "numStyle",
                    field: "自定义数字格子样式",
                    type: "Object",
                    describe: "",
                },
                {
                    parameter: "refreshTime",
                    field: "数字刷新间隔",
                    type: "Number",
                    describe: "数字刷新间隔(s)，默认为3",
                },
            ],
        };
    },
    created() {
        this.code = `
<template>
    <div>
        <j-num-rolling :nums = "nums" 
            :fixNum = "2" 
            :stepTime = "200" 
            :refreshTime = "2" 
            :fontSize = "4" 
            :numStyle = "numStyle">
        </j-num-rolling>
    </div>
</template>

export default {
    data(){
        return {
        nums:'999999',
        numStyle:{
            border:'2px solid skyblue',
            boxShadow:'10px 10px 5px #185D8C',
            marginLeft:'0.5rem',
        },
        }
    },
    mounted() {
        this.autoChange();
    },
    methods:{
        //自动增加数字，测试
        autoChange(){
        this.nums = parseFloat(this.nums) + 12345.67;
        setTimeout(()=>{
            this.autoChange();
        },5000);
        },
    }
}
`;
    },
    mounted() {
        this.autoChange();
    },
    methods: {
        //自动增加数字，测试
        autoChange() {
            this.nums = parseFloat(this.nums) + 12345.67 + "";
            setTimeout(() => {
                this.autoChange();
            }, 5000);
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
.j-content {
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
