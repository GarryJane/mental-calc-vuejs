<template>
    <a :id="btnName" :class="btnClass" >{{ btnName }}</a>
</template>

<script>
    export default {
        name: "calc-btn",
        props: ['btnName','btnClass']
    }
</script>

<style scoped>

    .digitBtn {
        display: block;
        margin: 0 auto;
        width: 70px;
        height: 70px;
        line-height: 70px;
        border: 1px solid lightblue;
        border-radius: 50%;
        transition: background-color 1s;
        font-size: 20px;
        font-weight: bolder;
    }

    .digitBtn:hover {
        background-color: lightblue;
        cursor: pointer;
    }

    .digitBtn__nav {
        background-color: lightgray;
    }
    .digitBtn__nav:hover {
        background-color: grey;
        cursor: pointer;
    }


</style>