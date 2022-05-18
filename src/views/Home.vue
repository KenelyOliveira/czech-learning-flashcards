<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-8 text-center">
        <RouterLink
            :to="{ name: 'CardFlipping' }">
            <div class="d-grid gap-2">
              <button class="btn btn-success" type="button">Start</button>
            </div>
          </RouterLink>
      </div>
    </div>
    <div class="row justify-content-center pt-5">
      <div class="col-8">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="type" id="cards-only" checked>
          <label class="form-check-label" for="cards-only">
            Cards only
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="type" id="card-and-text">
          <label class="form-check-label" for="card-and-text">
            Cards & writing answers in Czech
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Home extends Vue {

}
</script>
