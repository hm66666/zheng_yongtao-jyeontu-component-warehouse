<template>
    <div class="j-barrage-rain">
        <div class="j-barrage-rain-sky">顶部</div>
        <div class="j-barrage-rain-content">中间</div>
        <div class="j-barrage-rain-floor">
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
    methods: {
        getRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    }
};
</script>

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
    .j-barrage-rain-sky {
        height: 10%;
        border: 1px solid gray;
    }
    .j-barrage-rain-content {
        height: 55%;
        border: 1px solid gray;
    }
    .j-barrage-rain-floor {
        height: 35%;
        border: 1px solid gray;
    }
}
.wave {
    position: relative;
    width: 200px;
    height: 200px;
    margin: 10px auto;
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
    z-index: 1;
    opacity: 0;
}
</style>
