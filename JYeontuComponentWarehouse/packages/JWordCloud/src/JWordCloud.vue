<template>
    <div>111</div>
</template>

<script>
export default {
    name: "JWordCloud",
    props: {
        textList: {
            type: Array,
            default: () => {
                return [
                    { text: "测试", freq: 10 },
                    { text: "测试1", freq: 5 },
                    { text: "测试2", freq: 7 },
                    { text: "测试3", freq: 2 }
                ];
            }
        },
        colorList: {
            type: Array,
            default: () => []
        },
        maxSize: {
            type: Number,
            default: 500
        },
        minSize: {
            type: Number,
            default: 100
        }
    },
    data() {
        return {
            maxFreq: 0,
            minFreq: 0,
            showTextLise: []
        };
    },
    mounted() {
        this.init();
        this.comShowtexList();
    },
    methods: {
        init() {
            const textList = this.textList;
            let maxF = textList[0].freq,
                minF = textList[0].freq;
            textList.map(item => {
                maxF = Math.max(maxF, item.freq);
                minF = Math.min(minF, item.freq);
            });
            this.maxFreq = maxF;
            this.minFreq = minF;
        },
        getSize(freq) {
            const baseSize = this.minSize;
            const addSize =
                ((this.maxSize - this.minSize) * (freq - this.minFreq)) /
                (this.maxFreq - this.minFreq);
            return baseSize + addSize;
        },
        comShowtexList() {
            let showTextLise = [];
            this.textList.map(item => {
                let temp = item;
                temp.size = this.getSize(item.freq);
                showTextLise.push(temp);
            });
            this.showTextLise = showTextLise;
        }
    }
};
</script>

<style lang="scss" scoped></style>
