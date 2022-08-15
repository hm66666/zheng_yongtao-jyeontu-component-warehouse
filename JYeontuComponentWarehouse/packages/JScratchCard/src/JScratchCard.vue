<template>
    <div>
        <div :id="uid + 'j-scratch-card'" class="j-scratch-card">
            <div :id="uid + 'j-scratch-card-bg'" class="j-scratch-card-bg">
                <slot name="j-scratch-card-bg-slot"></slot>
            </div>
            <div
                :id="uid + 'j-scratch-card-mask'"
                class="j-scratch-card-mask"
            ></div>
        </div>
    </div>
</template>

<script>
import { getUId } from "../../utils/strTool";
export default {
    name: "JScratchCard",
    props: {
        width: {
            type: String,
            default: "300px"
        },
        height: {
            type: String,
            default: "200px"
        },
        block: {
            type: Object,
            default: () => {
                return {
                    width: "20px",
                    height: "20px"
                };
            }
        }
    },
    data() {
        return {
            uid: "",
            isMouseDown: false
        };
    },
    created() {
        this.setUid();
    },
    mounted() {
        this.initPage();
    },
    methods: {
        setUid() {
            this.uid = getUId();
        },
        initPage() {
            const scratchCardId = this.uid + "j-scratch-card";
            const scratchCardDom = document.getElementById(scratchCardId);
            scratchCardDom.style.width = this.width;
            scratchCardDom.style.height = this.height;

            const scratchCardMaskId = this.uid + "j-scratch-card-mask";
            const scratchCardMaskDom = document.getElementById(
                scratchCardMaskId
            );
            scratchCardMaskDom.addEventListener("mousedown", () => {
                this.isMouseDown = true;
            });
            scratchCardMaskDom.addEventListener("mouseup", () => {
                this.isMouseDown = false;
            });

            const block = this.block;
            const col = Math.ceil(
                parseInt(this.height) / parseInt(block.height)
            );
            const row = Math.ceil(parseInt(this.width) / parseInt(block.width));
            for (let i = 0; i < col; i++) {
                const colDom = document.createElement("div");
                colDom.style = "display:flex;";
                colDom.classList.add("j-scratch-card-mask-col");
                for (let j = 0; j < row; j++) {
                    const rowDom = document.createElement("div");
                    rowDom.classList.add("j-scratch-card-mask-row");
                    rowDom.id = `j-scratch-card-mask-row-${col}-${row}`;
                    rowDom.style = `width:${block.width};height:${block.height};`;
                    rowDom.addEventListener("mouseover", e => {
                        if (!this.isMouseDown) return;
                        e.target.style.opacity = "0";
                    });
                    colDom.appendChild(rowDom);
                }
                scratchCardMaskDom.appendChild(colDom);
            }
        }
    }
};
</script>

<style lang="scss">
.j-scratch-card {
    position: relative;
    overflow: hidden;
    .j-scratch-card-bg {
        position: absolute;
        word-break: break-all;
        img {
            user-select: none;
        }
    }
    .j-scratch-card-mask {
        color: gray;
        position: absolute;
        .j-scratch-card-mask-row {
            background-color: gray;
        }
    }
}
</style>
