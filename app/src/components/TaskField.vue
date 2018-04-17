<template>

    <form id="task" action="">
        <template v-for="(n, key) in numbers">
            <input class="number" type="text" :value="n" readonly>
            <a class="operator">{{ operators[key] }}</a>
        </template>
        <input class="number" type="text" :value="res">
    </form>

</template>

<script>
    export default {
        name: "task-field",
        data: function () {
            return {
                numbers: [1, '', ''],
                operators: ['+', '+', '='],
                res: 8
            }
        }
    }

</script>

<style scoped>

    #task {
       margin: 50px 90px;
    }

    .number {
        width: 20%;
        text-align: center;
        border: 0;
        border-bottom: 1px solid lightblue;
        font-size: 150%;

    }

</style>