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
import {COLORS} from "../../../utils/constant";
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
        prizes:{
            type:Array,
            default:()=>[],
        },
        roundTime:{
            type:String|Number,
            default:5
        }
    },
    data() {
        return {
            uid: "",
            rotationAngle: 0,
            spinning: false,
            lastAngle: 0,
            colors: [],
            proportionNum:0,
        };
    },
    created() {
        this.setUid();
        this.initData();
    },
    mounted() {
        this.drawTurntable();
    },
    methods: {
        initData(){
            let proportionNum = 0;
            this.prizes.forEach(prize=>{
                proportionNum += prize.proportion || 1;
            });
            this.proportionNum = proportionNum;
            this.colors = this.generateColorScheme();
        },
        setUid() {
            this.uid = getUId();
        },
        shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
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
            const anglePerSlice = (2 * Math.PI) / this.proportionNum;
            let start = 0;
            for (let i = 0; i < this.prizes.length; i++) {
                const prize = this.prizes[i];
                ctx.save();
                ctx.translate(centerX, centerY);
                ctx.rotate(start * anglePerSlice - ((2 * Math.PI) / 4)); // 旋转画布
                ctx.beginPath();
                ctx.moveTo(0, 0);
                start += (prize.proportion || 1);
                ctx.arc(0, 0, radius,0, anglePerSlice * (prize.proportion || 1));
                ctx.fillStyle = prize.color || this.colors[i];
                ctx.fill();

                // 绘制奖品文本
                ctx.textAlign = "center";
                ctx.fillStyle = "#000000";
                ctx.font = "16px Arial";
                ctx.textBaseline = "middle"; // 文字的基准线设置为垂直居中
                const textWidth = ctx.measureText(prize.name).width;
                const textHeight = ctx.measureText(
                    prize.name
                ).hangingBaseline;
                const x = (radius * Math.cos(anglePerSlice* (prize.proportion || 1) / 2)) - (textWidth / 2);
                const y = (radius * Math.sin(anglePerSlice* (prize.proportion || 1) / 2)) - (textHeight / 2);
                ctx.fillText(
                    prize.name,
                    (radius - textWidth) / 2,
                    textHeight + 5
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
                let roundAngle = getRandomNum(7 * 360,8 * 360)
                this.lastAngle = roundAngle;
                canvas.style = `transform: rotateZ(${this.lastAngle}deg);transition: transform ${this.roundTime}s ease-out;`;
                setTimeout(()=>{
                    this.$emit('getPrize',this.getPrize());
                },this.roundTime * 1000);
            }, 100);
        },
        getPrize() {
            const signAngle = 360 / this.proportionNum;
            let index = Math.ceil(((this.lastAngle) % 360) / signAngle);
            const tmp = [...this.prizes].reverse();
            for(const prize of tmp){
                index -= (prize.proportion || 1);
                if(index <= 0) return prize;
            }
            return this.prizes[0];
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
