<template>
    <div id="canvas-broad">
        <canvas id="canvas" :width="canvasWidth" :height="canvasHeight"
            >浏览器不支持canvas<!-- 如果不支持会显示这段文字 --></canvas
        >
        <j-tab-bar v-if="toolsTabList" :tabList="tabList" :showTab="showTab">
            <template v-slot:back-ground-color>
                <div class="section">
                    <span class="info">设置背景颜色：</span>
                    <input
                        class="btn input-color"
                        type="color"
                        v-model="brackGroudColor"
                    />
                </div>
            </template>
            <template v-slot:pen-color>
                <div class="section">
                    <span class="info">选择画笔颜色：</span>
                    <input
                        class="btn input-color"
                        type="color"
                        v-model="penColor"
                    />
                </div>
            </template>
            <template v-slot:eraser>
                <div class="section">
                    <span class="info">选择橡皮擦：</span>
                    <button
                        class="btn colorBtn"
                        :style="'background-color:' + brackGroudColor + ';'"
                        @click="setPenColor()"
                    >
                        {{ brackGroudColor }}
                    </button>
                </div>
                <div class="section">
                    <button class="btn" @click="setBackGround()">
                        清空画布
                    </button>
                </div>
            </template>
            <template v-slot:pen-size>
                <div class="section">
                    <span class="info">选择画笔大小：</span>
                    <progress
                        :value="progressValue"
                        style="cursor: pointer"
                        id="progress"
                        max="1"
                        :title="progressValue * 100 + '%'"
                        @click="setPenWidth"
                    ></progress>
                    <span style="margin-left: 0.3125rem"
                        >{{ 20 * progressValue }}px</span
                    >
                </div>
            </template>
            <template v-slot:export>
                <div class="section">
                    <span class="info">输出画板内容到下面的图片：</span>
                    <button class="btn" @click="createImage()">EXPORT</button>
                </div>
                <img id="image_png" />
            </template>
        </j-tab-bar>
        <template v-if="!toolsTabList">
            <div class="section">
                <button class="btn" @click="setBackGround()">清空画布</button>
            </div>
            <div class="section">
                <span class="info">选择画笔颜色：</span>
                <input class="input-color" type="color" v-model="penColor" />
            </div>
            <div class="section">
                <span class="info">设置背景颜色：</span>
                <input
                    class="input-color"
                    type="color"
                    v-model="brackGroudColor"
                />
            </div>
            <div class="section">
                <span class="info">选择橡皮擦：</span>
                <button
                    class="btn colorBtn"
                    :style="'background-color:' + brackGroudColor + ';'"
                    @click="setPenColor()"
                >
                    {{ brackGroudColor }}
                </button>
            </div>
            <div class="section">
                <span class="info">选择画笔大小：</span>
                <progress
                    :value="progressValue"
                    style="cursor: pointer"
                    id="progress"
                    max="1"
                    :title="progressValue * 100 + '%'"
                    @click="setPenWidth"
                ></progress>
                <span style="margin-left: 0.3125rem"
                    >{{ 20 * progressValue }}px</span
                >
            </div>
            <div class="section">
                <span class="info">输出画板内容到下面的图片：</span>
                <button class="btn" @click="createImage()">EXPORT</button>
            </div>
            <img id="image_png" />
        </template>
    </div>
</template>

<script>
import JTabBar from "../../../pagesTools/JTabBar.vue";
export default {
    name: "JCanvasBroad",
    props: {
        height: {
            type: Number,
            default: -1,
        },
        width: {
            type: Number,
            default: -1,
        },
        defaultPenColor: {
            type: String,
            default: "#000000",
        },
        defaultPenSize: {
            type: Number,
            default: 4,
        },
        defaultBackGroundColor: {
            type: String,
            default: "#ffffff",
        },
        toolsTabList: {
            type: Boolean,
            default: false,
        },
    },
    components: {
        JTabBar,
    },
    watch: {
        brackGroudColor: {
            handler(newVal, oldVal) {
                this.setBackGround();
            },
        },
    },
    data() {
        return {
            canvasWidth: "",
            canvasHeight: "",
            penColor: "#000000",
            penWidth: 4,
            penClick: false,
            startAxisX: 0,
            startAxisY: 0,
            brackGroudColor: "#ffffff",
            progressValue: 0.2,
            tabList: [
                {
                    label: "背景颜色",
                    id: "back-ground-color",
                },
                {
                    label: "画笔颜色",
                    id: "pen-color",
                },
                {
                    label: "橡皮擦",
                    id: "eraser",
                },
                {
                    label: "画笔大小",
                    id: "pen-size",
                },
                {
                    label: "导出图片",
                    id: "export",
                },
            ],
            showTab: 0,
        };
    },
    created() {},
    mounted() {
        this.init();
    },
    methods: {
        //页面初始化
        init() {
            let height = this.height;
            let width = this.width;
            if (width == -1) {
                const cbw = document.getElementById("canvas-broad");
                width = cbw.offsetWidth * 0.9;
                height = cbw.offsetHeight * 0.6;
                // this.canvasWidth = width;
                // this.canvasHeigth = height;
            }
            this.canvasWidth = width;
            this.canvasHeight = height;
            this.penColor = this.defaultPenColor;
            this.brackGroudColor = this.defaultBackGroundColor;
            this.penWidth = this.defaultPenSize;

            let canvas = document.getElementById("canvas"); //获取canvas标签
            let ctx = canvas.getContext("2d"); //创建 context 对象
            ctx.fillStyle = this.brackGroudColor; //画布背景色
            ctx.fillRect(0, 0, width, height); //在画布上绘制 width * height 的矩形，从左上角开始 (0,0)
            canvas.addEventListener("mousemove", this.drawing); //鼠标移动事件
            canvas.addEventListener("mousedown", this.penDown); //鼠标按下事件
            canvas.addEventListener("mouseup", this.penUp); //鼠标弹起事件
        },
        getWidthSelect(width) {
            if (width == this.penWidth) {
                return "btn bg penBtn fw";
            }
            return "btn bg penBtn";
        },
        getColorSelect(color) {
            if (color == this.penColor) {
                return "btn colorBtn fw";
            }
            return "btn colorBtn";
        },
        setBackGround() {
            const canvas = document.getElementById("canvas"); //获取canvas标签
            const ctx = canvas.getContext("2d"); //创建 context 对象
            ctx.fillStyle = this.brackGroudColor; //画布背景色
            ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight); //在画布上绘制 600x300 的矩形，从左上角开始 (0,0)
        },
        setPenWidth(event) {
            const progress = document.getElementById("progress");
            this.progressValue =
                (event.pageX - progress.offsetLeft) / progress.offsetWidth;
            this.penWidth = 20 * this.progressValue;
        },
        //设置画笔颜色
        setPenColor(color = "") {
            if (color == "") this.penColor = this.brackGroudColor;
            else this.penColor = color;
        },
        penDown(event) {
            this.penClick = true;
            this.startAxisX = event.pageX;
            this.startAxisY = event.pageY;
        },
        penUp() {
            this.penClick = false;
        },
        drawing(event) {
            if (!this.penClick) return;
            const canvas = document.getElementById("canvas"); //获取canvas标签
            const ctx = canvas.getContext("2d"); //创建 contextconst canvas = document.getElementById('canvas');  对象
            const stopAxisX = event.pageX;
            const stopAxisY = event.pageY;
            const left = document.getElementById("leftMenu");
            const lw =
                left && left.offsetWidth ? (left.offsetWidth || 0) / 2 : 0;
            ctx.beginPath();
            //由于整体设置了水平居中，因此需要做特殊处理：window.screen.availWidth/2 -300
            const wsaW = window.screen.availWidth;
            const cl = canvas.offsetLeft;
            const ct = canvas.offsetTop;
            ctx.moveTo(this.startAxisX - cl, this.startAxisY - ct); //moveTo(x,y) 定义线条开始坐标
            ctx.lineTo(stopAxisX - cl, stopAxisY - ct); //lineTo(x,y) 定义线条结束坐标
            ctx.strokeStyle = this.penColor;
            ctx.lineWidth = this.penWidth;
            ctx.lineCap = "round";
            ctx.stroke(); // stroke() 方法来绘制线条
            this.startAxisX = stopAxisX;
            this.startAxisY = stopAxisY;
        },
        createImage() {
            const canvas = document.getElementById("canvas"); //获取canvas标签
            const img_png_src = canvas.toDataURL("image/png"); //将画板保存为图片格式的函数
            // console.log('=====',img_png_src);//data:image/png;base64,iVBOR.....
            document.getElementById("image_png").src = img_png_src;
        },
    },
};
</script>

<style lang="less" scoped="scoped">
* {
    margin: 0;
    padding: 0;
}
#canvas-broad {
    margin: 0 auto;
    /*text-align: center;*/
}
#canvas {
    border: 2px solid #ff6700;
    cursor: crosshair;
    /*不能用这种方式给canvas设置宽高*/
    /*width: 600px;*/
    /*height: 300px;*/
}
.btn {
    width: 70px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #aaa; /*去掉<button>默认边框*/
    outline: none; /*去掉<button>选中时的默认边框*/
    cursor: pointer;
}
.input-color {
    width: 70px;
    height: 40px;
    border-radius: 10px;
    border: 0; /*去掉<button>默认边框*/
    outline: none; /*去掉<button>选中时的默认边框*/
}
#image_png {
    width: 300px;
    height: 150px;
    border: 2px solid #ff6700;
    display: block;
    margin: 10px auto;
}
.section {
    margin-top: 10px;
}
.info {
    color: #f0f;
    font-size: 14px;
    line-height: 40px;
}
.bg {
    background: #ff6700;
}
.fw {
    font-weight: 700;
}
</style>
