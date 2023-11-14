<template>
    <div>
        <input
            v-if="type === 'input'"
            class="j-auto-complete-input"
            @keydown.tab.prevent="handleTabKey"
            @input="handleInput"
            v-model="inputVal"
        />
        <div class="j-auto-complete-panel" v-if="showChooseList">
            <div
                class="j-auto-complete-panel-item"
                v-for="(text, textInd) in selectList"
                :key="'JAutoCompleteInputItem' + textInd"
                @click="selectText(text)"
            >
                {{ text }}
            </div>
        </div>
    </div>
</template>

<script>
import { TrieTree } from "@jyeontu/structure-jyeontu";
export default {
    name: "JAutoCompleteInput",
    props: {
        type: {
            type: String,
            default: "input",
        },
        wordList: {
            type: Array,
            default: [],
        },
        showChooseList: {
            type: Boolean,
            default: true,
        },
    },
    model: {
        prop: "value",
        event: "input",
    },
    data() {
        return {
            inputVal: "",
            selectList: [],
            trieTree: null,
        };
    },
    created() {
        this.initData();
    },
    methods: {
        initData() {
            this.inputVal = this.value;
            this.trieTree = new TrieTree(
                this.wordList.sort((a, b) => a.length - b.length)
            );
            this.handleInput();
        },
        selectText(text) {
            this.inputVal = text;
            this.handleInput();
        },
        handleInput() {
            this.selectList = this.trieTree.getWordsByPrefix(this.inputVal);
            this.$emit("input", this.inputVal);
        },
        handleTabKey() {
            if (this.selectList.length) this.inputVal = this.selectList[0];
            this.handleInput();
        },
    },
};
</script>

<style lang="less" scoped>
.j-auto-complete-input {
    width: 100%;
    padding: 0.3rem;
}
.j-auto-complete-panel {
    width: 100%;
    padding: 0.3rem;
    background: #dfdbdb;
    padding-left: 0.8rem;
    max-height: 30vh;
    overflow-y: scroll;
    cursor: pointer;
    &-item {
        width: 100%;
        overflow: hidden;
        padding-bottom: 0.2rem;
        border-bottom: #bfb9b9 1px solid;
        &:hover {
            background: #bfb9b9;
        }
    }
}
</style>
