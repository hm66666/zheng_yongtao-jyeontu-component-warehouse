import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};

let routerMenu = require("@/config/router.json");
routerMenu = routerMenu.menu || [];
let menu = [];
let formatRoute = function (routerMenu, menu) {
    routerMenu.forEach((element) => {
        let temp = {
            path: element.path,
            name: element.name,
            // 用require这种方式引入的时候，会将你的component分别打包成不同的js，加载的时候也是按需加载，只用访问这个路由网址时才会加载这个js
            component: (resolve) =>
                require([`@/${element.component}`], resolve),
        };
        menu.push(temp);
        if (element.children && element.children.length > 0) {
            formatRoute(element.children, menu);
        }
    });
};
formatRoute(routerMenu, menu);
const routes = [
    {
        path: "/",
        redirect: "/homePage",
    },
];
for (let i = 0; i < menu.length; i++) {
    routes.push(menu[i]);
}
const router = new VueRouter({
    routes,
});

export default router;
