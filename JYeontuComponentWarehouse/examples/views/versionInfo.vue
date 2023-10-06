<template>
    <div>
        <split-horizontal>
            <template v-slot:header-p>
                <div class="j-title">
                    版本介绍（jvuewheel）
                    <div class="j-detail">
                        目前最新版本为0.{{
                            dataList[1].icon
                        }}，更多好玩有用的组件正在构思中，敬请期待……
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
        splitHorizontal,
    },
    data() {
        return {
            iconWidth: 50,
            iconStyle: {},
            lineStyle: {
                color: "skyblue",
                height: "100px",
                width: "2px",
            },
            titleStyle: {
                color: "black",
                fontWeight: "bold",
            },
            descriptStyle: {},
            timeStyle: {
                color: "orange",
                fontWeight: "bold",
            },
            dataList: [
                {
                    title: "未定版本（todoList）",
                    descript: "增加：进度条组件……；优化：代码编写，项目结构",
                    time: "进行中……",
                    icon: "进",
                },
                {
                    title: "版本0.6.6（已发布）",
                    descript: "修复：修复评论组件回复回调id异常问题",
                    time: "2023-10-6",
                    icon: "6.6",
                },
                {
                    title: "版本0.6.5（已发布）",
                    descript: "增加：拖拽上传组件",
                    time: "2023-09-19",
                    icon: "6.5",
                },
                {
                    title: "版本0.6.4（已发布）",
                    descript: "增加：贡献度面板组件",
                    time: "2023-09-05",
                    icon: "6.4",
                },
                {
                    title: "版本0.6.1 ~ 0.6.3（已发布）",
                    descript: "优化：评论组件多个共存问题，表情面板错位问题",
                    time: "2023-09-05",
                    icon: "6.1",
                },
                {
                    title: "版本0.6.0（已发布）",
                    descript: "优化：修复同一页面无法使用多个悬浮按钮问题",
                    time: "2022-11-27",
                    icon: "6.0",
                },
                {
                    title: "版本0.5.8 ~ 0.5.9（已发布）",
                    descript: "优化：桌宠组件使用在线资源",
                    time: "2022-11-24",
                    icon: "5.9",
                },
                {
                    title: "版本0.5.7（已发布）",
                    descript: "fix：修复桌宠组件定位不准问题",
                    time: "2022-11-22",
                    icon: "5.7",
                },
                {
                    title: "版本0.5.6（已发布）",
                    descript: "fix：修复桌宠组件部分图片无法显示问题",
                    time: "2022-11-22",
                    icon: "5.6",
                },
                {
                    title: "版本0.5.5（已发布）",
                    descript: "增加：添加桌宠组件",
                    time: "2022-11-22",
                    icon: "5.5",
                },
                {
                    title: "版本0.5.4（已发布）",
                    descript:
                        "优化：修复部分图标不显示问题；增加：添加自定义右键菜单栏功能",
                    time: "2022-11-14",
                    icon: "5.4",
                },
                {
                    title: "版本0.5.3（已发布）",
                    descript: "优化：scss改为less",
                    time: "2022-11-06",
                    icon: "5.3",
                },
                {
                    title: "版本0.5.2（已发布）",
                    descript: "增加Gitee仓库信息组件",
                    time: "2022-10-06",
                    icon: "5.2",
                },
                {
                    title: "版本0.5.1（已发布）",
                    descript: "增加刮刮卡组件",
                    time: "2022-08-22",
                    icon: "5.1",
                },
                {
                    title: "版本0.5.0（已发布）",
                    descript: "增加3D轮播图组件",
                    time: "2022-08-08",
                    icon: "5.0",
                },
                {
                    title: "版本0.4.7 ~ 0.4.9（已发布）",
                    descript: "视频动态封面预览组件增加精灵图模式",
                    time: "2022-08-02",
                    icon: "4.9",
                },
                {
                    title: "版本0.4.6（已发布）",
                    descript: "修复评论组件相关bug",
                    time: "2022-07-24",
                    icon: "4.6",
                },
                {
                    title: "版本0.4.5（已发布）",
                    descript: "增加：视频动态封面预览组件",
                    time: "2022-07-24",
                    icon: "4.5",
                },
                {
                    title: "版本0.4.4（已发布）",
                    descript:
                        "完成issues(#I5HAWD):修复评论组件表情的弹出位置不正常问题",
                    time: "2022-07-17",
                    icon: "4.4",
                },
                {
                    title: "版本0.4.3（已发布）",
                    descript: "增加：图案手势锁组件",
                    time: "2022-05-30",
                    icon: "4.3",
                },
                {
                    title: "版本0.4.2（已发布）",
                    descript: "修复：评论组件id无法自定义问题",
                    time: "2022-05-03",
                    icon: "4.2",
                },
                {
                    title: "版本0.4.1（已发布）",
                    descript: "增加：弹幕组件",
                    time: "2022-04-17",
                    icon: "4.1",
                },
                {
                    title: "版本0.3.9 ~ 0.4.0（已发布）",
                    descript: "优化：瀑布流图片容器组件添加图片点击回调事件",
                    time: "2022-04-06",
                    icon: "4.0",
                },
                {
                    title: "版本0.3.8（已发布）",
                    descript: "增加：瀑布流图片容器组件",
                    time: "2022-04-06",
                    icon: "3.8",
                },
                {
                    title: "版本0.3.7（已发布）",
                    descript:
                        "优化：评论组件表情弹窗关闭机制；弹窗回调函数优化",
                    time: "2022-04-05",
                    icon: "3.7",
                },
                {
                    title: "版本0.3.6（已发布）",
                    descript: "增加：toolTip悬浮提示组件",
                    time: "2022-03-16",
                    icon: "3.6",
                },
                {
                    title: "版本0.3.2 ~ 0.3.5（已发布）",
                    descript: "优化：评论组件优化",
                    time: "2022-03-15",
                    icon: "3.5",
                },
                {
                    title: "版本0.3.1（已发布）",
                    descript: "优化：评论组件，emoji表情转码",
                    time: "2022-03-15",
                    icon: "3.1",
                },
                {
                    title: "版本0.3.0（已发布）",
                    descript: "优化：评论组件，加入emoji表情",
                    time: "2022-03-15",
                    icon: "3.0",
                },
                {
                    title: "版本0.2.9（已发布）",
                    descript: "增加：评论组件",
                    time: "2022-03-13",
                    icon: "2.9",
                },
                {
                    title: "版本0.2.6 ~ 0.2.8（已发布）",
                    descript: "优化tag标签组件",
                    time: "2022-02-20",
                    icon: "2.8",
                },
                {
                    title: "版本0.2.5（已发布）",
                    descript: "增加：词云图组件",
                    time: "2022-02-11",
                    icon: "2.5",
                },
                {
                    title: "版本0.2.4（已发布）",
                    descript: "优化Toast弹窗组件",
                    time: "2022-02-11",
                    icon: "2.4",
                },
                {
                    title: "版本0.2.3（已发布）",
                    descript: "优化tag标签组件",
                    time: "2022-02-11",
                    icon: "2.3",
                },
                {
                    title: "版本0.1.7 ~ 0.2.2（已发布）",
                    descript: "修复一些已知bug",
                    time: "2022-01-26",
                    icon: "2.2",
                },
                {
                    title: "版本0.1.6（已发布）",
                    descript: "增加：tag标签组件、toast提示组件、下拉列表组件",
                    time: "2022-01-26",
                    icon: "1.6",
                },
                {
                    title: "版本0.1.5（已发布）",
                    descript:
                        "优化：代码高亮组件、弹窗组件、表格组件增加展开行功能；增加：步骤图组件",
                    time: "2022-01-26",
                    icon: "1.5",
                },
                {
                    title: "版本0.1.4（已发布）",
                    descript: "优化：代码高亮组件",
                    time: "2021-12-01",
                    icon: "1.4",
                },
                {
                    title: "版本0.1.3（已发布）",
                    descript: "增加：悬浮按钮组件、弹窗组件",
                    time: "2021-11-28",
                    icon: "1.3",
                },
                {
                    title: "版本0.1.2（已发布）",
                    descript: "增加：数字滚动变化效果组件；工具函数",
                    time: "2021-11-26",
                    icon: "1.2",
                },
                {
                    title: "版本0.1.1（已发布）",
                    descript:
                        "项目搭建，导入：日历组件、电子屏数字组件、流程图组件、表格组件、代码高亮组件、canvas画板组件",
                    time: "2021-11-24",
                    icon: "1.1",
                },
                {
                    title: "版本0.1.0（已发布）",
                    descript: "初始化npm库",
                    time: "2021-11-22",
                    icon: "1.0",
                },
            ],
        };
    },
};
</script>

<style lang="less" scoped>
.content {
    width: 70%;
    margin-left: 15%;
}
</style>
