<template>
    <div class="j-barrage-rain" id="j-barrage-rain">
        <div class="j-barrage-rain-panel" id="j-barrage-rain-panel"></div>
        <div class="j-barrage-rain-content" id="j-barrage-rain-content">
            <div @click="fallRain" style="text-align: center;" class="add">
                fall
            </div>
        </div>
        <div class="wave">
            <div class="water1 water"></div>
            <div class="water2 water"></div>
            <div class="water3 water"></div>
            <div class="water4 water"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "JBarrageRain",
    props: {
        barrageDate: {
            type: Array,
            default: () => {
                return [];
            }
        },
        full: {
            type: Boolean,
            default: true
        },
        time: {
            type: Number,
            default: 10
        },
        mask: {
            type: Boolean,
            default: false
        },
        repetition: {
            type: Boolean,
            default: true
        },
        startFrom: {
            type: String,
            default: "left"
        },
        showBtn: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            panel: "j-barrage-rain-panel",
            showBarrageDate: [
                {
                    color: "",
                    text: "测试一下1"
                },
                {
                    color: "",
                    text: "测试一下2"
                },
                {
                    color: "",
                    text: "测试一下3"
                },
                {
                    color: "",
                    text: "测试一下4"
                },
                {
                    color: "",
                    text: "测试一下5"
                },
                {
                    color: "",
                    text: "测试一下6"
                },
                {
                    color: "",
                    text: "测试一下7"
                },
                {
                    color: "",
                    text: "测试一下8"
                }
            ]
        };
    },
    mounted() {
        for (let i = 0; i < this.showBarrageDate.length; i++) {
            setTimeout(() => {
                this.fallRain(this.showBarrageDate[i]);
            }, i * 1000);
        }
    },
    methods: {
        getRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        },
        getColors() {
            const arr = "0123456789abcdef";
            let color = "#";
            let n = 6;
            while (n--) color += arr[this.getRandom(0, 15)];
            return color;
        },
        getPoint() {
            const content = document.getElementById(this.panel);
            const contentTop = content.offsetTop;
            const contentBottom = content.offsetTop + content.offsetHeight;
            const contentLeft = content.offsetLeft;
            const contentRight = content.offsetWidth + content.offsetLeft;
            const x = this.getRandom(contentLeft, contentRight);
            const y2 = this.getRandom(contentBottom - 300, contentBottom - 100);
            return { x, y: contentTop - 100, y2 };
        },
        generatWave(x, y, span) {
            const content = document.getElementById(this.panel);
            const wave = document.getElementsByClassName("wave")[0];
            const newWave = wave.cloneNode(true);
            newWave.style.position = "fixed";
            newWave.style.top = y + 10 + "px";
            newWave.style.left = x - 100 + "px";
            newWave.style.display = "unset";
            content.appendChild(newWave);
            this.generateMask(span);
            // span.classList.add("add-mask");
            span.style.animation = "mask 2s";
            newWave.style.animation = "opacityChange 15s";
            setTimeout(() => {
                content.removeChild(span);
                setTimeout(() => {
                    content.removeChild(newWave);
                }, 5 * 1000);
            }, 2 * 1000);
        },
        generateMask(span) {
            let mask = document.createElement("span");
            mask.classList.add("j-barrage-rain-mask");
        },
        generatBarrage(x, y, y2, data) {
            const content = document.getElementById(this.panel);
            const span = document.createElement("span");
            span.classList.add("barrage-rain-span");
            span.innerHTML = data.text;
            span.style.top = y + "px";
            span.style.left = x + "px";
            span.style.transition = `transform 5s ease-in`;
            span.style.color = data.color ? this.getColors() : data.color;
            content.appendChild(span);
            setTimeout(() => {
                span.style.transform = `translateY(${y2 - y}px)`;
                setTimeout(() => {
                    this.generatWave(x, y2, span);
                }, 4900);
            }, 100);
        },
        fallRain(data) {
            const { x, y1, y2 } = this.getPoint();
            this.generatBarrage(x, -100, y2, data);
        }
    }
};
</script>
<style>
@keyframes mask {
    0% {
        height: 8em;
        margin-top: 0px;
    }
    100% {
        height: 0px;
        margin-top: 100px;
    }
}
@keyframes opacityChange {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
.add-mask {
    animation: mask 3s;
}
.barrage-rain-span {
    position: fixed;
    transition: transform 10s ease-in;
    width: 0.99em;
    max-height: 8em;
    display: block;
    word-break: break-all;
    overflow: hidden;
    writing-mode: "vertical-lr";
}
</style>

<style lang="scss" scoped>
@keyframes wateranimate {
    0% {
        -webkit-transform: scale(0);
        transform: scale(0);
        opacity: 0.5;
    }
    100% {
        -webkit-transform: scale(2);
        transform: scale(2);
        opacity: 0;
    }
}
.j-barrage-rain {
    .j-barrage-rain-panel {
        pointer-events: none;
        height: 100vh;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
    }
}
.wave {
    position: relative;
    width: 200px;
    height: 200px;
    display: none;
    transform: rotateX(75deg);
}
.water1 {
    -webkit-animation: wateranimate 8s 6s ease-out infinite;
    animation: wateranimate 8s 6s ease-out infinite;
}
.water2 {
    -webkit-animation: wateranimate 8s 4s ease-out infinite;
    animation: wateranimate 8s 4s ease-out infinite;
}
.water3 {
    -webkit-animation: wateranimate 8s 2s ease-out infinite;
    animation: wateranimate 8s 2s ease-out infinite;
}
.water4 {
    -webkit-animation: wateranimate 8s 0s ease-out infinite;
    animation: wateranimate 8s 0s ease-out infinite;
}
.water {
    padding: 20%;
    position: absolute;
    left: 30%;
    top: 30%;
    border: 1px solid rgb(44, 190, 248);
    box-shadow: 0 0 120px 30px rgb(64, 140, 228) inset;
    border-radius: 100%;
    z-index: 2;
    opacity: 0;
}
</style>
