<template>
    <div>
        <input type="file" accept="image/*" @change="handleFileUpload" />
        <div>
            <label>宽度：</label
            ><input
                type="number"
                v-model="width"
                @input="resizeImage($event, 'width')"
            />
            <label>高度：</label
            ><input
                type="number"
                v-model="height"
                @input="resizeImage($event, 'height')"
            />
            <label>按比例缩放：</label
            ><input type="checkbox" v-model="aspectRatio" />
        </div>
        <img
            ref="image"
            id="example-image"
            :src="imageUrl"
            alt="图片"
            @click="imgClick"
        />
    </div>
</template>

<script>
export default {
    name: "CutImg",
    data() {
        return {
            image: null,
            imageUrl: "",
            width: null,
            height: null,
            aspectRatio: false, // 默认不按比例缩放
        };
    },
    methods: {
        imgClick(event) {
            // 获取鼠标点击位置的坐标
            var x = event.clientX + window.scrollX;
            var y = event.clientY + window.scrollY;

            // 创建一个新的小圆圈元素，并设置其样式和位置
            var circle = document.createElement("div");
            circle.classList.add("circle");
            circle.style.left = x - 5 + "px"; // 减去直径的一半，使圆心对齐
            circle.style.top = y - 5 + "px";

            // 将小圆圈元素添加到文档中
            document.body.appendChild(circle);
        },
        handleFileUpload(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    this.imageUrl = event.target.result;
                    const img = new Image();
                    img.onload = () => {
                        this.image = img;
                        this.width = img.width;
                        this.height = img.height;
                        this.resizeImage();
                    };
                    img.src = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        },
        resizeImage(event, dimension) {
            if (dimension === "width") {
                this.width = event.target.value
                    ? parseInt(event.target.value)
                    : null;
                if (this.aspectRatio && this.width) {
                    this.height = Math.round(
                        this.width / (this.image.width / this.image.height)
                    );
                }
            } else if (dimension === "height") {
                this.height = event.target.value
                    ? parseInt(event.target.value)
                    : null;
                if (this.aspectRatio && this.height) {
                    this.width = Math.round(
                        this.height * (this.image.width / this.image.height)
                    );
                }
            }
            if (
                this.aspectRatio &&
                (!event || event.target !== document.activeElement)
            ) {
                const aspectRatio = this.image.width / this.image.height;
                if (this.width && !this.height) {
                    this.height = Math.round(this.width / aspectRatio);
                } else if (!this.width && this.height) {
                    this.width = Math.round(this.height * aspectRatio);
                } else if (this.width / aspectRatio < this.height) {
                    this.width = Math.round(this.height * aspectRatio);
                } else {
                    this.height = Math.round(this.width / aspectRatio);
                }
            }
            this.$refs.image.style.width = this.width
                ? this.width + "px"
                : null;
            this.$refs.image.style.height = this.height
                ? this.height + "px"
                : null;
        },
    },
};
</script>
<style>
.circle {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
}
</style>
