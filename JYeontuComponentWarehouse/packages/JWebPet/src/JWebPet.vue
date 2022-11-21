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
                id="pikachuAudio"
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
            default: "奇犽",
        },
        step: {
            type: Number,
            default: 20,
        },
        petSize: {
            type: String,
            default: "50px",
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
            firstActionName: "",
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
        },
        init() {
            this.nowAction =
                this.actionList.find((item) => {
                    return item.name == this.firstActionName;
                }) || {};
            this.showImg = document.getElementById("showImg");
            this.showImg.style.width = this.petSize;
            this.showImg.style.height = this.petSize;
            this.mouseEventListen();
        },
        autoRunToTarget(action = this.nowAction) {
            this.followTimeSet && clearTimeout(this.isRunToTarget);
            if (action.name == "followMouse") {
                this.isFollowMouse = !this.isFollowMouse;
                this.nowAction = this.isFollowMouse ? action : {};
            } else if (action.isMove) {
                const x = getRandomNum(0, window.innerWidth);
                const y = getRandomNum(0, window.innerHeight);
                this.runToTarget(action, action.min, x, y, this.step, () => {
                    this.autoRunToTarget(action);
                });
            } else {
                this.playImg(action);
            }
        },
        clickPet() {
            this.canDrag = true;
            clearTimeout(this.isRunToTarget);
        },
        menuClick(menuItem) {
            this.showImg.style.transform = "";
            if (this.nowAction.name == menuItem) {
                this.nowAction = {};
                this.showImg.setAttribute("src", this.imgSrc);
                return;
            }
            const action = this.actionList.find((item) => {
                return item.name == menuItem;
            });
            this.nowAction = action;
            this.nowInd = action.min;
            this.pikachuAudioPlay(true);
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
        runToTarget(action, ind, x, y, step = this.step, cb = null) {
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
            const disX = Math.abs(this.showImg.offsetLeft + w - x);
            const disY = Math.abs(this.showImg.offsetTop + h - y);
            if (disX > w || disY > h) {
                clearTimeout(this.isRunToTarget);
                this.isRunToTarget = setTimeout(() => {
                    this.runToTarget(action, ind + 1, x, y, step, cb);
                }, 500);
            } else {
                clearTimeout(this.isRunToTarget);
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
        mouseEventListen() {
            window.addEventListener("mousemove", (e) => {
                if (!this.isFollowMouse) return;
                this.isFollowMouse = false;
                const action = this.nowAction;
                this.followTimeSet && clearTimeout(this.followTimeSet);
                this.followTimeSet = setTimeout(() => {
                    this.isFollowMouse = true;
                }, 500);
                this.runToTarget(
                    action,
                    action.min,
                    e.pageX - window.scrollX,
                    e.pageY - window.scrollY,
                    this.step,
                    () => {
                        this.runToTarget(
                            action,
                            action.min,
                            e.pageX - window.scrollX,
                            e.pageY - window.scrollY,
                            this.step
                        );
                    }
                );
            });
            window.addEventListener("mouseover", (e) => {
                if (!this.canDrag) return;
                const w = this.showImg.offsetWidth / 2;
                const h = this.showImg.offsetHeight / 2;
                this.showImg.style.left = e.pageX - window.scrollX - w + "px";
                this.showImg.style.top = e.pageY - window.scrollY - h + "px";
            });
            window.addEventListener("mousedown", (e) => {
                this.startClickX = e.pageX - window.scrollX;
                this.startClickY = e.pageY - window.scrollY;
            });
            window.addEventListener("mouseup", (e) => {
                const endClickX = e.pageX - window.scrollX;
                const endClickY = e.pageY - window.scrollY;
                const { target } = e;
                const action = this.nowAction;
                if (
                    target == this.showImg &&
                    (Math.abs(this.startClickX - endClickX) < 10 ||
                        Math.abs(this.startClickY - endClickY) < 10)
                ) {
                    this.showMenu();
                } else {
                    this.menuShow = false;
                    if (![...target.classList].includes("active-item")) {
                        this.runToTarget(
                            this.nowAction,
                            -1,
                            e.pageX - window.scrollX,
                            e.pageY - window.scrollY,
                            this.step,
                            () => {
                                this.autoRunToTarget(action);
                            }
                        );
                    }
                }
                this.canDrag = false;
            });
        },
        pikachuAudioPlay(playNow = false) {
            const pikachuAudio = document.getElementById("pikachuAudio");
            if (
                !playNow &&
                (!pikachuAudio.paused ||
                    Math.floor(Math.random() * 100) % 10 != 0)
            )
                return;
            if (!this.nowAction.audio) return;
            pikachuAudio.setAttribute(
                "src",
                require("@/assets/audio/" + this.nowAction.audio)
            );
            try {
                pikachuAudio.play();
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
.j-pet-mask {
    position: fixed;
    user-select: none;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
}
.pet-img {
    position: fixed;
    right: 50px;
    top: 50%;
    z-index: 2147483647;
    width: 50px;
    height: 50px;
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
