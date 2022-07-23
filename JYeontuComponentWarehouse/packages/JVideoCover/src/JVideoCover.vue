<template>
    <div :id="uid + '-j-video-cover'" class="j-video-cover">
        <video
            :src="videoUrl"
            :id="uid + '-video'"
            controls="controls"
            playsinline
            autoplay
            muted
            loop="false"
            class="j-video"
        ></video>
        <img
            :id="uid + '-coverImg'"
            :src="coverSrc"
            class="j-coverImg"
            @mousemove="imgHover"
            @mouseleave="hoverOut"
            @click="coverClick"
        />
        <progress
            v-if="imgList.length > 1"
            :id="uid + '-progress'"
            class="j-progress-bo j-progress"
            :value="pauseTime"
            :max="duration"
            :style="'width:' + width"
        ></progress>
        <progress
            v-if="imgList.length > 1"
            :id="uid + '-progress1'"
            class="j-progress-to j-progress"
            :value="progressValue"
            :max="stepNums"
            :style="'width:' + width"
        ></progress>
    </div>
</template>

<script>
import { getUId } from "../../utils/strTool";
export default {
    name: "JVideoCover",
    props: {
        width: {
            type: String,
            default: "300px"
        },
        height: {
            type: String,
            default: "200px"
        },
        stepNums: {
            type: String,
            default: "30"
        },
        videoUrl: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            uid: "",
            video: "",
            imgList: [],
            currentTime: 0,
            duration: 100,
            pauseTime: 0,
            coverSrc: "",
            pauseCover: "",
            progressValue: 0
        };
    },
    created() {
        this.setUid();
    },
    mounted() {
        this.init();
    },
    methods: {
        setUid() {
            this.uid = getUId();
        },
        init() {
            const videoContentShow = document.getElementById(
                this.uid + "-video"
            );
            videoContentShow.style.height = this.height;
            videoContentShow.style.width = this.width;
            const videoContent = videoContentShow.cloneNode();
            videoContent.addEventListener("canplay", () => {
                if (this.currentTime < this.duration) this.cut(videoContent);
                else this.progressValue = 0;
            });
            const coverImg = document.getElementById(this.uid + "-coverImg");
            coverImg.style.height = parseInt(this.height) - 20 + "px";
            coverImg.style.width = this.width;
            coverImg.style.marginTop = "20px";
            videoContentShow.addEventListener("pause", e => {
                this.pauseTime = videoContentShow.currentTime;
                this.pauseCover = this.cutCover(
                    videoContentShow,
                    videoContentShow.currentTime
                );
                coverImg.setAttribute("src", this.pauseCover);
                const step = this.duration / this.stepNums;
                const index = Math.ceil(this.pauseTime / step);
                this.progressValue = index;
                setTimeout(() => {
                    if (videoContentShow.paused) this.doHide();
                }, 200);
            });
        },
        imgHover(e) {
            const coverImg = document.getElementById(this.uid + "-coverImg");
            const w = coverImg.offsetWidth / this.stepNums;
            const x = e.offsetX - coverImg.offsetLeft;
            const index = Math.min(
                Math.max(Math.ceil(x / w), 1),
                this.stepNums
            );
            if (this.imgList.length < index) return;
            this.progressValue = index;
            coverImg.setAttribute(
                "src",
                this.imgList[Math.min(this.imgList.length - 1, index)]
            );
        },
        hoverOut(e) {
            const coverImg = document.getElementById(this.uid + "-coverImg");
            const step = this.duration / this.stepNums;
            const index = Math.ceil(this.pauseTime / step);
            this.progressValue = index;
            coverImg.setAttribute("src", this.pauseCover || this.coverSrc);
        },
        doHide(hide = false) {
            const videoContent = document.getElementById(this.uid + "-video");
            videoContent.style.display = hide ? "block" : "none";
            videoContent.currentTime = this.pauseTime;
            hide ? videoContent.play() : videoContent.pause();
            const img = document.getElementById(this.uid + "-coverImg");
            img.style.display = hide ? "none" : "block";
            const progress = document.getElementById(this.uid + "-progress");
            progress.style.display = hide ? "none" : "block";
            const progress1 = document.getElementById(this.uid + "-progress1");
            progress1.style.display = hide ? "none" : "block";
        },
        coverClick() {
            this.doHide(true);
        },
        cutCover(video, currentTime) {
            video.currentTime = currentTime;
            const canvas = document.createElement("canvas");
            let ctx = canvas.getContext("2d");
            canvas.width = parseInt(this.width);
            canvas.height = parseInt(this.height);
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            const img = canvas.toDataURL("image/png");
            return img;
        },
        cut(video) {
            const duration = video.duration;
            this.duration = duration;
            this.currentTime += duration / this.stepNums;
            const img = this.cutCover(video, this.currentTime);
            this.imgList.push(img);
            if (this.imgList.length == 2) {
                this.coverSrc = img;
                const coverImg = document.getElementById(
                    this.uid + "-coverImg"
                );
                coverImg.setAttribute("src", img);
            }
        }
    }
};
</script>

<style>
.j-video-cover {
    position: relative;
}
.j-video {
    display: none;
}
progress {
    height: 8px;
}
.j-progress-bo {
    position: absolute;
    left: 0;
    bottom: 0;
}
.j-progress-to {
    position: absolute;
    left: 0;
    top: 20px;
}
.j-progress1::-webkit-progress-bar {
    background: #4c4c4c;
}
.j-progress1::-webkit-progress-value {
    background: #a21211;
    border-radius: 0.2rem;
}
.j-progress1::progress-bar {
    background: #4c4c4c;
}
.j-progress1::progress-value {
    background: #a21211;
    border-radius: 0.2rem;
}
</style>
