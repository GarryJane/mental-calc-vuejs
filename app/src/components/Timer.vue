<template>
    <div class="timer">{{ timeLeft }} sec.</div>
</template>

<script>
    export default {
        name: "timer",
        data: function () {
            return {
                timeLeft: 300
            }
        },
        mounted: function () {
            let self = this;
            setInterval(function () {
                --self.timeLeft
            }, 1000)
        }
    }

</script>

<style scoped>
    .timer {
        position: absolute;
        right: 0;
        top: 0;
        width: 75px;
        height: 25px;
        border: 1px solid lightblue;
        text-align: center;
        line-height: 25px;

    }
</style>