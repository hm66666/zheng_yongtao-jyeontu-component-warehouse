<template>
    <split-horizontal>
        <template v-slot:header-p>
            <div class="j-title">
                代码高亮组件（JCodeHeightLight）
                <div class="j-detail">自定义代码关键字高亮组件</div>
            </div>
        </template>
        <template v-slot:mid-p>
            <j-table :title="title1" :tableData="tableData1" class="middle">
            </j-table>
        </template>
        <template v-slot:footer-p>
            <j-code-height-light :code="code" class="footer">
            </j-code-height-light>
        </template>
    </split-horizontal>
</template>

<script>
import { mixinForView } from "@/mixins/index.js";
export default {
    name: "codeHeightLightView",
    //import引入的组件需要注入到对象中才能使用",
    components: {},
    mixins: [mixinForView],
    data() {
        //这里存放数据",
        return {
            title1: [
                {
                    title: "参数", //展示列名
                    key: "parameter", //字段名
                    type: "", // 列类型
                    readOnly: true, //是否只读
                    width: "20vw", //列宽度
                    columnStyle: "", // 列样式
                    fixed: false, //是否固定
                    sort: false, // 是否支持排序
                },
                {
                    title: "字段名", //展示列名
                    key: "field", //字段名
                    type: "", // 列类型
                    readOnly: true, //是否只读
                    width: "30vw", //列宽度
                    columnStyle: "", // 列样式
                    fixed: false, //是否固定
                    sort: false, // 是否支持排序
                },
                {
                    title: "数据类型", //展示列名
                    key: "type", //字段名
                    type: "", // 列类型
                    readOnly: true, //是否只读
                    width: "15vw", //列宽度
                    columnStyle: "", // 列样式
                    fixed: false, //是否固定
                    sort: false, // 是否支持排序
                },
                {
                    title: "描述", //展示列名
                    key: "describe", //字段名
                    type: "", // 列类型
                    readOnly: true, //是否只读
                    width: "35vw", //列宽度
                    columnStyle: "", // 列样式
                    fixed: false, //是否固定
                    sort: false, // 是否支持排序
                },
            ],
            tableData1: [
                {
                    parameter: "code",
                    field: "代码串",
                    type: "String",
                    describe: "需要展示的代码串，可以使用模板字符串定义传入",
                },
                {
                    parameter: "color",
                    field: "关键字颜色配置",
                    type: "Object",
                    describe: "详细参数可展开查看",
                },
                {
                    parameter: "keyWords",
                    field: "自定义高亮关键字",
                    type: "Array",
                    describe:
                        "如：keyWords:[{value:'numsFormat',color:'green'}]",
                },
            ],
            code: "",
        };
    },
    //监听属性 类似于data概念",
    computed: {},
    //监控data中的数据变化",
    watch: {},
    //方法集合",
    methods: {
        initData() {
            const title1 = [...this.title1];
            let tableData1 = this.tableData1;
            let colorObj = {
                title: title1,
                data: [
                    {
                        parameter: "keyWord",
                        field: "js关键字颜色",
                        type: "String",
                        describe: "设置js关键字颜色，默认值为orange",
                    },
                    {
                        parameter: "varWord",
                        field: "js变量颜色",
                        type: "String",
                        describe: "设置js变量颜色，默认值为purple",
                    },
                    {
                        parameter: "tagWord",
                        field: "html标签颜色",
                        type: "String",
                        describe: "设置html标签颜色，默认值为#F9273F",
                    },
                    {
                        parameter: "attrWord",
                        field: "html属性颜色",
                        type: "String",
                        describe: "设置html属性颜色，默认值为green",
                    },
                    {
                        parameter: "attrValue",
                        field: "html属性值颜色",
                        type: "String",
                        describe: "设置html属性值颜色，默认值为yellow",
                    },
                    {
                        parameter: "strWord",
                        field: "字符串变量值颜色",
                        type: "String",
                        describe: "设置字符串变量值颜色，默认值为green",
                    },
                    {
                        parameter: "methodkeyWord",
                        field: "js方法名颜色",
                        type: "String",
                        describe: "设置js方法名颜色，默认值为#74759b",
                    },
                    {
                        parameter: "functionkeyWord",
                        field: "自定义函数名颜色",
                        type: "String",
                        describe: "设置自定义函数名颜色，默认值为#2c9678",
                    },
                    {
                        parameter: "note",
                        field: "注释颜色",
                        type: "String",
                        describe: "设置注释颜色，默认值为grey",
                    },
                ],
            };
            let keyWordObj = {
                title: title1,
                data: [
                    {
                        parameter: "value",
                        field: "关键字",
                        type: "String",
                        describe: "自定义关键字",
                    },
                    {
                        parameter: "color",
                        field: "关键字颜色",
                        type: "String",
                        describe: "设置自定义关键字颜色",
                    },
                ],
            };
            tableData1[1].children = colorObj;
            tableData1[2].children = keyWordObj;
        },
    },
    //生命周期 - 创建之前",数据模型未加载,方法未加载,html模板未加载
    beforeCreate() {},
    //生命周期 - 创建完成（可以访问当前this实例）",数据模型已加载，方法已加载,html模板已加载,html模板未渲染
    created() {
        this.initData();
        this.code = `
		<j-code-height-light :code = "code" 
				:keyWords = "keyWords" 
				:color = "color">
		</j-code-height-light>
		<!-- 注释 -->
		<div class = 'body'>
			<div class = 'title'>标题</div>
			<div class = 'main'>
				<span>内容</span>
			</div>
		</div>
        /**
         * 组件参数配置如下
         */
        props: {
            code: {
                type: String,
                default: ''
            },
            keyWords:{
                type:Array,
                default:[
                    {
                        value:'关键字1',
                        color:'颜色1'
                    },
                    {
                        value:'关键字2',
                        color:'颜色2'
                    }
                ]
            },
            color:{
                type: Object,
                default: {
                    keyWord:'orange',//js关键字
                    varWord:'purple',//js变量
                    tagWord:'#F9273F',//html标签
                    strWord:'green',//字符串变量值
                    attrWord:'green',//html属性
                    attrValue:'yellow',//html属性值
                    methodkeyWord:'#74759b',//js方法
                    functionkeyWord:'#2c9678',//自定义函数
                    note:'grey'//注释
                }
            }
        },
        methods:{
            test(){
                console.log('test');
            },
            testP(p1,p2){
                console.log(p1,p2);
            }
        }
		 `;
    },
    //生命周期 - 挂载之前",html模板未渲染
    beforeMount() {},

    //生命周期 - 挂载完成（可以访问DOM元素）",html模板已渲染
    mounted() {},

    //生命周期 - 更新之前",数据模型已更新,html模板未更新
    beforeUpdate() {},
    //生命周期 - 更新之后",数据模型已更新,html模板已更新
    updated() {},
    //生命周期 - 销毁之前",
    beforeDestroy() {},
    destroyed() {},
    //生命周期 - 销毁完成",
    //如果页面有keep-alive缓存功能，这个函数会触发",
    activated() {},
};
</script>

<style lang="less" scoped>
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
.header {
    min-height: 4rem;
    text-align: center;
}
.middle {
    width: 80%;
    margin: auto auto;
}
.footer {
    margin-top: 2rem;
    margin-left: 2%;
    width: 95%;
}
</style>
