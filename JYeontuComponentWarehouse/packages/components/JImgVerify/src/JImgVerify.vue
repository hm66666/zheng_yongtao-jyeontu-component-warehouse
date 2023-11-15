<template>
    <div class="canvas-container">
        <canvas ref="canvas" class="canvas"></canvas>
        <canvas ref="canvas2" class="canvas"></canvas>
    </div>
</template>

<script>
export default {
    name: "JImgVerify",
    mounted() {
        this.loadImage();
        this.loadImage2();
    },
    methods: {
        loadImage() {
            const canvas = this.$refs.canvas;
            const ctx = canvas.getContext("2d");
            const image = new Image();
            image.onload = () => {
                canvas.width = image.width;
                canvas.height = image.height;

                // 绘制图片
                ctx.drawImage(image, 0, 0);

                // 创建镂空区域的路径
                ctx.beginPath();
                ctx.moveTo(100, 100);
                ctx.lineTo(300, 150);
                ctx.lineTo(200, 300);
                ctx.closePath();

                // 在路径内部清除像素
                ctx.globalCompositeOperation = "destination-out";
                ctx.fill();
            };
            image.src =
                "https://img1.baidu.com/it/u=1539021674,3840242491&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=246";
        },
        loadImage2() {
            const canvas = this.$refs.canvas2;
            const ctx = canvas.getContext("2d");
            const image = new Image();
            image.onload = () => {
                canvas.width = image.width;
                canvas.height = image.height;

                // 定义剪切路径
                ctx.beginPath();
                ctx.moveTo(100, 100);
                ctx.lineTo(300, 150);
                ctx.lineTo(200, 300);
                ctx.closePath();
                ctx.clip();

                // 绘制图片
                ctx.drawImage(image, 0, 0);
            };
            image.src =
                "https://img1.baidu.com/it/u=1539021674,3840242491&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=246";
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
</style>
