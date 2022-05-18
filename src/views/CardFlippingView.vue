<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-12">
        <CardRotation :cards="cards" />
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12">
        Correct Answers: {{ cards.filter(s => s.answer === 2).length }}
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 text-danger">
        Wrong Answers: {{ cards.filter(s => s.answer === 1).length }}
      </div>
    </div>
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
export default class CardFlippingView extends Vue {
  isReady = false;
  cards = getCards();
}
</script>
