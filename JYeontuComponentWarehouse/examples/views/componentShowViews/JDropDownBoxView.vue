<template>
    <split-horizontal>
        <template v-slot:header-p>
            <div class="j-title">
                下拉列表（JDropDownBox）
                <div class="j-detail">下拉列表组件</div>
            </div>
        </template>
        <template v-slot:left-p>
            <div class="content">
                <j-drop-down-box
                    :value="selectVal"
                    :defIndex="defIndex"
                    :filter="filter"
                    :closed="closed"
                    :selectData="selectData"
                    @selectItem="selectItem"
                    @selectIndexValue="selectIndexValue"
                >
                </j-drop-down-box>
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
    name: "JDropDownBoxView",
    components: {},
    mixins: [mixinForView],
    data() {
        return {
            code: "",
            defIndex: "test",
            selectVal: "1",
            filter: true,
            closed: true,
            selectData: [
                {
                    id: "1",
                    value: "李白",
                },
                {
                    id: "2",
                    value: "项羽",
                },
                {
                    id: "3",
                    value: "妲己",
                },
                {
                    id: "4",
                    value: "王昭君",
                },
                {
                    id: "5",
                    value: "凯",
                },
            ],
            tableData: [
                {
                    parameter: "defIndex",
                    field: "标识",
                    type: "String",
                    describe: "选择事件回调的时候会带上该标识",
                },
                {
                    parameter: "value",
                    field: "选中的值",
                    type: "String",
                    describe: "选中会更新该值",
                },
                {
                    parameter: "placeholder",
                    field: "输入提示",
                    type: "String",
                    describe: "设置输入框提示语，默认为'请输入'",
                },
                {
                    parameter: "filter",
                    field: "是否过滤",
                    type: "Boolean",
                    describe:
                        "为true时开启过滤，输入会自动筛选备选框的值，默认为false",
                },
                {
                    parameter: "closed",
                    field: "清空按钮",
                    type: "Boolean",
                    describe: "为true时显示，点击清空输入框，默认为true",
                },
                {
                    parameter: "readOnly",
                    field: "是否只读",
                    type: "Boolean",
                    describe: "为true时只读，只能选择，无法输入，默认为false",
                },
                {
                    parameter: "selectData",
                    field: "筛选项",
                    type: "Array",
                    describe: "格式:[{id:'id',value:'value'}]",
                },
            ],
        };
    },
    created() {
        this.code = `
<template>
    <div>
        <j-drop-down-box
            :value="selectVal"
            :defIndex="defIndex"
            :filter="filter"
            :closed="closed"
            :selectData="selectData"
            @selectItem="selectItem"
            @selectIndexValue="selectIndexValue">
        </j-drop-down-box>
    </div>
</template>

export default {
    data(){
        return {
            defIndex: "test",
            selectVal: "",
            filter: true,
            closed: false,
            selectData: [
                {
                    id: "李白",
                    value: "李白"
                },
                {
                    id: "项羽",
                    value: "项羽"
                },
                {
                    id: "妲己",
                    value: "妲己"
                },
                {
                    id: "王昭君",
                    value: "王昭君"
                },
                {
                    id: "凯",
                    value: "凯"
                }
            ],
        }
    },
    methods: {
        selectItem(id) {
            console.log("selectItem", id);
        },
        selectIndexValue(defIndex, value) {
            console.log("selectIndexValue", defIndex, value);
        }
    }
}
`;
    },
    mounted() {},
    methods: {
        selectItem(id) {
            console.log("selectItem", id);
        },
        selectIndexValue(defIndex, value) {
            console.log("selectIndexValue", defIndex, value);
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
