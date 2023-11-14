<template>
    <split-horizontal>
        <template v-slot:header-p>
            <div class="j-title">
                自动补全输入框（JAutoCompleteInput）
                <div class="j-detail">自动补全输入框，支持版本 ^0.7.1</div>
            </div>
        </template>
        <template v-slot:left-p>
            <div class="content" style="width: 100%; padding: 1rem">
                <JAutoCompleteInput :wordList="wordList" v-model="value">
                </JAutoCompleteInput>
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
    name: "JAutoCompleteInputView",
    components: {},
    mixins: [mixinForView],
    data() {
        return {
            code: "",
            tableData: [],
            wordList: [
                "app",
                "apple",
                "blue",
                "banana",
                "苹果",
                "香蕉",
                "JYeontu",
                "jyeontu",
                "自动补全",
                "hello",
                "hello world",
                "你好世界",
                "你好",
            ],
            value: "",
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
    <div class="content" style="width: 100%; padding: 1rem">
        <JAutoCompleteInput :wordList="wordList" v-model="value">
        </JAutoCompleteInput>
    </div>
</template>

export default {
    data() {
        return {
            wordList: [
                "app",
                "apple",
                "blue",
                "banana",
                "苹果",
                "香蕉",
                "JYeontu",
                "jyeontu",
                "自动补全",
                "hello",
                "hello world",
                "你好世界",
                "你好",
            ],
            value: "",
        };
    },
}
            `;
        },
        initTableData() {
            this.tableData = [
                {
                    parameter: "wordList",
                    field: "字典数组",
                    type: "Array",
                    describe: "自动补全字典数组，用于生成字典树",
                },
                {
                    parameter: "showChooseList",
                    field: "是否显示补全提示面板",
                    type: "Boolean",
                    describe: "是否显示补全提示面板",
                },
            ];
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
