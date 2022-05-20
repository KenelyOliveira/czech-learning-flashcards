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
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Home extends Vue {
  
}
</script>

<style scoped>

.button-cards {
  background-color: #B7E5DD;
  color: white;
  font-family: 'Montserrat', sans-serif;
}

.button-game {
  background-color: #B1BCE6;
  color: white;
  font-family: 'Montserrat', sans-serif;
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

</style>
