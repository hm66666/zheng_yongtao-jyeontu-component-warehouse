import "@/assets/icon/iconfont.css";

// 使用 require.context 动态导入所有组件
const modulesFiles = require.context("./components/", true, /\.js$/);

const components = modulesFiles.keys().reduce((components, modulePath) => {
    // 排除自身这个文件
    if (modulePath === "./index.js") return components;

    // 获取组件名和组件配置
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
    const value = modulesFiles(modulePath);

    components[moduleName] = value.default;
    return components;
}, {});

// 定义 install 方法，接收 Vue 作为参数。
const install = function (Vue) {
    if (install.installed) return;

    // 遍历注册全局组件
    Object.values(components).forEach((component) => {
        // 如果组件提供了 install 方法，则使用 install 方法注册
        if (typeof component.install === "function") {
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
    ...components,
};
