<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-8 text-center">
        <RouterLink
            :to="{ name: 'card-flipping', query: { type: type }}">
            <div class="d-grid gap-2">
              <button class="btn btn-success" type="button">Start</button>
            </div>
          </RouterLink>
      </div>
    </div>
    <div class="row justify-content-center pt-5">
      <div class="col-8">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="type" id="cards-only" value="cards-only" v-model="type">
          <label class="form-check-label" for="cards-only">
            Cards only
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="type" id="cards-and-text" value="cards-and-text" v-model="type">
          <label class="form-check-label" for="cards-and-text">
            Cards & answers
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Home extends Vue {
  type = 'cards-only';
}
</script>
