<template>
    <split-horizontal>
        <template v-slot:header-p>
            <div class="j-title">
                <span v-JRotate3D
                    >忽略拼音输入过程input事件（v-JIgnorePinyin）</span
                >
                <div class="j-detail">
                    input输入框输入拼音过程中不触发input事件
                </div>
            </div>
        </template>
        <template v-slot:left-p>
            <div class="content">
                <div>
                    <div>{{ inputText }}</div>
                    <input @input="doInput" id="inputContent" />
                </div>
                <div>
                    <div>{{ inputText1 }}</div>
                    <input id="inputContent1" v-JIgnorePinyin="doInput1" />
                </div>
            </div>
        </template>
        <template v-slot:right-p>
            <div style="width: 100%">
                <pre v-highlight>
                <code class="vue">
                    <div v-text="code"></div>
                </code>
            </pre>
            </div>
        </template>
    </split-horizontal>
</template>
<script>
import { mixinForView } from "@/mixins/index.js";
export default {
    name: "JIgnorePinyinView",
    components: {},
    mixins: [mixinForView],
    data() {
        return {
            code: "",
            textStyle: {
                borderBottom: "1px dotted skyblue",
                fontSize: "large",
                color: "skyblue",
            },
            toolTipStyle: {
                backgroundColor: "grey",
                color: "skyblue",
                width: "100px",
            },
            tableData: [],
            inputText: "",
            inputText1: "",
        };
    },
    created() {
        this.initCodeContent();
    },
    mounted() {},
    methods: {
        doInput(event) {
            const value = event.target.value;
            this.inputText = value;
            console.log("%c Line:68 🍫 value", "color:#f5ce50", value);
        },
        doInput1(value) {
            this.inputText1 = value;
            console.log("%c Line:72 🌮 value", "color:#42b983", value);
        },
        initCodeContent() {
            this.code = `
    <div class="content">
        <img
            v-rotate
            alt=""
            src="https://gitee.com/jyeontostore/img-bed/raw/master/img/1699276911873.jpg"
        />
    </div>
            `;
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
    display: flex;
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
