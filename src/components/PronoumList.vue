<template>
  <table class="table table-striped table-bordered">
    <tr>
    <td><span><b>Já</b></span></td>
    <td><span>I</span></td>
    <td><span><b>Já</b> jsem</span></td>
    </tr>
    <tr>
    <td><span><b>Ty</b></span></td>
    <td><span>You (singular)</span></td>
    <td><span><b>Ty</b> jsi</span></td>
    </tr>
    <tr>
    <td><span><b>On/Ona/To</b></span></td>
    <td><span>He/She/It</span></td>
    <td><span><b>On/Ona/To</b> je</span></td>
    </tr>
    <tr>
    <td><span><b>My</b></span></td>
    <td><span>We</span></td>
    <td><span><b>My</b> jme</span></td>
    </tr>
    <tr>
    <td><span><b>Vy</b></span></td>
    <td><span>You (plural)</span></td>
    <td><span><b>Vy</b> jste</span></td>
    </tr>
    <tr>
    <td><span><b>Oni</b></span></td>
    <td><span>They</span></td>
    <td><span><b>Oni</b> jsou</span></td>
    </tr>
</table>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class PronoumList extends Vue {
  
}
</script>
<style scoped>
table {
  color: #A2B38B !important;
  font-size: larger;
}
</style>