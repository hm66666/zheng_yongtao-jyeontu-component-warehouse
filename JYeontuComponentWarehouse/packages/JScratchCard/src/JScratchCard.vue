<template>
    <div>
        <div style="position: relative" v-if="mode == 'canvas'">
            <canvas
                :id="uid + '-canvas'"
                :width="parseInt(width)"
                :height="parseInt(height)"
            >
            </canvas>
            <div class="canvas-bg">
                <slot name="j-scratch-card-bg-slot"></slot>
            </div>
        </div>
        <div :id="uid + 'j-scratch-card'" class="j-scratch-card" v-else>
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
            default: "300px",
        },
        height: {
            type: String,
            default: "200px",
        },
        mode: {
            type: String,
            default: "canvas",
        },
        color: {
            type: String,
            default: "gray",
        },
        block: {
            type: Object,
            default: () => {
                return {
                    width: "20px",
                    height: "20px",
                };
            },
        },
    },
    data() {
        return {
            uid: "",
            isMouseDown: false,
        };
    },
    created() {
        this.setUid();
    },
    mounted() {
        this.mode == "canvas" ? this.initCanvas() : this.initPage();
    },
    methods: {
        setUid() {
            this.uid = getUId();
        },
        initCanvas() {
            const canvas = document.getElementById(this.uid + "-canvas");
            const ctx = canvas.getContext("2d");

            // 填充的颜色
            ctx.fillStyle = this.color;
            // 填充矩形 fillRect(起始X,起始Y,终点X,终点Y)
            ctx.fillRect(0, 0, parseInt(this.width), parseInt(this.height));
            canvas.onmousedown = () => {
                this.isMouseDown = true;
            };
            canvas.onmousemove = (e) => {
                if (!this.isMouseDown) return;
                // 计算鼠标在canvas里的位置
                console.log(e);
                const x = e.layerX - canvas.offsetLeft;
                const y = e.layerY - canvas.offsetTop;
                // 设置globalCompositeOperation
                ctx.globalCompositeOperation = "destination-out";
                // 画圆
                ctx.arc(x, y, 10, 0, 2 * Math.PI);
                // 填充圆形
                ctx.fill();
            };
            canvas.onmouseup = () => {
                this.isMouseDown = false;
            };
        },
        initPage() {
            const scratchCardId = this.uid + "j-scratch-card";
            const scratchCardDom = document.getElementById(scratchCardId);
            scratchCardDom.style.width = this.width;
            scratchCardDom.style.height = this.height;

            const scratchCardMaskId = this.uid + "j-scratch-card-mask";
            const scratchCardMaskDom =
                document.getElementById(scratchCardMaskId);
            scratchCardMaskDom.addEventListener("mousedown", () => {
                this.isMouseDown = true;
            });
            window.addEventListener("mouseup", () => {
                this.isMouseDown = false;
            });
            window.addEventListener("dragend", () => {
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
                    rowDom.style = `width:${block.width};height:${block.height};background-color: ${this.color};`;
                    rowDom.addEventListener("mouseover", (e) => {
                        if (!this.isMouseDown) return;
                        e.target.style.opacity = "0";
                    });
                    colDom.appendChild(rowDom);
                }
                scratchCardMaskDom.appendChild(colDom);
            }
        },
    },
};
</script>

<style lang="less">
.canvas-bg {
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: -1;
}
.j-scratch-card {
    position: relative;
    overflow: hidden;
    .j-scratch-card-bg {
        position: absolute;
        word-break: break-all;
        user-select: none;
    }
    .j-scratch-card-mask {
        position: absolute;
    }
}
</style>
