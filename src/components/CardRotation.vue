<template>
  <ul class="list-unstyled">
    <li
      v-for="(card, index) in filteredCards"
      v-bind:key="index"
    >
      <transition name="flip">
        <Card :cards="cards" :card="card" :index="index" />
      </transition>
    </li>
  </ul>
</template>

<script lang="ts">
import { Answer, CardModel } from "@/model/cards";
import { Options, Vue } from "vue-class-component";
import Card from "./Card.vue";

@Options({
  props: {
    cards: Array,
  },
  components: {
    Card,
  },
})
export default class CardRotation extends Vue {
  cards!: CardModel[];

  get filteredCards(): CardModel[] {
    return this.cards.filter((a) => a.answer === Answer.NoAnswer).slice(0, 1);
  }
}
</script>
