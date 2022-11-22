<template>
    <div :id="uid" class="j-pet-mask">
        <div class="pet-content">
            <img
                class="pet-img"
                id="showImg"
                :src="imgSrc"
                alt=""
                @mousedown.prevent="clickPet"
                @dragstart.prevent
                @select.prevent
            />
            <span id="petMenu" class="pet-menu" v-show="menuShow">
                <div
                    :class="{
                        'pet-menu-item': true,
                        'active-item': nowAction.name == menuItem,
                    }"
                    v-for="(menuItem, menuIndex) in menuList"
                    :key="'menu-' + menuIndex"
                    @click="menuClick(menuItem)"
                >
                    {{ menuItem }}
                </div>
            </span>
            <audio
                id="webPetAudio"
                class="pikachu-audio"
                controls="controls"
                height="100"
                width="100"
            >
                <source src="@/assets/audio/Pikachu.mp3" type="audio/mp3" />
            </audio>
        </div>
    </div>
</template>

<script>
import config from "./config.json";
import { getUId } from "../../utils/strTool";
import { getRandomNum } from "../../utils/numsFormat";
export default {
    name: "JWebPet",
    props: {
        name: {
            type: String,
            default: "皮卡丘",
        },
        step: {
            type: Number,
            default: 20,
        },
        petSize: {
            type: String,
            default: "50px",
        },
        defaultAction: {
            type: String,
            default: "",
        },
    },
    watch: {
        name() {
            this.initData();
            this.init();
        },
        petSize() {
            this.showImg.style.width = this.petSize;
            this.showImg.style.height = this.petSize;
        },
    },
    data() {
        return {
            webPetConfig: {},
            uid: "",
            imgSrc: "",
            canDrag: false,
            nowAction: {},
            actionList: [],
            imgRootPath: "",
            menuShow: false,
            isRunToTarget: null,
        };
    },
    methods: {
        initData() {
            this.webPetConfig = config[this.name];
            this.actionList = this.webPetConfig.actionList;
            this.imgRootPath = this.webPetConfig.imgRootPath;
            this.imgSrc = require("@/assets/img/" +
                this.webPetConfig.defaultImg);
            this.uid = "j-web-pet-" + getUId();
            const list =
                this.actionList.map((item) => {
                    return item.name;
                }) || [];
            this.menuList = list;
            clearTimeout(this.isRunToTarget);
            this.isRunToTarget = null;
            this.menuShow = false;
        },
        init() {
            this.nowAction =
                this.actionList.find((item) => {
                    return item.name == this.defaultAction;
                }) || {};
            this.showImg = document.getElementById("showImg");
            this.showImg.style.width = this.petSize;
            this.showImg.style.height = this.petSize;
            this.showImg.style.right = this.petSize;
            this.showImg.style.top = "50%";
            this.showImg.style.transform = "";
            this.mouseEventListen();
            this.autoRunToTarget();
        },
        autoRunToTarget(action = this.nowAction, x = "", y = "") {
            if (action.isMove) {
                if (!x) x = getRandomNum(0, window.innerWidth);
                if (!y) y = getRandomNum(0, window.innerHeight);
                this.runToTarget(action, action.min, x, y, () => {
                    this.autoRunToTarget(action);
                });
            } else {
                this.playImg(action);
            }
        },
        clickPet(e) {
            this.canDrag = true;
            clearTimeout(this.isRunToTarget);
            this.startClickX = e.pageX - window.scrollX;
            this.startClickY = e.pageY - window.scrollY;
            window.addEventListener("mouseover", this.mouseoverHandler, false);
            window.addEventListener("mouseup", this.mouseupHandler, false);
        },
        menuClick(menuItem) {
            this.showImg.style.transform = "";
            if (this.nowAction.name == menuItem) {
                this.nowAction = {};
                this.showImg.setAttribute("src", this.imgSrc);
                this.menuShow = false;
                return;
            }
            const action = this.actionList.find((item) => {
                return item.name == menuItem;
            });
            this.nowAction = action;
            this.nowInd = action.min;
            this.webPetAudioPlay(true);
            this.autoRunToTarget();
            this.menuShow = false;
        },
        showMenu() {
            const w = this.showImg.offsetWidth;
            const h = this.showImg.offsetHeight;
            const left = this.showImg.offsetLeft;
            const top = this.showImg.offsetTop;
            const innerWidth = window.innerWidth;
            const innerHeight = window.innerHeight;
            const inLeft = left < innerWidth / 2;
            const inTop = top < innerHeight / 2;
            const petMenu = document.getElementById("petMenu");
            petMenu.style.top = "";
            petMenu.style.bottom = "";
            petMenu.style.left = "";
            petMenu.style.right = "";
            if (inTop) petMenu.style.top = this.showImg.offsetTop + "px";
            else
                petMenu.style.bottom =
                    innerHeight - this.showImg.offsetTop - h + "px";
            if (inLeft) petMenu.style.left = this.showImg.offsetLeft + w + "px";
            else
                petMenu.style.right =
                    window.innerWidth - this.showImg.offsetLeft + "px";
            this.menuShow = this.canDrag && !this.menuShow;
        },
        runToTarget(action, ind, x, y, cb = null) {
            const step = this.step;
            if (!action || JSON.stringify(action) == "{}") return;
            if (!action.isMove) return;
            this.nowAction = action;
            let min = action.min,
                max = action.max;
            if (!ind || ind < min || ind > max) {
                ind = min;
            }
            const w = this.showImg.offsetWidth / 2;
            const h = this.showImg.offsetHeight / 2;
            const ny = this.showImg.offsetTop + h;
            const nx = this.showImg.offsetLeft + w;
            const nowY = this.showImg.offsetTop;
            const nowX = this.showImg.offsetLeft;
            let deg = (Math.atan((y - ny) / (x - nx)) * 180) / Math.PI;
            const sin = Math.sin((deg * Math.PI) / 180);
            const cos = Math.cos((deg * Math.PI) / 180);
            let addX = Math.abs(step * cos);
            let addY = Math.abs(step * sin);
            this.showImg &&
                this.showImg.setAttribute(
                    "src",
                    require("@/assets/img/" + this.imgRootPath + ind + ".png")
                );
            if (x > nx) {
                this.showImg.style.transform = `rotate(${deg}deg) rotateY(180deg)`;
            } else {
                this.showImg.style.transform = `rotate(${deg}deg)`;
            }
            if (x < nowX) addX = -addX;
            if (y < nowY) addY = -addY;
            this.showImg.style.left = nowX + addX + "px";
            this.showImg.style.top = nowY + addY + "px";
            this.showImg.style.right = "";
            this.showImg.style.bottom = "";
            const disX = Math.abs(this.showImg.offsetLeft + w - x);
            const disY = Math.abs(this.showImg.offsetTop + h - y);
            clearTimeout(this.isRunToTarget);
            if (disX > w || disY > h) {
                this.isRunToTarget = setTimeout(() => {
                    this.runToTarget(action, ind + 1, x, y, cb);
                }, 500);
            } else {
                this.isRunToTarget = null;
                cb && cb();
            }
        },
        playImg(action, ind) {
            if (!action || JSON.stringify(action) == "{}") return;
            let min = action.min,
                max = action.max;
            if (!ind || ind < min || ind > max) {
                ind = min;
            }
            this.showImg &&
                this.showImg.setAttribute(
                    "src",
                    require("@/assets/img/" + this.imgRootPath + ind + ".png")
                );
            clearTimeout(this.isRunToTarget);
            this.isRunToTarget = setTimeout(() => {
                this.playImg(action, ind + 1);
            }, 500);
        },
        mouseoverHandler(e) {
            if (!this.canDrag) return;
            const w = this.showImg.offsetWidth / 2;
            const h = this.showImg.offsetHeight / 2;
            this.showImg.style.left = e.pageX - window.scrollX - w + "px";
            this.showImg.style.top = e.pageY - window.scrollY - h + "px";
            this.showImg.style.right = "";
            this.showImg.style.bottom = "";
        },
        mouseupHandler(e) {
            const endClickX = e.pageX - window.scrollX;
            const endClickY = e.pageY - window.scrollY;
            const { target } = e;
            if (
                target == this.showImg &&
                (Math.abs(this.startClickX - endClickX) < 10 ||
                    Math.abs(this.startClickY - endClickY) < 10)
            ) {
                this.showMenu();
            } else {
                this.menuShow = false;
                this.autoRunToTarget();
            }
            this.canDrag = false;
            window.removeEventListener(
                "mouseover",
                this.mouseoverHandler,
                false
            );
            window.removeEventListener("mouseup", this.mouseupHandler, false);
        },
        clickHandler(e) {
            const { target } = e;
            const isMove =
                ![...target.classList].includes("pet-menu-item") &&
                target != this.showImg;
            if (isMove) {
                this.menuShow = false;
                this.autoRunToTarget(
                    this.nowAction,
                    e.pageX - window.scrollX,
                    e.pageY - window.scrollY
                );
            }
        },
        mouseEventListen() {
            window.addEventListener("click", this.clickHandler, false);
        },
        webPetAudioPlay(playNow = false) {
            const webPetAudio = document.getElementById("webPetAudio");
            if (
                !playNow &&
                (!webPetAudio.paused ||
                    Math.floor(Math.random() * 100) % 10 != 0)
            )
                return;
            if (!this.nowAction.audio) return;
            webPetAudio.setAttribute(
                "src",
                require("@/assets/audio/" + this.nowAction.audio)
            );
            try {
                webPetAudio.play();
            } catch (e) {}
        },
    },
    created() {
        this.initData();
    },
    mounted() {
        this.init();
    },
};
</script>

<style lang="less" scoped>
.pet-img {
    position: fixed;
    z-index: 2147483647;
}
.pet-menu {
    position: fixed;
    width: 6em;
    z-index: 2147483647;
    background-color: #f4e486;
    border: 1px solid #f8d406;
    border-radius: 10%;
}
.pet-menu-item {
    border-bottom: #000 solid 1px;
    line-height: 1.5;
    cursor: pointer;
}
.pet-menu-item:last-child {
    border: none;
}
.active-item {
    background-color: #c9ac09;
}
.pet-menu-item:hover {
    background-color: #c9ac09;
}
.pikachu-audio {
    display: none;
}
</style>
