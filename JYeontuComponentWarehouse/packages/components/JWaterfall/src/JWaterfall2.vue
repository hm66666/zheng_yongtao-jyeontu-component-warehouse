<template>
    <div id="img-content" class="img-content">
        <img
            class="img"
            :style="'width:' + imgWidth + 'px;'"
            v-for="(item, index) in imgList"
            :key="'img' + index"
            :src="item"
        />
    </div>
</template>

<script>
export default {
    name: "JWaterfall",
    props: {
        imgList: {
            type: Array,
            default: () => [],
        },
        imgWidth: {
            type: Number,
            default: 100,
        },
        imgMargin: {
            type: Number,
            default: 3,
        },
    },
    mounted() {
        window.onresize = () => {
            return (() => {
                this.waterfallHandler();
            })();
        };
        this.waterfallHandler();
    },
    methods: {
        waterfallHandler() {
            const imgWidth = this.imgWidth + this.imgMargin * 2;
            const contentW = document.getElementById("img-content").offsetWidth;
            // 获取图片的列数
            const column = parseInt(contentW / imgWidth);
            // 高度数组
            const heightArr = new Array(column).fill(0);
            const imgList = document.getElementsByClassName("img");
            for (let i = 0; i < imgList.length; i++) {
                const item = imgList[i];
                // 当前元素的高度
                const itemHeight = item.offsetHeight;
                // 高度数组最小的高度
                const minHeight = Math.min(...heightArr);
                // 高度数组最小的高度的索引
                const minIndex = heightArr.indexOf(minHeight);
                item.style.top = minHeight + "px";
                item.style.left = minIndex * imgWidth + "px";
                heightArr[minIndex] += itemHeight;
            }
        },
    },
};
</script>

<style lang="less" scoped>
.img-content {
    height: 30vh;
    width: 350px;
    position: relative;
    .img {
        position: absolute;
        vertical-align: top;
        margin: 3px;
    }
}
</style>
