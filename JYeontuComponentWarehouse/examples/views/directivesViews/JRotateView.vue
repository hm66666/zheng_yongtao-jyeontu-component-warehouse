<template>
    <split-horizontal>
        <template v-slot:header-p>
            <div class="j-title">
                <span v-JRotate>元素旋转（v-JRotate）</span>
                <div class="j-detail">
                    给元素添加旋转属性，鼠标点击二维码后移动鼠标试试~
                </div>
            </div>
        </template>
        <template v-slot:left-p>
            <div class="content">
                <img
                    v-JRotate
                    alt=""
                    src="https://gitee.com/jyeontostore/img-bed/raw/master/img/1699276911873.jpg"
                />
            </div>
        </template>
        <template v-slot:right-p>
            <div style="width: 100%" v-JRotate>
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
    name: "JRotateView",
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
        <img
            v-JRotate
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
