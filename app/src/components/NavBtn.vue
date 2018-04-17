<template>
    <a class="btn" :href=url>{{ name }}</a>
</template>

<script>
    export default {
        name: "nav-btn",
        props: ['name', 'url']
    }
</script>

<style scoped>

    .btn {
        display: inline-block;
        width: 75px;
        height: 25px;
        border: 1px solid lightblue;
        text-align: center;
        line-height: 25px;
        transition: background-color 2s;
        font-size: 16px;
    }

    .btn[href] {
        text-decoration: none;
        color: black;
    }

    .btn:hover {
        background-color: lightblue;
    }

</style>