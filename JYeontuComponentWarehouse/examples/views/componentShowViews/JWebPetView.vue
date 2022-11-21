<template>
    <split-horizontal>
        <template v-slot:header-p>
            <div class="j-title">
                web桌宠（JWebPet）
                <div class="j-detail">web桌面宠物</div>
            </div>
        </template>
        <template v-slot:left-p>
            <div class="content">
                <div class="pet-name-content">
                    <span
                        :class="{
                            'pet-name-item': true,
                            'active-pet-name-item': petNameItem == petName,
                        }"
                        v-for="(petNameItem, petNameIndex) in petNameList"
                        :key="petNameIndex"
                        @click="petName = petNameItem"
                    >
                        {{ petNameItem }}
                    </span>
                </div>
                <j-web-pet
                    petSize="100px"
                    :name="petName"
                    :defaultAction="defaultAction"
                ></j-web-pet>
            </div>
        </template>
        <template v-slot:right-p>
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
    name: "JWebPetView",
    components: {
        splitHorizontal,
    },
    data() {
        return {
            petName: "日向雏田",
            petNameList: [
                "皮卡丘",
                "奇犽",
                "白一护",
                "橘一护",
                "喵老师",
                "蓝染",
                "迪达拉",
                "日向雏田",
            ],
            defaultAction: "run",
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
            tableData: [
                {
                    parameter: "title",
                    field: "标题",
                    type: "String",
                    describe: "左上角显示标题",
                },
                {
                    parameter: "closable",
                    field: "点击遮罩关闭弹窗",
                    type: "Boolean",
                    describe: "默认为false",
                },
                {
                    parameter: "close",
                    field: "弹窗关闭时回调函数",
                    type: "function",
                    describe: "",
                },
                {
                    parameter: "show",
                    field: "弹窗打开时回调函数",
                    type: "function",
                    describe: "",
                },
            ],
        };
    },
    created() {
        this.code = `
<template>
    <div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
            }
        },
        mounted() {

        },
        methods:{
        }
    }
<\/script>
    `;
    },
    mounted() {},
    methods: {},
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
    .content-body {
        text-align: center;
    }
    .pet-name-content {
        display: flex;
        flex-wrap: wrap;
    }
    .pet-name-item {
        padding: 2px 5px;
        margin: 8px;
        border: 1px solid rgb(190, 134, 29);
        cursor: pointer;
    }
    .active-pet-name-item {
        background: rgb(190, 134, 29);
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
