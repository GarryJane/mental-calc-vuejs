<template>
    <div>
        <SettingsDescription></SettingsDescription>
        <navBtn id="gameBtn" name="Game" url="#/game/"></navBtn>
    </div>
</template>

<script>

    import SettingsDescription from './SettingsDescription'
    import NavBtn from './NavBtn'

    export default {
        name: 'Settings',
         components: {
            SettingsDescription,
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
