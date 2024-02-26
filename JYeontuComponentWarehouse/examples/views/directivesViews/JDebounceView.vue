<template>
    <split-horizontal>
        <template v-slot:header-p>
            <div class="j-title">
                <span>防抖指令（v-JDebounce）</span>
                <div class="j-detail">
                    "防抖"
                    在前端开发中是一种常用的技术，它的作用是限制某个操作在短时间内的频繁触发，只有在一定的间隔时间内才执行相应的操作。
                </div>
            </div>
        </template>
        <template v-slot:mid-p>
            <div class="flex-content">
                <div class="content">
                    <div class="sub-title">防抖</div>
                    <input
                        v-JDebounce:1000="handleInput"
                        class="input-content"
                    />
                    <pre class="div-content">
                    {{ inputContent }}
                    </pre>
                </div>
                <div class="content">
                    <div class="sub-title">无防抖</div>
                    <input @input="handleInput1" class="input-content" />
                    <pre class="div-content">
                    {{ inputContent1 }}
                    </pre>
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
    name: "JDebounceView",
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
            inputContent: "",
            inputContent1: "",
        };
    },
    created() {
        this.initCodeContent();
    },
    mounted() {},
    methods: {
        handleInput(event) {
            const value = event.target.value;
            if (value === "") {
                this.inputContent = "";
                return;
            }
            this.inputContent += `\n输入了：${value}`;
        },
        handleInput1(event) {
            const value = event.target.value;
            if (value === "") {
                this.inputContent1 = "";
                return;
            }
            this.inputContent1 += `\n输入了：${value}`;
        },
        initCodeContent() {
            this.code = `
        <div class="flex-content">
            <div class="content">
                <div class="sub-title">防抖</div>
                <input
                    v-JDebounce:1000="handleInput"
                    class="input-content"
                />
                <pre class="div-content">
                {{ inputContent }}
                </pre>
            </div>
            <div class="content">
                <div class="sub-title">无防抖</div>
                <input @input="handleInput1" class="input-content" />
                <pre class="div-content">
                {{ inputContent1 }}
                </pre>
            </div>
        </div>
        
        methods: {
            handleInput(event) {
                const value = event.target.value;
                if (value === "") {
                    this.inputContent = "";
                    return;
                }
                this.inputContent += "\\n输入了：" + value;
            },
            handleInput1(event) {
                const value = event.target.value;
                if (value === "") {
                    this.inputContent1 = "";
                    return;
                }
                this.inputContent += "\\n输入了：" + value;
            },
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
.flex-content {
    display: flex;
}
.content {
    margin: 0 auto;
    width: 48%;
    .sub-title {
        font-weight: bold;
        text-align: center;
        font-size: 1.5em;
        line-height: 2em;
    }
    .input-content {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
    }
    .div-content {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
        margin-top: 1em;
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
