<template>
    <div class="line-block-body">
        <div id="game-content" class="game-content"></div>
        <div class="game-menu">
            <div class="game-menu-content">
                <div class="game-menu-title">连连看</div>
                <div class="game-menu-time">{{ getPlayTime }}</div>
                <div class="game-menu-start" @click="startGame()">
                    {{ !setTimeFlag ? "开始" : "暂停" }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "lineBlock",
    props: {},
    data() {
        return {
            row: 10,
            column: 10,
            blockList: [],
            blockMap: [],
            imgList: [
                "https://img2.baidu.com/it/u=134769530,4268043097&fm=253&fmt=auto&app=138&f=JPEG?w=533&h=333",
                "https://img1.baidu.com/it/u=2580690117,2413329602&fm=253&fmt=auto&app=138&f=JPEG?w=642&h=500",
                "https://img2.baidu.com/it/u=3133697304,2308274678&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313",
                "https://img1.baidu.com/it/u=2539150145,3709425073&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=711",
                "https://img2.baidu.com/it/u=3772577665,2044310843&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=727",
                "https://img0.baidu.com/it/u=3966731730,957573008&fm=253&fmt=auto&app=138&f=JPEG?w=281&h=500",
                "https://img2.baidu.com/it/u=3440095388,1687551735&fm=253&fmt=auto&app=120&f=JPEG?w=1363&h=614",
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201701%2F17%2F20170117163054_C3ydM.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651752631&t=65ba649ba066495acb0bbd112920eabb",
                "https://img1.baidu.com/it/u=2912396327,2474337263&fm=253&fmt=auto&app=138&f=JPEG?w=347&h=500",
                "https://img1.baidu.com/it/u=1568155621,1811293689&fm=253&fmt=auto&app=138&f=JPEG?w=700&h=495",
                "https://img2.baidu.com/it/u=461269782,2772059667&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313",
                "https://img1.baidu.com/it/u=2599508183,3079977410&fm=253&fmt=auto&app=138&f=JPEG?w=416&h=499",
                "https://img1.baidu.com/it/u=857618379,3899031461&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
                "https://img1.baidu.com/it/u=1702938387,792201763&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=447",
                "https://img1.baidu.com/it/u=1539021674,3840242491&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=246",
                "https://img0.baidu.com/it/u=3159006221,3574011460&fm=253&fmt=auto&app=120&f=JPEG?w=1067&h=800",
                "https://img2.baidu.com/it/u=451082639,696249795&fm=253&fmt=auto&app=138&f=JPEG?w=720&h=405",
                "https://img2.baidu.com/it/u=1444438974,3214886495&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img0.baidu.com/it/u=754308036,2423815123&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
                "https://img0.baidu.com/it/u=1811280816,2994744388&fm=253&fmt=auto&app=138&f=JPG?w=659&h=452",
                "https://img1.baidu.com/it/u=3819643902,1000613763&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img1.baidu.com/it/u=1303707706,2356690886&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img0.baidu.com/it/u=573627639,3491865163&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img1.baidu.com/it/u=2552181951,114177955&fm=253&fmt=auto&app=138&f=PNG?w=502&h=500",
                "https://img0.baidu.com/it/u=1688278494,1421949150&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img2.baidu.com/it/u=3149693868,1058312070&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img2.baidu.com/it/u=2003437735,1374592373&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img0.baidu.com/it/u=4068300737,290575386&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img2.baidu.com/it/u=1328092326,573376744&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img0.baidu.com/it/u=1280320387,1585665801&fm=253&fmt=auto&app=138&f=JPEG?w=368&h=368",
                "https://img0.baidu.com/it/u=1403512971,1919400898&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img0.baidu.com/it/u=707869343,3146161581&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img1.baidu.com/it/u=1473510751,3362722835&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img0.baidu.com/it/u=751714707,705901550&fm=253&fmt=auto&app=138&f=JPEG?w=559&h=500",
                "https://img2.baidu.com/it/u=3288691327,4041002989&fm=253&fmt=auto&app=138&f=JPEG?w=304&h=303",
                "https://img1.baidu.com/it/u=2172054385,2684839842&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img1.baidu.com/it/u=1879107733,3573789717&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img2.baidu.com/it/u=1720323410,218932174&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img1.baidu.com/it/u=2479779032,1379361694&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img1.baidu.com/it/u=537208727,895387248&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img1.baidu.com/it/u=3310720258,943543712&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img2.baidu.com/it/u=2165957654,3023194084&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img0.baidu.com/it/u=1446729335,4267600834&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img2.baidu.com/it/u=2922694860,2270800253&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img0.baidu.com/it/u=595403291,2269048245&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img0.baidu.com/it/u=1164365158,2722332607&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img2.baidu.com/it/u=9876582,1040648435&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
            ],
            firstClick: {},
            setTimeFlag: null,
            playTime: 0,
            removeNums: 0,
            lineLists: [],
            speed: 0.2
        };
    },
    created() {
        this.initData();
    },
    mounted() {
        this.initPage();
        // this.test();
    },
    computed: {
        getPlayTime() {
            let playTime = this.playTime;
            let h = 0,
                m = 0,
                s = 0;
            h = Math.floor(playTime / 3600);
            playTime -= 3600 * h;
            h = h > 9 ? h : "0" + h;
            m = Math.floor(playTime / 60);
            playTime -= 60 * m;
            m = m > 9 ? m : "0" + m;
            s = playTime > 9 ? playTime : "0" + playTime;
            return h + ":" + m + ":" + s;
        }
    },
    methods: {
        test() {
            let steps = [
                [6, 10],
                [5, 10],
                [4, 10],
                [4, 9],
                [4, 8],
                [3, 8],
                [2, 8],
                [2, 7],
                [1, 7],
                [1, 6]
            ];
            let lines = this.getLine(steps);
            console.log(
                "%c 🍶 lines: ",
                "font-size:20px;background-color: #42b983;color:#fff;",
                lines
            );
        },
        setTime() {
            this.playTime++;
            this.setTimeFlag = setTimeout(() => {
                this.setTime();
            }, 1000);
        },
        startGame() {
            if (this.setTimeFlag) {
                clearTimeout(this.setTimeFlag);
                this.setTimeFlag = null;
            } else {
                this.setTime();
            }
        },
        getPath(startX, startY, targetX, targetY) {
            let dx = [0, 1, 0, -1],
                dy = [1, 0, -1, 0];
            let queue = [[startX, startY]];
            let flag = new Array(this.blockMap.length); //dfs标记走过的路径
            for (let i = 0; i < flag.length; i++) {
                flag[i] = new Array(this.blockMap[i].length).fill(false);
            }
            let step = new Array(this.blockMap.length); //bfs标记走过的路径
            for (let i = 0; i < step.length; i++) {
                step[i] = new Array(this.blockMap[i].length).fill(Infinity);
            }
            step[startX][startY] = 0;
            flag[startX][startY] = true;
            let f = false;
            while (queue.length) {
                let p = queue.shift();
                let x = p[0],
                    y = p[1];
                if (x == targetX && y == targetY) break;
                for (let i = 0; i < 4; i++) {
                    let nx = x + dx[i],
                        ny = y + dy[i];
                    if (
                        nx < 0 ||
                        nx >= this.blockMap.length ||
                        ny >= this.blockMap[0].length ||
                        ny < 0
                    ) {
                        continue;
                    }
                    if (
                        ((nx != targetX || ny != targetY) &&
                            !this.blockMap[nx][ny]) ||
                        flag[nx][ny] == true
                    ) {
                        continue;
                    }
                    flag[nx][ny] = true;
                    step[nx][ny] = step[x][y] + 1;
                    queue.push([nx, ny]);
                    if (nx == targetX && ny == targetY) {
                        f = true;
                        break;
                    }
                }
                if (f) break;
            }
            if (f) {
                return this.getStep(step, startX, startY, targetX, targetY);
            }
            return f;
        },
        getStep(step, startX, startY, targetX, targetY) {
            let steps = [];
            let dx = [0, 1, 0, -1],
                dy = [1, 0, -1, 0];
            steps.unshift([targetX, targetY]);
            while (targetX != startX || targetY != startY) {
                for (let i = 0; i < 4; i++) {
                    let x = targetX + dx[i],
                        y = targetY + dy[i];
                    if (
                        x < 0 ||
                        x >= step.length ||
                        y < 0 ||
                        y >= step[0].length
                    )
                        continue;
                    if (step[x][y] == step[targetX][targetY] - 1) {
                        targetX = x;
                        targetY = y;
                        steps.unshift([x, y]);
                    }
                }
            }
            let lines = this.getLine(steps);
            const content = document.getElementById("game-content");
            while (this.lineLists.length > 0) {
                content.removeChild(this.lineLists.pop());
            }
            for (let i = 0; i < lines.length; i++) {
                setTimeout(() => {
                    this.drawLine(
                        [lines[i].startX, lines[i].startY],
                        [lines[i].endX, lines[i].endY]
                    );
                }, i * this.speed * 1000);
            }
            return lines;
        },
        getLine(steps) {
            let lines = [];
            let temp = {
                startX: steps[0][0],
                startY: steps[0][1]
            };
            let flag = "";
            for (let i = 1; i < steps.length; i++) {
                if (
                    (steps[i][0] != steps[i - 1][0] && flag == "x") ||
                    (steps[i][1] != steps[i - 1][1] && flag == "y")
                ) {
                    temp.endX = steps[i - 1][0];
                    temp.endY = steps[i - 1][1];
                    flag = "";
                    lines.push({ ...temp });
                    temp = {
                        startX: steps[i - 1][0],
                        startY: steps[i - 1][1]
                    };
                }
                if (steps[i][0] == temp.startX) flag = "x";
                if (steps[i][1] == temp.startY) flag = "y";
            }
            let len = steps.length - 1;
            temp.endX = steps[len][0];
            temp.endY = steps[len][1];
            lines.push({ ...temp });
            return lines;
        },
        drawLine(p1, p2) {
            const content = document.getElementById("game-content");
            let div = document.createElement("div");
            let img1 = document.getElementById(`row-${p1[0]}-${p1[1]}`);
            let img2 = document.getElementById(`row-${p2[0]}-${p2[1]}`);
            div.style.top =
                Math.min(img1.offsetTop, img2.offsetTop) + 20 + "px";
            div.style.left =
                Math.min(img1.offsetLeft, img2.offsetLeft) + 20 + "px";
            const width = Math.abs(img1.offsetLeft - img2.offsetLeft);
            const height = Math.abs(img1.offsetTop - img2.offsetTop);
            if (width == 0) div.style.transition = `height ${this.speed}s`;
            else div.style.transition = `width ${this.speed}s`;
            div.classList.add("line-style");
            content.appendChild(div);
            setTimeout(() => {
                div.style.width = width + "px";
                div.style.height = height + "px";
            }, 0);
            this.lineLists.push(div);
        },
        initData() {
            this.firstClick = {};
            clearTimeout(this.setTimeFlag);
            this.setTimeFlag = null;
            this.playTime = 0;
            this.removeNums = 0;
            this.blockList = [];

            const row = this.row;
            const column = this.column;
            const imgList = this.imgList;
            let blockList = this.blockList;
            this.blockMap = new Array(column + 2);
            for (let i = 0; i < this.blockMap.length; i++) {
                let temp = [];
                for (let j = 0; j < row + 2; j++) {
                    if (i == 0 || j == 0 || i == column + 1 || j == row + 1)
                        temp.push(true);
                    else temp.push(false);
                }
                this.blockMap[i] = temp;
            }

            let nums = row * column;
            if (nums % 2 == 1) {
                alert("个数不能为单数");
                return;
            }
            while (nums / 2 > blockList.length) {
                const dif = nums / 2 - blockList.length;
                blockList.push(...imgList.slice(0, dif));
            }
            blockList.push(...blockList);
            blockList = this.randomSort(blockList);
        },
        initPage() {
            const row = this.row,
                column = this.column;
            const content = document.getElementById("game-content");
            content.innerHTML = "";
            for (let i = 0; i <= parseInt(column) + 1; i++) {
                const columnDom = document.createElement("div");
                columnDom.classList.add("column");
                columnDom.id = `column-${i}`;
                for (let j = 0; j <= parseInt(row) + 1; j++) {
                    const rowDom = document.createElement("div");
                    rowDom.classList.add("row");
                    rowDom.id = `row-${i}-${j}`;
                    const img = document.createElement("img");
                    img.id = `img-${i}-${j}`;
                    img.classList.add("img-block");
                    if (i == 0 || j == 0 || i == column + 1 || j == row + 1) {
                        img &&
                            img.setAttribute(
                                "src",
                                require("./img/remove.png")
                            );
                    } else {
                        img &&
                            img.setAttribute(
                                "src",
                                this.blockList[(i - 1) * row + j - 1]
                            );
                        img.onclick = () => {
                            this.imgClick(i, j);
                        };
                    }
                    rowDom.appendChild(img);
                    columnDom.appendChild(rowDom);
                }
                content.appendChild(columnDom);
            }
            for (let i = 1; i <= column; i++) {
                for (let j = 1; j <= row; j++) {
                    const img = document.getElementById(i + "-" + j);
                    img &&
                        img.setAttribute(
                            "src",
                            this.blockList[(i - 1) * row + j - 1]
                        );
                }
            }
        },
        randomSort(arr) {
            return arr.sort((a, b) => {
                return Math.random() - 0.5;
            });
        },
        imgClick(i, j) {
            if (this.playTime == 0) {
                this.setTime();
            }
            const row = this.row;
            const blockList = this.blockList;
            let firstClick = this.firstClick;
            if (!firstClick.id) {
                firstClick.id = "img-" + i + "-" + j;
                firstClick.i = i;
                firstClick.j = j;
                firstClick.src = blockList[(i - 1) * row + j - 1];
                const firstImg = document.getElementById("img-" + i + "-" + j);
                firstImg.classList.add("selected");
            } else {
                const firstImg = document.getElementById(firstClick.id);
                const secondImg = document.getElementById("img-" + i + "-" + j);
                firstImg.classList.remove("selected");
                if ("img-" + i + "-" + j == firstClick.id) {
                    this.firstClick = {};
                    return;
                }
                if (firstClick.src == blockList[(i - 1) * row + j - 1]) {
                    const path = this.getPath(firstClick.i, firstClick.j, i, j);
                    if (!path) {
                        this.firstClick = {};
                        return;
                    } else {
                        console.log(path);
                    }
                    firstImg.src = require("./img/remove.png");
                    secondImg.src = require("./img/remove.png");
                    this.blockMap[firstClick.i][firstClick.j] = true;
                    this.blockMap[i][j] = true;
                    firstClick = {};
                    this.removeNums += 2;
                    if (this.removeNums == this.blockList.length) {
                        alert("您已全部消除");
                        this.initData();
                        this.initPage();
                    }
                } else {
                    firstClick.id = "img-" + i + "-" + j;
                    firstClick.src = blockList[(i - 1) * row + j - 1];
                    firstClick.i = i;
                    firstClick.j = j;
                    secondImg.classList.add("selected");
                }
            }
            this.firstClick = firstClick;
        }
    }
};
</script>
<style scoped>
/deep/.game-content {
    flex: 1;
}
/deep/.column {
    display: flex;
}
/deep/.row {
    position: relative;
}
/deep/.img-block {
    border: solid grey 2px;
    width: 40px;
    height: 40px;
}
/deep/.selected {
    border: solid yellow 2px;
}
/deep/.line-style {
    position: absolute;
    border: solid skyblue 2px;
    background-color: skyblue;
    width: 0;
    height: 0;
}
</style>
<style lang="scss" scoped>
.line-block-body {
    display: flex;
    flex-wrap: wrap;
    .game-content {
        flex: 1;
        .column {
            display: flex;
            .row {
                position: relative;
                .img-block {
                    border: solid grey 2px;
                    width: 40px;
                    height: 40px;
                }
                .selected {
                    border: solid yellow 2px;
                }
            }
        }
    }
    .game-menu {
        flex: 1;
        text-align: center;
        padding: 2em;
        .game-menu-content {
            background-color: palevioletred;
            .game-menu-start {
                cursor: pointer;
            }
        }
    }
}
</style>
