<template>
    <div class="canvas-container">
        <canvas ref="canvas" class="canvas"> </canvas>
        <JSlider
            id="JSlider"
            v-model="sliderValue"
            :min="1"
            :max="100"
            @input="onSliderChange(sliderValue)"
            @change="confirmSlider()"
        />
        <canvas
            ref="canvas2"
            class="canvas canvas-slider"
            :style="'left:' + startLeft + 'px'"
        ></canvas>
    </div>
</template>

<script>
export default {
    name: "JImgVerify",
    props: {
        width: {
            type: String,
            default: "499px",
        },
        height: {
            type: String,
            default: "246px",
        },
        cutPathObj: {
            type: Array,
            default: () => {
                return [
                    { x: 369, y: 150 },
                    { x: 393, y: 145 },
                    { x: 392, y: 119 },
                    { x: 422, y: 118 },
                    { x: 421, y: 135 },
                    { x: 447, y: 140 },
                    { x: 446, y: 154 },
                    { x: 423, y: 155 },
                    { x: 420, y: 172 },
                    { x: 402, y: 173 },
                    { x: 398, y: 158 },
                    { x: 376, y: 165 },
                    { x: 369, y: 149 },
                ];
            },
        },
        // cutPath: {
        //     type: Array,
        //     default: () => {
        //         return [
        //             [100, 100],
        //             [120, 100],
        //             [120, 80],
        //             [140, 80],
        //             [140, 100],
        //             [160, 100],
        //             [160, 120],
        //             [140, 120],
        //             [140, 140],
        //             [120, 140],
        //             [100, 120],
        //             [80, 120],
        //         ];
        //     },
        // },
        imgSrc: {
            type: String,
            default:
                "https://d-ssl.dtstatic.com/uploads/blog/202304/13/20230413113305_72f55.thumb.300_300_c.jpeg_webp",
        },
        passDiff: {
            type: Number | String,
            default: 3,
        },
    },
    mounted() {
        this.init();
    },
    data() {
        return {
            sliderValue: 0,
            canvasSliderLeft: 0,
            originLeft: 0,
            startLeft: 0,
            cutPath: [],
        };
    },
    computed: {},
    methods: {
        init() {
            this.cutPath = [];
            this.cutPathObj.forEach((item) => {
                this.cutPath.push([item.x, item.y]);
            });
            this.sliderValue = 0;
            this.canvasSliderLeft = 0;
            this.originLeft = 0;
            this.startLeft = 0;
            this.loadImage();
            this.loadImage2();
            this.initData();
        },
        initData() {
            let maxX = -Infinity,
                minX = Infinity;
            this.cutPath.forEach((pos) => {
                maxX = Math.max(maxX, pos[0]);
                minX = Math.min(minX, pos[0]);
            });
            this.canvasSliderLeft = -(maxX + 10) + "px";
            this.originLeft = -maxX; // + (maxX - minX);
            this.startLeft = -maxX; // + (maxX - minX);
        },
        onSliderChange(sliderValue) {
            const left = parseInt(this.width) * (sliderValue / 100);
            this.startLeft = parseInt(this.originLeft) + parseInt(left);
        },
        confirmSlider() {
            if (Math.abs(this.startLeft) <= this.passDiff) {
                this.$JToast("验证通过");
            } else {
                this.$JToast("验证失败");
                this.init();
            }
        },
        loadImage() {
            const canvas = this.$refs.canvas;
            const ctx = canvas.getContext("2d");
            const image = new Image();
            image.onload = () => {
                image.width = parseInt(this.width);
                image.height = parseInt(this.height);
                canvas.width = image.width;
                canvas.height = image.height;

                // 绘制图片
                ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
                const cutPath = this.cutPath;
                // 创建镂空区域的路径
                ctx.beginPath();
                ctx.moveTo(...cutPath[0]);
                for (let i = 1; i < cutPath.length; i++) {
                    ctx.lineTo(...cutPath[i]);
                }
                ctx.closePath();

                // 在路径内部清除像素
                ctx.globalCompositeOperation = "destination-out";
                ctx.fill();
            };
            image.src = this.imgSrc;
        },
        loadImage2() {
            const canvas = this.$refs.canvas2;
            const ctx = canvas.getContext("2d");
            const image = new Image();
            image.onload = () => {
                image.width = parseInt(this.width);
                image.height = parseInt(this.height);
                canvas.width = image.width;
                canvas.height = image.height;

                // 定义剪切路径
                const cutPath = this.cutPath;
                ctx.beginPath();
                ctx.moveTo(...cutPath[0]);
                for (let i = 1; i < cutPath.length; i++) {
                    ctx.lineTo(...cutPath[i]);
                }
                ctx.closePath();
                ctx.clip();

                // 绘制图片
                ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
            };
            image.src = this.imgSrc;
        },
    },
};
</script>

<style>
.canvas-container {
    position: relative;
}

.canvas {
    display: block;
}
.canvas-slider {
    position: absolute;
    top: 0;
    left: 0;
}
</style>
