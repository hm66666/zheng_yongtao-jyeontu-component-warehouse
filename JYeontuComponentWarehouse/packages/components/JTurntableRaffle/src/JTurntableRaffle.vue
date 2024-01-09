<template>
    <div :id="'JTurntableRaffle-' + uid" class="turntable">
        <div class="canvas-content">
            <canvas
                :id="'canvas-' + uid"
                :ref="'canvas-' + uid"
                :width="width"
                :height="height"
            ></canvas>
            <img class="arrow" src="../../../assets/img/arrow.png"></img>
        </div>
        <button @click="startRotation">开始抽奖</button>
    </div>
</template>

<script>
import { getUId } from "../../../utils/strTool";
import { getRandomNum } from "../../../utils/numsFormat";
export default {
    name: "JTurntableRaffle",
    props: {
        width: {
            type: String,
            default: "100%",
        },
        height: {
            type: String,
            default: "100%",
        },
    },
    data() {
        return {
            uid: "",
            prizes: [
                "奖品1",
                "奖品2",
                "奖品3",
                "奖品4",
                "奖品5",
                "奖品6",
                "奖品7",
                "奖品8",
                "奖品9",
                "奖品10",
                // "奖品11",
                // "奖品12",
            ],
            rotationAngle: 0,
            spinning: false,
            lastAngle: 0,
            colors: [],
        };
    },
    created() {
        this.setUid();
    },
    mounted() {
        this.drawTurntable();
    },
    methods: {
        setUid() {
            this.uid = getUId();
            this.colors = this.generateColorScheme();
        },
        generateColorScheme() {
            const colors = [];
            for (let i = 0; i < 20; i++) {
                const hue = (i * 18) % 360;
                const saturation = Math.floor(Math.random() * 51) + 50; // 50-100
                const lightness = Math.floor(Math.random() * 21) + 40; // 40-60
                const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
                colors.push(color);
            }
            return colors;
        },
        drawTurntable() {
            const canvas = this.$refs["canvas-" + this.uid];
            const ctx = canvas.getContext("2d");
            const centerX = parseInt(canvas.width) / 2;
            const centerY = parseInt(canvas.height) / 2;
            const radius = Math.min(centerX, centerY) - 20;

            // 绘制转盘外圆
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
            ctx.fillStyle = "#ff0000";
            ctx.fill();
            // 绘制扇区
            const anglePerSlice = (2 * Math.PI) / this.prizes.length;
            for (let i = 0; i < this.prizes.length; i++) {
                ctx.save();
                ctx.translate(centerX, centerY);
                ctx.rotate(i * anglePerSlice); // 旋转画布
                console.log(180 / Math.PI * i * anglePerSlice);
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.arc(0, 0, radius, 0, anglePerSlice);
                ctx.closePath();
                // ctx.fillStyle = i % 2 === 0 ? "#ffffff" : "#cccccc";
                ctx.fillStyle = this.colors[i];
                ctx.fill();

                // 绘制奖品文本
                ctx.textAlign = "center";
                ctx.fillStyle = "#000000";
                ctx.font = "16px Arial";
                const textWidth = ctx.measureText(this.prizes[i]).width;
                const textHeight = ctx.measureText(
                    this.prizes[i]
                ).hangingBaseline;
                ctx.fillText(
                    this.prizes[i],
                    (radius - textWidth) / 2,
                    textHeight + 10
                );
                ctx.restore(); // 恢复画布状态
            }
        },
        startRotation() {
            const canvas = this.$refs["canvas-" + this.uid];
            canvas.style = `transition: none;`;
            canvas.style = `transform: rotateZ(${
                this.lastAngle % 360
            }deg);transition: none;`;
            setTimeout(() => {
                this.lastAngle = getRandomNum(5 * 360, 10 * 360);
                canvas.style = `transform: rotateZ(${this.lastAngle}deg);transition: transform 5s ease-out;`;
                setTimeout(()=>{
                    const index = Math.ceil((this.lastAngle % 360) / (360 / this.prizes.length));
                    this.$JToast(`恭喜抽中${this.prizes[index]}`);
                },5100);
            }, 100);
        },
        getPrize(targetAngle) {
            const anglePerSlice = (2 * Math.PI) / this.prizes.length;
            const index = Math.floor(targetAngle / anglePerSlice);
            return this.prizes[index];
        },
    },
};
</script>

<style lang="less" scoped>
.turntable {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    .canvas-content{
        position: relative;
        canvas {
            pointer-events: none;
        }
        .arrow{
            width: 40px;
            height: 40px;
            transform: scale(-1);
            position: absolute;
            top: calc(50% - 30px);
            left: calc(50% - 20px);
        }
    }
}

</style>
