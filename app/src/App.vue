<template>
    <div id="app" class="wrapper">
        <router-view/>
    </div>
</template>

<script>

    export default {
        name: 'App',
    }

</script>

<style>

    .wrapper {
        position: relative;
        margin: 15px;
        min-width: 400px;
        max-width: 800px;
    }

</style>