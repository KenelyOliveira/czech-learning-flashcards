<template>
  <table class="table table-striped table-bordered">
    <tr>
        <th colspan="3">Končí na -at</th>
    </tr>
    <tr>
        <td><span>Já</span></td>
        <td><span><b>-ám</b></span></td>
        <td><span>Já hled<b>ám</b></span></td>
    </tr>
    <tr>
        <td><span>Ty</span></td>
        <td><span><b>-áš</b></span></td>
        <td><span>Ty hled<b>áš</b></span></td>
    </tr>
    <tr>
        <td><span>On/Ona/To</span></td>
        <td><span><b>-á</b></span></td>
        <td><span>On/Ona/To hled<b>á</b></span></td>
    </tr>
    <tr>
        <td><span>My</span></td>
        <td><span><b>-áme</b></span></td>
        <td><span>My hled<b>áme</b></span></td>
    </tr>
    <tr>
        <td><span>Vy</span></td>
        <td><span><b>-áte</b></span></td>
        <td><span>Vy hled<b>áte</b></span></td>
    </tr>
    <tr>
        <td><span>Oni</span></td>
        <td><span><b>-ají</b></span></td>
        <td><span>Oni hled<b>ají</b></span></td>
    </tr>
</table>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class AModelList extends Vue {
  
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