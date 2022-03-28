<template>
    <split-horizontal>
        <template #header-p>
            <div class="j-title">
                提示弹框（JToast）
                <div class="j-detail">
                    toast提示组件
                </div>
            </div>
        </template>
        <template #mid-p>
            <div class="content">
                <button @click="showToast()">
                    点我
                </button>
            </div>
        </template>
        <template #footer-p>
            <!-- <j-code-height-light :code="code" class="footer">
            </j-code-height-light> -->
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
    name: "JToastView",
    components: {
        splitHorizontal
    },
    data() {
        return {
            code: ""
        };
    },
    created() {
        this.code = `
<template>
    <div>
        <button @click="showToast()">
            点我
        </button>
    </div>
</template>
export default {
    data(){
        return {}
    },
    mounted() {},
    methods:{
        showToast() {
            this.$JToast("测试Toast");
        }
    }
}`;
    },
    mounted() {},
    methods: {
        showToast() {
            this.$JToast("测试Toast");
        }
    }
};
</script>
<style scoped lang="scss">
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
