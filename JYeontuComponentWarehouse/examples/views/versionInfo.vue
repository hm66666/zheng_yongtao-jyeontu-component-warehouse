<template>
    <div>
        <split-horizontal>
            <template v-slot:header-p>
                <div class="j-title">
                    版本介绍（jvuewheel）
                    <div class="j-detail">
                        目前最新版本为0.2.8，更多好玩有用的组件正在构思中，敬请期待……
                    </div>
                </div>
            </template>
        </split-horizontal>
        <div class="content">
            <j-steps
                :dataList="dataList"
                :iconWidth="iconWidth"
                :titleStyle="titleStyle"
                :timeStyle="timeStyle"
                :descriptStyle="descriptStyle"
                :lineStyle="lineStyle"
                :iconStyle="iconStyle"
            >
            </j-steps>
        </div>
    </div>
</template>

<script>
import splitHorizontal from "@/components/pages/splitHorizontal.vue";
export default {
    name: "versionInfo",
    components: {
        splitHorizontal
    },
    data() {
        return {
            iconWidth: 50,
            iconStyle: {},
            lineStyle: {
                color: "skyblue",
                height: "100px",
                width: "2px"
            },
            titleStyle: {
                color: "black",
                fontWeight: "bold"
            },
            descriptStyle: {},
            timeStyle: {
                color: "orange",
                fontWeight: "bold"
            },
            dataList: [
                {
                    title: "未定版本（todoList）",
                    descript: "增加：进度条组件……；优化：代码编写，项目结构",
                    time: "进行中……",
                    icon: "进"
                },
                {
                    title: "版本0.2.9（已发布）",
                    descript: "增加：评论组件",
                    time: "2022-03-13",
                    icon: "13"
                },
                {
                    title: "版本0.2.6 ~ 0.2.8（已发布）",
                    descript: "优化tag标签组件",
                    time: "2022-02-20",
                    icon: "11"
                },
                {
                    title: "版本0.2.5（已发布）",
                    descript: "增加：词云图组件",
                    time: "2022-02-11",
                    icon: "11"
                },
                {
                    title: "版本0.2.4（已发布）",
                    descript: "优化Toast弹窗组件",
                    time: "2022-02-11",
                    icon: "11"
                },
                {
                    title: "版本0.2.3（已发布）",
                    descript: "优化tag标签组件",
                    time: "2022-02-11",
                    icon: "11"
                },
                {
                    title: "版本0.1.7 ~ 0.2.2（已发布）",
                    descript: "修复一些已知bug",
                    time: "2022-01-26",
                    icon: "26"
                },
                {
                    title: "版本0.1.6（已发布）",
                    descript: "增加：tag标签组件、toast提示组件、下拉列表组件",
                    time: "2022-01-26",
                    icon: "26"
                },
                {
                    title: "版本0.1.5（已发布）",
                    descript:
                        "优化：代码高亮组件、弹窗组件、表格组件增加展开行功能；增加：步骤图组件",
                    time: "2022-01-26",
                    icon: "26"
                },
                {
                    title: "版本0.1.4（已发布）",
                    descript: "优化：代码高亮组件",
                    time: "2021-12-01",
                    icon: "01"
                },
                {
                    title: "版本0.1.3（已发布）",
                    descript: "增加：悬浮按钮组件、弹窗组件",
                    time: "2021-11-28",
                    icon: "28"
                },
                {
                    title: "版本0.1.2（已发布）",
                    descript: "增加：数字滚动变化效果组件；工具函数",
                    time: "2021-11-26",
                    icon: "26"
                },
                {
                    title: "版本0.1.1（已发布）",
                    descript:
                        "项目搭建，导入：日历组件、电子屏数字组件、流程图组件、表格组件、代码高亮组件、canvas画板组件",
                    time: "2021-11-24",
                    icon: "24"
                },
                {
                    title: "版本0.1.0（已发布）",
                    descript: "初始化npm库",
                    time: "2021-11-22",
                    icon: "22"
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.content {
    width: 70%;
    margin-left: 15%;
}
</style>
