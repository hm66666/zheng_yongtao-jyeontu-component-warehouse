<template>
    <div style="width:100%;height:100%">
        <div>{{ choosePoints }}</div>
        <div>{{ touchmoveTip }}，{{ isDown }}</div>
        <div
            :id="JAppsLockId"
            class="j-apps-lock-body"
            @mousedown.prevent="mousedown()"
            @touchstart.prevent="mousedown()"
            @touchend.stop="mouseup()"
            @mouseup.stop="mouseup()"
            style=""
        >
            <div class="j-apps-lock" @dragstart.prevent>
                <div class="j-apps-lock-cells">
                    <span
                        class="j-apps-lock-cell"
                        v-for="(cell, cInd) in size * size"
                        :key="'cell' + cInd"
                        :style="getCellStyle()"
                        @dragstart.prevent
                        @mouseover="mouseover(cInd)"
                        @touchmove="touchmove(cInd)"
                    >
                        <span
                            :id="'point-' + cInd"
                            class="j-apps-lock-point"
                            @dragstart.prevent
                        ></span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getUId } from "../../utils/strTool";
export default {
    name: "JAppsLock",
    props: {
        backgroundColor: {
            type: String,
            default: "aquamarine"
        },
        size: {
            type: Number,
            default: 3
        },
        id: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            JAppsLockId: "",
            cellH: "",
            cellW: "",
            isDown: false,
            choosePoints: [],
            touchmoveTip: "wu"
        };
    },
    created() {
        this.initData();
        this.eventListen();
    },
    mounted() {
        this.initCell();
    },
    methods: {
        eventListen() {
            const content = document.getElementById(this.JAppsLockId);
            content.addEventListener("mousedown", this.mousedown);
            content.addEventListener("mouseup", this.mouseup);
            content.addEventListener("touchstart", this.mousedown);
            content.addEventListener("touchend", this.mouseup);
            content.addEventListener("dragstart", () => {});
        },
        drawLine() {
            const domPoints = this.getPoints();
            for (let i = 1; i < domPoints.length; i++) {
                const x1 =
                    domPoints[i - 1].offsetWidth + domPoints[i - 1].offsetLeft;
                const x2 = domPoints[i].offsetWidth + domPoints[i].offsetLeft;
                const y1 =
                    domPoints[i - 1].offsetHeight + domPoints[i - 1].offsetTop;
                const y2 = domPoints[i].offsetHeight + domPoints[i].offsetTop;
                const line = this.createLine(
                    x1,
                    x2,
                    y1,
                    y2,
                    domPoints[i - 1],
                    domPoints[i]
                );
            }
            // console.log(content);
            console.log(domPoints);
        },
        createLine(x1, x2, y1, y2, p1, p2) {
            let line = document.createElement("span");
            line.classList.add("j-apps-lock-line");
            line.style.position = "absolute";
            line.style.display = "block";
            line.style.left = "50%";
            line.style.top = "50%";
            line.style.margin = "center";
            line.style.width = Math.max(Math.abs(x2 - x1), 2) + "px";
            line.style.height = Math.max(Math.abs(y2 - y1), 2) + "px";
            line.style.backgroundColor = "gray";
            if (x1 != x2 && y1 != y2) {
                const x = Math.abs(x1 - x2);
                const y = Math.abs(y1 - y2);
                line.style.height = Math.sqrt(x * x + y * y) + "px";
                line.style.width = "2px";
                let angle = (Math.atan(x / y) * 180) / Math.PI;
                if ((x2 > x1 && y2 > y1) || (x2 < x1 && y2 < y1))
                    angle = "-" + angle;
                line.style.transform = `rotate(${angle}deg)`;
                line.style.transformOrigin = "left top";
                if (y2 > y1) p1.appendChild(line);
                else p2.appendChild(line);
            } else if (x2 > x1 || y2 > y1) {
                p1.appendChild(line);
            } else {
                p2.appendChild(line);
            }
            return line;
        },
        removeLines() {
            const points = document.getElementsByClassName("j-apps-lock-point");
            for (let i = 0; i < points.length; i++) {
                points[i].innerHTML = "";
            }
        },
        getPoints() {
            const domPoints = [];
            this.choosePoints.map(cInd => {
                domPoints.push(document.getElementById("point-" + cInd));
            });
            return domPoints;
        },
        getCellStyle() {
            return `width:${this.cellW};height:${this.cellH};`;
        },
        mousedown() {
            this.isDown = true;
            this.removeLines();
        },
        mouseup() {
            this.isDown = false;
            this.drawLine();
            this.choosePoints = [];
        },
        mouseover(ind) {
            if (!this.isDown) return;
            if (this.choosePoints.includes(ind)) return;
            this.choosePoints.push(ind);
        },
        touchmove(ind) {
            this.touchmoveTip = ind;
            if (!this.isDown) return;
            if (this.choosePoints.includes(ind)) return;
            this.choosePoints.push(ind);
        },
        initData() {
            //getUId
            let id = this.id;
            if (id == "") {
                id = getUId();
            }
            this.JAppsLockId = id;
        },
        initCell() {
            const id = this.JAppsLockId;
            const size = this.size;
            const nums = size * size;
            const content = document.getElementById(id);
            const cH = content.offsetHeight;
            const cW = content.offsetWidth;
            const cellH = (cH - 20 - size * 8 * 2) / size + "px";
            const cellW = (cW - 20 - size * 8 * 2) / size + "px";
            this.cellH = cellH;
            this.cellW = cellW;
        }
    }
};
</script>
<style>
.j-apps-lock-line {
    margin: auto;
}
</style>
<style lang="scss" scoped>
.j-apps-lock-body {
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    padding: 5px;
    background-color: aquamarine;
    display: flex;
    justify-content: center;
    .j-apps-lock {
        position: relative;
        margin: auto;
        .j-apps-lock-cells {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            .j-apps-lock-cell {
                display: flex;
                // background-color: gray;
                border-radius: 50%;
                // margin-top: 5px;
                border: 1px solid gray;
                justify-content: center;
                margin: 5px;
            }
            .j-apps-lock-point {
                width: 20%;
                height: 20%;
                justify-content: center;
                background-color: gray;
                display: flex;
                margin: auto;
                border-radius: 50%;
                position: relative;
            }
        }
    }
}
</style>
