<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-4 text-center">
        <RouterLink
            :to="{ name: 'start'}">
            <div class="d-grid gap-2" >
              <button class="btn button-game" type="button"><h4 class="p-2"><b>Try it out</b></h4></button>
            </div>
          </RouterLink>
      </div>
    </div>
    <div class="row justify-content-center pt-3">
      <div class="col-4 text-center">
        <RouterLink
            :to="{ name: 'cards'}">
            <div class="d-grid gap-2">
              <button class="btn button-cards" type="button"><h4 class="p-2"><b>Open Cards</b></h4></button>
            </div>
          </RouterLink>
      </div>
    </div>
    <div class="row justify-content-center pt-3">
      <div class="col-4 text-center">
        <RouterLink
            :to="{ name: 'cheat-sheet'}">
            <div class="d-grid gap-2">
              <button class="btn button-cheat" type="button"><h4 class="p-2"><b>Cheat Sheets</b></h4></button>
            </div>
          </RouterLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Home extends Vue {
  
}
</script>

<style scoped>

.button-cards, .button-game, .button-cheat  {
  color: white;
  font-family: 'Montserrat', sans-serif;
}

.button-cards {
    background-color: #B7E5DD;
}

.button-game {
  background-color: #B1BCE6;
}

.button-cheat {
    background-color: #9A86A4;
}

.button-cards:hover {
  background-image: linear-gradient(rgba(183, 229, 221, 0.6) 0 0) !important;
  color: white;
  border-color:rgba(183, 229, 221, 0.6);
}

.button-game:hover {
  background-image: linear-gradient(rgba(177, 188, 230, 0.6) 0 0) !important;
  color: white;
  border-color:rgba(177, 188, 230, 0.6);
}

.button-cheat:hover {
  background-image: linear-gradient(rgba(154, 134, 164, 0.6) 0 0) !important;
  color: white;
  border-color:rgba(154, 134, 164, 0.6);
}

</style>
