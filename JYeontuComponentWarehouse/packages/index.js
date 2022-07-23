/*
 * @Author: zheng yong tao
 * @Date: 2022-02-20 21:41:33
 * @LastEditors: zheng yong tao
 * @LastEditTime: 2022-03-12 23:13:36
 * @Description:
 */
import JCalendar from "./JCalendar";
import JTable from "./JTable";
import JCanvasBroad from "./JCanvasBroad";
import JCodeHeightLight from "./JCodeHeightLight";
import JFlowChart from "./JFlowChart";
import JElectronicNumber from "./JElectronicNumber";
import JNumRolling from "./JNumRolling";
import JDialog from "./JDialog";
import JHoverBtn from "./JHoverBtn";
import JFloatDiv from "./JFloatDiv";
import JSteps from "./JSteps";
import JDropDownBox from "./JDropDownBox";
import JTagList from "./JTagList";
import JToast from "./JToast";
import JWordCloud from "./JWordCloud";
import JComment from "./JComment";
import JToolTip from "./JToolTip";
import JWaterfall from "./JWaterfall";
import JBarrage from "./JBarrage";
import JBarrageRain from "./JBarrageRain";
import JAppsLock from "./JAppsLock";
import JVideoCover from "./JVideoCover";

// 存储组件列表
const components = [
    JCalendar,
    JTable,
    JCanvasBroad,
    JCodeHeightLight,
    JFlowChart,
    JElectronicNumber,
    JNumRolling,
    JDialog,
    JHoverBtn,
    JFloatDiv,
    JSteps,
    JDropDownBox,
    JTagList,
    JToast,
    JWordCloud,
    JComment,
    JToolTip,
    JWaterfall,
    JBarrage,
    JBarrageRain,
    JAppsLock,
    JVideoCover
    // Toast
];

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function(Vue) {
    // 判断是否安装
    if (install.installed) return;
    // 遍历注册全局组件
    components.map(component => {
        if (component.name === "JToast") {
            Vue.use(component);
        } else {
            Vue.component(component.name, component);
        }
    });
};

// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
}

export default {
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    // 以下是具体的组件列表
    ...components
};
