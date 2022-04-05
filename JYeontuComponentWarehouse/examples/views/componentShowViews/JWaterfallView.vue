<template>
    <split-horizontal>
        <template v-slot:header-p>
            <div class="j-title">
                瀑布流照片容器（JWaterfall）
                <div class="j-detail">
                    瀑布流照片容器
                </div>
            </div>
        </template>
        <template v-slot:left-p>
            <div class="content">
                <j-waterfall :imgList="imgList"> </j-waterfall>
            </div>
        </template>
        <template v-slot:right-p>
            <div>
                <j-table :title="tableTitle" :tableData="tableData"> </j-table>
            </div>
        </template>
        <template v-slot:footer-p>
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
    name: "JWaterfallView",
    components: {
        splitHorizontal
    },
    data() {
        return {
            code: "",
            imgList: [
                "https://img2.baidu.com/it/u=134769530,4268043097&fm=253&fmt=auto&app=138&f=JPEG?w=533&h=333",
                "https://img1.baidu.com/it/u=2580690117,2413329602&fm=253&fmt=auto&app=138&f=JPEG?w=642&h=500",
                "https://img2.baidu.com/it/u=3133697304,2308274678&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313",
                "https://img1.baidu.com/it/u=2539150145,3709425073&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=711",
                "https://img2.baidu.com/it/u=3772577665,2044310843&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=727",
                "https://img0.baidu.com/it/u=3966731730,957573008&fm=253&fmt=auto&app=138&f=JPEG?w=281&h=500",
                "https://img2.baidu.com/it/u=3440095388,1687551735&fm=253&fmt=auto&app=120&f=JPEG?w=1363&h=614",
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201701%2F17%2F20170117163054_C3ydM.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651752631&t=65ba649ba066495acb0bbd112920eabb",
                "https://img1.baidu.com/it/u=2912396327,2474337263&fm=253&fmt=auto&app=138&f=JPEG?w=347&h=500",
                "https://img1.baidu.com/it/u=1568155621,1811293689&fm=253&fmt=auto&app=138&f=JPEG?w=700&h=495",
                "https://img2.baidu.com/it/u=461269782,2772059667&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313",
                "https://img1.baidu.com/it/u=2599508183,3079977410&fm=253&fmt=auto&app=138&f=JPEG?w=416&h=499",
                "https://img1.baidu.com/it/u=857618379,3899031461&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
                "https://img1.baidu.com/it/u=1702938387,792201763&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=447",
                "https://img1.baidu.com/it/u=1539021674,3840242491&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=246",
                "https://img0.baidu.com/it/u=3159006221,3574011460&fm=253&fmt=auto&app=120&f=JPEG?w=1067&h=800",
                "https://img2.baidu.com/it/u=451082639,696249795&fm=253&fmt=auto&app=138&f=JPEG?w=720&h=405",
                "https://img2.baidu.com/it/u=1444438974,3214886495&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img0.baidu.com/it/u=754308036,2423815123&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
                "https://img0.baidu.com/it/u=1811280816,2994744388&fm=253&fmt=auto&app=138&f=JPG?w=659&h=452",
                "https://img1.baidu.com/it/u=3819643902,1000613763&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img1.baidu.com/it/u=1303707706,2356690886&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img0.baidu.com/it/u=573627639,3491865163&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img1.baidu.com/it/u=2552181951,114177955&fm=253&fmt=auto&app=138&f=PNG?w=502&h=500",
                "https://img0.baidu.com/it/u=1688278494,1421949150&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img2.baidu.com/it/u=3149693868,1058312070&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img2.baidu.com/it/u=2003437735,1374592373&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img0.baidu.com/it/u=4068300737,290575386&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img2.baidu.com/it/u=1328092326,573376744&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img0.baidu.com/it/u=1280320387,1585665801&fm=253&fmt=auto&app=138&f=JPEG?w=368&h=368",
                "https://img0.baidu.com/it/u=1403512971,1919400898&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img0.baidu.com/it/u=707869343,3146161581&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img1.baidu.com/it/u=1473510751,3362722835&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img0.baidu.com/it/u=751714707,705901550&fm=253&fmt=auto&app=138&f=JPEG?w=559&h=500",
                "https://img2.baidu.com/it/u=3288691327,4041002989&fm=253&fmt=auto&app=138&f=JPEG?w=304&h=303",
                "https://img1.baidu.com/it/u=2172054385,2684839842&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img1.baidu.com/it/u=1879107733,3573789717&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img2.baidu.com/it/u=1720323410,218932174&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img1.baidu.com/it/u=2479779032,1379361694&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img1.baidu.com/it/u=537208727,895387248&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img1.baidu.com/it/u=3310720258,943543712&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img2.baidu.com/it/u=2165957654,3023194084&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img0.baidu.com/it/u=1446729335,4267600834&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img2.baidu.com/it/u=2922694860,2270800253&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img0.baidu.com/it/u=595403291,2269048245&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img0.baidu.com/it/u=1164365158,2722332607&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img2.baidu.com/it/u=9876582,1040648435&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
            ],
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
                    width: "15vw", //列宽度
                    columnStyle: "", // 列样式
                    fixed: false, //是否固定
                    sort: false // 是否支持排序
                },
                {
                    title: "描述", //展示列名
                    key: "describe", //字段名
                    type: "", // 列类型
                    readOnly: true, //是否只读
                    width: "35vw", //列宽度
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
        <p>
            hover
            <j-tool-tip
                tipText="one"
                :textStyle="textStyle"
                :toolTipStyle="toolTipStyle"
                >here
            </j-tool-tip>
            to see one.
        </p>
        <p>
            hover
            <j-tool-tip tipText="another">here </j-tool-tip>
            to see another.
        </p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                textStyle: {
                    borderBottom: "1px dotted skyblue",
                    fontSize: "large",
                    color: "skyblue"
                },
                toolTipStyle: {
                    backgroundColor: "grey",
                    color: "skyblue",
                    width: "100px"
                },
            }
        }
    }
<\/script>
            `;
        },
        initTableData() {
            this.tableData = [
                {
                    parameter: "tipText",
                    field: "提示内容",
                    type: "String",
                    describe: ""
                },
                {
                    parameter: "textStyle",
                    field: "文字样式",
                    type: "Object",
                    describe: "设置文字样式，如下划线样式",
                    children: {
                        type: "text",
                        text: '{"border-bottom": "1px dotted black"}'
                    }
                },
                {
                    parameter: "toolTipStyle",
                    field: "提示框内容样式",
                    type: "Object",
                    describe: "具体配置如下",
                    children: {
                        title: this.tableTitle,
                        data: [
                            {
                                parameter: "backgroundColor",
                                field: "提示框背景颜色",
                                type: "String",
                                describe: "默认为#062b45"
                            },
                            {
                                parameter: "color",
                                field: "提示框字体颜色",
                                type: "String",
                                describe: "默认为#fff"
                            },
                            {
                                parameter: "width",
                                field: "提示框宽度",
                                type: "String",
                                describe: "默认为100px"
                            }
                        ]
                    }
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
    height: 40vh;
    overflow-y: scroll;
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
