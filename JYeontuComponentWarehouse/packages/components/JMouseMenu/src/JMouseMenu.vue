<template>
    <div>
        <div :id="uid" class="j-mouse-menu">
            <slot name="header"></slot>
            <ul>
                <li
                    v-for="menuItem in menu"
                    :key="menuItem.id"
                    @click="menuClick(menuItem)"
                >
                    {{ menuItem.label }}
                </li>
            </ul>
            <slot name="body"></slot>
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
import { getUId } from "../../../utils/strTool";
export default {
    name: "JMouseMenu",
    props: {
        domId: {
            type: String,
            default: "",
        },
        menu: {
            type: Array,
            default: () => {
                return [];
            },
        },
    },
    data() {
        return {
            uid: "",
        };
    },
    created() {
        this.setUid();
    },
    mounted() {
        this.init();
    },
    methods: {
        setUid() {
            this.uid = "j-mouse-menu-" + getUId();
        },
        init() {
            // 自定义鼠标右键菜单栏
            const dom = document.getElementById(this.domId);
            if (!dom) return;
            const menu = document.getElementById(this.uid);
            const that = this;
            dom.oncontextmenu = function (e) {
                that.hideAllMenu(that.uid);
                // 自定义body元素的鼠标事件处理函数
                e = e || window.event;
                e.preventDefault();
                let scrollTop =
                    document.documentElement.scrollTop ||
                    document.body.scrollTop; // 获取垂直滚动条位置
                let scrollLeft =
                    document.documentElement.scrollLeft ||
                    document.body.scrollLeft; // 获取水平滚动条位置
                menu.style.display = "block";
                menu.style.left = e.clientX + scrollLeft + "px";
                menu.style.top = e.clientY + scrollTop + "px";
            };
            // 鼠标点击其他位置时隐藏菜单
            document.onclick = function () {
                that.hideAllMenu();
            };
        },
        hideAllMenu(id) {
            const jMenu = document.getElementsByClassName("j-mouse-menu");
            for (let i = 0; i < jMenu.length; i++) {
                if (jMenu[i].id != id) jMenu[i].style.display = "none";
            }
        },
        menuClick(item) {
            if (item.click) {
                item.click(item);
                return;
            }
            this.$emit("menuClick", item);
        },
    },
};
</script>

<style lang="less" scoped>
.j-mouse-menu {
    display: none;
    position: absolute;
    min-width: 8em;
    max-width: 15em;
    border: 1px solid #ccc;
    background: #eee;
    ul {
        margin: 5px 0;
        padding: 0;
    }
    li {
        height: 30px;
        line-height: 30px;
        color: #21232e;
        font-size: 12px;
        text-align: center;
        cursor: default;
        padding: 0;
        margin: 0;
        list-style-type: none;
        border-bottom: 1px dashed #cecece;
        &:hover {
            background-color: #cccccc;
        }
    }
}
</style>
