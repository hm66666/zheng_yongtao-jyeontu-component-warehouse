<template>
    <div id="j-water-fall-content"></div>
</template>

<script>
export default {
    name: "JWaterfall",
    props: {
        imgList: {
            type: Array,
            default: () => [],
        },
        column: {
            type: Number,
            default: 4,
        },
        imgMargin: {
            type: Number,
            default: 0.5,
        },
    },
    data() {
        return {
            minHeight: [],
            arr: [],
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
            let trueWidthPx = 0;
            for (let i = 0; i < this.column; i++) {
                let li = document.createElement("li");
                li.style.listStyle = "none";
                li.style.float = "left";
                li.style.width = `${trueWidth}%`;
                li.style.margin = `0 ${this.imgMargin}%`;
                ul.appendChild(li);
                this.arr.push(li);
                this.minHeight.push(0);
                trueWidthPx = li.offsetWidth;
            }
            this.loadHandler(trueWidthPx);
        },
        imgClick(img) {
            this.$emit("imgClick", img.srcElement.src);
        },
        getImgPx(img, maxWidth) {
            const image = new Image();
            image.src = img;
            return new Promise((resolve) => {
                image.onload = () => {
                    const width = image.width;
                    const height = image.height;
                    image.width = maxWidth;
                    image.height = image.height * (maxWidth / width);
                    resolve({ width, height, image });
                };
            });
        },
        getBase64(file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            return new Promise((resolve) => {
                reader.onload = () => {
                    resolve(reader.result);
                };
            });
        },
        async loadHandler(trueWidth) {
            for (const src of this.imgList) {
                const res = await this.getImgPx(src, trueWidth);
                const { image } = res;
                const minHeight = this.minHeight;
                const arr = this.arr;
                // 高度数组的最小值
                const min = Math.min.apply(null, minHeight);
                // 高度数组的最小值索引
                const minIndex = minHeight.indexOf(min);
                // 克隆一份图片
                const im = image.cloneNode(true);
                im.onclick = this.imgClick;
                // 将图片假如对应最小值索引的容器中
                arr[minIndex].appendChild(im);
                // 更新最小值索引的容器的高度
                minHeight[minIndex] += im.height;
            }
        },
    },
};
</script>

<style lang="less" scoped>
#j-water-fall-content {
    margin: 0;
    padding: 0;
    width: 100%;
}
</style>
