<template>
    <table @click=onBtnClick id="digitsField">
        <tr>
            <td><calc-btn btnName="1" btnClass="digitBtn"></calc-btn></td>
            <td><calc-btn btnName="2" btnClass="digitBtn"></calc-btn></td>
            <td><calc-btn btnName="3" btnClass="digitBtn"></calc-btn></td>
            <td><calc-btn btnName="<" btnClass="digitBtn digitBtn__nav"></calc-btn></td>
        </tr>
        <tr>
            <td><calc-btn btnName="4" btnClass="digitBtn"></calc-btn></td>
            <td><calc-btn btnName="5" btnClass="digitBtn"></calc-btn></td>
            <td><calc-btn btnName="6" btnClass="digitBtn"></calc-btn></td>
            <td><calc-btn btnName=">" btnClass="digitBtn digitBtn__nav"></calc-btn></td>        </tr>
        <tr>
            <td><calc-btn btnName="7" btnClass="digitBtn"></calc-btn></td>
            <td><calc-btn btnName="8" btnClass="digitBtn"></calc-btn></td>
            <td><calc-btn btnName="9" btnClass="digitBtn"></calc-btn></td>
            <td><calc-btn btnName="?" btnClass="digitBtn digitBtn__nav"></calc-btn></td>        </tr>
        <tr>
            <td colspan=3><calc-btn btnName="0" btnClass="digitBtn"></calc-btn></td>
            <td><calc-btn btnName="=" btnClass="digitBtn digitBtn__nav"></calc-btn></td>
        </tr>
    </table>
</template>

<script>
    import CalcBtn from './CalcBtn'

    export default {
        name: "digits-field",
        components: {
            CalcBtn
        },
        methods: {
            onBtnClick: function(e) {
                console.log(e.target.id);
            }
        }
    }
</script>

<style scoped>
    #digitsField {
        margin: 0 auto;
    }
    #digitsField > tr > td {
        text-align: center;
        border: none;
        padding: 15px;
    }

</style>