<template>
    <div class="drop-down-box">
        <div class="box-input-box">
            <input
                :placeholder="placeholder"
                @focus="focusInput()"
                @input="bindInput()"
                v-model="inputData"
                v-if="!readOnly"
                class="box-input"
            />
            <div @click="arrowClick()" v-if="readOnly" class="box-input">
                {{ inputData }}
            </div>
            <div
                class="icon icon-close"
                v-if="closed"
                @click="clearInput()"
                v-show="boxIsShow"
                title="清空"
            >
                x
            </div>
            <div class="icon icon-arrow" @click="arrowClick()" title="下拉">
                {{ boxIsShow ? "v" : ">" }}
            </div>
        </div>
        <div class="box-area" v-show="boxIsShow">
            <div
                v-for="itemData in showSelectData"
                :title="itemData.value"
                :key="itemData.id"
                @click="selectItem(itemData)"
                class="select-item"
            >
                {{ itemData.value }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "JDropDownBox",
    props: {
        defIndex: {
            type: String,
            default: "",
        },
        value: {
            type: String,
            default: "",
        },
        placeholder: {
            type: String,
            default: "请输入",
        },
        filter: {
            type: Boolean,
            default: false,
        },
        closed: {
            type: Boolean,
            default: true,
        },
        readOnly: {
            type: Boolean,
            default: false,
        },
        selectData: {
            type: Array,
            default: [
                {
                    id: 1,
                    value: "选项一",
                },
                {
                    id: 2,
                    value: "选项二",
                },
                {
                    id: 3,
                    value: "选项三",
                },
                {
                    id: 4,
                    value: "选项四",
                },
                {
                    id: 5,
                    value: "选项五",
                },
                {
                    id: 6,
                    value: "选项六",
                },
            ],
        },
    },
    data() {
        return {
            boxIsShow: false,
            inputData: "",
            idMap: {},
            valueMap: {},
        };
    },
    created() {
        this.initData();
    },
    watch: {
        inputData(newVal) {
            // this.value = this.valueMap[newVal];
        },
    },
    methods: {
        initData() {
            let idMap = {};
            let valueMap = {};
            this.showSelectData = this.selectData;
            this.selectData.map((item) => {
                idMap[item.id] = item.value;
                valueMap[item.value] = item.id;
            });
            this.inputData = idMap[this.value];
            this.valueMap = valueMap;
            this.idMap = idMap;
        },
        arrowClick() {
            this.boxIsShow = !this.boxIsShow;
        },
        clearInput() {
            this.inputData = "";
            this.showSelectData = this.selectData;
            this.$emit("selectItem", "");
            this.$emit("selectIndexValue", this.defIndex, "");
        },
        focusInput() {
            this.boxIsShow = true;
            this.bindInput();
        },
        bindInput() {
            if (this.filter) {
                this.showSelectData = this.selectData.filter((sItem) => {
                    return sItem.value.indexOf(this.inputData) != -1;
                });
            }
        },
        blurInput() {
            setTimeout(() => {
                this.boxIsShow = false;
            }, 100);
        },
        selectItem(itemData) {
            this.inputData = itemData.value;
            this.$emit("selectItem", itemData.id);
            this.$emit("selectIndexValue", this.defIndex, itemData.value);
            this.boxIsShow = false;
        },
    },
};
</script>

<style lang="less" scoped>
.drop-down-box {
    // border: lightskyblue 1px solid;
    color: black;
    width: max-content;
    // position: relative;
    .box-input-box {
        background-color: whitesmoke;
        display: flex;
        line-height: 30px;
        border: skyblue 1px solid;
        padding-left: 0.5rem;
        .box-input {
            outline: none;
            border: 0;
            background-color: whitesmoke;
            min-width: calc(100% - 40px);
            div {
                cursor: pointer;
            }
        }
        .icon {
            line-height: 20px;
            width: 20px;
            margin: auto;
            cursor: pointer;
        }
        .icon-arrow {
            color: deepskyblue;
        }
        .icon-close {
            border-radius: 50%;
            border: dimgrey 1px solid;
            font-size: medium;
            transform: scale(0.7);
            color: #c21f30;
            text-align: center;
        }
    }
    .box-area {
        background-color: whitesmoke;
        border: lightskyblue 1px solid;
        color: #61649f;
        max-height: 6.25rem;
        overflow: scroll;
        // overflow-y: hidden;
        scrollbar-width: 1px;
        overflow-x: hidden;
        &::-webkit-scrollbar {
            /*滚动条整体样式*/
            width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
            height: 4px;
        }
        .select-item {
            cursor: pointer;
            border-bottom: solid 1px grey;
            padding: 2px;
        }
    }
}
</style>
