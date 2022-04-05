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
        }
    },
    data() {
        return {
            minHeight: [],
            arr: []
        };
    },
    created() {},
    mounted() {
        this.createImg();
    },
    methods: {
        createImg() {
            const content = document.getElementById("j-water-fall-content");
            let ul = document.createElement("ul");
            ul.style.listStyle = "none";
            ul.style.float = "left";
            content.appendChild(ul);
            for (let i = 0; i < this.column; i++) {
                let li = document.createElement("li");
                li.style.listStyle = "none";
                li.style.float = "left";
                li.style.width = "24%";
                li.style.margin = "0 0.5%";
                ul.appendChild(li);
                this.arr.push(li);
                this.minHeight.push(0);
            }
            let img = new Image();
            img.num = 0;
            img.src = this.imgList[img.num]; // 素材图片的规律为 2-.jpg 3-.jpg 4-.jpg ...
            img.style.width = "100%";
            // 当图片加载完后
            img.onload = this.loadHandler;
        },
        loadHandler(that) {
            const img = that.path[0];
            let minHeight = this.minHeight;
            let arr = this.arr;
            // 高度数组的最小值
            let min = Math.min.apply(null, minHeight);
            // 高度数组的最小值索引
            let minIndex = minHeight.indexOf(min);
            // 克隆一份图片
            let im = img.cloneNode(true);
            // 将图片假如对应最小值索引的容器中
            arr[minIndex].appendChild(im);
            // 更新最小值索引的容器的高度
            minHeight[minIndex] += im.height;
            img.num++;
            // 图片的个数只有79张
            if (img.num > 79) {
                img.off("load", loadHandler);
                return;
            }
            img.src = this.imgList[img.num];
        }
    }
};
</script>

<style lang="scss" scoped>
#j-water-fall-content {
    margin: 0;
    padding: 0;
    ul li {
        list-style: none !important;
        float: left !important;
    }
}
</style>
