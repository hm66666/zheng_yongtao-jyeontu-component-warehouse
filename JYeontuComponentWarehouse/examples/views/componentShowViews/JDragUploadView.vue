<template>
    <split-horizontal>
        <template v-slot:header-p>
            <div class="j-title">
                拖拽上传组件（JDragUpload）
                <div class="j-detail">拖拽上传组件，支持版本 ^0.6.5</div>
            </div>
        </template>
        <template v-slot:left-p>
            <div class="content">
                <div class="drag-upload-view">
                    <img
                        class="show-img-box"
                        alt=""
                        :src="showImg"
                        ref="showImg"
                    />
                    <div>{{ fileName }}</div>
                    <div class="drag-upload-box">
                        <JDragUpload @uploadFile="uploadFile"></JDragUpload>
                    </div>
                </div>
            </div>
        </template>
        <template v-slot:right-p>
            <div>
                <j-table :title="tableTitle" :tableData="tableData"> </j-table>
            </div>
        </template>
        <template v-slot:footer-p>
            <pre v-highlight>
                <code class="vue">
                    <div v-text="code"></div>
                </code>
            </pre>
        </template>
    </split-horizontal>
</template>
<script>
import { mixinForView } from "@/mixins/index.js";
import { blobToBase64 } from "@/utils/fileTool";
export default {
    name: "JDragUploadView",
    components: {},
    mixins: [mixinForView],
    data() {
        return {
            code: "",
            fileName: "",
            showImg: "",
            tableData: [],
        };
    },
    created() {
        this.initTableData();
        this.initCodeContent();
    },
    mounted() {},
    methods: {
        uploadFile(file) {
            blobToBase64(file, (base64String) => {
                this.fileName = file.name;
                this.showImg = base64String;
            });
        },
        initCodeContent() {
            this.code = `
<template>
    <div class="content">
        <div class="drag-upload-view">
            <img
                class="show-img-box"
                alt=""
                :src="showImg"
                ref="showImg"
            />
            <div>{{ fileName }}</div>
            <div class="drag-upload-box">
                <JDragUpload @uploadFile="uploadFile"></JDragUpload>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                fileName: "",
                showImg: "",
            }
        },
        methods: {
            uploadFile(file) {
                blobToBase64(file, (base64String) => {
                    this.fileName = file.name;
                    this.showImg = base64String;
                });
            },
        }
    }
<\/script>
<style scoped lang="less">
    .drag-upload-view {
        .show-img-box {
            width: 200px;
        }
        .drag-upload-box {
            width: 200px;
            height: 200px;
        }
    }
</style>
            `;
        },
        initTableData() {
            this.tableData = [
                {
                    parameter: "tipText",
                    field: "拖拽框显示提示文字",
                    type: "String",
                    describe: "默认为：将文件拖放到此处或点击上传",
                },
                {
                    parameter: "tipConfirmText",
                    field: "图片拖拽到拖拽框上时的提升文字",
                    type: "String",
                    describe: "默认为：释放文件以上传",
                },
                {
                    parameter: "uploadFile",
                    field: "上传图片后回调",
                    type: "Function",
                    describe: "将上传的文件blob回传",
                },
            ];
        },
    },
};
</script>
<style scoped lang="less">
.drag-upload-view {
    .show-img-box {
        width: 200px;
    }
    .drag-upload-box {
        width: 200px;
        height: 200px;
    }
}
</style>
