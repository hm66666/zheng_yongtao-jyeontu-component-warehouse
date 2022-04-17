# JYeontu 组件仓库

#### 介绍

日常开发组件/工具库
vue 组件 + js 函数工具

封装一些有趣（实用的小组件），后续会不断迭代优化。

#### 项目结构

```txt
┌───babel.config.js
├───examples        //demo代码
├──────examples/App.vue
├──────examples/assets
├─────────examples/assets/1.png
├─────────examples/assets/icon
├────────────examples/assets/icon/iconfont.css
├────────────examples/assets/icon/iconfont.json
├────────────examples/assets/icon/iconfont.ttf
├────────────examples/assets/icon/iconfont.woff
├────────────examples/assets/icon/iconfont.woff2
├─────────examples/assets/logo.png
├─────────examples/assets/logo1.png
├─────────examples/assets/test.jpg
├──────examples/components
├─────────examples/components/common
├────────────examples/components/common/heightligthCode.vue
├────────────examples/components/common/JDropDownBox.vue
├────────────examples/components/common/methodTest.vue
├─────────examples/components/games
├────────────examples/components/games/Tetris
├───────────────examples/components/games/Tetris/config.json
├───────────────examples/components/games/Tetris/control.js
├───────────────examples/components/games/Tetris/Tetris.vue
├───────────────examples/components/games/Tetris/tools.js
├─────────examples/components/menu
├────────────examples/components/menu/left.vue
├────────────examples/components/menu/top.vue
├─────────examples/components/pages
├────────────examples/components/pages/JTabBar.vue
├────────────examples/components/pages/splitHorizontal.vue
├─────────examples/components/Toast
├────────────examples/components/Toast/index.js
├────────────examples/components/Toast/toast.vue
├──────examples/config
├─────────examples/config/router.json
├──────examples/main.js
├──────examples/router
├─────────examples/router/index.js
├──────examples/utils
├─────────examples/utils/dateTool.js
├─────────examples/utils/numsFormat.js
├─────────examples/utils/strTool.js
├──────examples/views
├─────────examples/views/componentShowViews
├────────────examples/views/componentShowViews/calendar.vue
├────────────examples/views/componentShowViews/canvasBroadView.vue
├────────────examples/views/componentShowViews/codeHeightLightView.vue
├────────────examples/views/componentShowViews/electronicNumber.vue
├────────────examples/views/componentShowViews/flowChartView.vue
├────────────examples/views/componentShowViews/JCommentView.vue
├────────────examples/views/componentShowViews/JDialogView.vue
├────────────examples/views/componentShowViews/JDropDownBoxView.vue
├────────────examples/views/componentShowViews/JFloatDivView.vue
├────────────examples/views/componentShowViews/JHoverBtnView.vue
├────────────examples/views/componentShowViews/JNumRollingView.vue
├────────────examples/views/componentShowViews/JStepsView.vue
├────────────examples/views/componentShowViews/JTableView.vue
├────────────examples/views/componentShowViews/JTagListView.vue
├────────────examples/views/componentShowViews/JToastView.vue
├────────────examples/views/componentShowViews/JToolTipView.vue
├────────────examples/views/componentShowViews/JWordCloudView.vue
├─────────examples/views/games
├────────────examples/views/games/tetris.vue
├─────────examples/views/homePage
├────────────examples/views/homePage/homePage.vue
├─────────examples/views/installView.vue
├─────────examples/views/utilsTools
├────────────examples/views/utilsTools/dateToolView.vue
├────────────examples/views/utilsTools/numsFormatView.vue
├────────────examples/views/utilsTools/strToolView.vue
├─────────examples/views/versionInfo.vue
├───jsconfig.json
├───lib
├──────lib/demo.html
├──────lib/jvuewhell.common.js
├──────lib/jvuewhell.css
├──────lib/jvuewhell.umd.js
├──────lib/jvuewhell.umd.min.js
├───package-lock.json
├───package.json
├───packages        //组件代码
├──────packages/index.js
├──────packages/JCalendar
├─────────packages/JCalendar/index.js
├─────────packages/JCalendar/src
├────────────packages/JCalendar/src/JCalendar.vue
├──────packages/JCanvasBroad
├─────────packages/JCanvasBroad/index.js
├─────────packages/JCanvasBroad/src
├────────────packages/JCanvasBroad/src/JCanvasBroad.vue
├──────packages/JCodeHeightLight
├─────────packages/JCodeHeightLight/index.js
├─────────packages/JCodeHeightLight/src
├────────────packages/JCodeHeightLight/src/JCodeHeightLight.vue
├──────packages/JComment
├─────────packages/JComment/img
├────────────packages/JComment/img/表情.png
├────────────packages/JComment/img/评论.png
├─────────packages/JComment/index.js
├─────────packages/JComment/src
├────────────packages/JComment/src/JComment.vue
├──────packages/JDialog
├─────────packages/JDialog/index.js
├─────────packages/JDialog/src
├────────────packages/JDialog/src/JDialog.vue
├──────packages/JDropDownBox
├─────────packages/JDropDownBox/index.js
├─────────packages/JDropDownBox/src
├────────────packages/JDropDownBox/src/JDropDownBox.vue
├──────packages/JElectronicNumber
├─────────packages/JElectronicNumber/index.js
├─────────packages/JElectronicNumber/src
├────────────packages/JElectronicNumber/src/JElectronicNumber.vue
├──────packages/JFloatDiv
├─────────packages/JFloatDiv/index.js
├─────────packages/JFloatDiv/src
├────────────packages/JFloatDiv/src/JFloatDiv.vue
├──────packages/JFlowChart
├─────────packages/JFlowChart/index.js
├─────────packages/JFlowChart/src
├────────────packages/JFlowChart/src/JFlowChart.vue
├──────packages/JFold
├──────packages/JHoverBtn
├─────────packages/JHoverBtn/index.js
├─────────packages/JHoverBtn/src
├────────────packages/JHoverBtn/src/JHoverBtn.vue
├──────packages/JMessageBox
├─────────packages/JMessageBox/index.js
├─────────packages/JMessageBox/src
├────────────packages/JMessageBox/src/main.js
├────────────packages/JMessageBox/src/main.vue
├──────packages/JNumRolling
├─────────packages/JNumRolling/index.js
├─────────packages/JNumRolling/src
├────────────packages/JNumRolling/src/JNumRolling.vue
├──────packages/JSteps
├─────────packages/JSteps/index.js
├─────────packages/JSteps/src
├────────────packages/JSteps/src/JSteps.vue
├──────packages/JTable
├─────────packages/JTable/index.js
├─────────packages/JTable/src
├────────────packages/JTable/src/JTable.vue
├────────────packages/JTable/src/JTr.vue
├──────packages/JTagList
├─────────packages/JTagList/index.js
├─────────packages/JTagList/src
├────────────packages/JTagList/src/JTagList.vue
├──────packages/JToast
├─────────packages/JToast/index.js
├─────────packages/JToast/src
├────────────packages/JToast/src/JToast.vue
├──────packages/JToolTip
├─────────packages/JToolTip/index.js
├─────────packages/JToolTip/src
├────────────packages/JToolTip/src/JToolTip.vue
├──────packages/JWordCloud
├─────────packages/JWordCloud/components
├────────────packages/JWordCloud/components/renderColor.vue
├─────────packages/JWordCloud/index.js
├─────────packages/JWordCloud/src
├────────────packages/JWordCloud/src/JWordCloud.vue
├──────packages/pagesTools
├─────────packages/pagesTools/JTabBar.vue
├─────────packages/pagesTools/splitHorizontal.vue
├──────packages/utils
├─────────packages/utils/dateTool.js
├─────────packages/utils/numsFormat.js
├─────────packages/utils/strTool.js
├───postcss.config.js
├───public
├──────public/favicon.ico
├──────public/index.html
├───README.md
└───vue.config.js
```

#### 安装教程

##### 本地启动项目

1.  git clone https://gitee.com/zheng_yongtao/jyeontu-component-warehouse.git
2.  npm install
3.  npm run serve

##### 项目引入

###### npm 安装

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

```shell
npm i @jyeontu/jvuewheel -S
```

###### main.js 引入

引入后便可以在项目中直接使用

```shell
//引入组件库
import jvuewheel from '@jyeontu/jvuewheel'
//引入样式
import '@jyeontu/jvuewheel/lib/jvuewhell.css'
Vue.use(jvuewheel);
```

#### 效果预览

[预览地址(使用文档)](http://jyeontu.xyz/jvuewheel/#/homePage)

#### 组件文档

组件文档：[http://jyeontu.xyz/jvuewheel/#/homePage](http://jyeontu.xyz/jvuewheel/#/homePage)

#### 组件博客说明

1.  日历组件（JCalendar）：[https://blog.csdn.net/Twinkle_sone/article/details/120465663](http://https://blog.csdn.net/Twinkle_sone/article/details/120465663)
2.  电子屏数字（JElectronicNumber）：[https://blog.csdn.net/Twinkle_sone/article/details/120582994](https://blog.csdn.net/Twinkle_sone/article/details/120582994)
3.  流程图组件（JFlowchart）：[https://juejin.cn/post/7027147256914526216](https://juejin.cn/post/7027147256914526216)
4.  表格组件（JTable）
5.  代码高亮组件（JCodeHeightLight）：[https://blog.csdn.net/Twinkle_sone/article/details/121964878](https://blog.csdn.net/Twinkle_sone/article/details/121964878)
6.  canvas 画板组件（JCanvasBroad）：[https://blog.csdn.net/Twinkle_sone/article/details/121476250](https://blog.csdn.net/Twinkle_sone/article/details/121476250)
7.  数字滚动变化效果（JNumRolling）：[https://blog.csdn.net/Twinkle_sone/article/details/121541104](https://blog.csdn.net/Twinkle_sone/article/details/121541104)
8.  对话弹窗（JDialog）
9.  可拖拽悬浮按钮（JHoverBtn）：[https://blog.csdn.net/Twinkle_sone/article/details/121658022](https://blog.csdn.net/Twinkle_sone/article/details/121658022)
10. 步骤条（JSteps）
11. tag 标签列表（JTagList）
12. 下拉列表（JDropDownBox）
13. 提示弹框（JToast）
14. 词云图（JWordCloud）：[https://juejin.cn/post/7063366122766073869](https://juejin.cn/post/7063366122766073869)
15. 评论组件（JComment）：[https://juejin.cn/post/7081304655048736804](https://juejin.cn/post/7081304655048736804)
16. 悬浮提示（JToolTip）：[https://juejin.cn/post/7083030853332238343](https://juejin.cn/post/7083030853332238343)
17. 瀑布流照片容器（JWaterfall）：[https://juejin.cn/post/7083511816902410254](https://juejin.cn/post/7083511816902410254)
18. 弹幕组件（JBarrage）：[https://juejin.cn/post/7087599645387391012](https://juejin.cn/post/7087599645387391012)
19. 游戏（连连看）：[https://juejin.cn/post/7085933111308976158](https://juejin.cn/post/7085933111308976158)
20. 工具函数

#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request

#### 联系

个人博客：[http://jyeontu.xyz/JYeontuBlog/#/home](http://jyeontu.xyz/JYeontuBlog/#/home)

CSDN：[https://blog.csdn.net/Twinkle_sone](https://blog.csdn.net/Twinkle_sone)

Gitee：[https://gitee.com/zheng_yongtao](https://gitee.com/zheng_yongtao)

GitHub：[https://github.com/yongtaozheng](https://github.com/yongtaozheng)

掘金：[https://juejin.cn/user/440244290727294](https://juejin.cn/user/440244290727294)
