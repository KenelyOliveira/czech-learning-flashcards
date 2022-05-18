<template>
  <div class="home">
    <button class="start-button" v-on:click="isReady = true" v-if="!isReady">
      Start
    </button>

    <template v-if="isReady">
      <CardRotation :cards="cards" />
    </template>
  </div>
</template>

<script lang="ts">
import { getCards } from "@/model/cards";
import { Options, Vue } from "vue-class-component";
import CardRotation from "../components/CardRotation.vue";

@Options({
  components: {
    CardRotation,
  },
})
export default class Home extends Vue {
  isReady = false;
  cards = getCards();
}
</script>
