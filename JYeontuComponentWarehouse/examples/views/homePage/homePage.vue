<!--
 * @Author: zheng yong tao
 * @Date: 2022-01-26 21:47:09
 * @LastEditors: zheng yong tao
 * @LastEditTime: 2022-03-27 21:27:33
 * @Description: 
-->
<template>
    <div class="home">
        <div class="per-link" v-for="item in myLink" :key="item.name">
            <span class="link-name">{{ item.name }}：</span>
            <span
                class="link-address"
                v-if="item.address"
                @click="toAddress(item.address)"
                >{{ item.address }}</span
            >
            <span class="link-address" v-if="item.text">{{ item.text }}</span>
            <div>
                <img alt="" v-if="item.image" :src="item.image" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "homePage",
    components: {},
    data() {
        return {
            myLink: [
                {
                    name: "CSDN",
                    address: "https://blog.csdn.net/Twinkle_sone",
                },
                {
                    name: "Gitee",
                    address: "https://gitee.com/zheng_yongtao",
                },
                {
                    name: "GitHub",
                    address: "https://github.com/yongtaozheng",
                },
                {
                    name: "掘金",
                    address: "https://juejin.cn/user/440244290727294",
                },
                {
                    name: "个人博客",
                    address: "http://jyeontu.xyz/JYeontuBlog/#/home",
                },
                {
                    name: "微信公众号",
                    text: "『前端也能这么有趣』",
                    image: require("../../assets/gzhCode.jpg"),
                },
            ],
        };
    },
    methods: {
        toAddress(url) {
            window.open(url);
        },
    },
    mounted() {},
};
</script>

<style lang="less" scoped>
.home {
    text-align: center;
}
.head-img {
    border-radius: 50% 50%;
    margin-top: 1rem;
}
.per-link {
    margin-top: 1rem;
    font-size: larger;
    .link-name {
    }
    .link-address {
        text-decoration: underline;
        text-underline: blue;
        color: blue;
        cursor: pointer;
    }
}
</style>
