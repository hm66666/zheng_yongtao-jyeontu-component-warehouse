<template>
    <div id="j-water-fall-content"></div>
</template>

<script>
export default {
    name: "JWaterfall",
    props: {
        imgList: {
            type: Array,
            default: () => []
        },
        column: {
            type: Number,
            default: 4
        },
        imgMargin: {
            type: Number,
            default: 0.5
        }
    },
    data() {
        return {
            minHeight: [],
            arr: []
        };
    },
    mounted() {
        this.createImg();
    },
    methods: {
        createImg() {
            const ul = document.getElementById("j-water-fall-content");
            let trueWidth = Math.floor(
                (100 - this.column * this.imgMargin * 2) / this.column
            );
            for (let i = 0; i < this.column; i++) {
                let li = document.createElement("li");
                li.style.listStyle = "none";
                li.style.float = "left";
                li.style.width = `${trueWidth}%`;
                li.style.margin = `0 ${this.imgMargin}%`;
                ul.appendChild(li);
                this.arr.push(li);
                this.minHeight.push(0);
            }
            let img = new Image();
            img.num = 0;
            img.src = this.imgList[img.num];
            img.style.width = "100%";
            // 当图片加载完后
            img.onload = this.loadHandler;
        },
        imgClick(img) {
            // console.log("img: ", img.srcElement.src);
            this.$emit("imgClick", img.srcElement.src);
        },
        loadHandler(that) {
            const img = that.path[0];
            const minHeight = this.minHeight;
            const arr = this.arr;
            // 高度数组的最小值
            const min = Math.min.apply(null, minHeight);
            // 高度数组的最小值索引
            const minIndex = minHeight.indexOf(min);
            // 克隆一份图片
            const im = img.cloneNode(true);
            im.onclick = this.imgClick;
            // 将图片假如对应最小值索引的容器中
            arr[minIndex].appendChild(im);
            // 更新最小值索引的容器的高度
            minHeight[minIndex] += im.height;
            img.num++;
            img.src = this.imgList[img.num];
        }
    }
};
</script>

<style lang="scss" scoped>
#j-water-fall-content {
    margin: 0;
    padding: 0;
}
</style>
