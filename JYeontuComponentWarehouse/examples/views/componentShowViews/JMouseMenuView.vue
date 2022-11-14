<template>
    <split-horizontal>
        <template v-slot:header-p>
            <div class="j-title">
                鼠标右键菜单栏（JMouseMenu）
                <div class="j-detail">自定义鼠标右键菜单栏</div>
            </div>
        </template>
        <template v-slot:left-p>
            <div class="content">
                <div
                    id="j-mouse-menu-view-content1"
                    class="j-mouse-menu-view-content"
                >
                    使用参数menu传入菜单展示列表，在本框框内使用右键点击试试
                    <j-mouse-menu
                        :domId="'j-mouse-menu-view-content1'"
                        :menu="myMenu"
                        @menuClick="menuClick"
                    >
                        <template v-slot:header>
                            <div class="menu-slot-header">🌝JYeontu</div>
                        </template>
                        <template v-slot:footer>
                            <div class="menu-slot">
                                🦁🐼
                            </div>
                        </template>
                    </j-mouse-menu>
                </div>
                <div
                    id="j-mouse-menu-view-content2"
                    class="j-mouse-menu-view-content"
                >
                    slot插槽自定义菜单内容，在本框框内使用右键点击试试
                    <j-mouse-menu :domId="'j-mouse-menu-view-content2'">
                        <template v-slot:header>
                            <div class="menu-slot-header">🌝JYeontu</div>
                        </template>
                        <template v-slot:body>
                            <ul>
                                <li @click="alert('插槽1')">插槽1</li>
                                <li @click="alert('插槽2')">插槽2</li>
                                <li @click="alert('插槽3')">插槽3</li>
                            </ul>
                        </template>
                        <template v-slot:footer>
                            <div class="menu-slot">
                                🦁🐼
                            </div>
                        </template>
                    </j-mouse-menu>
                </div>
            </div>
        </template>
        <template v-slot:right-p>
            <div>
                <j-table
                    :title="tableTitle"
                    :tableData="tableData"
                    style="height: 400px"
                >
                </j-table>
            </div>
        </template>
        <template v-slot:footer-p>
            <pre v-highlight>
                <code class="vue" v-text="code">
                </code>
            </pre>
        </template>
    </split-horizontal>
</template>
<script>
import splitHorizontal from "@/components/pages/splitHorizontal.vue";
export default {
    name: "JMouseMenuView",
    components: {
        splitHorizontal
    },
    data() {
        return {
            code: "",
            tableTitle: [
                {
                    title: "参数", //展示列名
                    key: "parameter", //字段名
                    type: "", // 列类型
                    readOnly: true, //是否只读
                    width: "20vw", //列宽度
                    columnStyle: "", // 列样式
                    fixed: false, //是否固定
                    sort: false // 是否支持排序
                },
                {
                    title: "字段名", //展示列名
                    key: "field", //字段名
                    type: "", // 列类型
                    readOnly: true, //是否只读
                    width: "30vw", //列宽度
                    columnStyle: "", // 列样式
                    fixed: false, //是否固定
                    sort: false // 是否支持排序
                },
                {
                    title: "数据类型", //展示列名
                    key: "type", //字段名
                    type: "", // 列类型
                    readOnly: true, //是否只读
                    width: "15vw", //列宽度
                    columnStyle: "", // 列样式
                    fixed: false, //是否固定
                    sort: false // 是否支持排序
                },
                {
                    title: "描述", //展示列名
                    key: "describe", //字段名
                    type: "", // 列类型
                    readOnly: true, //是否只读
                    width: "35vw", //列宽度
                    columnStyle: "", // 列样式
                    fixed: false, //是否固定
                    sort: false // 是否支持排序
                }
            ],
            tableData: [
                {
                    parameter: "domId",
                    field: "修改右键菜单的dom节点id",
                    type: "String",
                    describe:
                        "修改右键菜单的dom节点id，在改节点上右键点击会展示自定义的菜单列表"
                },
                {
                    parameter: "menu",
                    field: "需要展示的菜单栏列表",
                    type: "Boolean",
                    describe: "具体参数如下"
                },
                {
                    parameter: "menuClick",
                    field: "菜单点击事件",
                    type: "Function",
                    describe: "会将点击的对象作为参数回调"
                },
                {
                    parameter: "header",
                    field: "菜单顶部插槽",
                    type: "html",
                    describe: "展开可查看例子",
                    children: {
                        type: "text",
                        text:
                            '\n<template v-slot:header>\n\t<div class="menu-slot-header">🌝JYeontu</div>\n</template>'
                    }
                },
                {
                    parameter: "body",
                    field: "菜单内容插槽",
                    type: "html",
                    describe: "展开可查看例子",
                    children: {
                        type: "text",
                        text: `\n<template v-slot:body>\n\t<ul>\n\t\t<li @click="alert('插槽1')">插槽1</li>\n\t\t<li @click="alert('插槽2')">插槽2</li>\n\t\t<li @click="alert('插槽3')">插槽3</li>\n\t</ul>\n</template>`
                    }
                },
                {
                    parameter: "footer",
                    field: "菜单底部插槽",
                    type: "html",
                    describe: "展开可查看例子",
                    children: {
                        type: "text",
                        text:
                            '\n<template v-slot:footer>\n\t<div class="menu-slot">🦁🐼</div>\n</template>'
                    }
                }
            ],
            myMenu: [
                {
                    id: "1",
                    label: "菜单1"
                },
                {
                    id: "2",
                    label: "菜单2",
                    click: this.test
                },
                {
                    id: "3",
                    label: "菜单3"
                },
                {
                    id: "4",
                    label: "菜单4"
                },
                {
                    id: "5",
                    label: "菜单5"
                }
            ]
        };
    },
    created() {
        this.tableData[1].children = {
            title: this.tableTitle,
            data: [
                {
                    parameter: "id",
                    field: "菜单项id",
                    type: "String",
                    describe: "菜单项id"
                },
                {
                    parameter: "label",
                    field: "菜单项展示内容",
                    type: "String",
                    describe: "菜单项展示内容"
                },
                {
                    parameter: "click",
                    field: "菜单点击事件",
                    type: "Function",
                    describe: "菜单点击事件，未定义值回调menuClick"
                }
            ]
        };
        this.code = `
<template>
    <div>
        <div
            id="j-mouse-menu-view-content1"
            class="j-mouse-menu-view-content"
        >
            使用参数menu传入菜单展示列表，在本框框内使用右键点击试试
            <j-mouse-menu
                :domId="'j-mouse-menu-view-content1'"
                :menu="myMenu"
                @menuClick="menuClick"
            >
                <template v-slot:header>
                    <div class="menu-slot-header">🌝JYeontu</div>
                </template>
                <template v-slot:footer>
                    <div class="menu-slot">
                        🦁🐼
                    </div>
                </template>
            </j-mouse-menu>
        </div>
        <div
            id="j-mouse-menu-view-content2"
            class="j-mouse-menu-view-content"
        >
            slot插槽自定义菜单内容，在本框框内使用右键点击试试
            <j-mouse-menu :domId="'j-mouse-menu-view-content2'">
                <template v-slot:header>
                    <div class="menu-slot-header">🌝JYeontu</div>
                </template>
                <template v-slot:body>
                    <ul>
                        <li @click="alert('插槽1')">插槽1</li>
                        <li @click="alert('插槽2')">插槽2</li>
                        <li @click="alert('插槽3')">插槽3</li>
                    </ul>
                </template>
                <template v-slot:footer>
                    <div class="menu-slot">
                        🦁🐼
                    </div>
                </template>
            </j-mouse-menu>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                myMenu: [
                    {
                        id: "1",
                        label: "菜单1"
                    },
                    {
                        id: "2",
                        label: "菜单2",
                        click: this.test
                    },
                    {
                        id: "3",
                        label: "菜单3"
                    },
                    {
                        id: "4",
                        label: "菜单4"
                    },
                    {
                        id: "5",
                        label: "菜单5"
                    }
                ]
            }
        },
        methods:{
            menuClick(menuItem) {
                alert("点击了：" + menuItem.label);
            },
            test(menuItem) {
                alert("test-" + menuItem.id);
            },
            alert(label) {
                alert("点击了：" + label);
            }
        }
    }
<\/script>
<style lang="less" scoped>
.j-mouse-menu-view-content {
    min-height: 20vh;
    min-width: 100%;
    border: 1px skyblue solid;
    .menu-slot {
        text-align: center;
    }
    .menu-slot-header {
        line-height: 1.5;
    }
}
</style>
`;
    },
    mounted() {},
    methods: {
        menuClick(menuItem) {
            alert("点击了：" + menuItem.label);
        },
        test(menuItem) {
            alert("test-" + menuItem.id);
        },
        alert(label) {
            alert("点击了：" + label);
        }
    }
};
</script>
<style scoped lang="less">
.title {
    font-size: x-large;
    text-align: left;
    margin-bottom: 1rem;
    .detail {
        font-size: medium;
        color: dimgrey;
        margin-top: 1rem;
    }
}
.content {
    margin: auto auto;
    // width: 50%;
    .j-mouse-menu-view-content {
        min-height: 20vh;
        min-width: 100%;
        border: 1px skyblue solid;
        .menu-slot {
            text-align: center;
        }
        .menu-slot-header {
            line-height: 1.5;
        }
    }
}
.header {
    min-height: 4rem;
    text-align: center;
}
.footer {
    margin-top: 2rem;
    margin-left: 2%;
    width: 95%;
}
</style>
