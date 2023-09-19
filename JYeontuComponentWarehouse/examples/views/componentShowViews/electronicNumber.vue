<template>
    <split-horizontal>
        <template v-slot:header-p>
            <div class="j-title">
                电子屏数字（JElectronicNumber）
                <div class="j-detail">电子屏风格数字组件</div>
            </div>
            <div class="header"></div>
        </template>
        <template v-slot:left-p>
            <div class="content">
                <j-electronic-number
                    :numbers="numbers"
                    :number-color="numberColor"
                    :number-size="numberSize"
                >
                </j-electronic-number>
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
import { getToday } from "@/utils/dateTool";
import { mixinForView } from "@/mixins/index.js";
export default {
    name: "electronicNumbers",
    components: {},
    mixins: [mixinForView],
    data() {
        return {
            numbers: [],
            numberColor: "#8076a3",
            numberSize: "2rem",
            code: "",
            tableData: [
                {
                    parameter: "numbers",
                    field: "数字数组",
                    type: "Array",
                    describe: '需要展示的数字，如:["2021-11-11 10:57:52"]',
                },
                {
                    parameter: "numberColor",
                    field: "数字颜色",
                    type: "String",
                    describe: '如："#000000" 或 "pink"',
                },
                {
                    parameter: "numberSize",
                    field: "数字大小",
                    type: "String",
                    describe: '如："1rem"',
                },
            ],
        };
    },
    created() {
        this.code = `
<template>
    <div>
        <j-electronic-number :numbers="numbers" 
            :number-color="numberColor" 
            :number-size="numberSize" >
        </j-electronic-number>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                numbers:[],
                numberColor:'#8076a3',
                numberSize:'1rem'
            }
        }
        mounted(){
            this.getTime();
        },
        methods:{
            getTime(){
            let day = getToday('yyyy-mm-dd hh:MM:ss');
            this.numbers = [day];
            setTimeout(()=>{
                this.getTime();
            },1000);
            }
        }
    }
<\/script>
`;
    },
    mounted() {
        this.getTime();
    },
    methods: {
        getTime() {
            let day = getToday("yyyy-mm-dd hh:MM:ss");
            this.numbers = [day];
            setTimeout(() => {
                this.getTime();
            }, 1000);
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
    width: 50%;
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
