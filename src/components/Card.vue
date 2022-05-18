<template>
  <div>
    <div class="card text-center scale">
      <transition name="flip">
        <p v-if="card.flipped === false" key="czech" class="py-5">
          {{ card.czech }}
          <span class="flip-button">
            <i class="material-icons text-large h1" v-on:click="toggleCard(card)">autorenew</i>
          </span>
        </p>
        <p v-else key="english" class="py-5">
          {{ card.english }}
          <span class="flip-button">
            <i class="material-icons text-large h1" v-on:click="toggleCard(card)">autorenew</i>
          </span>
        </p>
      </transition>  
    </div>
    <div class="row pt-3">
        <div class="col-6 text-start">
          <button class="btn btn-primary p-3" v-on:click="card.answer = 3">
            I don't know
          </button>
        </div>
        <div class="col-6 text-end">
          <button class="btn btn-primary p-3" v-on:click="card.answer = 2">
            I know it!
          </button>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import { CardModel } from "@/model/cards";
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    card: Object,
    cards: Array,
    index: Number,
  },
})
export default class Card extends Vue {
  card!: CardModel;
  cards!: CardModel[];
  index!: number;

  toggleCard(card: CardModel): void {
    card.flipped = !card.flipped;
  }

  
}
</script>
