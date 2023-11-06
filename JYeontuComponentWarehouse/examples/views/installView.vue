<template>
    <split-horizontal>
        <template v-slot:header-p>
            <div class="j-title">
                安装（jvuewheel）
                <div class="j-detail">
                    本组件库基于vue2开发，目前仅支持在vue2项目中引入使用
                </div>
            </div>
            <div style="margin-top: 3rem" class="j-title">
                npm 安装
                <div class="j-detail">
                    推荐使用 npm 的方式安装，它能更好地和 webpack
                    打包工具配合使用。
                </div>
                <div class="j-code">
                    <span>npm i @jyeontu/jvuewheel -S</span>
                </div>
            </div>
            <div style="margin-top: 3rem" class="j-title">
                main.js引入
                <div class="j-detail">引入后便可以在项目中直接使用</div>
                <div class="j-detail" style="font-weight: bold">
                    1、全量引入
                </div>
                <div class="j-code">
                    <div>//引入样式</div>
                    <div>import '@jyeontu/jvuewheel/lib/jvuewhell.css'</div>
                    <div>//全量引入组件库</div>
                    <div>import jvuewheel from '@jyeontu/jvuewheel'</div>
                    <div>Vue.use(jvuewheel);</div>
                </div>
                <div class="j-detail" style="font-weight: bold">
                    2、单独引入
                </div>
                <div class="j-code">
                    <div>//引入样式</div>
                    <div>import '@jyeontu/jvuewheel/lib/jvuewhell.css'</div>
                    <div>//单独引入组件</div>
                    <div>
                        import {JContributionPanel} from '@jyeontu/jvuewheel'
                    </div>
                    <div>Vue.use(JContributionPanel);</div>
                </div>
            </div>
            <div style="margin-top: 3rem" class="j-title">
                项目地址
                <div class="j-detail">欢迎大家一起造轮子，期待您宝贵的意见</div>
                <div class="j-code">
                    <span>Gitee：</span>
                    <a
                        href="https://gitee.com/zheng_yongtao/jyeontu-component-warehouse"
                        target="_blank"
                        >https://gitee.com/zheng_yongtao/jyeontu-component-warehouse</a
                    >
                </div>
            </div>
        </template>
    </split-horizontal>
</template>

<script>
import splitHorizontal from "@/components/pages/splitHorizontal.vue";
export default {
    name: "installView",
    components: {
        splitHorizontal,
    },
};
</script>

<style lang="less" scoped></style>
