<template>
    <split-horizontal>
        <template v-slot:header-p>
            <div class="j-title">
                tag标签列表（JTagList）
                <div class="j-detail">添加自定义标签</div>
            </div>
        </template>
        <template v-slot:left-p>
            <div class="content">
                <div class="choose-tag-list">
                    <j-tag-list
                        :tagList="chooseTagList"
                        :tagColor="['orange']"
                        :canRepeat="false"
                        :isShow="true"
                    >
                    </j-tag-list>
                </div>
                <j-tag-list
                    :tagList="tagList"
                    :tagColor="tagColor"
                    :canRepeat="false"
                    :isShow="false"
                    @tagClick="tagClick"
                    @deleteTag="deleteTag"
                    @addTag="addTag"
                >
                </j-tag-list>
            </div>
        </template>
        <template v-slot:right-p>
            <div>
                <j-table :title="tableTitle" :tableData="tableData"> </j-table>
            </div>
        </template>
        <template v-slot:footer-p>
            <pre v-highlight>
                <code class="vue">
                    <div v-text="code"></div>
                </code>
            </pre>
        </template>
    </split-horizontal>
</template>
<script>
import { mixinForView } from "@/mixins/index.js";
export default {
    name: "JTagListView",
    components: {},
    mixins: [mixinForView],
    data() {
        return {
            code: "",
            tagList: ["c语言", "python", "JavaScript", "vue", "算法", "羽毛球"],
            tagColor: ["orange", "pink"],
            tableData: [
                {
                    parameter: "tagList",
                    field: "标签列表",
                    type: "Array",
                    describe: "展示的标签列表",
                },
                {
                    parameter: "tagColor",
                    field: "标签颜色",
                    type: "Array",
                    describe: "标签背景颜色，默认为['orange'],多种时会随机展示",
                },
                {
                    parameter: "canRepeat",
                    field: "是否允许重复",
                    type: "Boolean",
                    describe:
                        "为true时允许重复，反正则在添加的时候去重，默认为false",
                },
                {
                    parameter: "isShow",
                    field: "是否仅展示",
                    type: "Boolean",
                    describe:
                        "为true时仅展示标签，为false时显示添加和删除按钮，默认为false",
                },
            ],
            chooseTagList: [],
        };
    },
    created() {
        this.code = `
<template>
    <div>
        <div class="choose-tag-list">
            <j-tag-list
                :tagList="chooseTagList"
                :tagColor="['orange']"
                :canRepeat="false"
                :isShow="true">
            </j-tag-list>
        </div>
        <j-tag-list
            :tagList="tagList"
            :tagColor="tagColor"
            :canRepeat="false"
            :isShow="false"
            @tagClick="tagClick"
            @deleteTag="deleteTag"
            @addTag="addTag"
        >
        </j-tag-list>
    </div>
</template>

export default {
    data(){
        return {
            tagList: ["c语言", "python", "JavaScript", "vue", "算法", "羽毛球"],
            tagColor: ["orange", "pink"],
            chooseTagList: []
        }
    },
    methods: {
        addTag(item) {
            console.log(item);
        },
        tagClick(item) {
            if (this.chooseTagList.includes(item.text)) {
                return;
            }
            this.chooseTagList.push(item.text);
        },
        deleteTag(item) {
            const ind = this.chooseTagList.indexOf(item.text);
            if (ind !== -1) {
                this.chooseTagList.splice(ind, 1);
            }
        }
    }
}
`;
    },
    mounted() {},
    methods: {
        addTag(item) {
            console.log(item);
        },
        tagClick(item) {
            if (this.chooseTagList.includes(item.text)) {
                return;
            }
            this.chooseTagList.push(item.text);
        },
        deleteTag(item) {
            const ind = this.chooseTagList.indexOf(item.text);
            if (ind !== -1) {
                this.chooseTagList.splice(ind, 1);
            }
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
