<template>
    <div>
        <input type="file" accept="image/*" @change="handleFileUpload" />
        <div>
            <label>宽度：</label>
            <input
                type="number"
                v-model="width"
                @input="resizeImage($event, 'width')"
            />
            <label>高度：</label>
            <input
                type="number"
                v-model="height"
                @input="resizeImage($event, 'height')"
            />
            <label>按比例缩放：</label>
            <input type="checkbox" v-model="aspectRatio" />
        </div>
        <div>
            <label>旋转角度：</label>
            <input type="number" v-model="rotation" @input="rotateImage" />
        </div>
        <canvas
            ref="canvas"
            id="example-canvas"
            :width="width"
            :height="height"
            @click="canvasClick"
            @keydown.ctrl.z="undoPoint"
            tabindex="0"
        ></canvas>
        <button @click="clearPoints">清除</button>
    </div>
</template>

<script>
export default {
    name: "CutImg",
    data() {
        return {
            image: null,
            width: null,
            height: null,
            aspectRatio: true, // 默认不按比例缩放
            rotation: 0, // 默认不旋转
            ctx: null, // canvas 上下文对象
            points: [], // 存储点击位置的坐标
        };
    },
    mounted() {
        this.ctx = this.$refs.canvas.getContext("2d");
    },
    methods: {
        handleFileUpload(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const img = new Image();
                    img.onload = () => {
                        this.image = img;
                        this.width = img.width;
                        this.height = img.height;
                        this.drawCanvas();
                    };
                    img.src = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        },
        resizeImage(event, dimension) {
            if (!this.image) {
                return;
            }
            if (dimension === "width") {
                this.width = event.target.value
                    ? parseInt(event.target.value)
                    : null;
                if (this.aspectRatio && this.width) {
                    this.height = Math.round(
                        (this.width / this.image.width) * this.image.height
                    );
                }
            } else if (dimension === "height") {
                this.height = event.target.value
                    ? parseInt(event.target.value)
                    : null;
                if (this.aspectRatio && this.height) {
                    this.width = Math.round(
                        (this.height / this.image.height) * this.image.width
                    );
                }
            }
            if (
                this.aspectRatio &&
                (!event || event.target !== document.activeElement)
            ) {
                const aspectRatio = this.image.width / this.image.height;
                if (this.width && !this.height) {
                    this.height = Math.round(this.width / aspectRatio);
                } else if (!this.width && this.height) {
                    this.width = Math.round(this.height * aspectRatio);
                } else if (this.width / aspectRatio < this.height) {
                    this.width = Math.round(this.height * aspectRatio);
                } else {
                    this.height = Math.round(this.width / aspectRatio);
                }
            }
            this.$refs.canvas.width = this.width ? this.width : null;
            this.$refs.canvas.height = this.height ? this.height : null;
            this.drawCanvas();
        },
        drawCanvas() {
            setTimeout(() => {
                if (!this.image || !this.ctx) {
                    return;
                }
                this.ctx.clearRect(0, 0, this.width, this.height);
                this.ctx.save();
                this.ctx.translate(this.width / 2, this.height / 2);
                this.ctx.rotate((this.rotation * Math.PI) / 180);
                this.ctx.drawImage(
                    this.image,
                    -this.width / 2,
                    -this.height / 2,
                    this.width,
                    this.height
                );
                this.ctx.restore();
                this.points.forEach((point) => {
                    this.drawPoint(point.x, point.y);
                });
                this.connectPoints(); // 每次绘制canvas后连接所有点
            }, 100);
        },
        canvasClick(event) {
            const x = event.offsetX;
            const y = event.offsetY;
            this.points.push({ x, y }); // 将坐标添加到数组中
            this.drawPoint(x, y);
        },
        drawPoint(x, y) {
            // 绘制一个小圆点
            this.ctx.beginPath();
            this.ctx.arc(x, y, 5, 0, 2 * Math.PI);
            this.ctx.fillStyle = "red";
            this.ctx.fill();
            this.ctx.closePath();
            this.connectPoints(); // 每次点击后连接所有点
        },
        undoPoint() {
            if (this.points.length > 0) {
                this.points.pop();
                this.drawCanvas();
            }
        },
        clearPoints() {
            this.points = [];
            this.drawCanvas();
        },
        connectPoints() {
            if (this.points.length <= 1) {
                return;
            }

            this.ctx.beginPath();
            this.ctx.moveTo(this.points[0].x, this.points[0].y);
            for (let i = 1; i < this.points.length; i++) {
                this.ctx.lineTo(this.points[i].x, this.points[i].y);
            }
            this.ctx.strokeStyle = "blue";
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
            this.ctx.closePath();
        },
        rotateImage() {
            this.drawCanvas();
        },
    },
};
</script>

<style>
canvas {
    border: 1px solid #ccc;
}
</style>
