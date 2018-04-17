<template>
    <div>
        <navBtn id="btnClose" name="X Close" url="/"></navBtn>
        <Timer id="timer"></Timer>
        <TaskField></TaskField>
        <DigitsField></DigitsField>
    </div>
</template>

<script>
    import NavBtn from './NavBtn'
    import Timer from './Timer'
    import TaskField from './TaskField'
    import DigitsField from './DigitsField'

    export default {
        name: "game",
        components: {
            NavBtn,
            Timer,
            TaskField,
            DigitsField
        }
    }
</script>

<style scoped>

</style>