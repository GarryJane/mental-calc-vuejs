<template>
    <div>
        <SettingsDescription></SettingsDescription>
        <SettingsForm></SettingsForm>
        <navBtn id="gameBtn" name="Play!" url="#/game/"></navBtn>
    </div>
</template>

<script>

    import SettingsDescription from './SettingsDescription'
    import SettingsForm from './SettingsForm'
    import NavBtn from './NavBtn'

    export default {
        name: 'Settings',
        components: {
            SettingsDescription,
            SettingsForm,
            NavBtn
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #gameBtn {
        position: absolute;
        right: 0;
    }
</style>
