<template>
    <div id="desk-calender">
        <div id="back" class="calender-panel"></div>
        <div id="font" class="calender-panel"></div>
        <div id="bottom" class="calender-panel"></div>
    </div>
</template>

<script>
export default {
    name: "JDeskCalendar"
};
</script>

<style lang="scss" scoped>
#desk-calender {
    height: 200px;
    .calender-panel {
        position: absolute;
        transform: rotateY(30deg);
    }
    #back {
        background-color: aqua;
        height: 150px;
        width: 250px;
        transform: rotateX(60deg);
    }
    #font {
        background-color: aquamarine;
        height: 150px;
        width: 250px;
        transform: rotateX(-60deg);
    }
    #bottom {
        background-color: cadetblue;
        height: 50px;
        width: 250px;
    }
}
</style>
