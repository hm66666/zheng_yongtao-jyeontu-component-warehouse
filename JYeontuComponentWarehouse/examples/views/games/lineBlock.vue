<template>
    <div class="line-block-body">
        <div id="game-content" class="game-content">
            <!-- <div class="column" id="column-0">
                <div class="row" id="row-0-0">
                    <img
                        id="img-0-0"
                        class="img-block"
                        src="./img/remove.png"
                    />
                </div>
                <div
                    class="row"
                    :id="'row-0-' + j"
                    v-for="j in row"
                    :key="'row-0-' + j"
                >
                    <img
                        :id="'img-0-' + j"
                        class="img-block"
                        src="./img/remove.png"
                    />
                </div>
                <div class="row" :id="'row-0-' + (row + 1)">
                    <img
                        :id="'img-0-' + (row + 1)"
                        class="img-block"
                        src="./img/remove.png"
                    />
                </div>
            </div>
            <div
                v-for="i in column"
                :key="'column-' + i"
                class="column"
                :id="'column-' + i"
            >
                <div class="row" :id="'row-' + i + '-0'">
                    <img
                        :id="'img-' + i + '-0'"
                        class="img-block"
                        src="./img/remove.png"
                    />
                </div>
                <div
                    v-for="j in row"
                    :key="'row-' + i + '-' + j"
                    class="row"
                    :id="'row-' + i + '-' + j"
                >
                    <img
                        :id="'img-' + i + '-' + j"
                        class="img-block"
                        :src="blockList[(i - 1) * row + j - 1]"
                        @click="imgClick(i, j)"
                    />
                </div>
                <div class="row" :id="'row-' + i + '-' + '(row + 1)'">
                    <img
                        :id="'img-' + i + '-' + (row + 1)"
                        class="img-block"
                        src="./img/remove.png"
                    />
                </div>
            </div>
            <div class="column" :id="'column-' + (column + 1)">
                <div class="row" :id="'row-' + (column + 1) + '-0'">
                    <img
                        :id="'img-' + column + 1 + '-0'"
                        class="img-block"
                        src="./img/remove.png"
                    />
                </div>
                <div
                    class="row"
                    :id="'row-' + (column + 1) + '-' + j"
                    v-for="j in row"
                    :key="'row-' + (column + 1) + '-' + j"
                >
                    <img
                        :id="'img-' + column + 1 + '-' + j"
                        class="img-block"
                        src="./img/remove.png"
                    />
                </div>
                <div class="row" :id="'row-' + (column + 1) + '-' + (row + 1)">
                    <img
                        :id="'img-' + column + 1 + '-' + (row + 1)"
                        class="img-block"
                        src="./img/remove.png"
                    />
                </div>
            </div> -->
        </div>
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
            removeNums: 0
        };
    },
    created() {
        this.initData();
    },
    mounted() {
        this.initPage();
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
                        img.setAttribute("src", require("./img/remove.png"));
                    } else {
                        img.setAttribute(
                            "src",
                            this.blockList[(i - 1) * row + j - 1]
                        );
                    }
                    img.onclick = () => {
                        this.imgClick(i, j);
                    };
                    rowDom.appendChild(img);
                    columnDom.appendChild(rowDom);
                }
                content.appendChild(columnDom);
            }
            for (let i = 1; i <= column; i++) {
                for (let j = 1; j <= row; j++) {
                    const img = document.getElementById(i + "-" + j);
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
