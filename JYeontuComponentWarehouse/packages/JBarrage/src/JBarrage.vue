<template>
    <div id="j-barrage-content" :style="{ '--width': width }">
        <span class="text">{{ getColors() }}</span>
    </div>
</template>

<script>
export default {
    name: "JBarrage",
    props: {
        barrageDate: {
            type: Array,
            default: () => {
                return [
                    {
                        text: "111",
                        color: "",
                        position: "" //top,center,bottom
                    },
                    {
                        text: "111",
                        color: "",
                        position: "" //top,center,bottom
                    },
                    {
                        text: "111",
                        color: "",
                        position: "" //top,center,bottom
                    },
                    {
                        text: "111",
                        color: "",
                        position: "" //top,center,bottom
                    }
                ];
            }
        },
        full: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            position: ["top", "bottom", "center"],
            showBarrageDate: [],
            content: null,
            width: "1000px",
            a: "blue"
        };
    },
    created() {},
    mounted() {
        this.formatData();
        this.generateBarrage();
    },
    methods: {
        getRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        },
        getColors() {
            const arr = "0123456789abcdef";
            let color = "#";
            let n = 6;
            while (n--) color += arr[this.getRandom(0, 15)];
            return color;
        },
        getPosition(position = "") {
            let content = this.content;
            let top = content.offsetTop;
            let height = content.offsetHeight;
            this.width = content.offsetWidth + "px";
            if (this.full) {
                height = window.screen.height;
                this.width = window.screen.width + "px";
                top = "0";
                content.style = `--width:${this.width};`;
            }
            switch (position) {
                case "top":
                    return top + this.getRandom(0, height / 3);
                case "center":
                    return top + this.getRandom(height / 3, (2 * height) / 3);
                case "bottom":
                    return top + this.getRandom((2 * height) / 3, height);
                default:
                    return top + this.getRandom(0, height);
            }
        },
        formatData() {
            if (this.full)
                this.content = document.getElementsByTagName("body")[0];
            else this.content = document.getElementById("j-barrage-content");
            let showBarrageDate = [...this.barrageDate];
            showBarrageDate.map(item => {
                item.position = this.getPosition(item.position);
                if (!item.color) item.color = this.getColors();
            });
            this.showBarrageDate = showBarrageDate;
        },
        generateBarrage() {
            let content = this.content;
            this.showBarrageDate.map(item => {
                let span = document.createElement("span");
                span.style.color = item.color;
                span.innerHTML = item.text;
                span.style.position = "relative";
                if (this.full) span.style.position = "fixed";
                span.style.top = item.position + "px";
                span.style.animation = "move 10s";
                span.classList.add("j-barrage-span", "text");
                setTimeout(() => {
                    content.removeChild(span);
                }, 10000);
                content.appendChild(span);
            });
        }
    }
};
</script>
<style vars="{width}" lang="scss">
@keyframes move {
    from {
        left: 0px;
    }
    to {
        left: var(--width);
    }
}
</style>
<style lang="scss" scoped>
#j-barrage-content {
    position: absolute;
}
.j-barrage-span {
    animation: move 5s infinite;
}
.text {
    position: relative;
}
</style>
