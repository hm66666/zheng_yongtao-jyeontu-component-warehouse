<template>
    <div class="j-barrage-rain" id="j-barrage-rain">
        <div class="j-barrage-rain-sky" id="j-barrage-rain-sky"></div>
        <div class="j-barrage-rain-content" id="j-barrage-rain-content">
            <div @click="fallRain" style="text-align: center;" class="add">
                fall
            </div>
        </div>
        <div class="j-barrage-rain-floor" id="j-barrage-rain-floor">
            <div class="wave">
                <div class="water1 water"></div>
                <div class="water2 water"></div>
                <div class="water3 water"></div>
                <div class="water4 water"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "JBarrageRain",
    data() {
        return {};
    },
    mounted() {
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                this.fallRain();
            }, i * 1000);
        }
    },
    methods: {
        getRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        },
        getPoint() {
            const sky = document.getElementById("j-barrage-rain-sky");
            const floor = document.getElementById("j-barrage-rain-floor");
            const skyTop = sky.offsetTop;
            const skyBottom = sky.offsetTop + sky.offsetHeight;
            const skyLeft = sky.offsetLeft;
            const skyRight = sky.offsetWidth + sky.offsetLeft;
            const floorTop = floor.offsetTop - 100;
            const floorBottom = floor.offsetTop + floor.offsetHeight - 100;
            const x = this.getRandom(skyLeft, skyRight);
            const y1 = this.getRandom(skyTop, skyBottom);
            const y2 = this.getRandom(floorTop, floorBottom);
            return { x, y1, y2 };
        },
        generatWave(x, y, span) {
            const content = document.getElementById("j-barrage-rain");
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
        generatBarrage(x, y, y2) {
            const content = document.getElementById("j-barrage-rain");
            const span = document.createElement("span");
            span.classList.add("barrage-rain-span");
            span.innerHTML = "ssss测试";
            span.style.top = y + "px";
            span.style.left = x + "px";
            span.style.transition = `transform 5s ease-in`;
            content.appendChild(span);
            setTimeout(() => {
                span.style.transform = `translateY(${y2 - y}px)`;
                setTimeout(() => {
                    this.generatWave(x, y2, span);
                }, 4900);
            }, 100);
        },
        fallRain() {
            const { x, y1, y2 } = this.getPoint();
            this.generatBarrage(x, -100, y2);
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
    color: blue;
    position: fixed;
    transition: transform 10s ease-in;
    width: 0.99em;
    height: 8em;
    display: block;
    word-break: break-all;
    overflow: hidden;
    height: 8em;
    /* transform: translateY(100px); */
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
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    .j-barrage-rain-sky {
        height: 10%;
        // border: 1px solid gray;
    }
    .j-barrage-rain-content {
        height: 55%;
        // border: 1px solid gray;
    }
    .j-barrage-rain-floor {
        height: 35%;
        // border: 1px solid gray;
    }
}
.wave {
    position: relative;
    width: 200px;
    height: 200px;
    display: none;
    // margin: 10px auto;
    // transform: skew(60deg, 10deg);
    // transform: rotate3d(1, 1, 1, 263deg);
    // border: 1px solid yellow;
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
