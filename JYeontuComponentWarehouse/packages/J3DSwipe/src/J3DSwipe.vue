<template>
    <div
        :id="uid + '-j-3d-swipe'"
        class="j-3d-swipe"
        :style="{
            '--maxWidth': maxWidth,
        }"
    >
        <div id="carousel">
            <figure :id="uid + '-spinner'" class="spinner">
                <img
                    alt=""
                    v-for="(item, index) in imgList"
                    :key="'img-' + index"
                    :src="item"
                    :class="uid + '-img img'"
                    @mouseenter="mouseenter"
                    @mouseleave="mouseleave"
                />
            </figure>
        </div>
    </div>
</template>

<script>
import { getUId } from "../../utils/strTool";
export default {
    name: "J3DSwipe",
    props: {
        maxWidth: {
            type: String,
            default: "150px",
        },
        hoverPause: {
            type: Boolean,
            default: true,
        },
        blurPause: {
            type: Boolean,
            default: true,
        },
        speed: {
            type: String,
            default: "1500",
        },
        multiple: {
            type: String,
            default: "1.4",
        },
        autoPlay: {
            type: Boolean,
            default: true,
        },
        imgList: {
            type: Array,
            default: () => {
                return [];
            },
        },
    },
    data() {
        return {
            uid: "",
            angle: 0,
            isActive: true,
            mouseHover: false,
        };
    },
    mounted() {
        this.initView();
        if (this.autoPlay) {
            setInterval(() => {
                this.galleryspin();
            }, this.speed);
        }
    },
    created() {
        this.setUid();
        window.onfocus = () => {
            this.isActive = true;
        };
        window.onblur = () => {
            this.isActive = false;
        };
    },
    methods: {
        mouseleave(e) {
            const el = e.target;
            const newWidth = parseInt(el.offsetWidth) / this.multiple + "px";
            el.style.width = newWidth;
            el.style.maxWidth = newWidth;
            this.mouseHover = false;
        },
        mouseenter(e) {
            const el = e.target;
            const newWidth = parseInt(el.offsetWidth) * this.multiple + "px";
            el.style.width = newWidth;
            el.style.maxWidth = newWidth;
            this.mouseHover = true;
        },
        setUid() {
            this.uid = getUId();
        },
        initView() {
            const imgs = document.getElementsByClassName(`${this.uid}-img`);
            for (let i = 0; i < imgs.length; i++) {
                const angle = (360 / imgs.length) * i;
                imgs[i].setAttribute(
                    "style",
                    `transform: rotateY(-${angle}deg)`
                );
            }
        },
        galleryspin(sign) {
            if (this.blurPause && !this.isActive) return;
            if (this.hoverPause && this.mouseHover) return;
            const id = this.uid + "-spinner";
            const spinner = document.getElementById(id);
            if (!sign) {
                this.angle = this.angle + 360 / this.imgList.length;
            } else {
                this.angle = this.angle - 360 / this.imgList.length;
            }
            spinner &&
                spinner.setAttribute(
                    "style",
                    "-webkit-transform: rotateY(" +
                        this.angle +
                        "deg); -moz-transform: rotateY(" +
                        this.angle +
                        "deg); transform: rotateY(" +
                        this.angle +
                        "deg);"
                );
        },
    },
};
</script>

<style lang="less" vars="{ maxWidth }" scoped>
div#carousel {
    perspective: 1200px;
    font-size: 0;
    overflow: hidden;
}
figure.spinner {
    transform-style: preserve-3d;
    transform-origin: 50% 50% -500px;
    height: 200px;
    transition: 1s;
}
figure.spinner img {
    max-width: var(--maxWidth);
    position: absolute;
    left: 40%;
    transform-origin: 50% 50% -500px;
    outline: 1px solid transparent;
}
</style>
