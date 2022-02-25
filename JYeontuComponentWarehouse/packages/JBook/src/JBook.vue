<template>
    <div class="j-book" :style="getBookStyle()">
        <div :style="{ '--speed': speed, '--degs': degs }">
            <div
                class="j-book-page-pre"
                @click="turnPage(-1)"
                v-if="currentPage > 0 && showCover"
            >
                <div class="j-book-page">
                    <h3>{{ prePage.title }}</h3>
                    <p
                        v-for="(t, textInd) in prePage.text"
                        :key="'prePage-' + textInd"
                    >
                        {{ t }}
                    </p>
                </div>
            </div>
            <div class="j-book-pages">
                <template v-for="(item, index) in pagesList">
                    <div
                        @click="turnPage(-1)"
                        class="j-book-page turn-page-ani"
                        v-if="currentPage === index + 2 && nextClick"
                        :key="'page-last--' + index"
                        :style="getPageStyle(index)"
                    >
                        <h3>{{ item.title }}</h3>
                        <p
                            v-for="(t, itemInd) in item.text"
                            :key="'item-' + itemInd"
                        >
                            {{ t }}
                        </p>
                    </div>
                    <div
                        @click="turnPage(-1)"
                        class="j-book-page turn-page-ani"
                        v-if="currentPage === 1 && nextClick"
                        :key="'page-last-' + index"
                        :style="getPageStyle(index)"
                    >
                        <h3>{{ cover.title }}</h3>
                        <p
                            v-for="(t, coverInd) in cover.text"
                            :key="'cover-' + coverInd"
                        >
                            {{ t }}
                        </p>
                    </div>
                    <div
                        @click="turnPage(1)"
                        class="j-book-page turn-page-pre-ani"
                        v-if="lastClick && currentPage === 0"
                        :key="'page-pre-currentPage' + index"
                        :style="getPageStyle(5)"
                    >
                        <h3>{{ cover.title }}</h3>
                        <p
                            v-for="(t, coverInd) in cover.text"
                            :key="'cover-0-' + coverInd"
                        >
                            {{ t }}
                        </p>
                    </div>
                    <div
                        @click="turnPage(1)"
                        class="j-book-page turn-page-pre-ani"
                        v-if="lastClick && currentPage === index + 1"
                        :key="'page-pre-' + index"
                        :style="getPageStyle(5)"
                    >
                        <h3>{{ item.title }}</h3>
                        <p
                            v-for="(t, itemInd) in item.text"
                            :key="'item-0-' + itemInd"
                        >
                            {{ t }}
                        </p>
                    </div>
                    <div
                        @click="turnPage(1)"
                        class="j-book-page"
                        :key="'page-now-' + index"
                        :style="getPageStyle(index)"
                    >
                        <h3>{{ nowPage.title }}</h3>
                        <p
                            v-for="(t, nowPageInd) in nowPage.text"
                            :key="'nowPage-' + nowPageInd"
                        >
                            {{ t }}
                        </p>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "JBook",
    props: {
        width: {
            type: Number,
            default: 300
        },
        height: {
            type: Number,
            default: 400
        },
        speed: {
            type: String,
            default: "2s"
        },
        //书本页面列表
        pagesList: {
            type: Array,
            default: () => {
                return [
                    {
                        title: "关雎",
                        text: [
                            "关关雎鸠，在河之洲。窈窕淑女，君子好逑。",
                            "参差荇菜，左右流之。窈窕淑女，寤寐求之。",
                            "求之不得，寤寐思服。悠哉悠哉，辗转反侧。",
                            "参差荇菜，左右采之。窈窕淑女，琴瑟友之。",
                            "参差荇菜，左右芼之。窈窕淑女，钟鼓乐之。"
                        ]
                    },
                    {
                        title: "声声慢·寻寻觅觅",
                        text: [
                            "寻寻觅觅，冷冷清清，凄凄惨惨戚戚。乍暖还寒时候，最难将息。三杯两盏淡酒，怎敌他、晚来风急！雁过也，正伤心，却是旧时相识。",
                            "满地黄花堆积，憔悴损，如今有谁堪摘？守着窗儿，独自怎生得黑！梧桐更兼细雨，到黄昏、点点滴滴。这次第，怎一个愁字了得！"
                        ]
                    },
                    {
                        title: "青玉案·元夕",
                        text: [
                            "东风夜放花千树。更吹落、星如雨。宝马雕车香满路。凤箫声动，玉壶光转，一夜鱼龙舞。",
                            "蛾儿雪柳黄金缕。笑语盈盈暗香去。众里寻他千百度。蓦然回首，那人却在，灯火阑珊处。"
                        ]
                    },
                    {
                        title: "蝶恋花·伫倚危楼风细细",
                        text: [
                            "伫倚危楼风细细，望极春愁，黯黯生天际。草色烟光残照里，无言谁会凭阑意。",
                            "拟把疏狂图一醉，对酒当歌，强乐还无味。衣带渐宽终不悔，为伊消得人憔悴。"
                        ]
                    },
                    {
                        title: "雨霖铃·秋别",
                        text: [
                            "寒蝉凄切，对长亭晚，骤雨初歇。都门帐饮无绪，留恋处，兰舟催发。执手相看泪眼，竟无语凝噎。念去去，千里烟波，暮霭沉沉楚天阔。",
                            "多情自古伤离别，更那堪，冷落清秋节！今宵酒醒何处？杨柳岸，晓风残月。此去经年，应是良辰好景虚设。便纵有千种风情，更与何人说"
                        ]
                    }
                ];
            }
        },
        //书本封面
        cover: {
            type: Object,
            default: () => {
                return {
                    title: "封面",
                    text: ["封面"]
                };
            }
        }
    },
    data() {
        return {
            currentPage: 0,
            nextClick: false,
            lastClick: false,
            prePage: {},
            nowPage: {},
            canTurn: true,
            degs: "0deg",
            showCover: false
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            this.nowPage = this.cover;
        },
        getBookStyle() {
            let res = "";
            res += "width:" + this.width + "px;";
            res += "height:" + this.height + "px;";
            res += "'--speed':" + this.speed + ";";
            res += "transform: rotate(" + this.degs + ");";
            return res;
        },
        getPageStyle(index) {
            let res = "";
            res += "z-index:" + (this.pagesList.length - index) + ";";
            return res;
        },
        setPage(page, flag) {
            if (flag === -1) {
                this.prePage = this.pagesList[page - 3] || this.cover;
                this.nowPage = this.pagesList[page - 1];
            } else {
                this.prePage = this.pagesList[page - 2] || this.cover;
                this.nowPage =
                    this.pagesList[page] ||
                    this.pagesList[this.pagesList.length - 1];
            }
            let speed = this.speed;
            speed = parseInt(speed) * 1000 - 500;
            setTimeout(() => {
                if (this.currentPage === 1) {
                    this.showCover = true;
                }
                if (this.currentPage === 0) {
                    this.showCover = false;
                }
                if (flag === -1) {
                    this.nowPage =
                        this.pagesList[this.currentPage - 1] || this.cover;
                    if (this.currentPage === 0) {
                        this.degs = "0deg";
                    }
                } else {
                    this.degs = "-5deg";
                    this.prePage =
                        this.pagesList[this.currentPage - 2] || this.cover;
                }
            }, speed);
        },
        turnPage(flag) {
            if (!this.canTurn) return;
            if (this.currentPage <= this.pagesList.length)
                this.setPage(this.currentPage, flag);
            if (
                this.currentPage < this.pagesList.length &&
                this.currentPage > 0
            ) {
                this.canTurn = false;
                setTimeout(() => {
                    this.canTurn = true;
                }, parseInt(this.speed) * 1000 - 100);
            }
            if (flag === 1) {
                if (this.currentPage < this.pagesList.length) {
                    this.currentPage++;
                    this.nextClick = true;
                    this.lastClick = false;
                }
            } else {
                if (this.currentPage > 0) {
                    this.currentPage--;
                    this.nextClick = false;
                    this.lastClick = true;
                }
            }
        }
    }
};
</script>

<style vars="{ speed, degs }" lang="scss" scoped>
.j-book {
    background-color: gray;
    position: relative;
    box-shadow: 30px 0px 30px rgb(0, 0, 0, 0.6) inset;
    transform: rotate(var(--degs));
    color: #dec38f;
    .j-book-page-pre {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 2;
        background-size: 100%;
        transform-origin: left;
        border-top-left-radius: 2px;
        border-bottom-left-radius: 2px;
        background-color: rgba(122, 112, 112);
        transform: rotateY(-140deg);
        .j-book-page {
            position: absolute;
            width: 100%;
            height: 100%;
        }
    }
    .j-book-pages {
        position: absolute;
        width: 100%;
        height: 100%;

        .turn-page-pre-ani {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 2;
            background-size: 100%;
            transform-origin: left;
            border-top-left-radius: 2px;
            border-bottom-left-radius: 2px;
            transform: rotateY(0deg);
            animation: fanPre var(--speed);
        }
        @keyframes fanPre {
            0% {
                transform: rotateY(-140deg);
                background-color: rgba(122, 112, 112);
            }
            50% {
                background-color: rgba(122, 112, 112);
            }
            100% {
                transform: rotateY(0deg);
                background-color: none;
            }
        }
        .turn-page-ani {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 2;
            background-size: 100%;
            transform-origin: left;
            border-top-left-radius: 2px;
            border-bottom-left-radius: 2px;
            transform: rotateY(-140deg);
            animation: fan var(--speed);
        }
        @keyframes fan {
            0% {
                transform: rotateY(0deg);
                background-color: none;
            }
            100% {
                transform: rotateY(-140deg);
                background-color: rgba(122, 112, 112);
            }
        }
        .j-book-page {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            h3 {
                text-align: center;
            }
            p {
            }
        }
    }
    .j-book-btns {
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: space-around;
        width: 100%;
    }
}
</style>
