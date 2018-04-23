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
        margin: 0 auto;
        min-width: 320px;
        max-width: 800px;
    }
</style>