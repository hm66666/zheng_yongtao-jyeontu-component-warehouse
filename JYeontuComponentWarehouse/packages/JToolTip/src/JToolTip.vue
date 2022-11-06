<template>
    <span
        :style="{
            '--backgroundColor': toolTipStyle.backgroundColor,
            '--color': toolTipStyle.color,
            '--width': toolTipStyle.width,
        }"
    >
        <span
            :id="uid"
            class="j-tooltip"
            :data-tooltip="tipText"
            :style="getTextStyle()"
            ><slot></slot>
        </span>
    </span>
</template>

<script>
import { _toLittleCamel, getUId } from "../../utils/strTool";
export default {
    name: "JToolTip",
    props: {
        tipText: {
            type: String,
            default: "Tooltip Content",
        },
        textStyle: {
            type: Object,
            default: () => {
                return {
                    "border-bottom": "1px dotted black",
                };
            },
        },
        toolTipStyle: {
            type: Object,
            default: () => {
                return {
                    backgroundColor: "#062b45",
                    color: "#fff",
                    width: "100px",
                };
            },
        },
    },
    computed: {},
    data() {
        return {
            uid: "",
            tipStyle: {},
        };
    },
    created() {
        this.setUid();
    },
    methods: {
        setUid() {
            this.uid = getUId();
        },
        getTextStyle() {
            const textStyle = this.textStyle;
            let styleStr = "";
            for (const key in textStyle) {
                styleStr += _toLittleCamel(key) + ":" + textStyle[key] + ";";
            }
            return styleStr;
        },
    },
};
</script>

<style vars="{ backgroundColor, color, width }" lang="less" scoped>
.j-tooltip {
    position: relative;
    border-bottom: 1px dotted black;
}

.j-tooltip:before {
    content: attr(data-tooltip);
    position: absolute;
    width: var(--width);
    background-color: var(--backgroundColor);
    color: var(--color);
    text-align: center;
    padding: 10px;
    line-height: 1.2;
    border-radius: 6px;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.6s;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;
    font-size: 0.75em;
    visibility: hidden;
    word-break: break-all;
}

.j-tooltip:hover:before {
    opacity: 1;
    visibility: visible;
}
</style>
