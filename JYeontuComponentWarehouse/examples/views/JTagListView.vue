<template>
    <split-horizontal>
        <template v-slot:header-p>
            <div class="j-title">
                tag标签列表（JTagList）
                <div class="j-detail">
                    添加自定义标签
                </div>
            </div>
        </template>
        <template v-slot:left-p>
            <div class="content">
                <j-tag-list
                    :tagList="tagList"
                    :tagColor="tagColor"
                    :canRepeat="false"
                    :isShow="false"
                >
                </j-tag-list>
            </div>
        </template>
        <template v-slot:right-p>
            <div>
                <j-table :title="tableTitle" :tableData="tableData" style="">
                </j-table>
            </div>
        </template>
        <template v-slot:footer-p>
            <j-code-height-light :code="code" class="footer">
            </j-code-height-light>
        </template>
    </split-horizontal>
</template>
<script>
import splitHorizontal from "@/components/pages/splitHorizontal.vue";
export default {
    name: "JTagListView",
    components: {
        splitHorizontal
    },
    data() {
        return {
            code: "",
            tagList: ["c语言", "python", "JavaScript", "vue", "算法", "羽毛球"],
            tagColor: ["orange", "pink"],
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
            tableData: [
                {
                    parameter: "tagList",
                    field: "标签列表",
                    type: "Array",
                    describe: "展示的标签列表"
                },
                {
                    parameter: "tagColor",
                    field: "标签颜色",
                    type: "Array",
                    describe: "标签背景颜色，默认为['orange'],多种时会随机展示"
                },
                {
                    parameter: "canRepeat",
                    field: "是否允许重复",
                    type: "Boolean",
                    describe:
                        "为true时允许重复，反正则在添加的时候去重，默认为false"
                },
                {
                    parameter: "isShow",
                    field: "是否仅展示",
                    type: "Boolean",
                    describe:
                        "为true时仅展示标签，为false时显示添加和删除按钮，默认为false"
                }
            ]
        };
    },
    created() {
        this.code = `
        <j-tag-list
            :tagList="tagList"
            :tagColor="tagColor"
            :canRepeat="false"
            :isShow="false">
        </j-tag-list>
        export default {
            data(){
                return {
                    tagList: ["c语言", "python", "JavaScript", "vue", "算法", "羽毛球"],
                    tagColor: ["orange", "pink"],
                }
            }
        }
    `;
    },
    mounted() {
        this.autoChange();
    },
    methods: {}
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
