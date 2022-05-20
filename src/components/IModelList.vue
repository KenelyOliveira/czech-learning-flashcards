<template>
    <table  class="table table-striped table-bordered">
        <tr>
            <th colspan="3">Končí na -it, -et, -ět</th>
        </tr>
        <tr>
            <td><span>Já</span></td>
            <td><span><b>-ím</b></span></td>
            <td><span>Já rozum<b>ím</b></span></td>
        </tr>
        <tr>
            <td><span>Ty</span></td>
            <td><span><b>-íš</b></span></td>
            <td><span>Ty rozum<b>íš</b></span></td>
        </tr>
        <tr>
            <td><span>On/Ona/To</span></td>
            <td><span><b>-í</b></span></td>
            <td><span>On/Ona/To rozum<b>í</b></span></td>
        </tr>
        <tr>
            <td><span>My</span></td>
            <td><span><b>-íme</b></span></td>
            <td><span>My rozum<b>íme</b></span></td>
        </tr>
        <tr>
            <td><span>Vy</span></td>
            <td><span><b>-íte</b></span></td>
            <td><span>Vy rozum<b>íte</b></span></td>
        </tr>
        <tr>
            <td><span>Oni</span></td>
            <td><span><b>-í</b></span></td>
            <td><span>Oni rozum<b>í</b></span></td>
        </tr>
    </table>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";

export default class IModelList extends Vue {
  
}
</script>
<style scoped>
table {
  color: #A2B38B !important;
  font-size: larger;
}

th {
    border: none !important;
}
</style>