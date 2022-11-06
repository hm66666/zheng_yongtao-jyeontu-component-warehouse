<template>
    <div style="width: 100%; height: 100%">
        <div
            :id="JAppsLockId"
            class="j-apps-lock-body"
            @mousedown.prevent="mousedown()"
            @touchstart.prevent="mousedown()"
            style=""
        >
            <div
                :id="JAppsLockId + 'lock'"
                class="j-apps-lock"
                @dragstart.prevent
            >
                <div class="j-apps-lock-cells">
                    <span
                        class="j-apps-lock-cell"
                        v-for="(cell, cInd) in size * size"
                        :key="'cell' + cInd"
                        :style="getCellStyle(cInd)"
                        @dragstart.prevent
                        @mouseover="mouseover(cInd)"
                        @touchmove="mouseover(cInd)"
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
            default: "aquamarine",
        },
        size: {
            type: Number,
            default: 3,
        },
        id: {
            type: String,
            default: "",
        },
        limit: {
            type: Number,
            default: 3,
        },
        showArrow: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            JAppsLockId: "",
            cellH: "",
            cellW: "",
            isDown: false,
            choosePoints: [],
            pointsArea: [],
        };
    },
    created() {
        this.initData();
    },
    mounted() {
        this.initCell();
        this.eventListen();
    },
    methods: {
        eventListen() {
            const content = document.getElementById(this.JAppsLockId);
            content.addEventListener("mousedown", this.mousedown);
            content.addEventListener("mouseup", this.mouseup);

            window.addEventListener("mouseup", this.mouseup);

            content.addEventListener("touchstart", this.mousedown);
            content.addEventListener("touchend", this.mouseup);

            window.addEventListener("touchend", this.mouseup);

            content.addEventListener("dragstart", () => {});
            content.addEventListener("touchmove", this.touchmove);
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
            // console.log(domPoints);
        },
        createArrow(x1, x2, y1, y2) {
            let arrow = document.createElement("span");
            arrow.classList.add("j-apps-lock-arrow");
            arrow.style.position = "relative";
            arrow.style.margin = "auto";
            arrow.style.fontSize = "1.5rem";
            arrow.style.zIndex = "10";
            arrow.style.display = "block";
            arrow.style.minWidth = "1.4rem";
            arrow.style.textAlign = "center";
            if (y1 === y2) {
                arrow.innerText = x1 > x2 ? "<" : ">";
                arrow.style.top = "-0.8rem";
            } else {
                arrow.innerText = y1 > y2 ? "∧" : "∨";
                arrow.style.left = "-0.65rem";
            }
            return arrow;
        },
        createLine(x1, x2, y1, y2, p1, p2) {
            let line = document.createElement("span");
            line.classList.add("j-apps-lock-line");
            line.style.position = "absolute";
            line.style.display = "flex";
            line.style.left = "50%";
            line.style.top = "50%";
            line.style.margin = "center";
            line.style.width = Math.max(Math.abs(x2 - x1), 2) + "px";
            line.style.height = Math.max(Math.abs(y2 - y1), 2) + "px";
            line.style.backgroundColor = "gray";
            if (this.showArrow)
                line.appendChild(this.createArrow(x1, x2, y1, y2));
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
            this.choosePoints.map((cInd) => {
                domPoints.push(document.getElementById("point-" + cInd));
            });
            return domPoints;
        },
        getCellStyle(cInd) {
            let res = "";
            res += this.choosePoints.includes(cInd)
                ? "border: 1px solid gray;"
                : "border: 1px solid transparent;";
            res += `width:${this.cellW};height:${this.cellH};`;
            return res;
        },
        mousedown() {
            this.isDown = true;
            this.choosePoints = [];
            this.removeLines();
        },
        mouseup() {
            if (!this.isDown) return;
            this.isDown = false;
            this.drawLine();
            this.$emit("commit", this.choosePoints);
        },
        mouseover(ind) {
            if (!this.isDown) return;
            if (this.choosePoints.includes(ind)) return;
            this.choosePoints.push(ind);
        },
        initPointsArea() {
            this.pointsArea === [];
            const cell = document.getElementsByClassName("j-apps-lock-cell")[0];
            for (let i = 0; i < this.size * this.size; i++) {
                const point = document.getElementById("point-" + i);
                const x =
                    (point.offsetLeft + point.offsetWidth + point.offsetLeft) /
                    2;
                const y =
                    (point.offsetTop + point.offsetHeight + point.offsetTop) /
                    2;
                const r = cell.offsetHeight / 2;
                this.pointsArea.push({ x, y, r });
            }
        },
        touchmove(event) {
            if (!this.isDown) return;
            if (this.pointsArea.length === 0) {
                this.initPointsArea();
            }
            const content = document.getElementById(this.JAppsLockId + "lock");
            let nx = event.targetTouches[0].pageX - content.offsetLeft;
            let ny = event.targetTouches[0].pageY - content.offsetTop;
            for (let i = 0; i < this.pointsArea.length; i++) {
                const item = this.pointsArea[i];
                const { x, y, r } = item;
                if (Math.pow(x - nx, 2) + Math.pow(y - ny, 2) <= r * r) {
                    if (this.choosePoints.includes(i)) return;
                    this.choosePoints.push(i);
                    break;
                }
            }
        },
        initData() {
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
            const cellH = (cH - 20 - size * 6 * 2) / size + "px";
            const cellW = (cW - 20 - size * 6 * 2) / size + "px";
            this.cellH = cellH;
            this.cellW = cellW;
        },
    },
};
</script>
<style>
.j-apps-lock-line {
    margin: auto;
}
</style>
<style lang="less" scoped>
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
                // border: 1px solid gray;
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
