<template>
    <div id="desk-calender">
        <div id="back" class="calender-panel"></div>
        <div id="font" class="calender-panel"></div>
        <div id="bottom" class="calender-panel"></div>
    </div>
    <!-- <div class="contain">
        <div class="box">
            <div class="face one"></div>
            <div class="face two"></div>
            <div class="face three"></div>
            <div class="face four"></div>
            <div class="face five"></div>
            <div class="face six"></div>
        </div>
    </div> -->
</template>

<script>
export default {
    name: "JDeskCalendar"
};
</script>

<style lang="scss" scoped>
#desk-calender {
    height: 200px;
    position: relative;
    transform-style: preserve-3d;
    .calender-panel {
        transform: rotateY(30deg);
        position: absolute;
        bottom: 0;
    }
    #back {
        background-color: aqua;
        height: 150px;
        width: 250px;
        transform: rotateY(60deg) translateZ(80px);
    }
    #font {
        background-color: aquamarine;
        height: 150px;
        width: 250px;
        transform: rotateY(-60deg) translateZ(80px);
    }
    #bottom {
        background-color: cadetblue;
        height: 50px;
        width: 250px;
        transform: rotateX(80deg) rotateZ(30deg);
    }
}
@keyframes rotate {
    100% {
        transform: rotateY(360deg) rotateX(360deg);
    }
}
.contain {
    position: relative;
    perspective: 1600px;
    animation: rotate-frame 30s linear infinite;
}
.box {
    animation: rotate 20s ease 0s normal none infinite running;

    height: 240px;
    margin: 0 auto;
    position: relative;
    transform-style: preserve-3d;
    width: 240px;
}

.face {
    backface-visibility: hidden;
    background-color: #fae48c;
    height: 240px;
    opacity: 0.6;
    position: absolute;
    width: 240px;
}
.box .one {
    background-color: #fae48c;
    transform: rotateX(90deg) translateZ(120px);
}
.box .two {
    background-color: #9900cc;
    transform: translateZ(120px);
}
.box .three {
    transform: rotateY(90deg) translateZ(120px);
    background-color: yellow;
}
.box .four {
    transform: rotateY(180deg) translateZ(120px);
    background-color: green;
}
.box .five {
    transform: rotateY(-90deg) translateZ(120px);
    background-color: greenyellow;
}
.box .six {
    transform: rotateX(-90deg) translateZ(120px) rotate(180deg);
    background-color: black;
}
</style>
