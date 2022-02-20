<template>
    <div class="j-tag-list">
        <div class="tag-list">
            <span
                v-for="(item, index) in showTagList"
                :key="index + '_tag'"
                class="tag"
                :style="item.style"
                @click="tagClick(item)"
            >
                {{ item.text }}
                <span
                    v-if="canDelete"
                    class="delete-tag-btn"
                    title="删除"
                    @click.stop="deleteTag(index)"
                    >x</span
                >
            </span>
            <template v-if="!isShow">
                <input
                    v-if="addTagFlag"
                    :ref="'tagInputRef' + uId"
                    class="add-tag-input"
                    v-model="inputTag"
                    v-focus="true"
                    @blur="addTag()"
                    @keydown.enter="addTag()"
                />
                <span
                    v-else
                    title="添加"
                    class="add-tag-btn"
                    @click="showAddTag()"
                    >+</span
                >
            </template>
        </div>
    </div>
</template>

<script>
import { getRandomNum } from "../../utils/numsFormat";
export default {
    name: "JTagList",
    props: {
        //展示的标签列表
        tagList: {
            type: Array,
            default: () => {
                return ["测试1", "测试2"];
            }
        },
        //允许删除
        canDelete: {
            type: Boolean,
            default: true
        },
        //允许重复
        canRepeat: {
            type: Boolean,
            default: false
        },
        //标签背景颜色
        tagColor: {
            type: Array,
            default: () => {
                return ["orange"];
            }
        },
        //仅展示
        isShow: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            addTagFlag: false,
            inputTag: "",
            showTagList: [],
            uId: ""
        };
    },
    watch: {
        tagList(newVal) {
            this.initTagStyle();
        }
    },
    created() {
        this.getUId();
    },
    mounted() {
        this.initTagStyle();
    },
    methods: {
        getRandomLetter(size = 8) {
            let res = "";
            for (let i = 0; i < size; i++) {
                let ind = Math.floor(Math.random() * 26);
                res += String.fromCharCode(ind + 65);
            }
            return res;
        },
        getUId() {
            this.uId =
                this.getRandomLetter(8) +
                "-" +
                Math.ceil(Math.random() * 100000);
        },
        initTagStyle() {
            let showTagList = [];
            this.tagList.map(item => {
                showTagList.push({ text: item, style: this.getTagStyle() });
            });
            this.showTagList = showTagList;
        },
        getTagStyle() {
            const len = this.tagColor.length - 1;
            const ind = getRandomNum(0, len);
            const res = `background-color:${this.tagColor[ind]};`;
            return res;
        },
        showAddTag() {
            this.addTagFlag = true;
            this.$nextTick(() => {
                this.$refs["tagInputRef" + this.uId].focus();
            });
        },
        hideAddTag() {
            this.addTagFlag = false;
        },
        deleteTag(index) {
            this.$emit("deleteTag", this.showTagList[index]);
            this.tagList.splice(index, 1);
            this.showTagList.splice(index, 1);
        },
        tagClick(item) {
            this.$emit("tagClick", item);
        },
        addTag() {
            this.inputTag = this.inputTag.trim();
            if (this.inputTag.trim().length != 0) {
                this.tagList.push(this.inputTag);
                if (!this.canRepeat) this.tagList = [...new Set(this.tagList)];
                if (this.tagList.length > this.showTagList.length) {
                    this.showTagList.push({
                        text: this.inputTag,
                        style: this.getTagStyle()
                    });
                    this.$emit("addTag", item);
                }
                this.inputTag = "";
            }
            this.hideAddTag();
        }
    }
};
</script>

<style lang="scss" scoped>
.j-tag-list {
    .tag-list {
        display: flex;
        flex-wrap: wrap;
        .tag {
            height: 1.5rem;
            cursor: pointer;
            border-radius: 10%;
            background-color: orange;
            padding: 0.25rem 0.3rem;
            margin-right: 0.25rem;
            margin-top: 0.2rem;
            .delete-tag-btn {
                color: rgb(241, 81, 81);
                border: rgb(250, 82, 82) 1px solid;
                width: 1rem;
                height: 1rem;
                border-radius: 50%;
                display: inline-block;
                &:hover {
                    color: red;
                }
            }
        }
        .add-tag-input {
            width: 5rem;
            padding: 0.25rem 0.3rem;
            margin-top: 0.2rem;
        }
        .add-tag-btn {
            cursor: pointer;
            padding: 0.25rem 0.3rem;
            font-weight: bold;
            font-size: x-large;
            color: deepskyblue;
            margin-top: 0.2rem;
        }
    }
}
</style>
