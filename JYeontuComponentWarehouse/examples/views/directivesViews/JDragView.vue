<template>
    <split-horizontal>
        <template v-slot:header-p>
            <div class="j-title">
                <span v-JDrag>元素拖拽（v-JDrag）</span>
                <div class="j-detail">
                    给元素添加拖拽属性，鼠标按住拖拽二维码、代码段、标题试试吧~
                </div>
            </div>
        </template>
        <template v-slot:left-p>
            <div class="content">
                <img
                    v-JDrag
                    alt=""
                    src="https://gitee.com/jyeontostore/img-bed/raw/master/img/1699276911873.jpg"
                />
            </div>
        </template>
        <template v-slot:right-p>
            <div style="width: 100%" v-JDrag>
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
    name: "JDragView",
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
            v-JDrag
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
