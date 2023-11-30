<template>
    <transition name="fade">
        <div v-show="visible || showLoading">
            <div class="j-toast-body">
                <div class="j-toast-content">
                    <span v-show="showLoading" class="j-toast-loading"></span>
                    <span class="j-toast-message">{{ message }}</span>
                </div>
            </div>
            <div class="j-toast-mask"></div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "JToast",
    data() {
        return {
            visible: false,
            showLoading: false,
            message: "",
        };
    },
};
</script>

<style scoped>
.j-toast-body {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
}
.j-toast-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 9998;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}
.j-toast-content {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #fff;
    background-color: rgba(63, 59, 59, 0.6);
    padding: 10px 20px;
    border-radius: 4px;
}
.j-toast-loading {
    display: inline-block;
    width: 14px;
    height: 14px;
    border: 2px solid #fff;
    border-right-color: transparent;
    border-radius: 50%;
    animation: j-toast-rotate 0.8s linear infinite;
    margin-right: 10px;
}
.j-toast-message {
    flex: 1;
    text-align: center;
}
/* 进场动画 */
.fade-enter-active {
    transition: opacity 0.3s ease-in-out;
}
.fade-enter {
    opacity: 0;
}
/* 离场动画 */
.fade-leave-active {
    transition: opacity 0.3s ease-in-out;
}
.fade-leave-to {
    opacity: 0;
}
@keyframes j-toast-rotate {
    to {
        transform: rotate(360deg);
    }
}
</style>
