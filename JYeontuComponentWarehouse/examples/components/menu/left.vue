<template>
    <div id="leftMenu"></div>
</template>

<script>
const router = require("@/config/router.json");
export default {
    name: "left",
    data() {
        return {
            menu: [],
        };
    },
    watch: {
        $route(to, from) {
            // console.log(to, from);
            this.findNodeByName(this.menu, to.name);
        },
    },
    methods: {
        getNewMenu() {
            let menu = [];
            let id = 0;
            menu = router.menu;
            if (
                localStorage.jyeontuRouteId !== undefined &&
                localStorage.jyeontuMenu !== undefined
            ) {
                menu = JSON.parse(localStorage.jyeontuMenu);
                id = localStorage.jyeontuRouteId;
            }
            this.menu = menu;
            let domTree = this.generatorMenu(menu, "", id);
            let leftMenu = document.getElementById("leftMenu");
            leftMenu.innerHTML = domTree;
            this.chooseNode(id);
        },
        refreshMenu() {
            localStorage.removeItem("jyeontuMenu");
            let jyeontuRouteId = localStorage.getItem("jyeontuRouteId");
            localStorage.removeItem("jyeontuRouteId");
            // this.$router.push('/homePage')
            this.getNewMenu();
            this.chooseNode(jyeontuRouteId);
        },
        findNodeByName(node, name) {
            for (let i = 0; i < node.length; i++) {
                if (name.toString() === node[i].name.toString()) {
                    chooseNode(node[i].id);
                    if (node[i].children && node[i].children.length > 0) {
                        this.findNodeByName(node[i].children, name);
                    }
                } else {
                    node[i].selected = false;
                    if (node[i].children && node[i].children.length > 0) {
                        this.findNodeByName(node[i].children, name);
                    }
                }
            }
        },
        findNodeById(node, id) {
            if (!id) id = "";
            for (let i = 0; i < node.length; i++) {
                if (id.toString() === node[i].id.toString()) {
                    node[i].selected = true;
                    node[i].open = !node[i].open;
                    this.$router.push(node[i].path);
                    window.scroll(0, 0);
                    window.scrollTo(0, 0);
                    localStorage.setItem("jyeontuRouteId", node[i].id);
                    localStorage.setItem(
                        "jyeontuMenu",
                        JSON.stringify(this.menu)
                    );
                    if (node[i].children && node[i].children.length > 0) {
                        this.findNodeById(node[i].children, id);
                    }
                } else {
                    node[i].selected = false;
                    if (node[i].children && node[i].children.length > 0) {
                        this.findNodeById(node[i].children, id);
                    }
                }
            }
        },
        chooseNode(id) {
            this.findNodeById(this.menu, id);
            let domTree = this.generatorMenu(this.menu, "", 0);
            let leftMenu = document.getElementById("leftMenu");
            leftMenu.innerHTML = domTree;
        },
        generatorMenu(menu, temp, floor) {
            for (let i = 0; i < menu.length; i++) {
                if (menu[i].hide == true) continue;
                temp += `<div style="width: max-content,background-color: ${
                    menu[i].selected ? "#A78BFA" : ""
                };">
                    <div class="menuOption" onclick="chooseNode(${menu[i].id})"
                            style="text-indent: ${floor}em;
                            background-color: ${
                                menu[i].selected ? "#A78BFA" : ""
                            };
                            cursor: pointer;
                            margin-top: 1rem;">`;
                let iconColor = router.iconColor;
                if (menu[i].iconColor) {
                    iconColor = menu[i].iconColor;
                }
                if (menu[i].icon.split("-")[0] === "el") {
                    temp += `<i class="${menu[i].icon}" style="margin-right: 5px;color:${iconColor};"></i>`;
                } else if (menu[i].icon.split("-")[0] === "icon") {
                    temp += `<i class="iconfont ${menu[i].icon}" style="margin-right: 5px;color:${iconColor};"></i>`;
                }
                temp += `${menu[i].label.trim()}`;
                if (
                    !menu[i].open &&
                    menu[i].children &&
                    menu[i].children.length > 0
                ) {
                    temp += `<i style="margin-left: 1rem" class="el-icon-arrow-right" style="margin-right: 5px;"></i>`;
                } else {
                    if (
                        menu[i].open &&
                        menu[i].children &&
                        menu[i].children.length > 0
                    ) {
                        temp += `<i style="margin-left: 1rem" class="el-icon-arrow-down" style="margin-right: 5px;"></i>`;
                    }
                }
                temp += `</div>`;
                if (
                    menu[i].open &&
                    menu[i].children &&
                    menu[i].children.length !== 0
                ) {
                    temp = this.generatorMenu(
                        menu[i].children,
                        temp,
                        floor + 1
                    );
                }
                temp += `</div>`;
            }
            return temp;
        },
    },
    created() {},
    mounted() {
        this.refreshMenu();
        window.chooseNode = this.chooseNode;
        window.refreshMenu = this.refreshMenu;
        this.getNewMenu();
    },
};
</script>

<style lang="less" scoped>
#leftMenu {
    min-height: calc(100vh - 44px - 1rem);
    background-color: #1f2937;
    color: white;
    text-align: left;
    padding: 0.5rem 1rem;
    padding-top: 60px;
    font-size: large;
    font-weight: bold;
    z-index: 99;
    overflow: scroll;
    top: 0;
    bottom: 0;
    position: fixed;
    overflow-y: scroll;
    overflow-x: hidden;
    .selectedM {
        background-color: #374151;
    }
    .menuOption {
        cursor: pointer;
        &:hover {
            color: yellow;
        }
    }
}
</style>
