<template>
    <split-horizontal>
        <template v-slot:header-p>
            <div class="j-title">
                视频动态封面（JVideoCover）
                <div class="j-detail">
                    视频动态封面预览组件，可使用精灵图也可动态截取
                </div>
            </div>
        </template>
        <template v-slot:left-p>
            <div class="content">
                <div class="video-list">
                    <j-video-cover
                        class="video"
                        :videoUrl="videoUrl"
                        stepNums="15"
                        :coverLongImg="coverLongImg"
                        :height="'206px'"
                        :width="'384px'"
                    >
                        <template v-slot:video-info-slot>
                            <span style="margin-left:1em;font-size:medium;">
                                <i class="el-icon-video-play"></i>
                                <span style="margin-left:0.1em;">171.4万</span>
                            </span>
                            <span style="margin-left:1em;font-size:medium;">
                                <i class="el-icon-chat-line-square"></i>
                                <span style="margin-left:0.1em;">6302</span>
                            </span>
                        </template>
                    </j-video-cover>
                </div>
            </div>
        </template>
        <template v-slot:right-p>
            <div>
                <j-table :title="tableTitle" :tableData="tableData"> </j-table>
            </div>
        </template>
        <template v-slot:footer-p>
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
    name: "JVideoCoverView",
    components: {
        splitHorizontal
    },
    data() {
        return {
            code: "",
            videoUrl: require("../../assets/video/密码箱.mp4"),
            // videoUrl: "http://jyeontu.xyz/video/202112250058.mp4",
            coverLongImg: require("../../assets/img/1659429006156.jpg"),
            tableTitle: [
                {
                    title: "参数", //展示列名
                    key: "parameter", //字段名
                    type: "", // 列类型
                    readOnly: true, //是否只读
                    width: "20vw", //列宽度
                    columnStyle: "", // 列样式
                    fixed: false, //是否固定
                    sort: false // 是否支持排序
                },
                {
                    title: "字段名", //展示列名
                    key: "field", //字段名
                    type: "", // 列类型
                    readOnly: true, //是否只读
                    width: "30vw", //列宽度
                    columnStyle: "", // 列样式
                    fixed: false, //是否固定
                    sort: false // 是否支持排序
                },
                {
                    title: "数据类型", //展示列名
                    key: "type", //字段名
                    type: "", // 列类型
                    readOnly: true, //是否只读
                    width: "10vw", //列宽度
                    columnStyle: "", // 列样式
                    fixed: false, //是否固定
                    sort: false // 是否支持排序
                },
                {
                    title: "描述", //展示列名
                    key: "describe", //字段名
                    type: "", // 列类型
                    readOnly: true, //是否只读
                    width: "40vw", //列宽度
                    columnStyle: "", // 列样式
                    fixed: false, //是否固定
                    sort: false // 是否支持排序
                }
            ],
            tableData: []
        };
    },
    created() {
        this.initTableData();
        this.initCodeContent();
    },
    mounted() {},
    methods: {
        initCodeContent() {
            this.code = `
<template>
    <div class="content">
        <div class="video-list">
            <j-video-cover
                class="video"
                :videoUrl="videoUrl"
                stepNums="15"
                :coverLongImg="coverLongImg"
                :height="'206px'"
                :width="'384px'"
            >
                <template v-slot:video-info-slot>
                    <span style="margin-left:1em;font-size:medium;">
                        <i class="el-icon-video-play"></i>
                        <span style="margin-left:0.1em;">171.4万</span>
                    </span>
                    <span style="margin-left:1em;font-size:medium;">
                        <i class="el-icon-chat-line-square"></i>
                        <span style="margin-left:0.1em;">6302</span>
                    </span>
                </template>
            </j-video-cover>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                videoUrl: require("../../assets/video/202112250058.mp4"),
                coverLongImg: require("../../assets/img/1659408054780.jpg")
            }
        }
    }
<\/script>
            `;
        },
        initTableData() {
            this.tableData = [
                {
                    parameter: "width",
                    field: "视频宽度",
                    type: "String",
                    describe: "默认值为300px"
                },
                {
                    parameter: "Height",
                    field: "视频高度",
                    type: "String",
                    describe: "默认值为200px"
                },
                {
                    parameter: "coverLongImg",
                    field: "封面精灵图",
                    type: "String",
                    describe:
                        "有精灵图时优先使用精灵图制作封面，图片中包含帧数应与stepNums截取帧数一致"
                },
                {
                    parameter: "stepNums",
                    field: "截取帧数",
                    type: "String",
                    describe: "默认值为30"
                },
                {
                    parameter: "videoUrl",
                    field: "视频链接",
                    type: "String",
                    describe: "视频链接地址，本地视频需要使用require"
                },
                {
                    parameter: "loop",
                    field: "循环播放",
                    type: "Boolean",
                    describe: "视频是否循环播放，默认为false"
                },
                {
                    parameter: "showDuration",
                    field: "封面显示视频时长",
                    type: "Boolean",
                    describe: "封面右下角是否显示视频时长，默认为true"
                },
                {
                    parameter: "video-info-slot",
                    field: "自定义信息",
                    type: "slot",
                    describe: "可在封面视频时长等高处添加展示信息"
                }
            ];
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
    .video-list {
        display: flex;
        flex-wrap: wrap;
        .video {
            margin: 1em;
        }
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
