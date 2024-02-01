<template>
    <split-horizontal>
        <template v-slot:header-p>
            <div class="j-title">
                <span>忽略拼音输入过程input事件（v-JIgnorePinyin）</span>
                <div class="j-detail">
                    input输入框输入拼音过程中不触发input事件
                </div>
            </div>
        </template>
        <template v-slot:mid-p>
            <div style="display: flex; width: 100%; flex-direction: column">
                <div class="content">
                    <div>
                        <div class="input-text-title">正常情况</div>
                        <div class="input-text-content">{{ inputText }}</div>
                        <input
                            placeholder="输入试试"
                            class="input-text"
                            @input="doInput"
                        />
                    </div>
                    <div>
                        <div class="input-text-title">
                            忽略拼音输入过程input事件
                        </div>
                        <div class="input-text-content">{{ inputText1 }}</div>
                        <input
                            placeholder="输入试试"
                            class="input-text"
                            v-JIgnorePinyin="doInput1"
                        />
                    </div>
                </div>
            </div>
        </template>
        <template v-slot:footer-p>
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
                <div>
                    <div class="input-text-title">正常情况</div>
                    <div class="input-text-content">{{ inputText }}</div>
                    <input
                        placeholder="输入试试"
                        class="input-text"
                        @input="doInput"
                    />
                </div>
                <div>
                    <div class="input-text-title">
                        忽略拼音输入过程input事件
                    </div>
                    <div class="input-text-content">{{ inputText1 }}</div>
                    <input
                        placeholder="输入试试"
                        class="input-text"
                        v-JIgnorePinyin="doInput1"
                    />
                </div>
            </div>
            export default {
                data() {
                    return {
                        inputText: "",
                        inputText1: "",
                    }
                },
                methods:{
                    doInput(event) {
                        const value = event.target.value;
                        this.inputText = value;
                        console.log("%c Line:68 🍫 value", "color:#f5ce50", value);
                    },
                    doInput1(value) {
                        this.inputText1 = value;
                        console.log("%c Line:72 🌮 value", "color:#42b983", value);
                    },
                }
            }
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
    .input-text-title {
        font-weight: bold;
        text-align: center;
        padding: 1em 0;
        width: 15em;
    }
    .input-text-content {
        height: 4em;
        border: 1px solid gray;
        padding: 1em;
        white-space: break-spaces;
        word-break: break-all;
        width: 15em;
    }
    .input-text {
        line-height: 2em;
        width: 15em;
        width: 100%;
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
