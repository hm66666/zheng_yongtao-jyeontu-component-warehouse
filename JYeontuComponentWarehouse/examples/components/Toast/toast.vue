<template>
    <transition name="fade">
        <div v-show="visible">{{ message }}</div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            visible: false,
            message: ""
        };
    }
};
</script>

<style scoped>
div {
    padding: 5px 20px;
    color: rgb(21, 133, 161);
    background-color: #7f8285;
    text-align: center;
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
}
/* vue动画过渡效果设置 */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
