<template>
    <div id="app">
        <div class="top-content" id="top-content">
            <top></top>
        </div>
        <div style="display: flex">
            <el-drawer
                class="drawer-left-content"
                title="菜单"
                :visible.sync="drawer"
                :direction="direction"
                :before-close="handleClose"
            >
                <left class="drawer-left-content"></left>
            </el-drawer>
            <div class="left-content" id="left-content">
                <left></left>
            </div>
            <i
                class="menuBtn el-icon-menu drawer-left-content"
                @click="drawer = !drawer"
                type="primary"
                style="margin-left: 10px"
            >
            </i>
            <div class="router-viewContent" id="routerViewContent">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import left from "./components/menu/left";
import top from "./components/menu/top";

export default {
    name: "app",
    components: {
        top,
        left,
    },
    data() {
        return {
            drawer: false,
            direction: "ltr",
        };
    },
    methods: {
        handleClose(done) {
            done();
        },
        reSizeWidth() {
            let a = document.getElementById("leftMenu");
            let aWidth = a.offsetWidth;
            let b = document.getElementById("topMenu");
            let bWidth = b.offsetWidth;
            let bHeight = b.offsetHeight;
            let c = document.getElementById("routerViewContent");
            c.style.width = bWidth - aWidth + "px";
            c.style.marginTop = parseInt(bHeight) + "px";
            c.style.marginLeft = parseInt(aWidth) + "px";
            c.style.padding = "2rem";
            a.style.paddingTop = parseInt(bHeight) + "px";
        },
    },
    mounted() {
        const leftMenu = document.getElementById("leftMenu");
        const resizeObserver = new ResizeObserver((entries) => {
            this.reSizeWidth();
        });
        // 开始观察
        resizeObserver.observe(leftMenu);
    },
};
</script>

<style lang="less">
code {
    overflow: scroll !important;
}
body {
    overflow-x: hidden;
}
.router-viewContent {
    //height: calc(100vh - 60px);
    //width: 100%;
    overflow-x: hidden;
}
.drawer-left-content {
    display: none;
}
.top-content {
    position: fixed;
    z-index: 100000;
}
.left-content {
    display: block;
    position: fixed;
}

@media screen and (max-width: 1000px) {
    .drawer-left-content {
        display: block;
    }
    .left-content {
        display: none;
        position: fixed;
    }
    #leftMenu {
        font-size: small !important;
        // padding: 1rem !important;
    }
    #routerViewContent {
        font-size: small !important;
        margin-left: 0px;
    }
    .menuBtn {
        position: fixed;
        top: 1rem;
        display: inline-block !important;
        z-index: 999999;
        color: #fff;
    }
}
body {
    margin: 0 0;
}

.el-drawer {
    width: auto !important;
}

.el-drawer__header {
    padding: 10px 20px 0 !important;
    padding-bottom: 25px !important;
    margin-bottom: 0 !important;
    background-color: #374151;
}

#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
    width: 100vw;
    min-height: 100vh;
}

.menuBtn {
    position: fixed;
    top: 1rem;
    // display: none !important;
}
</style>
