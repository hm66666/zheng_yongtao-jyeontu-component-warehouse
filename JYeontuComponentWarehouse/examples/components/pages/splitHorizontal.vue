<template>
    <div>
        <div class="view-header">
            <slot name="header-p"></slot>
        </div>
        <div class="view-body">
            <div class="left-p">
                <slot name="left-p"></slot>
            </div>
            <div class="right-p">
                <slot name="right-p"></slot>
            </div>
        </div>
        <div class="mid-p">
            <slot name="mid-p"></slot>
        </div>
        <div class="view-footer">
            <slot name="footer-p"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "splitHorizontal",
};
</script>

<style lang="less" scoped>
.view-header {
    .j-title {
        font-size: x-large;
        text-align: left;
        margin-bottom: 1rem;
        .j-detail {
            font-size: medium;
            color: dimgrey;
            margin-top: 1rem;
        }
        .j-code {
            margin-top: 1rem;
            border: 0.5px solid lightslategrey;
            padding: 1rem;
            font-size: medium;
            color: black;
            line-height: 1.5rem;
        }
    }
}
.view-body {
    display: flex;
    flex-direction: row;
    .mid-p {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .left-p {
        width: 42%;
        margin-left: 2%;
        height: inherit;
        display: flex;
        margin: auto;
    }
    .right-p {
        width: 42%;
        // margin-top: 2rem;
        margin-left: 10%;
        height: inherit;
        display: flex;
        margin: auto;
    }
}
@media screen and (max-width: 1000px) {
    .view-body {
        display: flex;
        flex-direction: column;
        margin-left: 0;
        .left-p {
            width: 100%;
        }
        .right-p {
            width: 80%;
            margin: 2rem auto;
        }
    }
}
</style>
