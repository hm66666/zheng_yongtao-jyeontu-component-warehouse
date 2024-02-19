<template>
    <split-horizontal>
        <template v-slot:header-p>
            <div class="j-title">
                <span>千分位分隔（v-JThousand）</span>
                <div class="j-detail">vue指令配置千分位分隔</div>
            </div>
        </template>
        <template v-slot:left-p>
            <div class="content">
                <input v-JThousand:separator="'-'" class="input-content" />
                <div v-JThousand class="div-content">123456457.68866</div>
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
    name: "JThousandView",
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
        };
    },
    created() {
        this.initCodeContent();
    },
    mounted() {},
    methods: {
        initCodeContent() {
            this.code = `
    <div class="content">
        <input v-JThousand:separator="'-'" class="input-content" />
        <div v-JThousand class="div-content">123456457.68866</div>
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
    .input-content {
        width: 300px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
    }
    .div-content {
        width: 300px;
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
